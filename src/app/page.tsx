import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/BannerOptimized";
import ColorExtractor from "@/components/ColorExtractor";

export default function Home() {
  return (
    <>
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
            {/* 项目卡片 1 */}
            <div className="relative overflow-hidden group md:rounded-r-[36px]">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/project1.jpg">
                  <Image
                    src="/images/project1.jpg"
                    alt="Generative Adversarial Networks"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Generative Adversarial Networks for Creative Image Synthesis
                      </h3>
                      <p className="text-white text-sm mb-4">
                        Introduces how to use Generative Adversarial Network 
                        technology to generate artistic images
                      </p>
                      <Link 
                        href="/researches/gan" 
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
                      </Link>
                    </div>
                </div>
              </div>
            </div>
            
            {/* 项目卡片 2 */}
            <div className="relative overflow-hidden group md:rounded-l-[36px]">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/project2.jpg">
                  <Image
                    src="/images/project2.jpg"
                    alt="Interactive Computer Graphics"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="max-w-[1920px] mx-auto w-full">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Interactive Computer Graphics
                      </h3>
                      <p className="text-white text-sm mb-4">
                        Principles and Practice in Artistic Applications. This paper 
                        expounds the application principles and practical operations of 
                        computer graphics in artistic creation.
                      </p>
                      <Link 
                        href="/researches/graphics" 
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 项目卡片 3 */}
            <div className="relative overflow-hidden group md:rounded-r-[36px]">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/project3.jpg">
                  <Image
                    src="/images/project3.jpg"
                    alt="Multimedia Installations"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="max-w-[1920px] mx-auto w-full">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Multimedia Installations Using Computer Vision Techniques
                      </h3>
                      <p className="text-white text-sm mb-4">
                        Multimedia art installations combined with computer vision 
                        technology to enhance the audience&#39;s interactive experience.
                      </p>
                      <Link 
                        href="/researches/multimedia" 
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 项目卡片 4 */}
            <div className="relative overflow-hidden group md:rounded-l-[36px]">
              <div className="h-[588px] relative">
                <ColorExtractor imageSrc="/images/project4.jpg">
                  <Image
                    src="/images/project4.jpg"
                    alt="Artbreeder"
                    fill
                    className="object-cover"
                  />
                </ColorExtractor>
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="max-w-[1920px] mx-auto w-full">
                    <div className="px-4 sm:px-6 lg:px-8 xl:px-8 mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Artbreeder
                      </h3>
                      <p className="text-white text-sm mb-4">
                        Blending and Evolving Art with AI&apos;powered Tools. An AI-enabled 
                        tool for image blending and evolution, allowing users to create 
                        unique artistic images.
                      </p>
                      <Link 
                        href="/researches/artbreeder" 
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <h3 className="text-2xl font-bold">Follow social media</h3>
          <div className="flex gap-6 mt-4">
            <Link href="https://linkedin.com" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="https://github.com" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link href="https://twitter.com" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold">Contact us</h3>
          <div className="flex gap-6 mt-4">
            <Link href="mailto:contact@example.com" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link href="tel:+1234567890" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-116">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <Image
              src="/images/next-lab-logo.png"
              alt="Next Lab Logo"
              width={80}
              height={0}
              style={{ height: 'auto' }}
            />
          </div>
          <div className="text-gray-600">
            ZJU Next Lab<br />
            © 2023 Footer
          </div>
        </div>
      </footer>
    </>
  );
}
