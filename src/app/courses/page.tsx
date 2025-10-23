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
            <p className="text-black mb-0">Teachers: Zhang Kejun, Sun Lingyun, Chai Chunlei</p>
            <p className="text-black mb-6">Course Time: Spring and summer semesters</p>
            <p className="text-gray-600 mb-4">The course combine the research results of China's Innovation Design with the cutting-edge achievements of Design Thinking at home and abroad. Facing the real needs of national and regional development, it aims to enhance your innovation and entrepreneurship capabilities.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-interactive.png" alt="Information & Interaction Design Technology" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Information & Interaction Design Technology</h2>
            <p className="text-black mb-0">Teachers: Zhang Kejun, Xiang Wei, Chen Liuqing, Chen Shi</p>
            <p className="text-black mb-6">Course Time: Autumn and winter semesters</p>
            <p className="text-gray-600 mb-4">This course investigates the key technology and application of information and interactive design.</p>
            <div className="flex gap-4 items-center">
              <Link href="/courses/information-interaction" className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black hover:bg-gray-800 transition-colors">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Artificial Intelligence：Emotion, Art and Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-ai.jpg" alt="Artificial Intelligence：Emotion, Art and Design" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Artificial Intelligence：Emotion, Art and Design</h2>
            <p className="text-black mb-0">Teacher: Zhang Kejun</p>
            <p className="text-black mb-6">Course Time: Autumn and winter semesters</p>
            <p className="text-gray-600 mb-4">The course introduces the basic concepts, methods and development status of artificial intelligence and emotional intelligence.</p>
            <div className="flex gap-4 items-center">
              <Link href="/courses/ai-emotion-art" className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black hover:bg-gray-800 transition-colors">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Introduction to Swift Innovation */}
        <Link href="/courses/swift-innovation" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-swift.jpg" alt="Introduction to Swift Innovation" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction to Swift Innovation</h2>
            <p className="text-black mb-0">Teachers: Zhang Kejun, Zhu Hongming, Dong Zhanxun, Zhao Xiaogang</p>
            <p className="text-black mb-6">Course Time: Long-term open online</p>
            <p className="text-gray-600 mb-4">This course systematically teaches Swift fundamentals, advanced topics, and practical knowledge...</p>
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit bg-black">
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
          </div>
        </Link>


        {/* 5. Integration of Audio Music and Computer – Audio Music Technology */}
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
            <p className="text-black mb-0">Teachers: Li Wei, Zhang Kejun</p>
            <p className="text-black mb-6">Course Time: Long-term open online</p>
            <p className="text-gray-600 mb-4">This course focuses on the emerging interdisciplinary field of music technology, music artificial intelligence...</p>
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