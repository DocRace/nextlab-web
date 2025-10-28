import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 bg-gray-100 border-t border-gray-200 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image
            src="/images/next-lab-logo.png"
            alt="NEXT Lab Logo"
            width={80}
            height={0}
            style={{ height: 'auto' }}
          />
        </div>
        <div className="text-gray-600 text-right">
          ZJU NEXT Lab<br />
          © 2025 All rights reserved
        </div>
      </div>
    </footer>
  );
}


