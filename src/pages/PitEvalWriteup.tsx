import PdfPage from "@/components/PdfPage";

// Unlisted: reached only from the project card and shared links.
export default function PitEvalWriteup() {
  return (
    <PdfPage
      title="Point-in-Time Eval Benchmark"
      pdf="writeup/pit-eval-bench.pdf"
      frameTitle="A Mini-Eval for Point-in-Time Correctness in Data Science"
    />
  );
}
