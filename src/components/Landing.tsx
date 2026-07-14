import React, { Suspense } from "react";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";

// Lazy loading the components that are below the fold
const PartnersMarquee = React.lazy(() => import("./sections/PartnersMarquee").then(module => ({ default: module.PartnersMarquee })));
const Problem = React.lazy(() => import("./sections/Problem").then(module => ({ default: module.Problem })));
const Solution = React.lazy(() => import("./sections/Solution").then(module => ({ default: module.Solution })));
const SocialProof = React.lazy(() => import("./sections/SocialProof").then(module => ({ default: module.SocialProof })));
const Team = React.lazy(() => import("./sections/Team").then(module => ({ default: module.Team })));
const Offer = React.lazy(() => import("./sections/Offer").then(module => ({ default: module.Offer })));
const LeadForm = React.lazy(() => import("./sections/LeadForm").then(module => ({ default: module.LeadForm })));
const Footer = React.lazy(() => import("./sections/Footer").then(module => ({ default: module.Footer })));

export default function Landing() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500/30">
      <Navbar />
      
      <main>
        {/* Above the fold - loaded synchronously for fast LCP */}
        <Hero />
        
        {/* Below the fold - loaded lazily to improve performance */}
        <Suspense fallback={<div className="h-32 bg-dark-900 animate-pulse" />}>
          <PartnersMarquee />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-dark-900 animate-pulse" />}>
          <Problem />
          <Solution />
          <SocialProof />
          <Team />
          <Offer />
          <LeadForm />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-64 bg-dark-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
