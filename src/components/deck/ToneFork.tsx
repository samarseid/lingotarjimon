import { motion } from "motion/react";

type Branch = { text: string; label: string };

const BRANCHES: Branch[] = [
  { text: "Hi", label: "Casual" },
  { text: "Wassup", label: "Street" },
  { text: "Good day", label: "Business" },
  { text: "Hey you", label: "Romantic" },
];

export function ToneFork({
  size = "md",
  muted = false,
  source = "Salom",
  tone = "dark",
  animate = true,
}: {
  size?: "sm" | "md" | "lg";
  muted?: boolean;
  source?: string;
  /** dark = ink text on paper, light = paper text on ink/terracotta */
  tone?: "dark" | "light";
  animate?: boolean;
}) {
  const scale = size === "lg" ? 1 : size === "md" ? 0.82 : 0.62;
  const sourceSize = 64 * scale;
  const branchSize = 30 * scale;
  const gap = 30 * scale;

  const total = (BRANCHES.length - 1) * (gap + branchSize) + branchSize;
  const mid = total / 2;

  const srcColor = tone === "light" ? "text-paper" : "text-terracotta";
  const branchColor = tone === "light" ? "text-paper" : "text-ink";
  const labelColor = tone === "light" ? "text-paper/55" : "text-sand";
  const lineColor = tone === "light" ? "text-paper/40" : "text-sand";

  return (
    <div
      className="flex items-center"
      style={{ opacity: muted ? 0.35 : 1, gap: 0 }}
      aria-hidden="true"
    >
      <div
        className={`font-display shrink-0 pr-4 ${srcColor}`}
        style={{ fontSize: sourceSize, lineHeight: 1 }}
      >
        {source}
      </div>

      <svg
        width={70 * scale}
        height={total}
        viewBox={`0 0 70 ${total}`}
        preserveAspectRatio="none"
        className={`shrink-0 ${lineColor}`}
      >
        {BRANCHES.map((_, i) => {
          const y = i * (gap + branchSize) + branchSize / 2;
          return (
            <motion.path
              key={i}
              d={`M0 ${mid} H26 V${y} H70`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              initial={animate ? { pathLength: 0 } : false}
              animate={animate ? { pathLength: 1 } : false}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.09, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      <div className="flex flex-col" style={{ gap }}>
        {BRANCHES.map((b, i) => (
          <motion.div
            key={b.label}
            className="flex items-baseline gap-3"
            initial={animate ? { opacity: 0, x: -8 } : false}
            animate={animate ? { opacity: 1, x: 0 } : false}
            transition={{ duration: 0.35, delay: 0.45 + i * 0.09 }}
          >
            <span
              className={`font-display ${branchColor}`}
              style={{ fontSize: branchSize, lineHeight: 1 }}
            >
              {b.text}
            </span>
            <span
              className={`font-mono uppercase tracking-[0.2em] ${labelColor}`}
              style={{ fontSize: branchSize * 0.4 }}
            >
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Compact lock-up used as a mark on cover / closing slides. */
export function ToneForkMark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const stroke = tone === "light" ? "text-paper/45" : "text-sand";
  const dot = tone === "light" ? "text-paper" : "text-terracotta";
  return (
    <svg width="86" height="44" viewBox="0 0 86 44" aria-hidden="true" className={stroke}>
      <path d="M0 22 H26" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {[4, 16, 28, 40].map((y) => (
        <path key={y} d={`M26 22 V${y} H72`} stroke="currentColor" strokeWidth="1" fill="none" />
      ))}
      {[4, 16, 28, 40].map((y) => (
        <circle key={y} cx="78" cy={y} r="3" className={dot} fill="currentColor" />
      ))}
    </svg>
  );
}
