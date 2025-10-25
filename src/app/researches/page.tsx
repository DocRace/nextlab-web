import Image from "next/image";
import Link from "next/link";

// 根据研究组别返回对应的颜色类
const getTagColor = (tag: string) => {
  switch (tag) {
    case 'Music Group':
      return 'bg-purple-100 text-purple-800';
    case 'Font Group':
      return 'bg-orange-100 text-orange-800';
    case 'Design Group':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const researches = [
  {
    id: "music",
    title: "NEXT + Music | Engineering the Future of Music with AI",
    date: "Updated",
    tags: ["Music Group"],
    image: "/images/research-music.png",
    desc: "The NEXT + Music group stands at the forefront of intelligent music research, pioneering the deep fusion of artificial intelligence with musical creativity, perception, and experience.",
  },
  {
    id: "font",
    title: "NEXT + Font | Shaping the Future of Chinese Character",
    date: "Updated",
    tags: ["Font Group"],
    image: "/images/researches-font-cover.png",
    desc: "We are an interdisciplinary team leveraging AI and design to revolutionize the creation and application of Chinese fonts and digital seals.",
  },
  {
    id: "design",
    title: "AI + Design | Creating Design Innovations for the AI era",
    date: "Updated",
    tags: ["Design Group"],
    image: "/images/researches-design-cover.png",
    desc: "We leverage AI-assisted design to create intelligent products and nurture designers capable of facing future challenges.",
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

      {/* 内容部分：竖版卡片，直接显示完整三组（图上、文下） */}
      <div className="max-w-[1920px] mx-auto py-6 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {researches.map((item) => {
          let bg = "";
          if (item.id === "music") bg = "from-purple-50 to-purple-100";
          else if (item.id === "font") bg = "from-orange-50 to-orange-100";
          else if (item.id === "design") bg = "from-blue-50 to-blue-100";
          return (
            <Link
              key={item.id}
              href={`/researches/${item.id}`}
              className={`block bg-gradient-to-br ${bg} rounded-[36px] overflow-hidden transition-shadow hover:shadow-xl`}
            >
              <div className="relative w-full h-[240px] md:h-[360px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{item.title}</h2>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>{tag}</span>
                  ))}
                </div>
                <p className="text-gray-600 line-clamp-2 text-sm md:text-base">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mb-24" />
    </div>
  );
} 