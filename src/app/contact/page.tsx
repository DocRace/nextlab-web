import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* 渐变背景和标题部分 */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-blue-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/contact.svg"
                    alt="Contact"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-5xl font-bold text-black">Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 邮箱联系 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Email</h3>
            <p className="text-gray-600">For general inquiries and collaborations</p>
            <Link href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">
              contact@example.com
            </Link>
          </div>

          {/* 电话联系 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Phone</h3>
            <p className="text-gray-600">For urgent matters and direct communication</p>
            <Link href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
              +1 (234) 567-890
            </Link>
          </div>

          {/* 地址 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Address</h3>
            <p className="text-gray-600">Visit our research center</p>
            <p className="text-blue-600">
              123 Research Avenue<br />
              Science Park, City<br />
              Country
            </p>
          </div>

          {/* LinkedIn */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">LinkedIn</h3>
            <p className="text-gray-600">Connect with our team</p>
            <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">
              linkedin.com/company
            </Link>
          </div>

          {/* GitHub */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p className="text-gray-600">Check out our projects</p>
            <Link href="https://github.com" className="text-blue-600 hover:text-blue-800">
              github.com/org
            </Link>
          </div>

          {/* Twitter */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Twitter</h3>
            <p className="text-gray-600">Follow our updates</p>
            <Link href="https://twitter.com" className="text-blue-600 hover:text-blue-800">
              @organization
            </Link>
          </div>

          {/* 微信公众号 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">WeChat</h3>
            <p className="text-gray-600">Scan to follow us</p>
            <div className="w-32 h-32 bg-gray-200 rounded-lg">
              {/* 这里可以放置二维码图片 */}
            </div>
          </div>

          {/* 工作时间 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Working Hours</h3>
            <p className="text-gray-600">Our office hours</p>
            <p className="text-blue-600">
              Monday - Friday<br />
              9:00 AM - 6:00 PM<br />
              (GMT+8)
            </p>
          </div>

          {/* 预约系统 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Appointment</h3>
            <p className="text-gray-600">Schedule a meeting</p>
            <Link href="/appointment" className="text-blue-600 hover:text-blue-800">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 