import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  visual: ReactNode;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
}

export function FeatureSteps({
  features,
  className,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  const prev = () =>
    setCurrentFeature((i) => (i > 0 ? i - 1 : features.length - 1));
  const next = () =>
    setCurrentFeature((i) => (i < features.length - 1 ? i + 1 : 0));

  return (
    <div className={cn("px-8 pt-4 pb-8 md:px-12 md:pt-6 md:pb-12", className)}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                className="flex items-start gap-5 md:gap-6 w-full text-left cursor-pointer"
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                onClick={() => setCurrentFeature(index)}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border shrink-0 mt-0.5 transition-colors duration-300",
                    index === currentFeature
                      ? "bg-foreground border-foreground text-background"
                      : index < currentFeature
                        ? "bg-muted border-muted-foreground/40 text-muted-foreground"
                        : "bg-transparent border-border text-muted-foreground",
                  )}
                >
                  {index < currentFeature ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-medium text-foreground">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center justify-center gap-3">
            <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0 rounded-lg overflow-hidden flex items-center justify-center bg-muted/30"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -60, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {feature.visual}
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/60 transition-colors cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
              <span className="text-xs text-muted-foreground tabular-nums">
                {currentFeature + 1} / {features.length}
              </span>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/60 transition-colors cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
