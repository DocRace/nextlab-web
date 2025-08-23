import Image from "next/image";
import Link from "next/link";
import { teamMembers, getTeamMembersByCategory } from "@/data/team";

export default function Team() {
  const staffMembers = getTeamMembersByCategory('Staff');
  const doctoralStudents = getTeamMembersByCategory('Doctoral Students');
  const masterStudents = getTeamMembersByCategory('Master Students');
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
                <h1 className="text-5xl font-bold text-black">Team</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="max-w-[1920px] mx-auto">
        {/* Staff Section */}
        {staffMembers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {staffMembers.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-start hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <div className="relative flex-shrink-0" style={{ width: '100px', height: '100px', minWidth: '100px' }}>
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover bg-gray-100"
                        sizes="100px"
                        priority
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {member.englishName || member.name}
                      </h3>
                      {member.englishName && member.name !== member.englishName && (
                        <p className="text-sm text-gray-400">{member.name}</p>
                      )}
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <p className="text-sm text-purple-600 mt-1">{member.researchGroup}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Doctoral Students Section */}
        {doctoralStudents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Doctoral Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctoralStudents.map((member) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-start hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <div className="relative flex-shrink-0" style={{ width: '100px', height: '100px', minWidth: '100px' }}>
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover bg-gray-100"
                        sizes="100px"
                        priority
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {member.englishName || member.name}
                      </h3>
                      {member.englishName && member.name !== member.englishName && (
                        <p className="text-sm text-gray-400">{member.name}</p>
                      )}
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <p className="text-sm text-purple-600 mt-1">{member.researchGroup}</p>
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
                  <div className="flex items-start hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <div className="relative flex-shrink-0" style={{ width: '100px', height: '100px', minWidth: '100px' }}>
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover bg-gray-100"
                        sizes="100px"
                        priority
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {member.englishName || member.name}
                      </h3>
                      {member.englishName && member.name !== member.englishName && (
                        <p className="text-sm text-gray-400">{member.name}</p>
                      )}
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <p className="text-sm text-purple-600 mt-1">{member.researchGroup}</p>
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
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="flex items-start hover:bg-purple-50 hover:rounded-full py-2 transition-all duration-200">
                    <div className="relative flex-shrink-0" style={{ width: '100px', height: '100px', minWidth: '100px' }}>
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover bg-gray-100"
                        sizes="100px"
                        priority
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {member.englishName || member.name}
                      </h3>
                      {member.englishName && member.name !== member.englishName && (
                        <p className="text-sm text-gray-400">{member.name}</p>
                      )}
                      <p className="text-gray-500">{member.position}</p>
                      {member.researchGroup && (
                        <p className="text-sm text-purple-600 mt-1">{member.researchGroup}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 