import { FeatureSteps } from "@/components/ui/feature-section";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";
import {
  DoodleSpark,
  DoodleUni,
  DoodleBuild,
  DoodleShip,
} from "@/components/Doodles";

const journey = [
  {
    step: "Step 1",
    title: "The Spark",
    content:
      "Fell in love with making things on a screen actually do stuff. Started with Python, broke a lot of things, and kept going.",
    visual: <DoodleSpark />,
  },
  {
    step: "Step 2",
    title: "The Deep End",
    content:
      "Landed at the University of Waterloo for CS. Algorithms, functional programming, graph theory — the works. 3.86 cGPA and counting.",
    visual: <DoodleUni />,
  },
  {
    step: "Step 3",
    title: "The Real World",
    content:
      "Interned at Shopify — migrated production databases, built job systems, refactored GraphQL APIs, and debugged performance regressions in prod.",
    visual: <DoodleBuild />,
  },
  {
    step: "Step 4",
    title: "What's Next",
    content:
      "Building side projects, learning in public, and looking for the next challenge. Always shipping.",
    visual: <DoodleShip />,
  },
];

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <FadeInGroup>
          <FadeIn className="max-w-5xl mx-auto mb-10 px-8 md:px-12">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              About
            </h1>
          </FadeIn>
          <FadeIn>
            <FeatureSteps features={journey} />
          </FadeIn>
        </FadeInGroup>
      </div>
      <Footer />
    </>
  );
}
