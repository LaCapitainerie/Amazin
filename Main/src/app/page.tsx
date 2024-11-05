import Blog from "@/components/sections/blog";
import Carrousel from "@/components/sections/carrousel";
import CTA from "@/components/sections/cta";
import { DynamicSection } from "@/components/sections/dynamic-text";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import { ItemGrid } from "@/components/sections/item-grid";
import Logos from "@/components/sections/logos";
import Pricing from "@/components/sections/pricing";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CardItem } from "@/components/ui/item-card";
import { PrismaClient } from '@prisma/client';

export default async function Home() {
  
  const prisma = new PrismaClient();

  const items = await prisma.item.findMany();

  return (
    <main>
      <Header />
      <ItemGrid itemsDefault={items} />
      {/* <Hero />
      <Logos />
      <DynamicSection id="home">
        <Carrousel name="home" />
      </DynamicSection>
      <Problem />
      <Solution />
      <HowItWorks />
      <TestimonialsCarousel />
      <Features />
      <TestimonialsSection />
      <Pricing />
      <FAQ id={"home"} />
      <Blog />
      <CTA /> */}
      <Footer />
    </main>
  );
}
