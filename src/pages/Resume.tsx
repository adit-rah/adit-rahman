import { useCallback, useState } from "react";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";

const PDF_PATH = "./resume.pdf";

const actionClass =
  "text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer";

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const copyLink = useCallback(async () => {
    // Resolve against the current document so the copied URL stays correct
    // under the relative `base: "./"` on both localhost and the Pages subpath.
    const url = new URL("resume.pdf", window.location.href).href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy the link to the PDF:", url);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <FadeInGroup className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-10">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Resume
              </h1>
              <div className="flex items-center gap-4">
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionClass}
                >
                  Open in new tab ↗
                </a>
                <button onClick={copyLink} className={actionClass}>
                  {copied ? "Copied" : "Copy link"}
                </button>
                <a href={PDF_PATH} download className={actionClass}>
                  Download PDF &darr;
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            {/* An <iframe> rather than an <object>: Safari renders <object> as a
                blank frame without ever falling through to its child markup, so
                the fallback below is a sibling instead of nested content. */}
            <div className="rounded-xl border border-border overflow-hidden bg-muted/20 hidden sm:block">
              <iframe
                src={PDF_PATH}
                title="Adit Rahman — Resume"
                className="w-full h-[80vh]"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="sm:hidden rounded-xl border border-border bg-muted/20 px-5 py-8 flex flex-col items-center gap-4 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Inline PDF preview isn&rsquo;t supported on most mobile
                browsers.
              </p>
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground border border-border rounded-lg px-4 py-2 hover:border-muted-foreground/40 transition-colors"
              >
                Open the PDF ↗
              </a>
            </div>
          </FadeIn>
        </FadeInGroup>
      </div>
      <Footer />
    </>
  );
}
