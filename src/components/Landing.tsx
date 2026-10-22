import React, { useEffect } from "react";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { PartnersMarquee } from "./sections/PartnersMarquee";
import { Services } from "./sections/Services";
import { Solution } from "./sections/Solution";
import { Quote } from "./sections/Quote";
import { SocialProof } from "./sections/SocialProof";
import { About } from "./sections/About";
import { Offer } from "./sections/Offer";
import { FAQ } from "./sections/FAQ";
import { LeadForm } from "./sections/LeadForm";
import { Footer } from "./sections/Footer";
import { consumeQueuedScroll } from "../lib/scroll";

// Sections are small, so they ship in one chunk: this keeps in-page navigation
// (navbar links, CTAs) reliable because every target exists on first paint.
export default function Landing() {
  useEffect(consumeQueuedScroll, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnersMarquee />
        <Services />
        <Solution />
        <Quote />
        <SocialProof />
        <About />
        <Offer />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
