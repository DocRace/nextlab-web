import Link from "next/link";
import Image from "next/image";
import MemoryImage from "@/components/MemoryImage";

const tabs = ["Code", "Demos", "Works", "Competition Entries", "News", "Memories", "More"] as const;

// Code data from CSV
const codeData = [
  {
    title: "AI-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy",
    link: "https://github.com/CarlWangChina/SaMoye-SVC",
    image: "/images/placeholder.jpg"
  },
  {
    title: "SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training",
    link: "https://github.com/nextlab-zju/songglm",
    image: "/images/SongGLM.jpeg"
  },
  {
    title: "REMAST: Real-time Emotion-based Music Arrangement with Soft Transition",
    link: "https://github.com/CarlWangChina/REMAST-Real-time-Emotion-based-Music-Arrangement-with-Soft-Transition",
    image: "/images/REMAST.png"
  },
  {
    title: "MuChin: A Chinese Colloquial Description Benchmark for Evaluating Language Models in the Field of Music",
    link: "https://github.com/CarlWangChina/MuChin",
    image: "/images/MuChin.png"
  },
  {
    title: "Glow Sans Open-Source Font Family",
    link: "https://github.com/welai/glow-sans",
    image: "/images/placeholder.jpg"
  },
  {
    title: "WuYun: Exploring hierarchical skeleton-guided melody generation using knowledge-enhanced deep learning",
    link: "https://github.com/NEXTLab-ZJU/wuyun",
    image: "/images/project1.jpg"
  },
  {
    title: "SongDriver: Real-time Music Accompaniment Generation without Logical Latency nor Exposure Bias",
    link: "https://github.com/CarlWangChina/SongDriver-Real-time-Music-Accompaniment-Generation-without-Logical-Latency-nor-Exposure-Bias",
    image: "/images/SongDriver.jpeg"
  }
];

// Demo data from CSV
const demoData = [
  {
    title: "Poems as musical instruments: an AI music performance interface based on the concepts of chinese qin songs",
    link: "https://apps.apple.com/us/app/poem-qin/id6504380560",
    image: "/images/Poems as musical instruments.png"
  },
  {
    title: "AI-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy",
    link: "https://github.com/CarlWangChina/SaMoye-SVC",
    image: "/images/placeholder.jpg"
  },
  {
    title: "SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training",
    link: "https://nextlab-zju.github.io/songglm/",
    image: "/images/SongGLM.jpeg"
  },
  {
    title: "REMAST: Real-time Emotion-based Music Arrangement with Soft Transition",
    link: "https://github.com/CarlWangChina/REMAST-Real-time-Emotion-based-Music-Arrangement-with-Soft-Transition",
    image: "/images/REMAST.png"
  },
  {
    title: "MuChin: A Chinese Colloquial Description Benchmark for Evaluating Language Models in the Field of Music",
    link: "https://github.com/CarlWangChina/MuChin",
    image: "/images/MuChin.png"
  },
  {
    title: "Glow Sans Open-Source Font Family",
    link: "https://welai.github.io/glow-sans/",
    image: "/images/placeholder.jpg"
  },
  {
    title: "WuYun: Exploring hierarchical skeleton-guided melody generation using knowledge-enhanced deep learning",
    link: "https://www.next.zju.edu.cn/wuyun/",
    image: "/images/project1.jpg"
  },
  {
    title: "SongDriver: Real-time Music Accompaniment Generation without Logical Latency nor Exposure Bias",
    link: "https://github.com/CarlWangChina/SongDriver-Real-time-Music-Accompaniment-Generation-without-Logical-Latency-nor-Exposure-Bias",
    image: "/images/SongDriver.jpeg"
  },
  {
    title: "Visual knowledge guided intelligent generation of Chinese seal carving",
    link: "http://www.next.zju.edu.cn/seal/",
    image: "/images/seal-create.png"
  }
];

// Competition Entries data from CSV
const competitionData = [
  {
    title: "Shihua Shijie: Winner of the First Prize at the 2025 \"Beautiful China\" Innovative Design Competition",
    award: "First Prize of the \"Beautiful China\" Innovative Design Competition",
    year: "2025",
    winners: "Jinhe Li, Yuhang Jin, Xiuqi Li, Songruoyao Wu, Xiaohui Chen",
    description: "Shihua Shijie——Amid the AIGC wave, Shihua Shijie (Poetry & Painting Vision) leverages three core innovations to bridge traditional poetry and modern short videos. It addresses industry pain points, injects vitality into traditional culture dissemination, and breaks AI's cultural aesthetic bias.",
    link: "https://cpipc.acge.org.cn/cw/hp/2c908018876ef068018774a9501a03fe",
    image: "/images/placeholder.jpg"
  },
  {
    title: "Sugar Blossom: reddot winner 2025",
    award: "Red Dot Award: Design Concept",
    year: "2025",
    winners: "Jiangyu Pan, Liang Hou, Yilin Wei, Mengyue Yuan",
    description: "Sugar Blossom is a blood-glucose monitoring solution for kids. As childhood diabetes grows and traditional methods fall short, we designed a flower-shape monitor. It reveals blood-glucose levels through petal and stamen changes.",
    link: "",
    image: "/images/placeholder.jpg"
  },
  {
    title: "Heritage Spark: Winner of the Iron A' Design Award 2025",
    award: "Iron A' Design Award",
    year: "2025",
    winners: "Liang Hou",
    description: "Heritage Spark is a design toolkit that integrates Intangible Cultural Heritage ICH into contemporary creativity. It includes ICH cards for quick understanding, role cards for diverse perspectives, and technology cards to inspire innovation.",
    link: "https://competition.adesignaward.com/ada-winner-design.php?ID=170646#Design-170646",
    image: "/images/Gallery-Heritage-Spark.png"
  },
  {
    title: "Architone: Winner of the Iron A' Design Award 2025",
    award: "Iron A' Design Award",
    year: "2025",
    winners: "Jiaxing Yu, Wenqi Wu",
    description: "Traditional music education often leaves learners confused by abstract theory and aural skills, reducing their interest and creativity. Architone innovatively transforms abstract music theory into intuitive musical blocks and buildings.",
    link: "https://competition.adesignaward.com/ada-winner-design.php?ID=170188",
    image: "/images/placeholder.jpg"
  },
  {
    title: "NEXTsealer: reddot winner 2024",
    award: "Red Dot Award: Design Concept",
    year: "2024",
    winners: "Wenqi Wu, Liang Hou, Hanshu Shen, Zizhen Hong",
    description: "NEXTSEALER addresses the decline of seal carving by making personalised seals accessible. It simplifies the creation process to text input, style selection, and layout adjustment.",
    link: "https://www.red-dot.org/zh/project/nextsealer-72110",
    image: "/images/smart-seal-experience.png"
  },
  {
    title: "CoastalBam Jar: reddot winner 2024",
    award: "Red Dot Award: Design Concept",
    year: "2024",
    winners: "Liang Hou, Wenqi Wu, Hanshu Shen, Jiangyu Pan, Duola Jin",
    description: "CoastalBam Jar is modern salt jar inspired by the traditional method used by Chinese fishermen to turn coarse salt into brine. It combines a metal vessel and two bamboo sieves with hexagonal holes.",
    link: "https://www.red-dot.org/zh/project/coastalbam-jar-71913",
    image: "/images/research-design.jpg"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-purple-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/gallery.svg"
                    alt="Gallery"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Gallery</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((t) => (
            <a key={t} href={`#${t.toLowerCase().replace(/\s+/g,'-')}`} className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium">
              {t}
            </a>
          ))}
        </div>

        {/* Code Section */}
        <section id="code" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Code</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codeData.map((item, index) => (
              <div key={index} className="rounded-[24px] overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative h-[220px] bg-gray-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/next-lab-logo.png';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <div className="mt-3">
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-colors"
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demos Section */}
        <section id="demos" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Demos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoData.map((item, index) => (
              <div key={index} className="rounded-[24px] overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative h-[220px] bg-gray-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/next-lab-logo.png';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <div className="mt-3">
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-colors"
                    >
                      Try Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-[24px] overflow-hidden border border-gray-200">
                <div className="relative h-[220px] bg-gray-100">
                  <Image src="/images/next-lab-logo.png" alt="placeholder" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Coming Soon</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">More works will be added here.</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-300 text-gray-600 text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competition Entries Section */}
        <section id="competition-entries" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Competition Entries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionData.map((item, index) => (
              <div key={index} className="rounded-[24px] overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative h-[220px] bg-gray-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/next-lab-logo.png';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.award} ({item.year})</p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                  <div className="mt-3">
                    {item.link ? (
                      <Link 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-colors"
                      >
                        View Award
                      </Link>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-300 text-gray-600 text-sm">No Link</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-[24px] overflow-hidden border border-gray-200">
                <div className="relative h-[220px] bg-gray-100">
                  <Image src="/images/next-lab-logo.png" alt="placeholder" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Coming Soon</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">Latest news will be posted here.</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-300 text-gray-600 text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Memories Section */}
        <section id="memories" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Memories</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-4 animate-[scrollleft_30s_linear_infinite]">
              {[
                "/images/memories-images/memories-1.jpg",
                "/images/memories-images/memories-2.jpg", 
                "/images/memories-images/memories-3.jpg",
                "/images/memories-images/memories-4.jpg",
                "/images/memories-images/memories-5.jpg",
                "/images/memories-images/memories-6.jpg",
                "/images/memories-images/memories-7.jpg",
                "/images/memories-images/memories-8.jpg",
                "/images/memories-images/memories-9.jpg",
                "/images/memories-images/memories-10.jpg",
                "/images/memories-images/memories-11.jpg",
                "/images/memories-images/memories-12.jpg",
                "/images/memories-images/memories-13.jpg"
              ].map((src, idx) => (
                <div key={idx} className="relative h-[180px] w-[320px] rounded-xl overflow-hidden flex-shrink-0">
                  <MemoryImage 
                    src={src} 
                    alt={`memory-${idx + 1}`} 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Section */}
        <section id="more" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-[24px] overflow-hidden border border-gray-200">
                <div className="relative h-[220px] bg-gray-100">
                  <Image src="/images/next-lab-logo.png" alt="placeholder" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Coming Soon</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">More content will be added here.</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-300 text-gray-600 text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


