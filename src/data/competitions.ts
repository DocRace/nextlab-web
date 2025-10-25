export interface CompetitionEntry {
  id: string;
  title: string;
  award: string;
  year: string;
  winners: string;
  description: string;
  link: string;
  image: string;
  video?: string;
}

export const competitions: CompetitionEntry[] = [
  {
    id: "shihua-shijie",
    title: "Shihua Shijie: Winner of the First Prize at the 2025 \"Beautiful China\" Innovative Design Competition",
    award: "First Prize of the \"Beautiful China\" Innovative Design Competition",
    year: "2025",
    winners: "Jinhe Li, Yuhang Jin, Xiuqi Li, Songruoyao Wu, Xiaohui Chen",
    description: "Shihua Shijie——Amid the AIGC wave, Shihua Shijie (Poetry & Painting Vision) leverages three core innovations to bridge traditional poetry and modern short videos. It addresses industry pain points, injects vitality into traditional culture dissemination, and breaks AI's cultural aesthetic bias.",
    link: "https://cpipc.acge.org.cn/cw/hp/2c908018876ef068018774a9501a03fe",
    image: "/images/content-placeholder.png"
  },
  {
    id: "sugar-blossom",
    title: "Sugar Blossom: reddot winner 2025",
    award: "Red Dot Award: Design Concept",
    year: "2025",
    winners: "Jiangyu Pan, Liang Hou, Yilin Wei, Mengyue Yuan",
    description: "Sugar Blossom is a blood-glucose monitoring solution for kids. As childhooddiabetes grows and traditional methods fall short, we designed a flower-shapecmonitor. It reveals blood-glucose levels through petal and stamen changes. Thepaired apooncs date, amesfostcarionhiaren! weipbeing kids and parents to manage blood-glucose and fostering children's well-being.",
    link: "",
    image: "/images/content-placeholder.png"
  },
  {
    id: "heritage-spark",
    title: "Heritage Spark: Winner of the Iron A' Design Award 2025",
    award: "Iron A' Design Award",
    year: "2025",
    winners: "Liang Hou",
    description: "Heritage Spark is a design toolkit that integrates Intangible Cultural Heritage ICH into contemporary creativity. It includes ICH cards for quick understanding, role cards for diverse perspectives, and technology cards to inspire innovation. Two thought canvases support collaborative ideation. Designed for users with no prior ICH knowledge, it fosters empathy and generates solutions for ICH preservation. By bridging tradition and modern technology, this toolkit empowers designers, educators, and cultural practitioners to engage with heritage in transformative ways.",
    link: "https://competition.adesignaward.com/ada-winner-design.php?ID=170646#Design-170646",
    image: "/images/Gallery-Heritage-Spark.png"
  },
  {
    id: "architone",
    title: "Architone: Winner of the Iron A' Design Award 2025",
    award: "Iron A' Design Award",
    year: "2025",
    winners: "Jiaxing Yu, Wenqi Wu",
    description: "Traditional music education often leaves learners confused by abstract theory and aural skills, reducing their interest and creativity. Architone innovatively transforms abstract music theory into intuitive musical blocks and buildings to help learners naturally acquire knowledge through engaging interaction and ultimately empowering them to create beautiful music. Its dual-mode design, Learning Mode and Creation Mode, supports incremental skill development while fostering creativity. Architone uses the power of design to make every learner a musical architect.",
    link: "https://competition.adesignaward.com/ada-winner-design.php?ID=170188",
    image: "/images/Architone.png"
  },
  {
    id: "nextsealer",
    title: "NEXTsealer: reddot winner 2024",
    award: "Red Dot Award: Design Concept",
    year: "2024",
    winners: "Wenqi Wu, Liang Hou, Hanshu Shen, Zizhen Hong",
    description: "NEXTSEALER addresses the decline of seal carving by making personalised seals accessible. It simplifies the creation process to text input, style selection, and layout adjustment. Each seal can be certified as an NFT, and users can carve them physically or apply digital seals to products like canvas bags and electronics. This innovation revitalises seal carving, one of the world's oldest arts.",
    link: "https://www.red-dot.org/zh/project/nextsealer-72110",
    image: "/images/NEXT Sealer.jpg"
  },
  {
    id: "coastalbam-jar",
    title: "CoastalBam Jar: reddot winner 2024",
    award: "Red Dot Award: Design Concept",
    year: "2024",
    winners: "Liang Hou, Wenqi Wu, Hanshu Shen, Jiangyu Pan, Duola Jin",
    description: "CoastalBam Jar is modern salt jar inspired by the traditional method used by Chinese fishermen to turn coarse salt into brine. It combines a metal vessel and two bamboo sieves with hexagonal holes in the bamboo cross-weaving to prevent salt crystallisation and brine contamination The open design, while ensuring easy salt access, also allows for space purification in accordance with Feng Shui principles.",
    link: "https://www.red-dot.org/zh/project/coastalbam-jar-71913",
    image: "/images/CoastalBam Jar.jpg"
  }
];

export function getCompetitionById(id: string): CompetitionEntry | undefined {
  return competitions.find(c => c.id === id);
}

