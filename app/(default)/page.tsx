export const metadata = {
  title: "Portto | Gerencie Seus Ativos Digitais com Facilidade",
  description: "Descubra a Portto — a plataforma completa para organizar, monitorar e proteger seus ativos digitais. Simples, segura e eficiente. Experimente agora!",
};


import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
