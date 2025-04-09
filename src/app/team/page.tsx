import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-purple-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/team.svg"
                    alt="Team"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-5xl font-bold text-black">Team</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto">
        {/* Staff Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Staff Member 1 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=1"
                  alt="John Smith"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">John Smith</h3>
                <p className="text-gray-500">Professor of Computer Science</p>
                <p className="text-gray-600 line-clamp-3">
                  Leading researcher in artificial intelligence and machine learning with over 15 years of experience in the field.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:john.smith@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Staff Member 2 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=5"
                  alt="David Wilson"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">David Wilson</h3>
                <p className="text-gray-500">Associate Professor</p>
                <p className="text-gray-600 line-clamp-3">
                  Expert in computer vision and pattern recognition, with a focus on medical image analysis.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:david.wilson@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Staff Member 3 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=6"
                  alt="Lisa Brown"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Lisa Brown</h3>
                <p className="text-gray-500">Assistant Professor</p>
                <p className="text-gray-600 line-clamp-3">
                  Specializing in human-computer interaction and user experience design.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:lisa.brown@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Staff Member 4 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=7"
                  alt="Robert Taylor"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Robert Taylor</h3>
                <p className="text-gray-500">Research Professor</p>
                <p className="text-gray-600 line-clamp-3">
                  Focused on natural language processing and machine translation systems.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:robert.taylor@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Researchers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Researchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Researcher 1 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=2"
                  alt="Sarah Johnson"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                <p className="text-gray-500">Research Scientist</p>
                <p className="text-gray-600 line-clamp-3">
                  Expert in computer vision and deep learning, focusing on real-world applications in autonomous systems.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:sarah.johnson@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Researcher 2 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=8"
                  alt="James Wilson"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">James Wilson</h3>
                <p className="text-gray-500">Senior Researcher</p>
                <p className="text-gray-600 line-clamp-3">
                  Specializing in reinforcement learning and robotics applications.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:james.wilson@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Researcher 3 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=9"
                  alt="Maria Garcia"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Maria Garcia</h3>
                <p className="text-gray-500">Research Associate</p>
                <p className="text-gray-600 line-clamp-3">
                  Working on machine learning applications in healthcare and medical imaging.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:maria.garcia@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Researcher 4 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=10"
                  alt="Thomas Lee"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Thomas Lee</h3>
                <p className="text-gray-500">Research Scientist</p>
                <p className="text-gray-600 line-clamp-3">
                  Focused on natural language processing and knowledge representation.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:thomas.lee@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=3"
                  alt="Michael Chen"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Michael Chen</h3>
                <p className="text-gray-500">PhD Candidate</p>
                <p className="text-gray-600 line-clamp-3">
                  Full-stack developer specializing in interactive computing and user experience design.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:michael.chen@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Masters Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Masters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '160px', minWidth: '160px' }}>
                <Image
                  src="https://i.pravatar.cc/300?img=4"
                  alt="Emily Davis"
                  fill
                  className="rounded-full object-cover"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Emily Davis</h3>
                <p className="text-gray-500">Master Student</p>
                <p className="text-gray-600 line-clamp-3">
                  Creative designer with expertise in user interface design and human-computer interaction.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="mailto:emily.davis@example.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com" className="text-purple-600 hover:text-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Undergraduates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Undergraduates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add undergraduate students here */}
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add alumni here */}
          </div>
        </div>
      </div>
    </div>
  );
} 