import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Link href={`/team/${member.id}`} className="group">
      <div className="flex items-start p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 group-hover:bg-purple-50">
        <div className="relative flex-shrink-0" style={{ width: '80px', height: '80px', minWidth: '80px' }}>
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="rounded-full object-cover bg-gray-100"
            sizes="80px"
            priority
          />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{member.englishName}</p>
          <p className="text-sm text-gray-500 mt-1">{member.position}</p>
          {member.researchGroup && (
            <span className="inline-block mt-2 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
              {member.researchGroup}
            </span>
          )}
        </div>
        <div className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
