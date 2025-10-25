import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/BannerOptimized";
import ColorExtractor from "@/components/ColorExtractor";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* 顶部 Banner */}
      <Banner />

      {/* Highlights 部分 */}
      <section className="my-16">
        <div className="max-w-[1920px] mx-auto -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-8">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              Highlights 
              <Image 
                src="/icons/highlights.svg" 
                alt="Highlights Icon" 
                width={36} 
                height={36} 
                className="ml-2"
              />
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-screen left-1/2 right-1/2 -mx-[50vw]">
            {/* 左上 - News: Poems as musical instruments */}
            <Link href="/publications/poems-as-musical-instruments" className="relative overflow-hidden group md:rounded-r-[36px] block">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/Poems as musical instruments.jpeg">
                  <Image
                    src="/images/Poems as musical instruments.jpeg"
                    alt="Poems as musical instruments: an AI music performance interface"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/60 via-blue-900/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end z-10">
                  <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                    <span className="text-white text-sm font-medium opacity-90 mb-1 block">News</span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Poems as musical instruments: an AI music performance interface based on the concepts of chinese qin songs
                    </h3>
                    <p className="text-white text-sm mb-4">
                      Leonardo 2025 publication on AI music performance interface.
                    </p>
                    <div 
                      className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                      }}
                    >
                      Explore
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
 
            {/* 右上 - Publications: SongGLM */}
            <Link href="/publications/songglm" className="relative overflow-hidden group md:rounded-l-[36px] block">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/Publications-SongGLM.jpg">
                  <Image
                    src="/images/Publications-SongGLM.jpg"
                    alt="SongGLM: Lyric-to-Melody Generation"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-teal-900/60 via-slate-800/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end z-10">
                  <div className="max-w-[1920px] mx-auto w-full">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <span className="text-white text-sm font-medium opacity-90 mb-1 block">Publication</span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training
                      </h3>
                      <p className="text-white text-sm mb-4">
                        AAAI 2025 publication on lyric-to-melody alignment and harmony.
                      </p>
                      <div 
                        className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                        }}
                      >
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
 
            {/* 左下 - Courses: Design Thinking And Innovation Design */}
            <Link href="/courses/design-thinking" className="relative overflow-hidden group md:rounded-r-[36px] block">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/course-design-thinking.png">
                  <Image
                    src="/images/course-design-thinking.png"
                    alt="Design Thinking And Innovation Design"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-indigo-900/60 via-violet-900/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end z-10">
                  <div className="max-w-[1920px] mx-auto w-full">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <span className="text-white text-sm font-medium opacity-90 mb-1 block">Course</span>
                      <h3 className="text-2xl font-bold text-white mb-2">Design Thinking And Innovation Design</h3>
                      <p className="text-white text-sm mb-4">A comprehensive course on design thinking and innovation methodologies.</p>
                      <div 
                        className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                        }}
                      >
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
 
            {/* 右下 - Gallery: Shihua Shijie */}
            <Link href="/gallery/shihua-shijie" className="relative overflow-hidden group md:rounded-l-[36px] block">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/Gallery-Shihua-Shijie.png">
                  <Image
                    src="/images/Gallery-Shihua-Shijie.png"
                    alt="Shihua Shijie: Winner of the First Prize at the 2025 Beautiful China Innovative Design Competition"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-rose-900/60 via-red-900/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end z-10">
                  <div className="max-w-[1920px] mx-auto w-full">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <span className="text-white text-sm font-medium opacity-90 mb-1 block">Award</span>
                      <h3 className="text-2xl font-bold text-white mb-2">Shihua Shijie: Winner of the First Prize at the 2025 "Beautiful China" Innovative Design Competition</h3>
                      <p className="text-white text-sm mb-4">Award-winning design project showcasing innovative design excellence.</p>
                      <div 
                        className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                        }}
                      >
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore more with 部分 */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-12">Explore more with</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/publications" className="flex items-center group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
              <Image
                src="/icons/publications.svg"
                alt="Publications"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold group-hover:text-blue-600 transition-colors">Publications</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/researches" className="flex items-center group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
              <Image
                src="/icons/researches.svg"
                alt="Research"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold group-hover:text-green-600 transition-colors">Researches</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-green-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/courses" className="flex items-center group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
              <Image
                src="/icons/courses.svg"
                alt="Course"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold group-hover:text-purple-600 transition-colors">Courses</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-purple-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/team" className="flex items-center group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
              <Image
                src="/icons/team.svg"
                alt="People"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold group-hover:text-orange-600 transition-colors">People</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-orange-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Social Media 和 Contact 部分 */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-start">
          <Link href="/gallery" className="text-2xl font-bold flex items-center group">
            <span>Gallery: Code, Demos and more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/gallery#codes" className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors text-sm font-medium">Codes</Link>
            <Link href="/gallery#demos" className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors text-sm font-medium">Demos</Link>
            <Link href="/gallery#competition-entries" className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors text-sm font-medium">Competition Entries</Link>
            <Link href="/gallery#memories" className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors text-sm font-medium">Memories</Link>
            <Link href="/gallery#more" className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors text-sm font-medium">More</Link>
          </div>
        </div>
        
        <div className="flex flex-col items-start">
          <Link href="/contact" className="text-2xl font-bold flex items-center group">
            <span>Contact us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <div className="flex gap-6 mt-4">
            <Link href="/contact" className="w-8 h-8 transition-colors" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black hover:text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link href="/contact" className="w-8 h-8 transition-colors" title="Office Phone">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black hover:text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
            <Link href="/contact" className="w-8 h-8 transition-colors" title="Address">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black hover:text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <Link href="/contact" className="w-8 h-8 transition-colors" title="WeChat">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black hover:text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer moved to global layout */}
    </div>
  );
}
