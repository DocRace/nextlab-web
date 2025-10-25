import Image from "next/image";
import Link from "next/link";
import { getPublicationById } from "@/data/publications";
import { teamMembers } from "@/data/team";
import { notFound } from "next/navigation";
import PublicationImage from "@/components/PublicationImage";

// Helper function to generate detail image path
function getDetailImagePath(coverImagePath: string): string {
  const pathParts = coverImagePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const nameWithoutExt = fileName.split('.')[0];
  const extension = fileName.split('.').pop();
  
  // Create detail image path: {name}-detail.{extension}
  const detailFileName = `${nameWithoutExt}-detail.${extension}`;
  pathParts[pathParts.length - 1] = detailFileName;
  
  return pathParts.join('/');
}

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

  // Build an author-to-memberId matcher
  const normalize = (s: string) => s.replace(/\*/g, "").replace(/\./g, "").trim().toLowerCase();

  const nameMap = new Map<string, string>();
  teamMembers.forEach((m) => {
    const cn = m.name ? normalize(m.name) : undefined;
    if (cn) nameMap.set(cn, m.id);
    if (m.englishName) {
      const parts = m.englishName.split(/\s+/);
      if (parts.length >= 2) {
        const last = parts[0];
        const first = parts.slice(1).join(" ");
        nameMap.set(normalize(`${first} ${last}`), m.id); // First Last
        nameMap.set(normalize(`${last} ${first}`), m.id); // Last First
        nameMap.set(normalize(`${first[0]} ${last}`), m.id); // Initial. Last
      } else {
        nameMap.set(normalize(m.englishName), m.id);
      }
    }
  });

  // Manual aliases for common variations
  const aliases: Record<string, string> = {
    "kejun zhang": "zhang-kejun",
    "wenqi wu": "wu-wenqi",
    "songruoyao wu": "wu-songruoyao",
    "zihao wang": "wang-zihao",
    "le ma": "ma-le",
    "xinda wu": "wu-xinda",
    "jiaxing yu": "yu-jiaxing",
    "xinyi chen": "chen-xinyi",
    "rui zhang": "zhang-rui",
    "bolin wang": "wang-bolin",
    "yiheng yang": "yang-yiheng",
    "zehui zheng": "zheng-zehui",
    "huaying liu": "liu-huaying",
    "guanting lu": "lu-guanting",
    "ziyi huang": "huang-ziyi",
    "hanshu shen": "shen-hanshu",
    "yuhang jin": "jin-yuhang",
    "jinhe li": "li-jinhe",
    "xiuqi li": "li-xiuqi",
    "xinyi shen": "shen-xinyi",
    "yifei li": "li-yifei",
    "chen zhang": "zhang-chen",
  };

  const findMemberIdForAuthor = (raw: string): string | undefined => {
    const a = normalize(raw);
    if (aliases[a]) return aliases[a];
    if (nameMap.has(a)) return nameMap.get(a);
    // Try to parse forms like "C. Zhang" or "K Zhang"
    const m = a.match(/^([a-z])[\s]?([a-z\-']+)$/i) || a.match(/^([a-z])[\s]+([a-z\-']+)$/i);
    if (m) {
      const initial = m[1];
      const last = m[2];
      // find candidate whose last name matches and first initial matches
      for (const tm of teamMembers) {
        if (!tm.englishName) continue;
        const parts = tm.englishName.split(/\s+/);
        if (parts.length >= 2) {
          const lastName = parts[0].toLowerCase();
          const firstName = parts.slice(1).join(" ").toLowerCase();
          if (lastName === last && firstName.startsWith(initial)) return tm.id;
          // also check reversed
          if (firstName === last && lastName.startsWith(initial)) return tm.id;
        }
      }
    }
    return undefined;
  };

  const authorTokens = publication.authors
    .replace(/\sand\s/gi, ", ")
    .split(/,\s*/)
    .map((s) => s.trim())
    .filter(Boolean);

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
          {/* Images Section */}
          <div className="space-y-8">
            {/* Cover Image */}
            <div className="relative w-full rounded-[36px] overflow-hidden">
              <Image
                src={publication.image}
                alt={`${publication.title} - Cover`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            
            {/* Detail Images */}
            {publication.detailImages && publication.detailImages.length > 0 ? (
              // Use custom detail images if provided
              publication.detailImages.map((imgSrc, index) => (
                <div key={index} className="relative w-full rounded-[36px] overflow-hidden">
                  <PublicationImage
                    src={imgSrc}
                    alt={`${publication.title} - Detail ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))
            ) : (
              // Use auto-generated detail image path
              <div className="relative w-full rounded-[36px] overflow-hidden">
                <PublicationImage
                  src={getDetailImagePath(publication.image)}
                  alt={`${publication.title} - Detail`}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">{publication.title}</h2>
            <div className="flex items-center text-gray-500 mb-4 flex-wrap">
              <span className="mr-2">By</span>
              <span className="mr-4">
                {authorTokens.map((a, idx) => {
                  const memberId = findMemberIdForAuthor(a);
                  const comma = idx < authorTokens.length - 1 ? ", " : "";
                  return memberId ? (
                    <span key={`${a}-${idx}`}>
                      <Link href={`/team/${memberId}`} className="text-blue-600 hover:text-blue-800 underline">{a.replace(/\*/g, "")}</Link>
                      {comma}
                    </span>
                  ) : (
                    <span key={`${a}-${idx}`}>{a}{comma}</span>
                  );
                })}
              </span>
              <span className="text-sm">{publication.year}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {publication.tags.map((tag, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
            {/* Venue Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="text-gray-600">{publication.venue}</p>
            </div>

            {/* Abstracts Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Abstracts</h3>
              <p className="text-gray-600 leading-relaxed">{publication.abstract || "No abstract available."}</p>
            </div>

            {/* Appendix Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Appendix</h3>
              <div className="flex items-center gap-4 text-gray-600 leading-relaxed">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                
                {/* PDF Link */}
                {publication.link ? (
                  <a 
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    PDF
                  </a>
                ) : (
                  <span className="text-gray-400">PDF</span>
                )}
                
                <span className="text-gray-400">|</span>
                
                {/* Code Link */}
                {publication.code ? (
                  <a 
                    href={publication.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Code
                  </a>
                ) : (
                  <span className="text-gray-400">Code</span>
                )}
                
                <span className="text-gray-400">|</span>
                
                {/* Demo Link */}
                {publication.demo ? (
                  <a 
                    href={publication.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="text-gray-400">Demo</span>
                )}
                
                <span className="text-gray-400">|</span>
                
                {/* Video Link */}
                {(() => {
                  let videoUrl = null;
                  
                  // Check for specific publications with video links
                  if (publication.id === "ideationweb") {
                    videoUrl = "https://dl.acm.org/doi/10.1145/3706598.3713375";
                  } else if (publication.id === "remast") {
                    videoUrl = "https://ieeexplore.ieee.org/document/10734159";
                  }
                  
                  return videoUrl ? (
                    <a 
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Video
                    </a>
                  ) : (
                    <span className="text-gray-400">Video</span>
                  );
                })()}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Button 1: View details (Chinese) - Optional */}
              {publication.chineseLink && (
                <Link 
                  href={publication.chineseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  View details (Chinese)
                </Link>
              )}

              {/* Button 2: Back to Publications */}
              <Link 
                href="/publications"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Publications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 