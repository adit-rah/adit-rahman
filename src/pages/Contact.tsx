import ContactChat from "@/components/ContactChat";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <FadeInGroup>
          <FadeIn className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Contact
            </h1>
            <div className="mb-10" />
          </FadeIn>
          <FadeIn>
            <ContactChat />
          </FadeIn>
        </FadeInGroup>
      </div>
      <Footer />
    </>
  );
}
