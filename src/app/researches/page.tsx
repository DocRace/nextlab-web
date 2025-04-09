import Image from "next/image";
import Link from "next/link";

export default function Researches() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-yellow-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/researches.svg"
                    alt="Researches"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-5xl font-bold text-black">Researches</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto py-12 grid gap-8">
        {/* AI Music 研究 */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[36px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/images/research-music.jpg"
                alt="AI Music"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-4">AI Music</h2>
              <p className="text-gray-600 mb-6">
                AI Music Generation Lab stands at the forefront of innovation, dedicated to exploring the limitless possibilities at the intersection of artificial intelligence and music. With a team of brilliant minds in computer science, music theory, and sound engineering, we are redefining the creative process of music production.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">AI</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Media</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Robotic</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Interactive</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://i.pravatar.cc/96?img=1"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=2"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=3"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=4"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=5"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Vision 研究 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[36px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/images/research-vision.jpg"
                alt="AI Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-4">AI Vision</h2>
              <p className="text-gray-600 mb-6">
                Our AI Vision Lab pushes the boundaries of computer vision technology, developing cutting-edge solutions for visual recognition, scene understanding, and real-time analysis. We combine deep learning with innovative approaches to create systems that can see and understand the world in new ways.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Computer Vision</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Deep Learning</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Neural Networks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://i.pravatar.cc/96?img=11"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=12"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=13"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=14"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Computing 研究 */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-[36px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/images/research-interactive.jpg"
                alt="Interactive Computing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-4">Interactive Computing</h2>
              <p className="text-gray-600 mb-6">
                The Interactive Computing Lab focuses on creating seamless human-computer interactions through innovative interface design and intelligent response systems. We explore new paradigms in user experience and develop technologies that make computing more intuitive and accessible.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">HCI</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">UX Design</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">Interaction</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Image
                  src="https://i.pravatar.cc/96?img=21"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=22"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/96?img=23"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 