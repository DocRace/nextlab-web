import Image from "next/image";
import Link from "next/link";
import { getPublicationById } from "@/data/publications";
import { teamMembers } from "@/data/team";
import { notFound } from "next/navigation";

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
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="text-gray-600">{publication.venue}</p>
            </div>
            {publication.abstract && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Abstract</h3>
                <p className="text-gray-600 leading-relaxed">{publication.abstract}</p>
              </div>
            )}
            {publication.link && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Paper Link</h3>
                <a 
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View Paper
                </a>
              </div>
            )}
            {publication.additionalInfo && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
                <p className="text-gray-600">{publication.additionalInfo}</p>
              </div>
            )}
            {publication.id === "ideationweb" && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Video</h3>
                <a 
                  href="https://dl.acm.org/doi/10.1145/3706598.3713375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View demonstration video on the paper page
                </a>
              </div>
            )}
            {publication.id === "remast" && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Video</h3>
                <a 
                  href="https://ieeexplore.ieee.org/document/10734159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View demonstration video on the paper page
                </a>
              </div>
            )}
            {publication.id === "visual-knowledge-seal" && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Interactive Demo</h3>
                <a 
                  href="http://www.next.zju.edu.cn/seal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Try the interactive seal carving system
                </a>
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