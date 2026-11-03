"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  AnimatePresence,
  MotionConfig,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { PlayCircle } from "lucide-react";

// --- Types ---
export interface Chapter {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  navLabel: string;
  description: string;
  video: { src: string; srcMobile?: string; poster?: string };
  actions?: React.ReactNode;
}

// --- Animation Variants ---
const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const textReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
};

// --- Sub-Components ---

const FilmGrain = () => (
  <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.07] mix-blend-overlay">
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  </div>
);

// One <video> per distinct clip, so chapters that share a clip don't load it twice.
// Clips pause once the hero is scrolled past, so phones aren't decoding it under later sections.
const VideoBackground = ({
  chapters,
  currentChapterIndex,
  playing,
}: {
  chapters: Chapter[];
  currentChapterIndex: number;
  playing: boolean;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current?.querySelectorAll("video").forEach((v) => {
      if (playing) v.play().catch(() => {});
      else v.pause();
    });
  }, [playing]);

  const clips = chapters.filter(
    (c, i) => chapters.findIndex((o) => o.video.src === c.video.src) === i,
  );
  const activeSrc = chapters[currentChapterIndex].video.src;

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 h-full w-full overflow-hidden bg-deep"
    >
      {clips.map(({ id, video }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: video.src === activeSrc ? 1 : 0,
            zIndex: video.src === activeSrc ? 10 : 0,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Portrait clips fill the phone screen, and sit on the right on wide screens */}
          <video
            className="h-full w-full object-cover md:object-contain md:object-right"
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
          >
            {video.srcMobile && (
              <source
                src={video.srcMobile}
                media="(max-width: 767px)"
                type="video/mp4"
              />
            )}
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/50 to-deep/20 md:bg-gradient-to-r md:from-deep md:via-deep/60 md:to-transparent" />
        </motion.div>
      ))}
      <FilmGrain />
    </div>
  );
};

const DynamicNav = ({
  chapters,
  activeIndex,
  progress,
  visible,
}: {
  chapters: Chapter[];
  activeIndex: number;
  progress: MotionValue<number>;
  visible: boolean;
}) => {
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 30 });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 md:flex items-center gap-4 rounded-full border border-white/10 bg-black/80 p-2 pr-2 pl-6 shadow-2xl backdrop-blur-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          aria-hidden
        >
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-white/50 uppercase">
              Bab {chapters[activeIndex].id}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="min-w-[100px] text-xs font-bold text-white"
              >
                {chapters[activeIndex].navLabel}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="relative flex h-12 w-12 items-center justify-center">
            <svg className="h-full w-full -rotate-90 transform">
              <circle
                cx="24"
                cy="24"
                r="18"
                className="stroke-white/10"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="18"
                className="stroke-accent"
                strokeWidth="2"
                fill="none"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <PlayCircle size={16} fill="white" className="text-black" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---

// Tall section: the video sticks under the nav while one chapter of text passes per screen.
export default function CinematicScrol({
  chapters,
  className,
}: {
  chapters: Chapter[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const inView = useInView(containerRef, { margin: "0px 0px -40% 0px" });
  const onScreen = useInView(containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * chapters.length),
        chapters.length - 1,
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, chapters.length]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={containerRef}
        className={cn("relative w-full", className)}
        style={{ height: `${chapters.length * 100}svh` }}
      >
        {/* 1. Background */}
        <div className="sticky top-16 h-[calc(100svh-4rem)] w-full overflow-hidden">
          <VideoBackground
            chapters={chapters}
            currentChapterIndex={activeIndex}
            playing={onScreen}
          />
        </div>

        {/* 2. Nav */}
        <DynamicNav
          chapters={chapters}
          activeIndex={activeIndex}
          progress={scrollYProgress}
          visible={inView}
        />

        {/* 3. Content */}
        <div className="pointer-events-none absolute inset-0 top-0 z-10">
          {chapters.map((chapter, index) => {
            const Heading = index === 0 ? "h1" : "h2";
            return (
              <div
                key={chapter.id}
                className="wrap flex h-svh items-center pt-16"
              >
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-20%" }}
                  className="pointer-events-auto max-w-2xl"
                >
                  {/* Header Line */}
                  <motion.div
                    variants={fadeIn}
                    className="mb-4 flex items-center gap-4 md:mb-6"
                  >
                    <div className="h-0.5 w-12 bg-grad" />
                    <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
                      {chapter.eyebrow}
                    </span>
                  </motion.div>

                  {/* Masked title reveal; py-2 keeps descenders from clipping */}
                  <div className="mb-4 overflow-hidden py-2 md:mb-6">
                    <motion.div variants={textReveal}>
                      <Heading className="text-[clamp(40px,6vw,76px)] leading-none text-white">
                        {chapter.title}
                      </Heading>
                    </motion.div>
                  </div>

                  {/* Description Box */}
                  <motion.div
                    variants={fadeIn}
                    className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md md:p-6"
                  >
                    <p className="leading-relaxed text-white/80 md:text-lg">
                      {chapter.description}
                    </p>
                  </motion.div>

                  {chapter.actions && (
                    <motion.div variants={fadeIn} className="mt-6 md:mt-8">
                      {chapter.actions}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </MotionConfig>
  );
}
