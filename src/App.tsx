/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Problem, Solution, SocialProof, Team, Offer, LeadForm, Footer, PartnersMarquee } from "./components/Landing";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500/30 selection:text-gold-400">
      <Navbar />
      <main>
        <Hero />
        <PartnersMarquee />
        <Problem />
        <Solution />
        <SocialProof />
        <Team />
        <Offer />
        <LeadForm />
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/5544999665711?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20escalar%20meu%20neg%C3%B3cio." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
