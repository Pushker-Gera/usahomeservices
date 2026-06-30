"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0, eager = false }: { children: ReactNode; className?: string; delay?: number; eager?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion || eager ? false : { opacity: 0, y: 20 }}
      animate={eager || reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={!eager && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.main>
  );
}

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.5 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setCount(value);
      return;
    }
    if (!started) return;
    let frame = 0;
    const total = 46;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(value * progress));
      if (frame < total) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}
