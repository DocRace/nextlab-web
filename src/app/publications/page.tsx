import Image from "next/image";
import Link from "next/link";

export default function Publications() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800" />
        <div className="relative h-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 flex items-center">
          <div className="flex items-center">
            <div className="w-16 h-16 mr-6">
              <Image
                src="/icons/publications.svg"
                alt="Publications"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <h1 className="text-5xl font-bold text-white">Publications</h1>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 py-16">
        {/* 第一篇论文 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/publication1.jpg"
              alt="Publication 1"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Deep Learning in Computer Vision</h2>
            <p className="text-gray-600 mb-6">
              A comprehensive study on the application of deep learning techniques in computer vision tasks, 
              including object detection, image segmentation, and scene understanding.
            </p>
            <div className="flex items-center text-blue-600">
              <Link href="/publications/deep-learning" className="font-semibold hover:underline">
                Read More
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* 第二篇论文 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Neural Networks in Robotics</h2>
            <p className="text-gray-600 mb-6">
              Exploring the integration of neural networks in robotic systems for improved perception, 
              decision-making, and control in dynamic environments.
            </p>
            <div className="flex items-center text-blue-600">
              <Link href="/publications/neural-robotics" className="font-semibold hover:underline">
                Read More
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/publication2.jpg"
              alt="Publication 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 第三篇论文 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/publication3.jpg"
              alt="Publication 3"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">AI in Healthcare</h2>
            <p className="text-gray-600 mb-6">
              Investigating the role of artificial intelligence in healthcare, focusing on medical imaging analysis, 
              disease prediction, and personalized treatment recommendations.
            </p>
            <div className="flex items-center text-blue-600">
              <Link href="/publications/ai-healthcare" className="font-semibold hover:underline">
                Read More
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 