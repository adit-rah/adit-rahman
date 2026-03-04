import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";

export default function Resume() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <FadeInGroup className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-10">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Resume
              </h1>
              <a
                href="./Resume.pdf"
                download
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Download PDF &darr;
              </a>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-xl border border-border overflow-hidden bg-muted/20">
              <object
                data="./Resume.pdf"
                type="application/pdf"
                className="w-full h-[80vh]"
              >
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                  <p className="text-sm text-muted-foreground">
                    PDF viewer not supported in this browser.
                  </p>
                  <a
                    href="./Resume.pdf"
                    download
                    className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Download the PDF instead &darr;
                  </a>
                </div>
              </object>
            </div>
          </FadeIn>
        </FadeInGroup>
      </div>
      <Footer />
    </>
  );
}
