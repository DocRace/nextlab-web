import Link from "next/link";
import Image from "next/image";

const tabs = ["Code", "Demos", "Works", "Competition Entries", "News", "Memories", "More"] as const;

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

        {/* Sections skeleton */}
        {tabs.map((t) => (
          <section id={t.toLowerCase().replace(/\s+/g,'-')} key={t} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t}</h2>
            {/* Cards grid similar to Researches projects */}
            {t !== 'Memories' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3].map((i) => (
                  <div key={i} className="rounded-[24px] overflow-hidden border border-gray-200">
                    <div className="relative h-[220px] bg-gray-100">
                      <Image src="/images/project1.jpg" alt="placeholder" fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Placeholder title {i}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">Short description goes here. Replace with real data.</p>
                      <div className="mt-3">
                        <Link href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm">Open</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative w-full overflow-hidden">
                <div className="flex gap-4 animate-[scrollleft_30s_linear_infinite]">
                  {["/images/project1.jpg","/images/project2.jpg","/images/project3.jpg","/images/project4.jpg"].map((src, idx) => (
                    <div key={idx} className="relative h-[180px] w-[320px] rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={src} alt={`memory-${idx}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Keyframes moved to globals.css to avoid client-only styled-jsx requirement */}
    </div>
  );
}


