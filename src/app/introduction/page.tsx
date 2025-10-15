import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="min-h-screen max-w-[1000px] mx-auto py-12 px-4">
      {/* Back to Home button */}
      <div className="mb-8">
        <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
          ← Back to Home
        </Link>
      </div>

      {/* Header Image */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="w-full max-w-[900px] aspect-[16/6] relative rounded-[36px] overflow-hidden">
          <Image 
            src="/images/next-lab-logo.png" 
            alt="NEXT Lab Introduction" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2">
          Introduction of NEXT Lab
        </h1>
      </div>

      {/* Content */}
      <div className="prose max-w-none mb-8">
        <p className="text-lg leading-relaxed text-gray-700">
          We are dedicated to forging a future———<strong>NEXT Lab</strong>, where technology transcends its role as a cold tool, becoming a <strong>Narrative-driven</strong> partner with deep <strong>Empathetic</strong> capacity. By exploring novel interaction design paradigms across X-reality boundaries, we aim to achieve a fundamental <strong>Transformation</strong> in the relationship between humans, society, and the digital realm.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          The lab's mission is "<strong>Design Driven, Technology Empowered</strong>," specializing in interaction design with three directions: <Link href="/researches/music" className="text-blue-600 hover:text-blue-800 underline font-medium">Auditory Intelligence（AI Group）</Link>, <Link href="/researches/font" className="text-blue-600 hover:text-blue-800 underline font-medium">Visual Intelligence（VI Group）</Link>, and <Link href="/researches/design" className="text-blue-600 hover:text-blue-800 underline font-medium">Emotional Intelligence（EI Group）</Link>.
        </p>
      </div>

      {/* Research Groups Overview */}
      <div className="mb-10 pt-8">
        <h2 className="text-2xl font-bold mb-6">Research Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/researches/music" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[36px] overflow-hidden transition-shadow hover:shadow-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/research-music.png"
                  alt="Music Group"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  Auditory Intelligence (AI Group)
                </h3>
                <p className="text-gray-600 text-sm">
                  Engineering the Future of Music with AI
                </p>
              </div>
            </div>
          </Link>

          <Link href="/researches/font" className="group">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[36px] overflow-hidden transition-shadow hover:shadow-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/researches-font-cover.png"
                  alt="Font Group"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                  Visual Intelligence (VI Group)
                </h3>
                <p className="text-gray-600 text-sm">
                  Shaping the Future of Chinese Character
                </p>
              </div>
            </div>
          </Link>

          <Link href="/researches/design" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[36px] overflow-hidden transition-shadow hover:shadow-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/researches-design-cover.png"
                  alt="Design Group"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Emotional Intelligence (EI Group)
                </h3>
                <p className="text-gray-600 text-sm">
                  Creating Design Innovations for the AI era
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mb-10 pt-8">
        <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
        <div className="bg-gray-50 rounded-[24px] p-8">
          <blockquote className="text-lg italic text-gray-700 leading-relaxed">
            "Design Driven, Technology Empowered"
          </blockquote>
          <p className="text-gray-600 mt-4">
            We believe in the power of design to shape technology and the potential of technology to enhance human experience. Our interdisciplinary approach combines cutting-edge research with practical applications to create meaningful innovations.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-10 pt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <Link href="mailto:zhangkejun@zju.edu.cn" className="text-blue-600 hover:text-blue-800 underline">
              zhangkejun@zju.edu.cn
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Zhejiang University, Hangzhou, China</p>
          </div>
        </div>
      </div>
    </div>
  );
}
