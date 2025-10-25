import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Project data structure
interface Project {
  title: string;
  cover: string;
  content: string;
  buttons?: {
    label: string;
    url: string;
  }[];
}

interface ProjectsData {
  [researchId: string]: {
    [projectId: string]: Project;
  };
}

const projects: ProjectsData = {
  "music": {
    "wuyun": {
      title: "WuYun: Exploring hierarchical skeleton-guided melody generation using knowledge-enhanced deep learning",
      cover: "/images/WuYun-detail.png",
      content: "Although deep learning has revolutionized music generation, existing methods for structured melody generation follow an end-to-end left-to-right note-by-note generative paradigm and treat each note equally. Here, we present WuYun, a knowledge-enhanced deep learning architecture for improving the structure of generated melodies, which first generates the most structurally important notes to construct a melodic skeleton and subsequently infills it with dynamically decorative notes into a full-fledged melody. Specifically, we use music domain knowledge to extract melodic skeletons and employ sequence learning to reconstruct them, which serve as additional knowledge to provide auxiliary guidance for the melody generation process. We demonstrate that Wu Yun can generate melodies with better long-term structure and musicality and outperforms other state-of-the-art methods by 0.51 on average on all subjective evaluation metrics. Our study provides a multidisciplinary lens to design melodic hierarchical structures and bridge the gap between data-driven and knowledge-based approaches for numerous music generation tasks.",
      buttons: [
        {
          label: "View demo",
          url: "https://www.next.zju.edu.cn/wuyun/"
        },
        {
          label: "View code",
          url: "https://github.com/NEXTLab-ZJU/wuyun"
        }
      ]
    },
  },
  "font": {
    "glow": {
      title: "Glow Sans Open-Source Font Family",
      cover: "/images/font-team-project1-cover.png",
      content: "Glow Sans is a comprehensive open-source font family developed by our lab, designed as a modern and versatile counterpart to the widely used \"Source Han Sans\" series. It features a clean, neutral aesthetic with enhanced readability for both screen and print. The family includes multiple weights and supports an extensive character set, covering Simplified Chinese, Traditional Chinese, Japanese, and Korean (CJK). Released under the SIL Open Font License, it is free for any use, including commercial projects, providing a high-quality typographic resource for the global design and developer communities.",
      buttons: [
        {
          label: "View demo",
          url: "https://welai.github.io/glow-sans/"
        },
        {
          label: "View code",
          url: "https://github.com/welai/glow-sans"
        }
      ]
    }
  },
  "design": {
    "life-of-su-shi": {
      title: "\"Life of Su Shi\" AIGC short video series",
      cover: "/images/design-team-project1-cover.png",
      content: "Led by AI, \"Life of Su Shi\" revisits the countless rivers and mountains experienced by Su Shi. Using AIGC technology, we recreate famous poems of Su Shi such as Nian Nu Jiao, Yin Hu Shang Chu Qing Hou Yu, Jiang Cheng Zi, and Ti Xi Lin Bi. This video series uses AI to analyze the background of the poems and the psychological characteristics of the figures involved. Through digital light and shadow, we replicate grand scenes, and with AI-generated audiovisuals, we reignite philosophical contemplation, offering future generations a historical awakening."
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

      {/* Cover Image */}
      <div className="mb-8">
        <div className="w-full relative overflow-hidden" style={{ borderRadius: '36px' }}>
          <Image 
            src={project.cover} 
            alt={project.title} 
            width={1200}
            height={800}
            className="w-full h-auto"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        {project.title}
      </h1>

      {/* Content - Text justified */}
      <div className="mb-8">
        <p className="text-lg leading-relaxed text-gray-700" style={{ textAlign: 'justify' }}>
          {project.content}
        </p>
      </div>

      {/* Buttons - Optional */}
      {project.buttons && project.buttons.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4">
          {project.buttons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-base font-medium"
            >
              {button.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
