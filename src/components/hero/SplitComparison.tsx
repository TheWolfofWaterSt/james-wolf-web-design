"use client";

import { useEffect, useRef } from "react";

function BeforeBrowserChrome() {
  return (
    <div className="flex h-9 shrink-0 flex-row items-center gap-2 bg-[#e8e8e3] px-4">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
      <div className="mx-3 flex h-5 flex-1 items-center rounded bg-[#d8d8d3] px-2.5 text-[11px] text-ink-muted">
        panelsystems.com/
      </div>
    </div>
  );
}

function AfterBrowserChrome() {
  return (
    <div className="flex h-9 shrink-0 flex-row items-center gap-2 bg-charcoal px-4">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
      <div className="mx-3 flex h-5 flex-1 items-center rounded bg-ink-secondary px-2.5 text-[11px] text-ink-faint">
        panelsystems.com/
      </div>
    </div>
  );
}

const PENDULUM_MIN = 20;
const PENDULUM_MAX = 80;
const PENDULUM_CENTER = 50;
const PENDULUM_AMPLITUDE = (PENDULUM_MAX - PENDULUM_MIN) / 2;
const PENDULUM_CYCLE_MS = 10_000;
const PENDULUM_START_DELAY_MS = 1200;

export default function SplitComparison() {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforePanelRef = useRef<HTMLDivElement>(null);
  const afterPanelRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const animatedRef = useRef(true);
  const rafRef = useRef<number | null>(null);
  const animStartRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const beforePanel = beforePanelRef.current;
    const afterPanel = afterPanelRef.current;
    const handle = handleRef.current;

    if (!container || !beforePanel || !afterPanel || !handle) return;

    const setPosition = (pct: number) => {
      const clamped = Math.min(85, Math.max(15, pct));
      beforePanel.style.width = `${clamped}%`;
      afterPanel.style.left = `${clamped}%`;
      afterPanel.style.width = `${100 - clamped}%`;
      handle.style.left = `${clamped}%`;
    };

    const getPct = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    };

    const stopAnimation = () => {
      animatedRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const pendulumPct = (elapsedMs: number) =>
      PENDULUM_CENTER -
      PENDULUM_AMPLITUDE *
        Math.sin((2 * Math.PI * elapsedMs) / PENDULUM_CYCLE_MS);

    const animate = (timestamp: number) => {
      if (!animatedRef.current) return;

      if (animStartRef.current === null) {
        animStartRef.current = timestamp;
      }

      const elapsed = timestamp - animStartRef.current;
      setPosition(pendulumPct(elapsed));
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseDown = () => {
      stopAnimation();
      isDraggingRef.current = true;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        setPosition(getPct(e.clientX));
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = () => {
      stopAnimation();
      isDraggingRef.current = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches[0]) {
        setPosition(getPct(e.touches[0].clientX));
      }
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    setPosition(PENDULUM_CENTER);

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const timeout = setTimeout(() => {
      if (animatedRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }, PENDULUM_START_DELAY_MS);

    return () => {
      clearTimeout(timeout);
      stopAnimation();
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      id="comparison"
      ref={containerRef}
      className="animate-fade-up relative mx-auto h-[380px] w-full max-w-[1040px] cursor-col-resize select-none overflow-hidden rounded-xl border border-surface-border shadow-card md:h-[520px] md:rounded-2xl"
      style={{ animationDelay: "500ms" }}
      aria-label="Before and after website comparison. Drag to compare."
    >
      {/* Before panel */}
      <div
        ref={beforePanelRef}
        className="absolute bottom-0 left-0 top-0 overflow-hidden"
        style={{ width: "50%" }}
      >
        <div className="flex h-full flex-col bg-surface">
          <BeforeBrowserChrome />
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/OldPanelSystemsSite.png"
              alt="Panel Systems original website"
              className="h-full w-full object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-[rgba(160,155,140,0.18)]"
              aria-hidden
            />
          </div>
        </div>
        <span className="absolute bottom-4 left-4 z-[2] rounded-full bg-ink/50 px-3 py-1 text-[11px] font-semibold text-surface">
          Before
        </span>
      </div>

      {/* After panel */}
      <div
        ref={afterPanelRef}
        className="absolute bottom-0 right-0 top-0 overflow-hidden bg-charcoal"
        style={{ left: "50%", width: "50%" }}
      >
        <div className="flex h-full flex-col">
          <AfterBrowserChrome />
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/NewPanelSystemsSite.png"
              alt="Panel Systems redesigned website"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <span className="absolute bottom-4 right-4 z-[2] rounded-full bg-accent/80 px-3 py-1 text-[11px] font-semibold text-surface">
          After
        </span>
      </div>

      {/* Divider handle */}
      <div
        ref={handleRef}
        className="absolute top-0 z-10 h-full w-[3px] -translate-x-1/2 bg-surface ring-1 ring-surface-border"
        style={{ left: "50%" }}
      >
        <div className="absolute left-1/2 top-1/2 z-[11] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-surface text-[13px] text-ink-muted">
          ⇄
        </div>
      </div>
    </div>
  );
}
