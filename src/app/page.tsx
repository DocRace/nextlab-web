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
                        href="/research/gan" 
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
                        href="/research/graphics" 
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
                        technology to enhance the audience's interactive experience.
                      </p>
                      <Link 
                        href="/research/multimedia" 
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
                        Blending and Evolving Art with AI-powered Tools. An AI-enabled 
                        tool for image blending and evolution, allowing users to create 
                        unique artistic images.
                      </p>
                      <Link 
                        href="/research/artbreeder" 
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
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/icons/publications.svg"
                alt="Publications"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold">Publications</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/research" className="flex items-center group">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/icons/researches.svg"
                alt="Research"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold">Researches</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/course" className="flex items-center group">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/icons/courses.svg"
                alt="Course"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold">Courses</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/team" className="flex items-center group">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/icons/team.svg"
                alt="Team"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-6 justify-center">
              <span className="text-xl font-semibold">Team</span>
              <div className="group-hover:translate-x-2 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Social Media 和 Contact 部分 */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-8">Follow social media</h2>
          <div className="flex gap-6">
            <a href="https://wechat.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M8.2,13.3c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C9.1,12.9,8.7,13.3,8.2,13.3z M12.3,11.5c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9C11.4,11.9,11.8,11.5,12.3,11.5z M16.4,16.1c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7C15.7,16.4,16,16.1,16.4,16.1z M13.1,16.1c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7C12.4,16.4,12.7,16.1,13.1,16.1z M17.4,9.9c-3.2-3-8.3-3-11.4,0c-1.5,1.5-2.3,3.5-2.3,5.6c0,2.1,0.8,4.1,2.3,5.6c1.5,1.5,3.5,2.3,5.7,2.3c2.2,0,4.2-0.8,5.7-2.3c1.5-1.5,2.3-3.5,2.3-5.6C19.7,13.4,18.9,11.4,17.4,9.9z M9.7,7.8c0.9,0,1.6,0.7,1.6,1.6c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C8.1,8.5,8.8,7.8,9.7,7.8z M14.8,7.8c0.9,0,1.6,0.7,1.6,1.6c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C13.2,8.5,13.9,7.8,14.8,7.8z"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact us</h2>
          <div className="flex gap-6">
            <a href="mailto:contact@nextlab.com" className="w-12 h-12">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
            </a>
            <a href="https://github.com/nextlab" target="_blank" rel="noopener noreferrer" className="w-12 h-12">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"/>
              </svg>
            </a>
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
