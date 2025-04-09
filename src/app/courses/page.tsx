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
        {/* AI & Machine Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/course-ai.jpg"
              alt="AI & Machine Learning"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">AI & Machine Learning</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">By Prof. John Smith, Dr. Sarah Johnson</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Deep Learning</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Neural Networks</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Python</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              Dive deep into the world of artificial intelligence and machine learning. This comprehensive course covers fundamental concepts to advanced applications, including neural networks, deep learning, and practical AI implementation.
            </p>
            <div className="flex items-center">
              <Link 
                href="/courses/ai-machine-learning" 
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

        {/* Computer Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/course-vision.jpg"
              alt="Computer Vision"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Computer Vision</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">By Dr. Michael Chen, Prof. Emily Davis</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Image Processing</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Object Detection</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">OpenCV</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              Explore the fascinating field of computer vision. Learn how to process and analyze visual information using computers, from basic image processing to advanced object detection and recognition techniques.
            </p>
            <div className="flex items-center">
              <Link 
                href="/courses/computer-vision" 
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

        {/* Interactive Computing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/course-interactive.jpg"
              alt="Interactive Computing"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Interactive Computing</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">By Prof. Lisa Zhang, Dr. Robert Wilson</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">UI/UX</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">JavaScript</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              Learn to create engaging interactive experiences through computing. This course covers user interface design, interaction principles, and the development of responsive and intuitive digital experiences.
            </p>
            <div className="flex items-center">
              <Link 
                href="/courses/interactive-computing" 
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
    </div>
  );
} 