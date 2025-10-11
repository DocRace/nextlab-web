#!/bin/bash

# 照片复制脚本
# 将提供的照片文件复制到 public/avatars 文件夹

SOURCE_DIR="/Users/race/Downloads/1005更新内容/People人员信息收集-更新/照片集"
DEST_DIR="/Users/race/Developer/next-lab/next-lab-web/public/avatars"

echo "开始复制照片..."

# Researchers
cp "$SOURCE_DIR/Researchers/吉姝蕾.png" "$DEST_DIR/ji-shulei.png" && echo "✓ ji-shulei.png"

# Staff
cp "$SOURCE_DIR/Staff/叶炜.png" "$DEST_DIR/ye-wei.png" && echo "✓ ye-wei.png"

# PhD Students
cp "$SOURCE_DIR/PhD/邵牧川.jpg" "$DEST_DIR/shao-muchuan.jpg" && echo "✓ shao-muchuan.jpg"
cp "$SOURCE_DIR/PhD/祝显堤.png" "$DEST_DIR/zhu-xiandi.png" && echo "✓ zhu-xiandi.png"

# Master Students
cp "$SOURCE_DIR/Master/任天宇.jpg" "$DEST_DIR/ren-tianyu.jpg" && echo "✓ ren-tianyu.jpg"
cp "$SOURCE_DIR/Master/王嘉茗.jpg" "$DEST_DIR/wang-jiaming.jpg" && echo "✓ wang-jiaming.jpg"
cp "$SOURCE_DIR/Master/陆心烨.jpg" "$DEST_DIR/lu-xinye.jpg" && echo "✓ lu-xinye.jpg"
cp "$SOURCE_DIR/Master/袁心悦.png" "$DEST_DIR/yuan-xinyue.png" && echo "✓ yuan-xinyue.png"

# Undergraduates
cp "$SOURCE_DIR/Undergraduate/陈一兆.jpg" "$DEST_DIR/chen-yizhao.jpg" && echo "✓ chen-yizhao.jpg"
cp "$SOURCE_DIR/Undergraduate/马博洋.jpeg" "$DEST_DIR/ma-boyang.jpeg" && echo "✓ ma-boyang.jpeg"

echo ""
echo "照片复制完成！"
echo ""
echo "以下成员没有提供照片，需要创建占位符："
echo "- xing-baixi.jpg (邢白夕)"
echo "- gong-qing.jpg (龚卿)"
echo "- qiao-xianyue.jpg (乔显越)"
echo "- teng-jiajie.jpg (滕佳洁)"
echo "- chen-pei.jpg (陈培)"
echo "- zhang-hongbo.jpg (张洪博)"
echo "- wang-xinran.jpg (王昕冉)"
echo "- qian-kaixing.jpg (钱恺行)"
echo ""
echo "创建占位符头像..."
# 使用现有的头像作为占位符
for member in xing-baixi gong-qing qiao-xianyue teng-jiajie chen-pei zhang-hongbo wang-xinran qian-kaixing; do
  cp "$DEST_DIR/zhang-kejun.png" "$DEST_DIR/$member.jpg" && echo "✓ $member.jpg (占位符)"
done

echo ""
echo "所有操作完成！"

