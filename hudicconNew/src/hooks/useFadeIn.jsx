// import { useRef, useEffect } from "react";
// /* ── Fade-in-on-scroll hook ── */
// export default function useFadeIn() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.15 },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return ref;
// }

import { useRef, useEffect } from "react";

export default function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10");
          el.classList.add("opacity-100", "translate-y-0");
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
