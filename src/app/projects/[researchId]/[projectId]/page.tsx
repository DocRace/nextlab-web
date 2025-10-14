import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Project data structure
interface Project {
  title: string;
  cover: string;
  description: string;
  details: string;
  features: string[];
  technologies: string[];
  year: string;
  status: string;
}

interface ProjectsData {
  [researchId: string]: {
    [projectId: string]: Project;
  };
}

const projects: ProjectsData = {
  "music": {
    "wuyun": {
      title: "WuYun: Hierarchical skeleton-guided melody generation",
      cover: "/images/project1.jpg",
      description: "WuYun is an innovative AI system for generating melodies using hierarchical skeleton-guided approaches. This project explores the intersection of music theory and machine learning to create more structured and musically coherent compositions.",
      details: "The system uses a multi-level approach where high-level musical structure guides the generation of detailed melodic content. By incorporating music theory principles and hierarchical modeling, WuYun can generate melodies that maintain both structural integrity and creative expression.",
      features: [
        "Hierarchical melody generation",
        "Music theory integration",
        "Skeleton-guided composition",
        "AI-powered creativity"
      ],
      technologies: ["Machine Learning", "Music Theory", "AI Generation", "Python"],
      year: "2024",
      status: "Active Development"
    },
    "mind-band": {
      title: "Mind Band: Crossmedia AI Music Composing Platform",
      cover: "/images/project2.jpg",
      description: "Mind Band is a comprehensive platform that enables cross-media music composition using artificial intelligence. The platform integrates various media inputs to create cohesive musical experiences.",
      details: "This platform allows users to create music that responds to and incorporates elements from different media types, creating a truly cross-media musical experience. The AI system learns from diverse inputs to generate contextually appropriate musical content.",
      features: [
        "Cross-media integration",
        "AI music composition",
        "Multi-modal input processing",
        "Real-time generation"
      ],
      technologies: ["AI/ML", "Cross-media Processing", "Real-time Systems", "Web Technologies"],
      year: "2024",
      status: "Active Development"
    },
    "lyric2melody": {
      title: "Lyric-to-Melody & Text-to-Music Generation",
      cover: "/images/project3.jpg",
      description: "An advanced system for converting lyrics into melodies and generating complete musical compositions from text descriptions. This project pushes the boundaries of AI-assisted music creation.",
      details: "The system uses state-of-the-art natural language processing and music generation techniques to understand textual input and create corresponding musical output. It can handle various musical styles and genres while maintaining coherence between lyrics and melody.",
      features: [
        "Lyric-to-melody conversion",
        "Text-to-music generation",
        "Style adaptation",
        "Coherent output",
        "Multi-genre support"
      ],
      technologies: ["NLP", "Music Generation", "Deep Learning", "Python"],
      year: "2024",
      status: "Research Phase"
    },
    "multimodal-music": {
      title: "Multimodal Music Applications",
      cover: "/images/project4.jpg",
      description: "Exploring the integration of music with other modalities such as visual, textual, and gestural inputs to create rich, interactive musical experiences.",
      details: "This research project investigates how different sensory inputs can be combined with music to create more immersive and expressive musical experiences. The work spans from theoretical foundations to practical applications.",
      features: [
        "Multi-modal integration",
        "Interactive music systems",
        "Cross-sensory experiences",
        "Real-time processing"
      ],
      technologies: ["Multimodal AI", "Interactive Systems", "Signal Processing", "Human-Computer Interaction"],
      year: "2024",
      status: "Research Phase"
    }
  },
  "font": {
    "glow-sans": {
      title: "Glow Sans Open-Source Font Family",
      cover: "/images/project-font.png",
      description: "An open-source font family designed with modern typography principles and optimized for digital display across various devices and platforms.",
      details: "Glow Sans represents a comprehensive approach to digital typography, combining aesthetic appeal with functional design. The font family includes multiple weights and styles, all carefully crafted for optimal readability and visual impact.",
      features: [
        "Open-source availability",
        "Multiple weights and styles",
        "Digital optimization",
        "Cross-platform compatibility"
      ],
      technologies: ["Typography Design", "Font Engineering", "Open Source", "Digital Design"],
      year: "2024",
      status: "Released"
    }
  },
  "design": {
    "nextsealer": {
      title: "NEXTsealer — Red Dot Winner 2024",
      cover: "/images/smart-seal-experience.png",
      description: "An innovative personalized seal engraving machine that combines traditional craftsmanship with modern technology, earning the prestigious Red Dot Design Award in 2024.",
      details: "NEXTsealer represents a breakthrough in the digitization of traditional seal carving art. The machine uses advanced technology to create personalized seals while preserving the artistic integrity of traditional Chinese seal carving techniques.",
      features: [
        "Personalized seal creation",
        "Traditional craftsmanship integration",
        "Modern technology application",
        "Award-winning design"
      ],
      technologies: ["Mechanical Engineering", "Digital Manufacturing", "Traditional Arts", "User Experience Design"],
      year: "2024",
      status: "Award Winner"
    },
    "coastalbam-jar": {
      title: "CoastalBam Jar — Red Dot Winner 2024",
      cover: "/images/research-design.jpg",
      description: "A modern reinterpretation of traditional salt storage, combining functional design with aesthetic appeal, also earning the Red Dot Design Award in 2024.",
      details: "The CoastalBam Jar project reimagines traditional salt storage solutions for contemporary use. The design maintains the functional benefits of traditional methods while incorporating modern materials and aesthetic considerations.",
      features: [
        "Traditional functionality",
        "Modern aesthetics",
        "Sustainable materials",
        "Award-winning design"
      ],
      technologies: ["Product Design", "Sustainable Materials", "Traditional Crafts", "Modern Manufacturing"],
      year: "2024",
      status: "Award Winner"
    },
    "heritage-spark": {
      title: "Heritage Spark — Iron A' Design Award 2025",
      cover: "/images/Gallery-Heritage-Spark.png",
      description: "An innovative toolkit that integrates intangible cultural heritage with contemporary creativity, earning the Iron A' Design Award in 2025.",
      details: "Heritage Spark serves as a bridge between traditional cultural practices and modern creative expression. The toolkit enables users to explore and reinterpret cultural heritage through contemporary design methods.",
      features: [
        "Cultural heritage integration",
        "Contemporary creativity",
        "Educational toolkit",
        "Award-winning design"
      ],
      technologies: ["Cultural Heritage", "Educational Design", "Creative Tools", "User Experience"],
      year: "2025",
      status: "Award Winner"
    },
    "life-of-su-shi": {
      title: "\"Life of Su Shi\" series",
      cover: "/images/researches-design-cover.png",
      description: "A creative project series exploring the life and works of the famous Chinese poet Su Shi through modern design and digital media.",
      details: "This series brings the poetry and life of Su Shi to contemporary audiences through innovative design and digital storytelling. The project combines historical research with modern creative expression.",
      features: [
        "Historical storytelling",
        "Digital media integration",
        "Cultural education",
        "Creative expression"
      ],
      technologies: ["Digital Storytelling", "Cultural Research", "Visual Design", "Educational Media"],
      year: "2025",
      status: "In Development"
    }
  }
};

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ researchId: string; projectId: string }> 
}) {
  const { researchId, projectId } = await params;
  
  const researchGroup = projects[researchId as keyof typeof projects];
  if (!researchGroup) return notFound();
  
  const project = researchGroup[projectId as keyof typeof researchGroup];
  if (!project) return notFound();

  return (
    <div className="min-h-screen max-w-[1000px] mx-auto py-12 px-4">
      {/* Back to Research Group button */}
      <div className="mb-8">
        <Link href={`/researches/${researchId}`} className="text-gray-600 hover:text-gray-800 transition-colors">
          ← Back to {researchId === 'music' ? 'Music' : researchId === 'font' ? 'Font' : 'Design'} Research
        </Link>
      </div>

      {/* Header Image */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="w-full max-w-[900px] aspect-[16/6] relative rounded-[36px] overflow-hidden">
          <Image 
            src={project.cover} 
            alt={project.title} 
            fill 
            className="object-cover" 
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2">
          {project.title}
        </h1>
        
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Year: {project.year}</span>
          <span>Status: {project.status}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          {project.description}
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          {project.details}
        </p>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="bg-gray-50 rounded-[24px] p-8">
        <h2 className="text-2xl font-bold mb-4">Project Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Year</h3>
            <p className="text-gray-600">{project.year}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Status</h3>
            <p className="text-gray-600">{project.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
