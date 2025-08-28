import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMemberById } from "@/data/team";

interface TeamMemberPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const member = getTeamMemberById(id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen max-w-[900px] mx-auto py-12 px-4">
      {/* 返回按钮 - 移到最顶部 */}
      <div className="mb-8">
        <Link
          href="/team"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Team
        </Link>
      </div>

      <div className="mb-8 flex flex-col items-start gap-4">
        {/* 头像区域 */}
        <div className="w-full flex items-start">
          <div className="relative" style={{ width: '200px', height: '200px' }}>
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              className="rounded-full object-cover"
              sizes="200px"
              priority
            />
          </div>
        </div>

        {/* 标题和基本信息 */}
        <h1 className="text-3xl font-bold mt-4 mb-2">{member.englishName || member.name}</h1>
        
        {/* 标签 - 移到职位描述上面 */}
        <div className="flex gap-2 mb-2">
          <span className="px-3 py-1 bg-purple-50 text-purple-800 rounded-full text-xs font-medium">
            {member.category}
          </span>
          {member.researchGroup && (
            <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-medium">
              {member.researchGroup}
            </span>
          )}
        </div>

        <p className="text-lg text-gray-500 mb-4">{member.position}</p>

        {/* 联系信息 */}
        <div className="flex items-center gap-4 mb-4">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center text-white px-4 py-2 rounded-full font-medium bg-black hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {member.email}
          </a>
          {member.personalHomepage && (
            <a
              href={member.personalHomepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white px-4 py-2 rounded-full font-medium bg-black hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Personal Homepage
            </a>
          )}
        </div>
      </div>

      {/* 详细内容 */}
      <div className="prose max-w-none mb-8">


        {/* 英文简介 */}
        {member.englishBio && (
          <div className="mb-8">
            <h4 className="font-bold text-lg mt-6 mb-2">Biography</h4>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {member.englishBio}
            </p>
          </div>
        )}

        {/* 研究成果 */}
        {member.achievements && (
          <div className="mb-8">
            <h4 className="font-bold text-lg mt-6 mb-2">Research Achievements</h4>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {member.achievements}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
