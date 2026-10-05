export const siteConfig = {
  name: "Eurobotics",
  tagline: "Robôs para limpeza, indústria e logística",
  description:
    "Nossa linha de produtos: robôs quadrúpedes e limpeza autônoma, soldagem robotizada e células industriais, AMRs e empilhadeiras autônomas. Humanoides em breve.",
  ogImage: { url: "/og-image.png", width: 1200, height: 630 },
  locale: "pt_BR",
  contactEmail: "vendas.eurobotic@eurostec.com.br",
  gaMeasurementId: "G-DMKGDMRDB4",
} as const;

export type ShowcaseItem = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  alt: string;
};

/** Linha de produtos atual — ordem: Quadrúpedes e limpeza, Indústria, AMRs. */
export const products: readonly ShowcaseItem[] = [
  {
    image: "/003.png",
    eyebrow: "Quadrúpedes e limpeza",
    title: "Limpeza autônoma e robôs quadrúpedes",
    description:
      "Lavadoras e varredeiras autônomas para grandes áreas, e robôs quadrúpedes para inspeção, monitoramento e segurança em ambientes complexos.",
    alt: "Robôs de limpeza autônomos e robôs quadrúpedes de inspeção",
  },
  {
    image: "/005.png",
    eyebrow: "Indústria",
    title: "Soldagem robotizada e células industriais",
    description:
      "Pórticos, posicionadores e robôs industriais de alta precisão para soldagem de estruturas pesadas, do projeto à implantação.",
    alt: "Células industriais de soldagem robotizada com pórticos azuis e robôs amarelos",
  },
  {
    image: "/002.png",
    eyebrow: "AMRs",
    title: "AMRs e empilhadeiras autônomas",
    description:
      "Robôs móveis autônomos para movimentação de cargas, paletes e prateleiras. Mais produtividade no armazém, com rotas otimizadas e operação 24/7.",
    alt: "Robôs móveis autônomos laranja e empilhadeiras autônomas em um ambiente industrial",
  },
] as const;

/** Produtos futuros — placeholder copy, edite livremente. */
export const futureProducts: readonly ShowcaseItem[] = [
  {
    image: "/001.png",
    eyebrow: "Robôs humanoides",
    title: "Humanoides e mobilidade autônoma",
    description:
      "Robôs humanoides para atendimento, recepção e operações de serviço, integrados a veículos autônomos de entrega para levar a automação do armazém até a última milha.",
    alt: "Robôs humanoides lado a lado em um showroom, com veículos autônomos de entrega ao fundo",
  },
] as const;
