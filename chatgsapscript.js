gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    x: 500,
    opacity: 0,
    scrollTrigger: {
        trigger: ".box",
        start: "top center", // When to start the animation
        end: "bottom center", // When to end the animation
        scrub: true, // Smoothly transitions the animation during scrolling
        markers: true // Add markers to visualize the trigger and animation timeline
    }
});