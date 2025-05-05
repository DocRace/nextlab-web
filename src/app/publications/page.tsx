import Image from "next/image";
import Link from "next/link";

const publications = [
  {
    id: "werewolf-xl",
    title: "Werewolf-XL Dataset",
    authors: "K. Zhang, Kejun and Wu, Xinda and Xie, Xinzhang and Zhang, Xiaoran and Zhang, Hui and Chen, Xiaoyun and Sun, Lingyun",
    year: "2021",
    tags: ["Dataset", "Affective Computing", "Music Group", "Article"],
    image: "/images/publication-werewolf-xl.png",
    desc: "A large-scale spontaneous audio-visual database for affective computing and group interaction analysis, containing 890 minutes of recordings from 129 subjects playing the Werewolf game, with rich emotion annotations and extensive benchmarks.",
  },
  {
    id: "journal-conference-list",
    title: "Related Journals and Conferences Overview",
    authors: "NEXT LAB Team",
    year: "2020",
    tags: ["Article"],
    image: "/images/journal-conference-list.jpg",
    desc: "CCF recommended conferences and journals related to NEXT LAB research directions, including HCI, multimedia, and affective computing.",
  },
  {
    id: "lingering",
    title: "Lingering: Cross-media Intelligent Music Generation System",
    authors: "NEXT LAB Music Group",
    year: "2020",
    tags: ["Research", "Music Group", "Article"],
    image: "/images/Lingering.jpg",
    desc: "Lingering is a cross-media intelligent music generation system powered by optimized Transformer XL and large-scale MIDI data, supporting automatic music creation and video-music matching.",
  },
  {
    id: "smart-seal-experience",
    title: "Smart Seal Experience Project",
    authors: "NEXT LAB Calligraphy Group",
    year: "2020",
    tags: ["Research", "Project", "Calligraphy Group", "Article"],
    image: "/images/smart-seal-experience.png",
    desc: "A digital and intelligent experience project for traditional seal carving art.",
  },
  {
    id: "seal-create",
    title: "Seal Create",
    authors: "NEXT LAB Calligraphy Group",
    year: "2021",
    tags: ["Research", "Project", "Calligraphy Group", "Article"],
    image: "/images/seal-create.png",
    desc: "AI-powered intelligent seal carving experience project, integrating calligraphy and digital innovation.",
  },
  {
    id: "pmemo-dataset",
    title: "PMEmo: Pop Music Emotion Dataset",
    authors: "NEXT LAB Music Group",
    year: "2021",
    tags: ["Dataset", "Research", "Music Group", "Article"],
    image: "/images/pmemo-dataset.png",
    desc: "A dataset for music emotion recognition, providing rich annotations for pop music tracks.",
  },
  {
    id: "art-easiest",
    title: "Art Easiest",
    authors: "NEXT LAB Mobile Innovation Group",
    year: "2021",
    tags: ["Research", "Project", "Mobile Innovation", "Article"],
    image: "/images/art-easiest.jpg",
    desc: "A mobile app for innovative art creation and sharing.",
  },
];

export default function Publications() {
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
                <h1 className="text-5xl font-bold text-black">Publications</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publications List - alternating two-column layout */}
      <div className="max-w-[1920px] mx-auto">
        {publications.map((pub, idx) => (
          <div
            key={pub.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
            <div className={`relative h-[400px] rounded-[36px] overflow-hidden ${idx % 2 === 1 ? 'order-2 md:order-2' : ''}`}>
            <Image
                src={pub.image}
                alt={pub.title}
              fill
              className="object-cover"
            />
          </div>
            <div className={idx % 2 === 1 ? 'order-1 md:order-1' : ''}>
              <h2 className="text-3xl font-bold mb-4">{pub.title}</h2>
            <div className="flex items-center text-gray-500 mb-2">
                <span className="mr-4">By {pub.authors}</span>
                <span className="text-sm">{pub.year}</span>
            </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                {pub.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
                {pub.desc}
            </p>
            <div className="flex items-center">
              <Link 
                  href={`/publications/${pub.id}`}
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
} 