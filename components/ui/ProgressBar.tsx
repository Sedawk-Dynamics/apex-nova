"use client";

import { useNProgress } from "@tanem/react-nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] w-full"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className="h-[3px] bg-[#F47920] w-full"
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      >
        <div className="absolute right-0 block h-full w-[100px] translate-y-[-4px] rotate-3 opacity-100 shadow-[0_0_10px_#F47920,0_0_5px_#F47920]" />
      </div>
    </div>
  );
}
