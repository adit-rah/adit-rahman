import { FeatureSteps } from "@/components/ui/feature-section";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";
import {
  DoodleSpark,
  DoodleUni,
  DoodleShip,
} from "@/components/Doodles";

const journey = [
  {
    step: "Step 1",
    title: "The Spark",
    content:
      "Fell in love with coding in grade 3 when I made a chess clone on Khan Academy's code editor. I loved making things on a screen actually do stuff. Started with JavaScript, broke a lot of things, and kept going.",
    visual: <DoodleSpark />,
  },
  {
    step: "Step 2",
    title: "The Deep End",
    content:
      "I built projects that solve problems in my life, help me get things done, or are just plain fun. Taking ideas from concept to deployment and learning what actually works along the way.",
    visual: <DoodleUni />,
  },
  {
    step: "Step 3",
    title: "What's Next",
    content:
      "Hunting for the next challenge, wherever I can ship real impact or find a problem worth solving. Building in public and learning as I go. Always shipping.",
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
