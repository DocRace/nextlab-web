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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-design-thinking.png" alt="Design Thinking And Innovation Design" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Design Thinking And Innovation Design</h2>
            <p className="text-gray-600 mb-4">Instructors: Zhang Kejun, Sun Lingyun, Chai Chunlei</p>
            <div className="flex gap-4 items-center">
              <Link
                href="/courses/design-thinking"
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{ backgroundColor: '#000000', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              >
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Information & Interaction Design Technology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-interactive.jpg" alt="Information & Interaction Design Technology" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Information & Interaction Design Technology</h2>
            <p className="text-gray-600 mb-4">Instructors: Zhang Kejun, Xiang Wei, Chen Liuqing, Chen Shi</p>
            <Link href="https://www.icourse163.org/course/0809ZJU389-1472361166?outVendor=zw_mooc_pclszykctj_" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Chinese MOOC link</Link>
          </div>
        </div>

        {/* 3. Artificial Intelligence：Emotion, Art and Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-ai.jpg" alt="Artificial Intelligence：Emotion, Art and Design" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Artificial Intelligence：Emotion, Art and Design</h2>
            <p className="text-gray-600 mb-4">Instructor: Zhang Kejun</p>
          </div>
        </div>

        {/* 4. Introduction to Swift Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/course-swift.jpg" alt="Introduction to Swift Innovation" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction to Swift Innovation</h2>
            <p className="text-gray-600 mb-4">Instructors: Zhang Kejun, Zhu Hongming, Dong Zhanxun, Zhao Xiaogang</p>
            <div className="flex gap-4 items-center">
              <Link
                href="/courses/swift-innovation"
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{ backgroundColor: '#000000', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              >
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="https://www.icourse163.org/course/ZJU-1450024180" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Chinese MOOC link</Link>
            </div>
          </div>
        </div>

        {/* 5. AI & Digital Art */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image src="/images/research-music.png" alt="AI & Digital Art" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">AI & Digital Art</h2>
            <p className="text-gray-600 mb-4">Instructors: Yu Zhen, Zhang Kejun</p>
            <Link href="https://www.icourse163.org/course/CAA-1473163177?from=searchPage&outVendor=zw_mooc_pcssjg_" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Chinese MOOC link</Link>
          </div>
        </div>

        {/* 6. Integration of Audio Music and Computer – Audio Music Technology */}
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
            <div className="flex gap-4 items-center">
              <Link
                href="/courses/audio-music-technology"
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{ backgroundColor: '#000000', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              >
                Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="https://www.icourse163.org/course/0809FDU062-1462119161?outVendor=zw_mooc_pclszykctj_" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Chinese MOOC link</Link>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mb-24" />
    </div>
  );
}