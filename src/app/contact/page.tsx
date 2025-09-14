import Image from "next/image";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

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

      {/* 内容部分（保持原有UI风格，仅保留四项） */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* 邮箱联系 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Email</h3>
            <p className="text-gray-600">For general inquiries and collaborations</p>
            <Link href="mailto:zhangkejun@zju.edu.cn" className="text-blue-600 hover:text-blue-800 break-all">
              zhangkejun@zju.edu.cn
            </Link>
            <div className="mt-3">
              <CopyButton text="zhangkejun@zju.edu.cn" label="Copy email" className="!bg-blue-100 !text-blue-700/70 hover:!bg-blue-200" />
            </div>
          </div>

          {/* 电话联系 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Office Phone</h3>
            <p className="text-gray-600">For direct communication</p>
            <Link href="tel:+8657187952010" className="text-blue-600 hover:text-blue-800">
              +86 571 87952010
            </Link>
            <div className="mt-3">
              <CopyButton text="+86 571 87952010" label="Copy phone number" className="!bg-blue-100 !text-blue-700/70 hover:!bg-blue-200" />
            </div>
          </div>

          {/* 地址 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Address</h3>
            <p className="text-gray-600">Visit our lab</p>
            <p className="text-blue-600">
              Zetong Building 109, Yuquan Campus, Zhejiang University<br />
              No. 3 West Teaching Building 241, Xixi Campus, Zhejiang University
            </p>
            <div className="mt-3">
              <CopyButton
                text="Zetong Building 109, Yuquan Campus, Zhejiang University / No. 3 West Teaching Building 241, Xixi Campus, Zhejiang University"
                label="Copy address"
                className="!bg-blue-100 !text-blue-700/70 hover:!bg-blue-200"
              />
            </div>
          </div>

          {/* 微信公众号 */}
          <div className="bg-white rounded-2xl flex flex-col items-start">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-700/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">WeChat</h3>
            <p className="text-gray-600">Scan to follow us</p>
            <div className="w-32 h-32 relative rounded-lg overflow-hidden bg-white">
              <Image src="/images/contact-wechat.jpg" alt="NEXT Lab WeChat QR" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 