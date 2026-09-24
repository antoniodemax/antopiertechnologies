import { useEffect, useRef, type ComponentProps, type CSSProperties } from "react";

/** Fades content in once when it enters the viewport. Visible by default without JS or with reduced motion. */
export function Reveal({ delay = 0, style, ...props }: ComponentProps<"div"> & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.revealed = "true";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    />
  );
}
