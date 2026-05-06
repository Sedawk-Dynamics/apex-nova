import { useEffect, useState, useRef } from "react";
import { useInView, useSpring } from "framer-motion";

export function useCountUp(target: number, duration: number = 2000, suffix: string = "") {
  const [displayValue, setDisplayValue] = useState("0" + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(target);
    }
  }, [isInView, springValue, target]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString() + suffix);
    });
  }, [springValue, suffix]);

  return { ref, displayValue };
}
