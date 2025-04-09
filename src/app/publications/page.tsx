import Image from "next/image";
import Link from "next/link";

export default function Publications() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="w-full">
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-[9999px] py-6 px-12 flex items-center">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-6">
                  <Image
                    src="/icons/publications.svg"
                    alt="Publications"
                    width={64}
                    height={64}
                    className="w-full h-full"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <h1 className="text-6xl font-bold text-white">Publications</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto">
        {/* 第一篇论文 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/publication1.jpg"
              alt="Publication 1"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Advancements in Deep Learning for Computer Vision: A Comprehensive Analysis of Modern Techniques and Applications</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">By John Smith, Sarah Johnson, Michael Chen</span>
              <span className="text-sm">2024</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Vision</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Deep Learning</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              This comprehensive study delves into the latest developments in deep learning techniques applied to computer vision tasks. 
              We explore innovative approaches to object detection, image segmentation, and scene understanding, with a particular focus 
              on transformer-based architectures and their impact on the field. The paper also discusses practical applications in 
              autonomous vehicles, medical imaging, and industrial automation, providing insights into current challenges and future 
              research directions.
            </p>
            <div className="flex items-center">
              <Link 
                href="/publications/deep-learning" 
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 第二篇论文 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Neural Networks in Robotics: Bridging the Gap Between Perception and Action in Complex Environments</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">By Emily Davis, Robert Wilson, Lisa Zhang</span>
              <span className="text-sm">2023</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Robotics</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Neural Networks</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              This research paper investigates the integration of advanced neural network architectures in robotic systems, 
              focusing on their application in perception, decision-making, and control tasks. We present novel approaches 
              to handling dynamic environments, including real-time adaptation and multi-modal sensor fusion. The study 
              covers both theoretical foundations and practical implementations, with case studies in industrial automation, 
              service robotics, and autonomous navigation systems.
            </p>
            <div className="flex items-center">
              <Link 
                href="/publications/neural-robotics" 
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-[36px] overflow-hidden order-1 md:order-2">
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
          <div className="relative h-[400px] rounded-[36px] overflow-hidden">
            <Image
              src="/images/publication3.jpg"
              alt="Publication 3"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Artificial Intelligence in Healthcare: Revolutionizing Medical Diagnosis, Treatment Planning, and Patient Care</h2>
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-4">By David Lee, Maria Garcia, James Brown</span>
              <span className="text-sm">2023</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Healthcare</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Medical AI</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Deep Learning</span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-4">
              This comprehensive study examines the transformative impact of artificial intelligence in healthcare, 
              with a focus on medical imaging analysis, disease prediction, and personalized treatment recommendations. 
              We explore the integration of deep learning models in clinical workflows, addressing challenges in 
              data privacy, model interpretability, and regulatory compliance. The paper also discusses emerging 
              applications in drug discovery, patient monitoring, and healthcare resource optimization, providing 
              insights into the future of AI-driven healthcare.
            </p>
            <div className="flex items-center">
              <Link 
                href="/publications/ai-healthcare" 
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Read More
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