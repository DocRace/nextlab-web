import Image from "next/image";
import Link from "next/link";
import { teamMembers, getTeamMembersByCategory } from "@/data/team";
import TeamAvatar from "@/components/TeamAvatar";
import { formatDisplayName } from "@/utils/nameFormatter";

// 根据研究组别返回对应的颜色类
const getResearchGroupColor = (researchGroup: string) => {
  switch (researchGroup) {
    case 'Music Group':
      return 'bg-purple-100 text-purple-800';
    case 'Font Group':
      return 'bg-orange-100 text-orange-800';
    case 'Design Group':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function Team() {
  const facultyMembers = getTeamMembersByCategory('Researchers');
  const staffMembers = getTeamMembersByCategory('Staff');
  const doctoralStudents = getTeamMembersByCategory('PhD Students');
  const masterStudents = getTeamMembersByCategory('Master Students');
  const undergraduates = getTeamMembersByCategory('Undergraduates');
  const alumni = getTeamMembersByCategory('Alumni');

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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">People</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto">
        {/* Researchers Section */}
        {facultyMembers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Researchers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facultyMembers.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-center hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <TeamAvatar
                      src={member.avatar}
                      alt={member.name}
                      size={100}
                      priority
                    />
                    <div className="ml-6">
                      <h3 className="text-lg md:text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {formatDisplayName(member.name, member.englishName)}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base mb-2">{member.position}</p>
                      {member.researchGroup && (
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getResearchGroupColor(member.researchGroup)}`}>
                            {member.researchGroup}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* Staff Section */}
        {staffMembers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {staffMembers.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-center hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <TeamAvatar
                      src={member.avatar}
                      alt={member.name}
                      size={100}
                      priority
                    />
                    <div className="ml-6">
                      <h3 className="text-lg md:text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {formatDisplayName(member.name, member.englishName)}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">{member.position}</p>
                      {member.researchGroup && (
                        <span className={`inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium mt-1 w-fit ${getResearchGroupColor(member.researchGroup)}`}>
                          {member.researchGroup}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* PhD Students Section */}
        {doctoralStudents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">PhD Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctoralStudents.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-center hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <TeamAvatar
                      src={member.avatar}
                      alt={member.name}
                      size={100}
                      priority
                    />
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {formatDisplayName(member.name, member.englishName)}
                      </h3>
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <span className={`inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium mt-1 w-fit ${getResearchGroupColor(member.researchGroup)}`}>
                          {member.researchGroup}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* Master Students Section */}
        {masterStudents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Master Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {masterStudents.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-center hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <TeamAvatar
                      src={member.avatar}
                      alt={member.name}
                      size={100}
                      priority
                    />
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {formatDisplayName(member.name, member.englishName)}
                      </h3>
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <span className={`inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium mt-1 w-fit ${getResearchGroupColor(member.researchGroup)}`}>
                          {member.researchGroup}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Undergraduates Section */}
        {undergraduates.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Undergraduates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {undergraduates.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-center hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <TeamAvatar
                      src={member.avatar}
                      alt={member.name}
                      size={100}
                      priority
                    />
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {formatDisplayName(member.name, member.englishName)}
                      </h3>
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${getResearchGroupColor(member.researchGroup)}`}>
                          {member.researchGroup}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Alumni Section */}
        {alumni.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {alumni.map((member) => (
                <div key={member.id} className="flex items-center py-2">
                  <TeamAvatar
                    src={member.avatar}
                    alt={member.name}
                    size={100}
                    priority
                  />
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">
                      {formatDisplayName(member.name, member.englishName)}
                    </h3>
                    <p className="text-gray-500">{member.position}</p>
                    {member.researchGroup && (
                      <span className={`inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium mt-1 w-fit ${getResearchGroupColor(member.researchGroup)}`}>
                        {member.researchGroup}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 