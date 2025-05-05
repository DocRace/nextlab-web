import Image from "next/image";
import Link from "next/link";

export default function Team() {
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Staff Members */}
            {[
              { name: 'Zhang Kejun', role: 'NEXT Lab Director', avatar: '/avatars/zhang-kejun.png' },
              { name: 'Liu Yuxuan', role: 'NEXT Lab Research Assistant', avatar: '/avatars/liu-yuxuan.png' },
              { name: 'Zhang Tieyao', role: 'Next Lab Research Assistant', avatar: '/avatars/zhang-tieyao.jpeg' },
              { name: 'Liang Weiqi', role: 'Next Lab Teaching Assistant', avatar: '/avatars/liang-weiqi.jpg' },
            ].map((member, idx) => (
              <div className="flex items-start" key={member.name}>
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
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Researchers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Researchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Researcher Members */}
            {[
              { name: 'Zhang Lekai', role: '2012 Postdoctoral', avatar: '/avatars/zhang-lekai.jpg' },
            ].map((member, idx) => (
              <div className="flex items-start" key={member.name}>
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
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Doctoral Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Zhang Rui', role: '2018 PhD', avatar: '/avatars/zhang-rui.jpg' },
              { name: 'Wu Xinda', role: '2019 PhD', avatar: '/avatars/wu-xinda.jpg' },
              { name: 'Wang Bolin', role: '2020 PhD', avatar: '/avatars/wang-bolin.jpg' },
              { name: 'Zhang Xiaoran', role: '2020 PhD', avatar: '/avatars/zhang-xiaoyan.jpeg' },
              { name: 'Wu Songruoyao', role: '2020 PhD', avatar: '/avatars/wusong-ruoyao.jpeg' },
              { name: 'Wu Wenqi', role: '2021 PhD', avatar: '/avatars/wu-wenqi.jpeg' },
              { name: 'Shen Xinyi', role: '2021 PhD', avatar: '/avatars/shen-xinyi.jpg' },
              { name: 'Yang Yiheng', role: '2021 PhD', avatar: '/avatars/yang-yiheng.jpeg' },
              { name: 'Wang Zihao', role: '2021 PhD', avatar: '/avatars/wang-zihao.jpg' },
              { name: 'Yu Jiaxing', role: '2022 PhD', avatar: '/avatars/yu-jiaxing.jpg' },
              { name: 'Ma Le', role: '2022 PhD', avatar: '/avatars/ma-le.jpeg' },
            ].map((member, idx) => (
              <div className="flex items-start" key={member.name}>
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
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masters Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Master Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Huang Qiaoqiao', role: '2020 Master', avatar: '/avatars/huang-qiaoqiao.jpg' },
              { name: 'Zhang Chen', role: '2020 Master', avatar: '/avatars/zhang-chen.jpg' },
              { name: 'Zhang You', role: '2020 Master', avatar: '/avatars/zhang-you.jpg' },
              { name: 'Liu Mingyue', role: '2020 Master', avatar: '/avatars/liu-mingyue.jpg' },
              { name: 'Du Dashuang', role: '2020 Master', avatar: '/avatars/du-dashuang.jpg' },
              { name: 'Tang Ruiyuan', role: '2020 Master', avatar: '/avatars/tang-ruiyuan.jpg' },
              { name: 'Pang Bo', role: '2020 Master', avatar: '/avatars/pang-bo.jpg' },
              { name: 'Wu Qiuning', role: '2020 Master', avatar: '/avatars/wu-qiuning.jpg' },
              { name: 'Lin Liangjie', role: '2020 Master', avatar: '/avatars/lin-liangjie.jpeg' },
              { name: 'Chen Yitong', role: '2020 Master', avatar: '/avatars/chen-yitong.jpg' },
              { name: 'Wang Jiaqi', role: '2021 Master', avatar: '/avatars/wang-jiaqi.png' },
              { name: 'Jia Zhongyu', role: '2021 Master', avatar: '/avatars/jia-zhongyu.jpg' },
              { name: 'Lin Han', role: '2021 Master', avatar: '/avatars/lin-han.jpeg' },
              { name: 'Cai Shixuan', role: '2021 Master', avatar: '/avatars/cai-shixuan.png' },
              { name: 'Zhong Chongjun', role: '2021 Master', avatar: '/avatars/zhong-chongjun.jpeg' },
              { name: 'Chen Mingwei', role: '2022 Master', avatar: '/avatars/chen-mingwei.jpg' },
              { name: 'Chen Zewen', role: '2021 Master', avatar: '/avatars/chen-zewen.jpeg' },
              { name: 'Wang Wenjing', role: '2021 Master', avatar: '/avatars/wang-wenjing.jpeg' },
              { name: 'Shen Lvkesheng', role: '2022 Master', avatar: '/avatars/shenlv-kecheng.jpg' },
              { name: 'Zhang Qiyuan', role: '2022 Master', avatar: '/avatars/zhang-qiyuan.png' },
              { name: 'Huang Ouying', role: '2022 Master', avatar: '/avatars/huang-ouying.jpg' },
              { name: 'Duan Xuan', role: '2022 Master', avatar: '/avatars/duan-xuan.jpg' },
              { name: 'Hong Zizhen', role: '2022 Master', avatar: '/avatars/hong-zizhen.jpeg' },
              { name: 'Feng Yuan', role: '2022 Master', avatar: '/avatars/feng-yuan.jpeg' },
              { name: 'Shen Hanshu', role: '2022 Master', avatar: '/avatars/shen-hanshu.jpg' },
            ].map((member, idx) => (
              <div className="flex items-start" key={member.name}>
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
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Undergraduates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Undergraduates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Huang Zhijie', role: '2019 Undergraduate', avatar: '/avatars/huang-zhijie.png' },
            ].map((member, idx) => (
              <div className="flex items-start" key={member.name}>
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
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Yin Yehang', role: '2019 Master', avatar: '/avatars/yinyehang.jpg' },
              { name: 'Wu Runfan', role: '2019 Master', avatar: '/avatars/wurunfan.jpg' },
              { name: 'Chen Xinyi', role: '2019 Master', avatar: '/avatars/xinyi-fang-2.JPG' },
              { name: 'Chen Dan', role: '2019 Master', avatar: '/avatars/chendan.jpg' },
              { name: 'Li Yifei', role: '2019 Master', avatar: '/avatars/liyifei.jpg' },
              { name: 'Chen Mingzhen', role: '2019 Master', avatar: '/avatars/chenmingzhen.jpg' },
              { name: 'Meng Xiao', role: '2019 Master', avatar: '/avatars/mengxiao.jpg' },
              { name: 'Wu Yonglin', role: '2019 Master', avatar: '/avatars/wuyonglin.jpg' },
              { name: 'Zhao Yanji', role: '2019 Master', avatar: '/avatars/zhaoyanji.jpg' },
              { name: 'Li Yu', role: '2019 Master', avatar: '/avatars/liyufang.jpg' },
              { name: 'Zhu Xujing', role: '2019 Master', avatar: '/avatars/zhuxujing.jpg' },
              { name: 'Liao Yichen', role: '2019 Master', avatar: '/avatars/liaoyichen.jpg' },
              { name: 'Chen Qihang', role: '2019 Master', avatar: '/avatars/chenqihang.jpg' },
              { name: 'Ye Yuqing', role: '2018 Master', avatar: '/avatars/yuqing-fang-2.JPG' },
              { name: 'Zhu Kaili', role: '2018 Master', avatar: '/avatars/zhukaili.jpg' },
              { name: 'Wang Haoyang', role: '2018 Master', avatar: '/avatars/wang-haoyang.jpg' },
              { name: 'Fang Yujun', role: '2018 Master', avatar: '/avatars/fangyujunfang.png' },
              { name: 'Jiang Hanyun', role: '2018 Master', avatar: '/avatars/jiang-hanyun.jpg' },
              { name: 'Jing Li', role: '2018 Master', avatar: '/avatars/jinglifang.png' },
              { name: 'Cao Yingping', role: '2017 Master', avatar: '/avatars/cao-yingping.jpg' },
              { name: 'Duan Ke', role: '2017 Master', avatar: '/avatars/duan-ke.jpg' },
              { name: 'Huang Xiaoyi', role: '2017 Master', avatar: '/avatars/huang-xiaoyi.jpg' },
              { name: 'Zheng Jun', role: '2017 Master', avatar: '/avatars/zheng-jun.jpg' },
              { name: 'Huang Lumin', role: '2016 Master', avatar: '/avatars/huanglumin.jpg' },
              { name: 'Jin Mengqi', role: '2016 Master', avatar: '/avatars/jin-mengqi.jpg' },
              { name: 'Zhang Hui', role: '2016 PhD', avatar: '/avatars/zhanghui.jpg' },
              { name: 'Li Simeng', role: '2016 Master', avatar: '/avatars/li-simeng.jpg' },
              { name: 'Kevin Wolterink', role: '2015 Master', avatar: '/avatars/Kevin-1.jpg' },
              { name: 'Zhang Xiaobin', role: '2015 Master', avatar: '/avatars/zhangixaobin-2.jpg' },
              { name: 'Zhu Qi', role: '2015 Master', avatar: '/avatars/zhuqi-3.png' },
            ].map((member, idx) => (
              <div className="flex items-start" key={member.name}>
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
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 