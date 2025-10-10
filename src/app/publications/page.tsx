import Image from "next/image";
import Link from "next/link";
import { getAllPublications } from "@/data/publications";

// 根据研究组别返回对应的颜色类
const getTagColor = (tag: string) => {
  switch (tag) {
    case 'Music':
      return 'bg-purple-100 text-purple-800';
    case 'Font':
      return 'bg-orange-100 text-orange-800';
    case 'Design':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function Publications() {
  const publications = getAllPublications();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-blue-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/publications.svg"
                    alt="Publications"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Publications</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publications List - alternating two-column layout */}
      <div className="max-w-[1920px] mx-auto">
        {publications.map((pub, idx) => (
          <Link
            key={pub.id}
            href={`/publications/${pub.id}`}
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center mb-12 md:mb-16`}
          >
            <div className={`relative h-[300px] md:h-[400px] rounded-[36px] overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : 'order-1'}`}>
              <Image
                src={pub.image}
                alt={pub.title}
                fill
                className="object-cover"
              />
            </div>
            <div className={`${idx % 2 === 1 ? 'md:order-1' : 'order-2'} p-2 md:p-0`}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">{pub.title}</h2>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 mb-2">
                <span className="mr-4 text-sm md:text-base">By {pub.authors}</span>
                <span className="text-sm">{pub.year}</span>
              </div>
              <div className="flex gap-2 mb-3 md:mb-6 flex-wrap">
                {pub.tags.map((tag, idx) => (
                  <span key={idx} className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-3 md:mb-6 line-clamp-4 text-sm md:text-base">
                {pub.abstract || pub.venue}
              </p>
              <div className="flex items-center">
                <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 