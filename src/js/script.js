// const animationEls = document.querySelectorAll("[data-fade]");

// const observerClb = function (entries) {
//   entries.forEach(entry => {
//     const { isIntersecting, target } = entry;

//     if (isIntersecting) {
//       const fadeType = target.dataset.fade;
//       target.classList.add(fadeType);

//       showElsOnScrollObserver.unobserve(target);
//     }
//   });
// };

// const observerOpt = {
//   root: null,
//   threshold: 0.1,
// };

// const showElsOnScrollObserver = new IntersectionObserver(
//   observerClb,
//   observerOpt
// );

// animationEls.forEach(el => showElsOnScrollObserver.observe(el));
