#!/usr/bin/env python3
import shutil
import os

# 定义复制映射
photos = [
    # Researchers
    ("1005更新内容/People人员信息收集-更新/照片集/Researchers/吉姝蕾.png", "public/avatars/ji-shulei.png"),
    # Staff
    ("1005更新内容/People人员信息收集-更新/照片集/Staff/叶炜.png", "public/avatars/ye-wei.png"),
    # PhD
    ("1005更新内容/People人员信息收集-更新/照片集/PhD/邵牧川.jpg", "public/avatars/shao-muchuan.jpg"),
    ("1005更新内容/People人员信息收集-更新/照片集/PhD/祝显堤.png", "public/avatars/zhu-xiandi.png"),
    # Master
    ("1005更新内容/People人员信息收集-更新/照片集/Master/任天宇.jpg", "public/avatars/ren-tianyu.jpg"),
    ("1005更新内容/People人员信息收集-更新/照片集/Master/王嘉茗.jpg", "public/avatars/wang-jiaming.jpg"),
    ("1005更新内容/People人员信息收集-更新/照片集/Master/陆心烨.jpg", "public/avatars/lu-xinye.jpg"),
    ("1005更新内容/People人员信息收集-更新/照片集/Master/袁心悦.png", "public/avatars/yuan-xinyue.png"),
    # Undergraduate
    ("1005更新内容/People人员信息收集-更新/照片集/Undergraduate/陈一兆.jpg", "public/avatars/chen-yizhao.jpg"),
    ("1005更新内容/People人员信息收集-更新/照片集/Undergraduate/马博洋.jpeg", "public/avatars/ma-boyang.jpeg"),
]

print("开始复制照片...")
success_count = 0
fail_count = 0

for src, dst in photos:
    try:
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"✓ {dst}")
            success_count += 1
        else:
            print(f"✗ 源文件不存在: {src}")
            fail_count += 1
    except Exception as e:
        print(f"✗ 复制失败 {dst}: {e}")
        fail_count += 1

print(f"\n复制完成: 成功 {success_count} 个, 失败 {fail_count} 个")

# 创建占位符
print("\n创建占位符头像...")
placeholder_members = ['xing-baixi', 'gong-qing', 'qiao-xianyue', 'teng-jiajie', 
                       'chen-pei', 'zhang-hongbo', 'wang-xinran', 'qian-kaixing']
placeholder_src = "public/avatars/zhang-kejun.png"

if os.path.exists(placeholder_src):
    for member in placeholder_members:
        dst = f"public/avatars/{member}.jpg"
        try:
            shutil.copy2(placeholder_src, dst)
            print(f"✓ {dst} (占位符)")
        except Exception as e:
            print(f"✗ 创建占位符失败 {dst}: {e}")
else:
    print(f"✗ 占位符源文件不存在: {placeholder_src}")

print("\n所有操作完成！")

