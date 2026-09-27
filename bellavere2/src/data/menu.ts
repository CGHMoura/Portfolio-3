import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaBurrata from "@/assets/pizza-burrata.jpg";
import pizzaDiavola from "@/assets/pizza-diavola.jpg";
import tiramisu from "@/assets/tiramisu.jpg";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  sizes?: { label: string; price: string }[];
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "pizzas",
    title: "Pizzas",
    items: [
      {
        name: "Margherita",
        description:
          "Molho de tomate San Marzano, fior di latte, manjericão fresco e azeite extravirgem.",
        price: "R$ 42,90",
        image: pizzaMargherita,
        sizes: [
          { label: "Individual", price: "R$ 32,90" },
          { label: "Média", price: "R$ 42,90" },
          { label: "Grande", price: "R$ 52,90" },
        ],
      },
      {
        name: "Burrata",
        description:
          "Molho de tomate, burrata cremosa, tomates confitados e manjericão.",
        price: "R$ 54,90",
        image: pizzaBurrata,
        sizes: [
          { label: "Individual", price: "R$ 42,90" },
          { label: "Média", price: "R$ 54,90" },
          { label: "Grande", price: "R$ 64,90" },
        ],
      },
      {
        name: "Diavola",
        description:
          "Molho de tomate, mozzarella, pepperoni artesanal e pimenta calabresa.",
        price: "R$ 49,90",
        image: pizzaDiavola,
        sizes: [
          { label: "Individual", price: "R$ 38,90" },
          { label: "Média", price: "R$ 49,90" },
          { label: "Grande", price: "R$ 59,90" },
        ],
      },
      {
        name: "Parma",
        description:
          "Mozzarella, presunto de Parma, rúcula e lascas de parmesão.",
        price: "R$ 56,90",
        sizes: [
          { label: "Individual", price: "R$ 44,90" },
          { label: "Média", price: "R$ 56,90" },
          { label: "Grande", price: "R$ 66,90" },
        ],
      },
      {
        name: "Quatro Queijos",
        description: "Mozzarella, gorgonzola, parmesão e provolone.",
        price: "R$ 52,90",
        sizes: [
          { label: "Individual", price: "R$ 41,90" },
          { label: "Média", price: "R$ 52,90" },
          { label: "Grande", price: "R$ 62,90" },
        ],
      },
      {
        name: "Pistacchio",
        description:
          "Mozzarella, mortadela italiana, pistache e stracciatella.",
        price: "R$ 59,90",
        sizes: [
          { label: "Individual", price: "R$ 47,90" },
          { label: "Média", price: "R$ 59,90" },
          { label: "Grande", price: "R$ 69,90" },
        ],
      },
      {
        name: "Nduja",
        description:
          "Molho de tomate, mozzarella, 'nduja calabresa e mel de flores silvestres.",
        price: "R$ 53,90",
      },
      {
        name: "Funghi",
        description:
          "Mozzarella, mix de cogumelos salteados, taleggio e tomilho fresco.",
        price: "R$ 51,90",
      },
      {
        name: "Capricciosa",
        description:
          "Molho de tomate, mozzarella, presunto cozido, alcachofra, cogumelos e azeitonas pretas.",
        price: "R$ 54,90",
      },
      {
        name: "Marinara",
        description:
          "Molho de tomate, alho laminado, orégano siciliano e azeite extravirgem. Sem queijo.",
        price: "R$ 38,90",
      },
      {
        name: "Salsiccia",
        description:
          "Mozzarella, linguiça artesanal desfeita, cebola roxa e pecorino romano.",
        price: "R$ 52,90",
      },
      {
        name: "Tartufo",
        description:
          "Creme de trufa negra, mozzarella, cogumelos porcini e lascas de parmesão.",
        price: "R$ 68,90",
      },
      {
        name: "Genovese",
        description:
          "Pesto de manjericão genovês, mozzarella, tomates cereja e pinoles tostados.",
        price: "R$ 55,90",
      },
      {
        name: "Calabrese",
        description:
          "Molho de tomate, mozzarella, calabresa artesanal fatiada e cebola caramelizada.",
        price: "R$ 47,90",
      },
      {
        name: "Ortolana",
        description:
          "Mozzarella, abobrinha grelhada, berinjela, pimentão assado e pesto de rúcula.",
        price: "R$ 49,90",
      },
      {
        name: "Gorgonzola e Pera",
        description:
          "Gorgonzola dolce, peras caramelizadas, nozes e um toque de mel.",
        price: "R$ 57,90",
      },
      {
        name: "Polpette",
        description:
          "Molho de tomate, mozzarella, almôndegas artesanais e manjericão.",
        price: "R$ 53,90",
      },
      {
        name: "Bianca",
        description:
          "Base branca de creme fresco, mozzarella, alecrim e flor de sal.",
        price: "R$ 46,90",
      },
      {
        name: "Anchovas",
        description:
          "Molho de tomate, mozzarella, anchovas do Cantábrico, alcaparras e orégano.",
        price: "R$ 56,90",
      },
      {
        name: "Bresaola",
        description:
          "Mozzarella, bresaola, rúcula, tomates confitados e grana padano.",
        price: "R$ 58,90",
      },
    ],
  },
  {
    id: "entradas",
    title: "Entradas",
    items: [
      {
        name: "Bruschetta Classica",
        description:
          "Pão italiano tostado, tomates frescos, alho, manjericão e azeite extravirgem.",
        price: "R$ 24,90",
      },
      {
        name: "Burrata al Forno",
        description:
          "Burrata aquecida com tomates confitados, pesto de manjericão e focaccia.",
        price: "R$ 38,90",
      },
      {
        name: "Focaccia al Rosmarino",
        description:
          "Focaccia artesanal com alecrim, flor de sal e azeite extravirgem.",
        price: "R$ 19,90",
      },
      {
        name: "Arancini",
        description:
          "Bolinhos de risoto recheados com mozzarella, empanados e fritos, com molho de tomate.",
        price: "R$ 29,90",
      },
      {
        name: "Carpaccio di Manzo",
        description:
          "Lâminas finas de filé mignon cru, rúcula, lascas de parmesão e azeite trufado.",
        price: "R$ 36,90",
      },
      {
        name: "Polpette al Sugo",
        description:
          "Almôndegas artesanais cozidas lentamente em molho de tomate San Marzano.",
        price: "R$ 32,90",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Água Mineral", description: "Sem gás, 500 ml.", price: "R$ 6,90" },
      {
        name: "Água com Gás",
        description: "San Pellegrino, 500 ml.",
        price: "R$ 8,90",
      },
      {
        name: "Refrigerante",
        description: "Coca-Cola, Guaraná Antarctica ou Sprite, lata 350 ml.",
        price: "R$ 8,90",
      },
      {
        name: "Refrigerante Italiano",
        description: "San Pellegrino Aranciata ou Limonata, 330 ml.",
        price: "R$ 12,90",
      },
      {
        name: "Suco Natural",
        description: "Laranja, maracujá ou limonada suíça, 400 ml.",
        price: "R$ 11,90",
      },
      {
        name: "Café Espresso",
        description: "Blend italiano de torra média.",
        price: "R$ 7,90",
      },
      {
        name: "Cappuccino",
        description: "Espresso, leite vaporizado e espuma cremosa.",
        price: "R$ 11,90",
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      {
        name: "Tiramisù",
        description:
          "Clássico italiano com mascarpone, café espresso e cacau belga.",
        price: "R$ 26,90",
        image: tiramisu,
      },
      {
        name: "Panna Cotta",
        description:
          "Creme de baunilha com calda de frutas vermelhas.",
        price: "R$ 22,90",
      },
      {
        name: "Cannoli Siciliani",
        description:
          "Casquinhas crocantes recheadas com ricota doce, pistache e gotas de chocolate.",
        price: "R$ 24,90",
      },
      {
        name: "Pizza de Nutella",
        description:
          "Massa artesanal assada no forno a lenha, Nutella e avelãs tostadas.",
        price: "R$ 34,90",
      },
    ],
  },
];

export const restaurant = {
  name: "Bellavere",
  tagline: "Pizzeria",
  intro:
    "Pizza artesanal, ingredientes selecionados e uma experiência feita para compartilhar.",
  address: "Rua Exemplo, 123 — São Paulo, SP",
  hours: "Terça a Domingo · 18:00 — 23:30",
  phone: "(11) 99999-9999",
  instagram: "@bellavere",
  whatsapp: "https://wa.me/5511999999999",
};
