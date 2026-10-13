// Calm motion for the whole page: smooth wheel scrolling (Lenis) and content that eases in
// as it is scrolled to (GSAP). Loaded only after the page has settled, and never for people
// who ask their device for reduced motion (see the script in Layout.astro).
//
// Nothing is hidden in the HTML or CSS. Elements are only set to their starting state by this
// script, and only when they are below the screen, so if it fails to load the page is unaffected.

import gsap from "gsap";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// What eases in, and how far it travels. Chosen by where things are on the page, so the
// section components need no extra markup.
const reveals: { selector: string; rise: number }[] = [
	{ selector: "main section:not(:first-child) h2, main h3", rise: 28 },
	{ selector: "#about p, #about img", rise: 24 },
	{ selector: "#board ol > li", rise: 20 },
	{ selector: "#barbers ol > li", rise: 32 },
	{ selector: "[data-gallery] > li", rise: 24 },
	{ selector: "#clocks > div svg, #clocks ol > li", rise: 20 },
	{ selector: "#reviews .font-display", rise: 28 },
	{ selector: "#visit address, #visit iframe", rise: 24 },
	{ selector: "footer > p.font-display", rise: 28 },
];

// The page's one showpiece: as a day's clock on the wall is scrolled to, its hands wind round
// from twelve to opening time, then the open hours sweep round the rim. Each hand ends on
// exactly the angle it was given in the HTML.
function windClock(clock: Element, delay: number) {
	const hands = clock.querySelectorAll<SVGLineElement>('svg line:not([y1="20"])');
	hands.forEach((hand, i) => {
		const set = hand.getAttribute("transform") ?? "";
		const angle = Number.parseFloat(set.replace("rotate(", ""));
		if (Number.isNaN(angle)) return;
		// The minute hand (the second one) goes once more round, so it leads the hour hand home
		const turn = { deg: 0 };
		gsap.to(turn, {
			deg: angle + i * 360,
			duration: 1.5,
			delay,
			ease: "power2.inOut",
			onStart: () => hand.setAttribute("transform", "rotate(0 100 100)"),
			onUpdate: () => hand.setAttribute("transform", `rotate(${turn.deg.toFixed(2)} 100 100)`),
			onComplete: () => hand.setAttribute("transform", set),
		});
		hand.setAttribute("transform", "rotate(0 100 100)");
	});

	const rim = clock.querySelector<SVGPathElement>("svg path");
	if (rim) {
		const length = rim.getTotalLength();
		gsap.fromTo(
			rim,
			{ strokeDasharray: length, strokeDashoffset: length },
			{
				strokeDashoffset: 0,
				duration: 1,
				delay: delay + 0.95,
				ease: "power2.out",
				clearProps: "strokeDasharray,strokeDashoffset",
			},
		);
	}
}

export function startMotion() {
	// Smooth scrolling for mouse wheels and trackpads. Touch screens keep their own scrolling.
	new Lenis({
		autoRaf: true,
		anchors: true,
		lerp: 0.11,
		// Leave the photo lightbox alone: there the wheel zooms the photo
		prevent: (node) => Boolean(node.closest?.(".pswp")),
	});

	const rises = new Map<Element, number>();
	for (const { selector, rise } of reveals) {
		for (const el of document.querySelectorAll(selector)) if (!rises.has(el)) rises.set(el, rise);
	}
	// If something sits inside another thing that already eases in, let the outer one carry it
	for (const el of [...rises.keys()]) {
		for (let parent = el.parentElement; parent; parent = parent.parentElement) {
			if (rises.has(parent)) {
				rises.delete(el);
				break;
			}
		}
	}

	const waiting = new WeakSet<Element>();
	const observer = new IntersectionObserver(
		(entries) => {
			const arriving: Element[] = [];
			for (const entry of entries) {
				const el = entry.target;
				if (!waiting.has(el)) {
					// First report for this element. If it is already on screen, leave it exactly as it is.
					if (entry.isIntersecting) {
						observer.unobserve(el);
					} else {
						waiting.add(el);
						gsap.set(el, { opacity: 0, y: rises.get(el) });
					}
				} else if (entry.isIntersecting) {
					observer.unobserve(el);
					arriving.push(el);
				}
			}
			// Things that arrive together follow one another in, a beat apart
			arriving.forEach((el, i) => {
				if (el.matches("#clocks ol > li")) windClock(el, i * 0.07);
			});
			if (arriving.length) {
				gsap.to(arriving, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					stagger: 0.07,
					clearProps: "opacity,transform",
				});
			}
		},
		{ rootMargin: "0px 0px -10% 0px" },
	);
	for (const el of rises.keys()) observer.observe(el);
}
