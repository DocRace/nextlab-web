import Image from "next/image";
import Link from "next/link";

const researches = [
  {
    id: "music",
    title: "NEXT + Music | Creating New Horizons with Music",
    date: "Jun 11, 2022",
    tags: ["Music Group"],
    image: "/images/research-music.png",
    desc: "The MUSIC-AI (Intelligent Music Group) is dedicated to using music knowledge and AI technology to empower innovation in music art and design. We build an ecosystem for music generation, human-computer interaction, emotional computing, and multimodal recommendation, aiming to solve challenges in intelligent music production.",
  },
  {
    id: "font",
    title: "NEXT + Font | We Make Fonts, We Compute Fonts",
    date: "Jun 10, 2022",
    tags: ["Font Group"],
    image: "/images/research-font.png",
    desc: "The Intelligent Font Group focuses on calligraphy font generation and digital/intelligent seal carving, including database construction, font generation models, and interactive tools. We aim to make high-quality Chinese font creation easier and enrich creative tools for artists and designers.",
  },
  {
    id: "design",
    title: "NEXT + Design | Pioneering Design Science Education in China",
    date: "Jun 09, 2022",
    tags: ["Design Group"],
    image: "/images/research-design.jpg",
    desc: "DESIGN-Ed (Design Education Group) applies design thinking to business, technology, culture, and art, building a product system from design cognition to practice. We promote the development of design education in China and make design accessible and impactful in every industry.",
  },
];

export default function Researches() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-yellow-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/researches.svg"
                    alt="Researches"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Researches</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto py-6 md:py-12 grid gap-6 md:gap-8">
        {researches.map((item, idx) => {
          let bg = "";
          if (item.id === "music") bg = "from-purple-50 to-purple-100";
          else if (item.id === "font") bg = "from-amber-50 to-amber-100";
          else if (item.id === "design") bg = "from-red-50 to-red-100";
          return (
            <Link
              key={item.id}
              href={`/researches/${item.id}`}
              className={`block bg-gradient-to-br ${bg} rounded-[36px] overflow-hidden transition-shadow hover:shadow-xl`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`relative w-full h-full min-h-[300px] md:min-h-[400px] ${idx % 2 === 1 ? 'md:order-2' : 'order-1'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={`p-4 md:p-8 lg:p-12 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : 'order-2'}`}>
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4">{item.title}</h2>
                  <div className="flex gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-black rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm mb-2 md:mb-4">{item.date}</div>
                  <p className="text-gray-600 mb-3 md:mb-6 line-clamp-4 text-sm md:text-base">{item.desc}</p>
                  <span className="inline-flex items-center px-6 py-2 rounded-full font-semibold text-white bg-black hover:bg-gray-800 transition-colors shadow w-fit">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mb-24" />
    </div>
  );
} 