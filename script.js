document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const services = gsap.utils.toArray(".service");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const service = entry.target;
        const imgContainer = service.querySelector(".img");

        ScrollTrigger.create({
          trigger: service,
          start: "bottom bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let newWidth = 30 + 70 * progress;
            gsap.to(imgContainer, {
              width: newWidth + "%",
              duration: 0.1,
              ease: "none",
            });
          },
        });

        //
        ScrollTrigger.create({
          trigger: service,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let newHeight = 150 + 300 * progress;
            gsap.to(service, {
              height: newHeight + "px",
              duration: 0.1,
              ease: "none",
            });
          },
        });

        //
        observer.unobserve(service);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  services.forEach((service) => {
    observer.observe(service);
  });

  /*
  gsap.from(".heading-primary-p1", {
    opacity: 0,
    y: 200,
    duration: 1,
    stagger: 0.08,
    stagger: 0.1,
  });

  gsap.from(".heading-primary-p2", {
    opacity: 0,
    y: 200,
    duration: 1.1,
    stagger: 0.08,
    stagger: 0.5,
  });
  gsap.from(".hero-buttons", {
    opacity: 0,
    y: 300,
    duration: 1.1,
    stagger: 0.08,
    stagger: 0.5,
  });
  gsap.from(".hero-services-text", {
    opacity: 0,
    y: 100,
    duration: 1.1,
    stagger: 0.08,
    stagger: 0.5,
  });
  gsap.from(".hero-services-list", {
    opacity: 0,
    y: 100,
    duration: 1.1,
    stagger: 0.08,
    stagger: 0.5,
  });
  gsap.from(".decoration", {
    opacity: 0,
    y: 100,
    duration: 1.1,
    stagger: 0.08,
    stagger: 0.5,
  });
  */
});

//

const header = document.querySelector(".header");

const btnToggleNav = document.querySelector(".btn-mobile-nav");

btnToggleNav.addEventListener("click", () =>
  header.classList.toggle("nav-open")
);
