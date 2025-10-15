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
        {/* 1. Design Thinking And Innovation Design */}
        <Link href="/courses/design-thinking" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-design-thinking.png" alt="Design Thinking And Innovation Design" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Design Thinking And Innovation Design</h2>
            <p className="text-gray-600 mb-4">Instructors: Zhang Kejun, Sun Lingyun, Chai Chunlei</p>
            <p className="text-gray-500 mb-2">Course Time: TBD</p>
            <p className="text-gray-700 mb-4">This course introduces the fundamental principles of design thinking and innovation methodologies...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>

        {/* 2. Information & Interaction Design Technology */}
        <Link href="/courses/information-interaction" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-interactive.jpg" alt="Information & Interaction Design Technology" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Information & Interaction Design Technology</h2>
            <p className="text-gray-600 mb-4">Instructors: Zhang Kejun, Xiang Wei, Chen Liuqing, Chen Shi</p>
            <p className="text-gray-500 mb-2">Course Time: TBD</p>
            <p className="text-gray-700 mb-4">This course covers the fundamental principles and technologies of information and interaction design...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>

        {/* 3. Artificial Intelligence：Emotion, Art and Design */}
        <Link href="/courses/ai-emotion-art" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-ai.jpg" alt="Artificial Intelligence：Emotion, Art and Design" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Artificial Intelligence：Emotion, Art and Design</h2>
            <p className="text-gray-600 mb-4">Instructor: Zhang Kejun</p>
            <p className="text-gray-500 mb-2">Course Time: TBD</p>
            <p className="text-gray-700 mb-4">This course explores the intersection of artificial intelligence, emotion recognition, and creative design...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>

        {/* 4. Introduction to Swift Innovation */}
        <Link href="/courses/swift-innovation" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-swift.jpg" alt="Introduction to Swift Innovation" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction to Swift Innovation</h2>
            <p className="text-gray-600 mb-4">Instructors: Zhang Kejun, Zhu Hongming, Dong Zhanxun, Zhao Xiaogang</p>
            <p className="text-gray-500 mb-2">Course Time: TBD</p>
            <p className="text-gray-700 mb-4">This course systematically teaches Swift fundamentals, advanced topics, and practical knowledge...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>

        {/* 5. AI & Digital Art */}
        <Link href="/courses/ai-digital-art" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/research-music.png" alt="AI & Digital Art" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">AI & Digital Art</h2>
            <p className="text-gray-600 mb-4">Instructors: Yu Zhen, Zhang Kejun</p>
            <p className="text-gray-500 mb-2">Course Time: TBD</p>
            <p className="text-gray-700 mb-4">This course combines artificial intelligence with digital art creation and expression...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>

        {/* 6. Integration of Audio Music and Computer – Audio Music Technology */}
        <Link href="/courses/audio-music-technology" className="block">
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
            <p className="text-gray-600 mb-4">Instructors: Li Wei, Zhang Kejun</p>
            <p className="text-gray-500 mb-2">Course Time: TBD</p>
            <p className="text-gray-700 mb-4">This course focuses on the emerging interdisciplinary field of music technology, music artificial intelligence...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>
        
      </div>
      <div className="mb-24" />
    </div>
  );
}