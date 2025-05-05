import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-green-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/courses.svg"
                    alt="Courses"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-5xl font-bold text-black">Courses</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto">
        {/* Integration of Audio Music and Computer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/course-audio-music.png"
              alt="Integration of Audio Music and Computer"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Integration of Audio Music and Computer – Audio Music Technology</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">Course • Jan 09, 2023</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Course</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Article</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              This course focuses on the emerging interdisciplinary field of music technology, music artificial intelligence, and computer audition/AI acoustics. It covers the development of the field, talent cultivation, and the integration of academic theory and industrial application. The course is structured as a series of popular science reports, open to the public, providing a comprehensive overview of academic theories and industrial applications.
            </p>
            <div className="flex items-center">
              <Link 
                href="/courses/audio-music-technology" 
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Introduction to Swift Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/course-swift.jpg"
              alt="Introduction to Swift Innovation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction to Swift Innovation</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">Course • Jan 09, 2023</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Course</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Swift</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Article</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              This course systematically teaches Swift fundamentals, advanced topics, and practical knowledge, integrating typical applications such as AI, AR, Face ID, and Accessibility. It features sharing from WWDC Scholarship winners and top awardees, aiming to cultivate learners' development capabilities in the iOS ecosystem and enhance their innovation and entrepreneurship skills in mobile applications.
            </p>
            <div className="flex items-center">
              <Link 
                href="/courses/swift-innovation" 
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Design Thinking and Innovative Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/course-design-thinking.png"
              alt="Design Thinking and Innovative Design"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Design Thinking and Innovative Design</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">Course • Jan 08, 2023</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Course</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Design Group</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Article</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              This course integrates research achievements in China's innovative design field with global design thinking, building a knowledge system of "Innovative Design + Design Thinking + Entrepreneurial Practice". It focuses on design thinking, innovation, and entrepreneurship, emphasizing interdisciplinarity, cross-domain, and international perspectives.
            </p>
            <div className="flex items-center">
              <Link 
                href="/courses/design-thinking" 
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24" />
    </div>
  );
} 