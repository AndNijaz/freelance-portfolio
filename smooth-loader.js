document.addEventListener("DOMContentLoaded", function () {
  gsap.set(".loader-img", { y: 500 });
  gsap.set(".loader-imgs", { x: 500 });
  gsap.set(".nav-item, .header, .item", { y: 25, opacity: 0 });
  gsap.set("h1, .heading-primary, .heading-primary-p2, .heading-primary-p3 ", {
    y: 200,
  });

  const tl = gsap.timeline({ delay: 1 });

  tl.to(".loader-img", {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
      },
      "-=2.5"
    )
    .to(
      ".loader-img:not(#loader-logo)",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .to(
      ".loader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    )
    .to(
      ".nav-item, .header, h1, .heading-primary, .heading-primary-p2, .heading-primary-p3, .item ",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
});
