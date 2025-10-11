#!/usr/bin/env python3
import re

# 读取文件
with open('src/data/team.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有的成员对象
members = []
current_member = ""
in_member = False
brace_count = 0

lines = content.split('\n')
i = 0
while i < len(lines):
    line = lines[i]
    
    # 检测成员开始
    if line.strip().startswith('{') and 'id:' in line:
        in_member = True
        current_member = line + '\n'
        brace_count = 1
        i += 1
        
        # 收集完整的成员对象
        while i < len(lines) and brace_count > 0:
            line = lines[i]
            current_member += line + '\n'
            brace_count += line.count('{') - line.count('}')
            i += 1
        
        # 提取ID
        id_match = re.search(r"id: '([^']+)'", current_member)
        if id_match:
            member_id = id_match.group(1)
            members.append((member_id, current_member))
    
    i += 1

# 去重：保留第一次出现的成员
seen_ids = set()
unique_members = []

for member_id, member_content in members:
    if member_id not in seen_ids:
        seen_ids.add(member_id)
        unique_members.append(member_content)

# 重新构建文件
# 找到团队成员数组的开始和结束
start_marker = "export const teamMembers: TeamMember[] = ["
end_marker = "];"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before_array = content[:start_idx + len(start_marker)]
    after_array = content[end_idx:]
    
    # 构建新的成员数组
    new_members_content = "\n" + "\n".join(unique_members) + "\n  "
    
    new_content = before_array + new_members_content + after_array
    
    # 写入文件
    with open('src/data/team.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"删除了 {len(members) - len(unique_members)} 个重复条目")
    print(f"保留了 {len(unique_members)} 个唯一成员")
else:
    print("未找到团队成员数组")
