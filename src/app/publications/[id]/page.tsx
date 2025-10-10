import Image from "next/image";
import Link from "next/link";
import { getPublicationById } from "@/data/publications";
import { notFound } from "next/navigation";

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

interface PublicationDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PublicationDetail({ params }: PublicationDetailProps) {
  const { id } = await params;
  const publication = getPublicationById(id);

  if (!publication) {
    notFound();
  }

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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Publication Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[500px] rounded-[36px] overflow-hidden">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">{publication.title}</h2>
            <div className="flex items-center text-gray-500 mb-4">
              <span className="mr-4">By {publication.authors}</span>
              <span className="text-sm">{publication.year}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {publication.tags.map((tag, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="text-gray-600">{publication.venue}</p>
            </div>
            
            {/* 可点击链接部分 - 类似参考网站的inline形式 */}
            <div className="mb-6">
              <div className="flex items-center gap-4 text-sm">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {(() => {
                  const links = [];
                  
                  if (publication.link) {
                    links.push(
                      <a 
                        key="pdf"
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        pdf
                      </a>
                    );
                  }
                  
                  if (publication.id === "ideationweb") {
                    links.push(
                      <a 
                        key="video"
                        href="https://dl.acm.org/doi/10.1145/3706598.3713375"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        video
                      </a>
                    );
                  }
                  
                  if (publication.id === "remast") {
                    links.push(
                      <a 
                        key="video"
                        href="https://ieeexplore.ieee.org/document/10734159"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        video
                      </a>
                    );
                  }
                  
                  if (publication.id === "visual-knowledge-seal") {
                    links.push(
                      <a 
                        key="demo"
                        href="http://www.next.zju.edu.cn/seal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        demo
                      </a>
                    );
                  }
                  
                  return links.map((link, index) => (
                    <span key={index}>
                      {link}
                      {index < links.length - 1 && <span className="text-gray-400 mx-2">|</span>}
                    </span>
                  ));
                })()}
              </div>
            </div>

            {publication.abstract && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Abstract</h3>
                <p className="text-gray-600 leading-relaxed">{publication.abstract}</p>
              </div>
            )}
            <div className="mt-8">
              <Link
                href="/publications"
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Back to Publications
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 