import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ScrollRevealCard from "@/components/ScrollRevealCard";
import { WordPullUp } from "@/components/WordPullUp";
import levixMkt from "@/assets/levix-mkt.png";
import metodoGap from "@/assets/metodo-gap.png";
import mentoria from "@/assets/mentoria.png";
import quemSouEu from "@/assets/quem-sou-eu.png";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const contentAnimation = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  }), [showContent]);

  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-x-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(270_100%_65%_/_0.25)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div 
        className="w-full max-w-4xl mx-auto py-12"
        style={{
          paddingLeft: 'var(--padding-left)',
          paddingRight: 'var(--padding-right)',
          width: 'var(--container-width)',
        }}
      >
        <WordPullUp 
          words="LINKS ÚTEIS DO VINI" 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        />

        <motion.div 
          className="space-y-6 w-full max-w-full"
          {...contentAnimation}
        >
          <ScrollRevealCard delay={100}>
            <ServiceCard title="Tráfego Pago" description="Gestão de tráfego estratégica com IA, desenvolvida para levar sua empresa a um novo nível de faturamento." buttonText="AGENDAR REUNIÃO" variant="cyan" imageSrc={levixMkt} externalLink="https://form.respondi.app/EKUlJo3b" />
          </ScrollRevealCard>

          <ScrollRevealCard delay={200}>
            <ServiceCard title="Método GAP – Tráfego com IA" description="Se torne um especialista em tráfego com IA." buttonText="EM BREVE" variant="cyan" imageSrc={metodoGap} showLock isLocked />
          </ScrollRevealCard>

          <ScrollRevealCard delay={300}>
            <ServiceCard title="Mentoria Individual" description="Me dê a mão e eu te mostro o método que me tirou de um trabalho exaustivo e me levou a ser Gestor de Tráfego de Alta Performance — faturando mais de 20k por mês, sem equipe e começando como iniciante." buttonText="QUERO PARTICIPAR" variant="cyan" imageSrc={mentoria} externalLink="https://wa.me/5527920016836?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20mentoria%20individual%20" />
          </ScrollRevealCard>

          <ScrollRevealCard delay={400}>
            <ServiceCard title="Quem sou EU?" description="Clique no botão abaixo para entender de onde eu vim e como eu posso lhe ajudar a escalar suas operações e melhorar seus resultados." buttonText="QUERO SABER MAIS" variant="green" imageSrc={quemSouEu} popupImage={quemSouEu} popupDescription={`Sou Vinícius Freitas, especialista em tráfego e automação. Saí do zero — Uber, concursos, CLT — até construir minha carreira em performance real e resultados consistentes.

Criei o Método GAP com IA para formar gestores estratégicos, capazes de analisar, decidir e escalar como profissionais de alta performance.

Tudo o que ensino vem da prática diária na minha agência, aplicando processos que geram faturamento real para clientes todos os dias.`} />
          </ScrollRevealCard>
        </motion.div>

        <motion.div 
          className="mt-12 pb-4 text-center"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <a 
            href="https://www.instagram.com/mateusmachadoprod/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Powered by @mateus
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Index;