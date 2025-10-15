export interface TeamMember {
  id: string;
  name: string;
  englishName?: string;
  category: 'Researchers' | 'Staff' | 'PhD Students' | 'Master Students' | 'Undergraduates' | 'Alumni';
  researchGroup?: string;
  position: string;
  avatar: string;
  email: string;
  englishBio?: string;
  chineseBio?: string;
  achievements?: string;
  personalHomepage?: string;
}

export const teamMembers: TeamMember[] = [
  // Researchers (按CSV顺序)
  {
    id: 'zhang-kejun',
    name: '张克俊',
    englishName: 'Zhang Kejun',
    category: 'Researchers',
    position: 'Director of the NEXT Lab of the College of Computer Science and Technology, Zhejiang University',
    avatar: '/avatars/zhang-kejun.png',
    email: 'zhangkejun@zju.edu.cn',
    englishBio: 'Kejun Zhang is a Professor at the College of Computer Science and Technology, Zhejiang University, where he drives innovation at the confluence of Artificial Intelligence (AI), Affective Computing, and Embodied Interaction for cutting-edge design applications. As Vice Dean of the International Design Research Institute, he plays a critical leadership role in the university\'s academic and strategic initiatives, includes the "One-Stop" service platform and AI-driven seal engraving systems, technologies that were instrumental in enhancing the operational efficiency and digital user experience of the Hangzhou Asian Games. He has published nearly 100 papers in leading IEEE/ACM journals and top-tier international conferences, establishing his significant influence in AI and Human-Computer Interaction (HCI) and won the World Artificial Intelligence Conference (WAIC) SAIL Award. Professor Zhang is deeply committed to nurturing the next generation of talent, passionately mentoring students to undertake projects that are "interesting, challenging, and valuable." Students under his guidance consistently achieve outstanding recognition in both national and international competitions, such as the "Internet+" Innovation and Entrepreneurship Competition and the "Challenging Cup," as well as top international design honors, including the Red Dot Award and the iF Design Award. His dedication extends to educational reform, where he has pioneered the development of several nationally recognized first-class courses. This commitment to teaching excellence has been widely acknowledged, earning him the First Prize in the 2024 National Teaching Innovation Contest for College Teachers and the 2024 Global MOOC and Online Education Alliance Award.',
    personalHomepage: 'https://person.zju.edu.cn/zhangkejun'
  },
  {
    id: 'zhang-lekai',
    name: '张乐凯',
    englishName: 'Zhang Lekai',
    category: 'Researchers',
    position: 'Postdoctoral Researcher, Visiting Scholar',
    avatar: '/avatars/zhang-lekai.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'xing-baixi',
    name: '邢白夕',
    englishName: 'Xing Baixi',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/xing-baixi.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'teng-jiajie',
    name: '滕佳洁',
    englishName: 'Teng Jiajie',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/teng-jiajie.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'qiao-xianyue',
    name: '乔显越',
    englishName: 'Qiao Xianyue',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/qiao-xianyue.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'ji-shulei',
    name: '吉姝蕾',
    englishName: 'Ji Shulei',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/ji-shulei.png',
    email: 'shuleiji@zju.edu.cn',
    englishBio: 'Shulei Ji is a postdoctoral researcher at the College of Computer Science and Technology, Zhejiang University advised by Prof. Kejun Zhang and Innovation Center of Yangtze River Delta, Zhejiang University advised by Prof. Shouqian Sun. My current research focuses on AI music generation, music information retrieval especially on music emotion recognition, and multimodal learning.'
  },
  {
    id: 'gong-qing',
    name: '龚卿',
    englishName: 'Gong Qing',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/gong-qing.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'chen-pei',
    name: '陈培',
    englishName: 'Chen Pei',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/chen-pei.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'zhang-hongbo',
    name: '张洪博',
    englishName: 'Zhang Hongbo',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/zhang-hongbo.jpg',
    email: '',
    englishBio: ''
  },

  // Staff (按CSV顺序)
  {
    id: 'cao-yingping',
    name: '曹颖萍',
    englishName: 'Cao Yingping',
    category: 'Staff',
    position: 'Research Assistant, Alumni',
    avatar: '/avatars/cao-yingping.jpg',
    email: 'caoyingping@zju.edu.cn',
    englishBio: ''
  },
  {
    id: 'liu-yuxuan',
    name: '刘雨萱',
    englishName: 'Liu Yuxuan',
    category: 'Staff',
    position: 'Research Assistant',
    avatar: '/avatars/liu-yuxuan.png',
    email: '0917279@zju.edu.cn',
    englishBio: 'Year of Commencement: 2017\nPosition: Research Assistant\nKey Responsibilities:\n1. China University Computer Competition - Mobile Application Innovation Competition\n2. Zhejiang Province iOS Innovation Practice Alliance\n3. Maintenance and management of laboratory websites\n4. Administrative Management of NEXT Lab',
    chineseBio: '入职年份：2017\n工作岗位：科研助理\n工作方向：\n1、中国高校计算机大赛—移动应用创新赛\n2、浙江省iOS创新实践联盟\n3、实验室网站维护管理\n4、NEXT Lab行政管理'
  },
  {
    id: 'liang-weiqi',
    name: '梁韦琪',
    englishName: 'Liang Weiqi',
    category: 'Staff',
    position: 'Teaching Assistant',
    avatar: '/avatars/liang-weiqi.jpg',
    email: 'lwq0922c29@zju.edu.cn',
    englishBio: 'Year of Commencement: 2022\nPosition: Teaching Assistant\nKey Responsibilities:\n1. Zhejiang University - Apple Inc. Smart Education Center\n2. Assist in administrative management',
    chineseBio: '入职年份：2022\n工作岗位：教研助理\n工作方向：\n1、浙大-苹果公司智惠教育中心\n2、辅助行政管理'
  },
  {
    id: 'ye-wei',
    name: '叶炜',
    englishName: 'Ye Wei',
    category: 'Staff',
    position: 'Research Assistant',
    avatar: '/avatars/ye-wei.png',
    email: 'yecha@zju.edu.cn',
    englishBio: ''
  },

  // PhD Students (按CSV类内排序)
  {
    id: 'wu-wenqi',
    name: '伍文棋',
    englishName: 'Wu Wenqi',
    category: 'PhD Students',
    researchGroup: 'Design Group',
    position: 'PhD student in Design Studies, 2018',
    avatar: '/avatars/wu-wenqi.jpeg',
    email: 'wu-wenqi@zju.edu.cn',
    englishBio: 'The main research directions are the construction of virtual teaching and research rooms and design thinking. I have a passion for music and painting and am proficient in playing the piano. I have won the silver award in the 5th and 6th China "Internet Plus" College Students\' Innovation and Entrepreneurship Competition, the Most Innovative Award and the first prize in the Mobile Application Innovation Competition of the 5th China University Computer Competition, and the first prize in the 12th Zhejiang Province "Challenge Cup" College Students\' Entrepreneurship Competition of "Chuangqingchun" The Special Prize of the 12th "Dandelion" College Students\' Entrepreneurship Competition of Zhejiang University and other awards.',
    achievements: 'Kejun ZHANG, Rui ZHANG, Yehang YIN, Yifei LI, Wenqi WU, Lingyun SUN, Fei WU, Huanghuang DENG, Yunhe PAN . Visual knowledge guided intelligent generation of Chinese seal carving[J]. Frontiers of Information Technology & Electronic Engineering, 2021.'
  },
  {
    id: 'wang-bolin',
    name: '王柏林',
    englishName: 'Wang Bolin',
    category: 'PhD Students',
    researchGroup: 'Font Group',
    position: 'PhD student in Electronic Information, 2020',
    avatar: '/avatars/wang-bolin.jpg',
    email: 'bolinwang@zju.edu.cn',
    englishBio: 'My research interests include intelligent font generation, text image super-resolution and restoration, and multimodal large language models. Currently, my work focuses on developing a vertical-domain large language model for intelligent font generation. I have participated in the Major Project of the National Social Science Fund—the Smart Ancient Books Platform—dedicated to bringing ancient texts "to life" through technological empowerment. Additionally, I have explored the integration and innovation of cutting-edge artificial intelligence technologies in practical applications at companies, including the technology company VIVO. Outside of research, I enjoy sports like basketball and badminton, which help me maintain energy and focus.',
    achievements: 'Wang, B., Zhang, K., Chen, Z., Shen, L., Shen, X., Liu, Y., ... & Shen, H. (2025). An intelligent font generation system based on stroke inference, mitigating production labor and enhancing design experience. Expert Systems with Applications, 263, 125657.\nZhang, K., Zhang, R., Wu, Y., Li, Y., Ling, Y., Wang, B., ... & Li, Y. (2022). Few-shot font style transfer with multiple style encoders. Science China Information Sciences, 65(6), 160109.'
  },
  {
    id: 'wu-songruoyao',
    name: '吴宋若瑶',
    englishName: 'Wu Songruoyao',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Artificial Intelligence, 2020',
    avatar: '/avatars/wusong-ruoyao.jpeg',
    email: 'wsry@zju.edu.cn',
    englishBio: 'Songruoyao Wu is a Ph.D. candidate in Artificial Intelligence at Zhejiang University, specializing in intelligent-assisted art creation and interactive design. Driven by a passion for bridging technology and humanistic expression, her primary work includes: a music interaction interface based on classical poetry, a melody generation method using tone and stress patterns, an intelligent music composition platform, and a database of traditional Chinese music. She has published multiple papers in relevant conferences and journals, and has received several national awards in design, artificial intelligence, computing, and innovation competitions.',
    achievements: 'Papers:\nPoems as Musical Instruments: an AI Music Performance Interface Based on the Concepts of Chinese Qin Songs. (Leonardo, accepted on 2025-02-19)\nRedefining design competence: A framework for equipping product designers in the generative AI era. (the Design Journal, 2025)\nSongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training. (AAAI, 2025)\nSuno: Potential, Prospects, and Trends. (FITEE, 2024)\nReLyMe: Improving Lyric-to-Melody Generation by Incorporating Lyric-Melody Relationships. (ACMMM, 2022)\n\nAwards:\nPoem Qin - Mental Healing App. (A\' Design Award, 2025)\n诗画视界 - AIGC驱动的诗生视频交互系统. (中国研究生"美丽中国"创新设计大赛一等奖，2025)\n弦歌 - 基于中国诗词的音乐智能弹唱系统. (全国大学生工业设计大赛银奖, 2024)\nAIProducer- 视听融合的短视频生成平台. (中国研究生人工智能创新大赛一等奖, 2020)\n入画 - 视听融合的跨媒体生成平台. (中国国际"互联网+"大学生创新创业大赛银奖, 2019)\nMind Band - 随心而动的音乐创作平台. (中国国际"互联网+"大学生创新创业大赛金奖, 2018)'
  },
  {
    id: 'wang-zihao',
    name: '王子豪',
    englishName: 'Wang Zihao',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2021',
    avatar: '/avatars/wang-zihao.jpg',
    email: 'carlwang@zju.edu.cn',
    englishBio: 'Zihao Wang is a Ph.D. student at the College of Computer Science and Technology, Zhejiang University, advised by Professor Kejun Zhang. His research focuses on AI music understanding and generation. During his doctoral studies, he was a visiting student at Carnegie Mellon University (CMU) for academic exchange and has published several high-impact papers in top international conferences and journals. He co-founded a company focused on large-scale music models, dedicating himself to applying cutting-edge algorithms to real-world applications. He is a recipient of honors such as the Baosteel Outstanding Student Scholarship and the Zhejiang University Outstanding Doctoral Student award.',
    achievements: 'Published Papers:\nSinging Timbre Popularity Assessment Based on Multimodal Large Foundation Model + ACMMM (CCF-A) + 2025 + 第一作者\nAl-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy + IJCAI (CCF-A) + 2025 + 第一作者\nMulti-Accent Mandarin Dry-Vocal Singing Dataset: Benchmark for Singing Accent Recognition + ACMMM (CCF-A) + 2025 + 第一作者\nGenerative Music Models Alignment with Professional and Amateur Users\' Expectations +ACL 2025 Findings (CCF-A非正式) + 2025 + 第一作者\nMuChin: A Chinese Colloquial Description Benchmark for Evaluating Language Models in the Field of Music + IJCAI (CCF-A) + 2024 + 第一作者\nREMAST: Real-Time Emotion-Based Music Arrangement With Soft Transition + IEEE Transactions on Affective Computing (中科院1区Top) + 2023 + 第一作者\nSongDriver: Real-time Music Accompaniment Generation without Logical Latency nor Exposure Bias + ACMMM (CCF-A) + 2022 + 第一作者\n\nHonors:\n浙江大学优秀研究生 五好研究生 优秀学生干部 优秀团员 2022-2025\n宝钢优秀学生奖学金 (全国Top 0.1%) + 2020\n"挑战杯"中国大学生创业计划竞赛国家级铜奖 + 2020 + 队长\n中国国际"互联网+"创新创业大赛国家级银奖 + 2019 + 队长'
  },
  {
    id: 'shen-xinyi',
    name: '沈心逸',
    englishName: 'Shen Xinyi',
    category: 'PhD Students',
    researchGroup: 'Font Group',
    position: 'PhD student in Computer Science and Technology, 2021',
    avatar: '/avatars/shen-xinyi.jpeg',
    email: 'shenxinyi@zju.edu.cn',
    englishBio: 'Researcher specializing in Computer Vision and Machine Learning, with a focus on Intelligent Font Generation, Multimodal AI, and Artificial Intelligence for Digital Art. Combines deep theoretical knowledge in core AI disciplines with strong practical engineering skills. Proficient in iOS development, demonstrated by the award-winning app Seal Create which received the Most Innovative Award at the Mobile Application Innovation Competition. Actively explores the intersection of cutting-edge AI research and creative digital expression.'
  },
  {
    id: 'zhong-chongjun',
    name: '仲崇珺',
    englishName: 'Zhong Chongjun',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2022',
    avatar: '/avatars/zhong-chongjun.jpg',
    email: 'zhong_chongjun@zju.edu.cn',
    englishBio: 'Zhong Chongjun is currently a PhD candidate in Design Science at Zhejiang University, and earned a Bachelor\'s Degree in the same field from this institution. Her research interests include human-computer interaction, digital art and human-AI co-creation.'
  },
  {
    id: 'yu-jiaxing',
    name: '俞佳兴',
    englishName: 'Yu Jiaxing',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2022',
    avatar: '/avatars/yu-jiaxing.jpg',
    email: 'yujx@zju.edu.cn',
    englishBio: 'Jiaxing Yu is a Ph.D. candidate in Design at Zhejiang University, specializing in music understanding, generation, and interaction, as well as emotional and spatial computing. His primary research focuses on the intersection of music and technology, aiming to enhance user experiences through intelligent music systems. He has published multiple high-impact papers in top international conferences and journals and has served as a reviewer for leading conferences and journals in the field. He has also received numerous national-level awards in design, computing, and innovation competitions.',
    achievements: 'Papers:\n[1] SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training. (AAAI, 2025)\n[2] Poems as Musical Instruments: an AI Music Performance Interface Based on the Concepts of Chinese Qin Songs. (Leonardo, accepted on 2025)\n[3] Generative Music Models Alignment with Professional and Amateur Users\' Expectations. (ACL Findings, 2025)\n[4] A Multimodal Interactive System for Autobiographical Memory: AI-Assisted Reflection and Expression. (CCAC, 2025)\n[5] Suno: potential, prospects, and trends. (FITEE, 2024)\n[6] Popular Hooks: A Multimodal Dataset of Musical Hooks for Music Understanding and Generation. (IEEE ICMEW, 2024)\n[7] Pdaugment: Data augmentation by pitch and duration adjustments for automatic lyrics transcription. (ISMIR, 2021)\n\nPatents:\n[1] 一种基于对齐编码和多任务预训练的歌词到旋律生成方法 2024106319207 发明专利\n[2] 一种融入环境感知和个性化体验的连续场景背景音乐生成方法 202410318748X 发明专利\n\nAwards:\n[1] Architone - Music Learning App. (A\' Design Award, 2025)\n[2] Poem Qin - Mental Healing App. (A\' Design Award, 2025)\n[3] 入画 · ArtEasiest. (中国高校计算机大赛-移动应用创新赛一等奖+最具创新将, 2019)\n[4] 入画 - 视听融合的跨媒体生成平台. (中国国际"互联网+"大学生创新创业大赛银奖, 2019)\n[5] WWDC Scholarship. (苹果全球开发者奖学金, 2019)'
  },
  {
    id: 'ma-le',
    name: '马玏',
    englishName: 'Ma Le',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2022',
    avatar: '/avatars/ma-le.jpg',
    email: 'maller@zju.edu.cn',
    englishBio: 'I hold a Bachelor\'s degree in Software Engineering from the University of Electronic Science and Technology of China (UESTC), and I am currently a PhD candidate in Design. My academic background combines technical training with a human-centered design perspective, enabling me to explore research across disciplines.\nMy research is at the intersection of Artificial Intelligence, Music and Audio Processing, and Human-Computer Interaction. My current work involves building trustworthy intelligent multi-modal musical systems and applications in scenarios like e-commerce, digital health, especially exploring how music affects users\' emotions.\nOutside of research, I value a well-rounded lifestyle. I enjoy running and swimming regularly to stay active and maintain focus. Music also plays an important role in my life—I often spend my free time playing the guitar, which helps me relax and think creatively.\nI hope to contribute to the development of interactive systems that are not only intelligent and efficient but also emotionally engaging and ethically designed.',
    achievements: '1. Zihao Wang, Shulei Ji, Le Ma, Yuhang Jin, Shun Lei, Jianyi Chen, Haoying Fu, Roger Dannenberg, Kejun Zhang. "Multi-Accent Mandarin Dry-Vocal Singing Dataset: Benchmark for Singing Accent Recognition." ACM Multimedia (MM), 2025.\n2. Zihao Wang*, Le Ma*(co-first author), Yuhang Jin, Yongsheng Feng, Xin Pan, Shulei Ji, Kejun Zhang (2025). "AI-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy." International Joint Conferences on Artificial Intelligence(IJCAI), 2025.\n3. Jiaxing Yu, XindaWu, Yunfei Xu, Tieyao Zhang, SongruoyaoWu, Le Ma, Kejun Zhang. "SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training." Advancement of Artificial Intelligence (AAAI), 2025.\n4. Zihao Wang*, Le Ma*(co-first author), Chen Zhang, Bo Han, Yunfei Xu, Yikai Wang, Xinyi Chen, Haorong Hong, Wenbo Liu, Xinda Wu, Kejun Zhang. "REMAST: Real-time Emotion-Based Music Arrangement with Soft Transition." IEEE Transactions on Affective Computing, 2025.\n5. Le Ma, Xinda Wu, Ruiyuan Tang, Chongjun Zhong, Kejun Zhang (2023). "YuYin: A Multi-Task Learning Model of Multi-Modal E-commerce Background Music Recommendation." EURASIP Journal on Audio, Speech, and Music Processing, 2023\n6. Le Ma, Bo Xue, Jia Wu. Centralized Traffic Signal Control for Multiple Intersections based on Sequence-to-Sequence Model and Attention Mechanism. ITSC, 2021.'
  },
  {
    id: 'cui-chuqiao',
    name: '崔楚峤',
    englishName: 'Cui Chuqiao',
    category: 'PhD Students',
    researchGroup: 'Design Group',
    position: 'PhD student in Design Studies, 2023',
    avatar: '/avatars/cui-chuqiao.png',
    email: '12321106@zju.edu.cn',
    englishBio: 'I am Chuqiao Cui, a PhD student enrolled in 2023 with a specialization in Design. My research focuses on intelligent art and innovative design, with particular emphasis on the integration of culture and technology as a driving force for the creative industry. My work is grounded in human-centered values, explores paradigm innovation, seeks to enhance end-to-end experiential processes, and highlights contextual relevance, cultural consciousness, as well as the coherence of emotion and narrative.\nI have led a research project supported by the Department of Education entitled A Study on the Urban Renewal Model through Creative Design Intervention. I completed an internship at mc Group (Media Consulta International Holding AG) in Germany, participated in the (광주디자인비엔날레) in South Korea with the rural revitalization project "Cultural Courtyard," and was honored with the Gold Prize in the Visual Category at the TEDA Cup Award Ceremony, as well as a prize at the EU–China Art and Design Workshop and Competition.'
  },
  {
    id: 'li-shuyu',
    name: '李书宇',
    englishName: 'Li Shuyu',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2024',
    avatar: '/avatars/li-shuyu.jpg',
    email: 'lsyxary@zju.edu.cn',
    englishBio: 'I am a Ph.D. student specializing in Music AI, leveraging expertise in both artificial intelligence and music. My driving mission is to empower everyone to understand, explore, and engage with music on a profound level. My vision is for music to serve as a universal bridge for communication, enabling people to understand others and express themselves authentically through its language. Passionate about all forms of music, I am deeply interested in exploring the intersection of science and art and pushing the boundaries of both fields.'
  },
  {
    id: 'lu-guanting',
    name: '卢冠廷',
    englishName: 'Lu Guanting',
    category: 'PhD Students',
    researchGroup: 'Font Group',
    position: 'PhD student in Design Studies, 2025',
    avatar: '/avatars/lu-guanting.jpg',
    email: '3210105631@zju.edu.cn',
    englishBio: 'Lu Guanting, a Ph.D. candidate in Design (starting 2025), specializing in AI-driven font generation and style transfer. My research explores the intersection of technology and art, focusing on how AI can understand and reconstruct the structure and style of characters to enable controllable, aesthetically meaningful font creation. Passionate about pushing the boundaries of creativity, I seek to make human-AI collaboration in typography more natural and expressive. Always excited to connect with fellow researchers and creators in NEXTLab—together, we can shape the future of intelligent typography.'
  },
  {
    id: 'huang-ziyi',
    name: '黄梓颐',
    englishName: 'Huang Ziyi',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Computer Science and Technology, 2025',
    avatar: '/avatars/huang-ziyi.jpg',
    email: 'hpurple011016@gmail.com',
    englishBio: 'Hi, I\'m Ziyi Huang, a soon-to-be PhD student working at the intersection of music, emotion, and AI. With a background in computer science and a deep love for the arts, I\'m drawn to projects that blend technical precision with emotional depth—whether that\'s designing stress-relief music tools, building AI-powered music companions, or analyzing how people respond to sound\nOutside research, I wear many hats: freelance designer, developer, and amateur musician—not out of discipline, but because I\'ve never been good at choosing just one passion. I\'ve also participated in algorithm competitions and enjoy solving complex problems, especially when they relate to human-centered experiences.\nAs someone who\'s both technically minded and emotionally intuitive, I believe technology doesn\'t have to feel cold. My goal is to create systems that resonate with human nuance—bringing warmth, creativity, and a touch of music into everyday life.'
  },
  {
    id: 'wang-xinran',
    name: '王昕冉',
    englishName: 'Wang Xinran',
    category: 'PhD Students',
    position: 'PhD student, 2026',
    avatar: '/avatars/wang-xinran.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'shao-muchuan',
    name: '邵牧川',
    englishName: 'Shao Muchuan',
    category: 'PhD Students',
    position: 'PhD student, 2026',
    avatar: '/avatars/shao-muchuan.jpg',
    email: 'shaomuchuan@hotmail.com',
    englishBio: 'Muchuan Shao is currently an undergraduate student majoring in artificial intelligence, expected to start pursuing a Ph.D. in Computer Science and Technology from 2026. He is motivated to study multi-modal, generative A.I. with strong interests in art and multimedia.',
    achievements: '最高剪——基于大模型和视频语义分析的智能剪辑 + 第十八届全国大学生软件创新大赛全国总决赛一等奖 + 2025 + 第二成员'
  },
  {
    id: 'zhu-xiandi',
    name: '祝显堤',
    englishName: 'Zhu Xiandi',
    category: 'PhD Students',
    position: 'PhD student, 2026',
    avatar: '/avatars/zhu-xiandi.png',
    email: 'rju84034@gmail.com',
    englishBio: 'Xiandi Zhu is a senior undergraduate student who will pursue a Ph.D. at Zhejiang University, starting in 2026. His recent research is centered at the intersection of music, artificial intelligence, and human-computer interaction.\nResearch Interests: Multimodal Music, Explainable AI (XAI) for Music, Music Generation; Human-Computer Interaction, Affective Computing, Embodied Intelligence, VR and Player Experience Design.\nHis technical work is complemented by his deep engagement with music and language. He holds a JLPT N2 certification with a year of translation experience and has a keen interest in linguistics, particularly Chomskyan theory. He is also a practicing keyboardist, with ongoing studies in music theory, harmony, and formal analysis.',
    achievements: 'Published Papers:\nZeitgebers-Based User Experience Analysis and Time Perception Modeling via Transformer in VR + ISMAR + 2025 + 第三作者\n\nHonors:\n龙芯物联网工业安全监测系统 + 第七届全国大学生嵌入式芯片与系统设计竞赛全国一等奖 + 2024 + 核心成员\n基于龙芯平台的工业物联网传感系统开发 + 电子科技大学新工科课程设计大赛二等奖 + 2024 + 核心成员\n英才实验学院优秀学生干部 + 2024 + 程序设计部副部长'
  },
  {
    id: 'qian-kaixing',
    name: '钱恺行',
    englishName: 'Qian Kaixing',
    category: 'PhD Students',
    position: 'PhD student, 2026',
    avatar: '/avatars/qian-kaixing.jpg',
    email: '',
    englishBio: ''
  },

  // Master Students (按CSV顺序)
  {
    id: 'zheng-zehui',
    name: '郑泽晖',
    englishName: 'Zheng Zehui',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Computer Science and Technology, 2023',
    avatar: '/avatars/zheng-zehui.png',
    email: 'zhengzehui@zju.edu.cn',
    englishBio: 'Hello! My name is Zheng Zehui, a third-year master\'s student (Class of 2023) majoring in Computer Science and Technology. Passionate about both technology and music, I strive to bridge the gap between these two fields.\nAs a music enthusiast, I specialize in pop piano and have basic skills in flute and guitar. Beyond performance, I\'m fascinated by music production—particularly recording techniques and arranging—and have explored AI-powered lyric generation as a creative intersection of my academic and artistic interests.\nAcademically, I focus on leveraging computational methods to solve real-world problems, with a growing curiosity about AI and multimedia applications. My goal is to blend technical expertise with artistic creativity, whether in developing intelligent music tools or exploring innovative human-computer interactions.\nLooking forward to connecting with like-minded peers and mentors! Feel free to reach out for collaborations or chats about tech, music, or their exciting overlaps.'
  },
  {
    id: 'li-jinhe',
    name: '李金禾',
    englishName: 'Li Jinhe',
    category: 'Master Students',
    researchGroup: 'Design Group',
    position: 'Master student in Industrial Design Engineering, 2023',
    avatar: '/avatars/li-jinhe.jpeg',
    email: '22321365@zju.edu.cn',
    englishBio: 'Primary Research Focus: Human-Computer Interaction; Design ；I love painting, beautiful dresses and my cute cute cute cat Yue Bao.',
    achievements: 'Shihua Shijie: Winner of the First Prize at the 2025 "Beautiful China" Innovative Design Competition'
  },
  {
    id: 'liu-haoxuan',
    name: '刘浩轩',
    englishName: 'Liu Haoxuan',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Design Studies, 2023',
    avatar: '/avatars/liu-haoxuan.jpeg',
    email: 'liuhaoxuan@zju.edu.cn',
    englishBio: 'Master\'s candidate in Design at NEXT Lab, Zhejiang University, with a background in computer science and design thinking abilities; focuses on theoretical and applied research of AI-generated music, exploring new paradigms of technology-driven music generation, interaction, and emotional expression.'
  },
  {
    id: 'hou-liang',
    name: '侯亮',
    englishName: 'Hou Liang',
    category: 'Master Students',
    researchGroup: 'Design Group',
    position: 'Master student in Industrial Design Engineering, 2023',
    avatar: '/avatars/hou-liang.png',
    email: 'lianghou@zju.edu.cn',
    englishBio: 'My name is Hou Liang. My research interests focus on the development and application of design thinking tools, as well as the innovative integration of XR and AI technologies in human-computer interaction. I am dedicated to exploring new product forms and interaction experiences by combining design, technology, and social needs through an interdisciplinary approach.',
    achievements: 'Design Competition：\n4 Red Dot Design Awards（Germany）\n3 IF Design Awards（Germany）\n2 IDEA Design Awards（USA）\n1 Gold Award in A\'design（Italy）'
  },
  {
    id: 'ren-tianyu',
    name: '任天宇',
    englishName: 'Ren Tianyu',
    category: 'Master Students',
    researchGroup: 'Font Group',
    position: 'Master student in Artificial Intelligence, 2023',
    avatar: '/avatars/ren-tianyu.jpg',
    email: '22360029@zju.edu.cn',
    englishBio: 'Ren Tianyu, College of Engineering, Zhejiang University, Master\'s student of the Class of 2023. Participates in the Ministry of Organization\'s special program for the reform of engineering graduate training. Jointly trained by Zhejiang University and the No. 715 Research Institute of China State Shipbuilding Corporation. The main research focus is on passive sonar target recognition and tracking methods based on deep learning.',
    achievements: 'A Chinese character stroke extraction method and device based on ControlNet. Zhang K, Chen Z, Ren T, Yin Y, Shen L, Wang B, Shen X. CN202410125336.4 [P]. 2024.06'
  },
  {
    id: 'wang-jiaming',
    name: '王嘉茗',
    englishName: 'Wang Jiaming',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Artificial Intelligence, 2023',
    avatar: '/avatars/wang-jiaming.jpg',
    email: '22360032@zju.edu.cn',
    englishBio: 'I am a master\'s student under the Reform Program for Engineering Master\'s and Doctoral Students(ZZB). During my first year of graduate study, I worked in the music group of our laboratory. Starting from my second year, I began joint training at the CSSC Zhihai Innovation Research Institute.\nDuring the joint training period, my research focuses on Multi-Agent Reinforcement Learning and Path Planning.\nOutside of research, I enjoy playing badminton and listening to music.',
    achievements: 'Paper\nPopular Hooks: A Multimodal Dataset of Musical Hooks for Music Understanding and Generation, EI, The Second author\nInvention patent\n一种无人水下航行器集群的区域全覆盖路径规划方法, Invention patent(submitted), The Second author\nAwards\n浙江大学五好研究生、优秀研究生'
  },
  {
    id: 'feng-youwei',
    name: '冯佑玮',
    englishName: 'Feng Youwei',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Design Studies, 2024',
    avatar: '/avatars/feng-yuowei.jpg',
    email: 'david88913@gmail.com',
    englishBio: 'I am currently a graduate student at the College of Computer Science, Zhejiang University, and a member of the Music Group at NEXTLab.\nMy research interests focus on the intersection of AI music generation, XR/AR creative interaction design, and practical DAW (Digital Audio Workstation) music editing, with the aim of applying cutting-edge large models to real-world scenarios in education, artistic creation, and immersive experiences.',
    achievements: 'Patent\nA Method for Generating Continuous Scene Background Music Integrated with Environmental Perception and Personalized Experience (专利号：202410318748X)\nCompetitions & Awards\nFirst Prize (Provincial Level), China Collegiate Computing Contest — Mobile Application Innovation Contest\nGold Award (Provincial Level), "Internet+" National Innovation and Entrepreneurship Competition — Industry Track & Higher Education Main Track\nGold Award (Provincial Level), "Challenge Cup" National College Students\' Extracurricular Academic Science and Technology Competition — "AI+" Track'
  },
  {
    id: 'liu-huaying',
    name: '刘华瑛',
    englishName: 'Liu Huaying',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Industrial Design Engineering, 2024',
    avatar: '/avatars/liu-huaying.png',
    email: 'liuhuaying9@zju.edu.cn',
    englishBio: 'I am Liu Huaying, a graduate student in Industrial Design Engineering. My research explores intelligent music interaction at the intersection of AI and music, aiming to create warm, technology-driven emotional experiences by integrating design, technology, and user needs.'
  },
  {
    id: 'ren-jingyan',
    name: '任婧妍',
    englishName: 'Ren Jingyan',
    category: 'Master Students',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/ren-jinyan.jpeg',
    email: '1520819540@qq.com',
    englishBio: 'I\'m passionate about photography, travel, and human history, having visited 17 countries so far. Through my lens, I capture fleeting moments, while immersing myself in diverse cultures and historical tales—each journey broadening my perspective.\nI also closely follow AI advancements, fascinated by its transformative potential. In daily life, I love tinkering with product design and research, turning ideas into tangible solutions.\nSeeking collaboration with like-minded individuals—those driven by curiosity and innovation. Let\'s join forces to create something impactful!'
  },
  {
    id: 'jocelyn-jenica-jaya',
    name: 'JOCELYN JENICA JAYA（陈艺真）',
    englishName: 'JOCELYN JENICA JAYA',
    category: 'Master Students',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/chen-yizhen.jpg',
    email: 'jocelynjenica@gmail.com',
    englishBio: 'My name is Jocelyn Jenica Jaya, and I am currently pursuing a Master\'s degree in Design Studies at Zhejiang University (2025–present). I previously earned a Bachelor\'s degree in Computer Science and Technology (2025) at the same university, where I completed my thesis, "Front-end Development of Artificial Intelligence Knowledge Base Based on a Novel Knowledge Management Model". All my courses were taught in Chinese, in which I consistently excelled, demonstrating adaptability and strong academic skills.'
  },
  {
    id: 'li-xiuqi',
    name: '李修齐',
    englishName: 'Li Xiuqi',
    category: 'Master Students',
    researchGroup: 'Design Group',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/li-xiuqi.jpeg',
    email: '3474905764@qq.com',
    englishBio: 'Master\'s student in Design, Class of 2025. Focused on AI design and user experience design. Have participated in multiple AI product projects at the lab. Passionate about art, constantly exploring the possibilities of combining technology and art.',
    achievements: '"Zhi Nong" Smart agriculture APP\n"Yi Zi Yi Yin"'
  },
  {
    id: 'chen-longxuan',
    name: '陈龙轩',
    englishName: 'Chen Longxuan',
    category: 'Master Students',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/chen-longxuan.jpeg',
    email: 'chen_lx@zju.edu.cn',
    englishBio: 'Master\'s student in Design Studies (Class of 2025), Zhejiang University.\nHe earned his bachelor\'s degree in Industrial Design from the College of Computer Science and Technology at Zhejiang University. During his undergraduate studies, he gained extensive experience in physical product design and interactive experience design. Notably, he contributed as a core member of the "Imprint Asian Games: Intelligent Seal Engraving Exhibition in the Metaverse" project, exploring the integration of AI with traditional Chinese culture.\nHe also served as a volunteer team leader for both the Hangzhou Asian Games and Asian Para Games. After graduation, he served as a full-time student counselor at Zhejiang University for two years, receiving honors such as the "Outstanding Student Affairs Award" and "Top 10 Outstanding Student Club Advisor" from the university.'
  },
  {
    id: 'chen-xiaohui',
    name: '陈晓晖',
    englishName: 'Chen Xiaohui',
    category: 'Master Students',
    researchGroup: 'Design Group',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/chen-xiaohui.jpg',
    email: 'xiaohui_815@zju.edu.cn',
    englishBio: 'Master\'s Student in Design Studies at Zhejiang University (Class of 2025)\nCounselor of the College of Computer Science and Technology, Zhejiang University (2023-2025)\nUndergraduate student majoring in Industrial Design at Zhejiang University, with a Bachelor of Engineering degree (2019-2023)\nI am interested in design thinking education methods and products. I love photography, music and film and television creation. I hope to combine my interests with research to create meaningful design works.'
  },
  {
    id: 'jin-yuhang',
    name: '金宇航',
    englishName: 'Jin Yuhang',
    category: 'Master Students',
    researchGroup: 'Design Group',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/jin-yuhang.jpeg',
    email: '22521334@zju.edu.cn',
    englishBio: 'Yuhang Jin is a Master\'s student in Design whose research centers on AIGC media creation and AI music generation. She has authored three academic publications on AI-generated music and one on AIGC media creation. Her achievements have been recognized with top honors, including the National Scholarship, the Provincial Government Scholarship, and the Zhejiang University First-Class Scholarship. In addition to her research, she has been honored as an Outstanding Student Leader and a Hangzhou Asian Games Star Volunteer. She has also led and participated in multiple AIGC media creation projects, collaborating with CCTV, the Ministry of Education, and the university\'s Publicity Department.',
    achievements: '发表论文\nInkFlow——基于影视语言知识增强的诗词AI短视频信息设计+《装饰》+2025+第一作者\nAl-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy + IJCAI (CCF-A) + 2025 + 第三作者\nMulti-Accent Mandarin Dry-Vocal Singing Dataset: Benchmark for Singing Accent Recognition + ACMMM (CCF-A) + 2025 + 第四作者\nGenerative Music Models Alignment with Professional and Amateur Users\' Expectations +ACL 2025 Findings (CCF-A非正式) + 2025 + 第五作者\n获奖作品\n诗画视界——AIGC驱动的诗生视频交互系统 + 美丽中国研究生创新实践大赛一等奖 + 2025 + 第二作者'
  },
  {
    id: 'chen-xueyang',
    name: '陈雪阳',
    englishName: 'Chen Xueyang',
    category: 'Master Students',
    researchGroup: 'Font Group',
    position: 'Master student in Computer Technology, 2025',
    avatar: '/avatars/chen-xueyang.jpg',
    email: 'chenxueyang@zju.edu.cn',
    englishBio: 'Artificial Intelligence Bachelor\'s degree, Class of 2025 Master\'s student in Computer Technology. Proficient in multiple programming languages and PyTorch framework, with interdisciplinary background in cognitive neuroscience. Primary research focus on high-quality, stylized image generation, with keen interest in cutting-edge developments in diffusion models, large language models, and multimodal AI. Passionate about art and design, eager to collaborate with lab members in advancing frontier research that brings happiness.'
  },
  {
    id: 'lu-xinye',
    name: '陆心烨',
    englishName: 'Lu Xinye',
    category: 'Master Students',
    position: 'Master student, 2026',
    avatar: '/avatars/lu-xinye.jpg',
    email: 'luxinye@zju.edu.cn',
    englishBio: 'Xinye Lu is a senior undergraduate student who will pursue a Master\'s degree in Electronic Information starting in 2026. Her work focuses on AI-based image restoration and music information retrieval, with a strong interest in intelligent systems bridging culture and technology.'
  },
  {
    id: 'yuan-xinyue',
    name: '袁心悦',
    englishName: 'Yuan Xinyue',
    category: 'Master Students',
    position: 'Master student, 2026',
    avatar: '/avatars/yuan-xinyue.png',
    email: '3220103678@zju.edu.cn',
    englishBio: 'Xinyue Yuan is an undergraduate student majoring in Industrial Design (Expected 2026). Passionate about the application of AI in creative fields, with hands-on experience in an AIGC short video generation project. As a recipient of the Provincial Scholarship, I am eager to explore how technology can empower design and create innovative user experiences.'
  },

  // Undergraduates
  {
    id: 'chen-yizhao',
    name: '陈一兆',
    englishName: 'Chen Yizhao',
    category: 'Undergraduates',
    position: 'Undergraduate in Computer Science and Technology, 2023',
    avatar: '/avatars/chen-yizhao.jpg',
    email: 'chen_yz@zju.edu.cn',
    englishBio: 'I am Chen Yizhao, an undergraduate student in the 2023 Mixed Class, majoring in Computer Science. My research interests center on AI-assisted music composition, with a particular focus on game music design and developing DAWs enhanced with AI assistants.\nI have received Third-Class University Scholarship (2023–2024), Outstanding Student Award for Academic Excellence (2023–2024), and First Prize in the 23rd Zhejiang University Undergraduate Mathematical Modeling Competition.',
    achievements: 'Currently, I am involved in a research project on AI-Powered Multifunctional Assistants for University Teaching, which aims to alleviate the burden of repetitive daily tasks and enhance teaching efficiency.'
  },
  {
    id: 'ma-boyang',
    name: '马博洋',
    englishName: 'Ma Boyang',
    category: 'Undergraduates',
    position: 'Undergraduate in Computer Science and Technology, 2023',
    avatar: '/avatars/ma-boyang.jpeg',
    email: '1004483997@qq.com',
    englishBio: 'Ma Boyang, a junior AI major with a focus on AI-driven music design. Currently developing music visualization systems in the lab',
    achievements: 'Music Visualization Project'
  },
  // Alumni
  {
    id: 'chen-mingwei',
    name: '陈铭威',
    englishName: 'Chen Mingwei',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'shen-lvkecheng',
    name: '沈吕可晟',
    englishName: 'Shen Lvkecheng',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-qiyuan',
    name: '张启元',
    englishName: 'Zhang Qiyuan',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'huang-ouying',
    name: '黄欧影',
    englishName: 'Huang Ouying',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'duan-xuan',
    name: '段萱',
    englishName: 'Duan Xuan',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'hong-zizhen',
    name: '洪子帧',
    englishName: 'Hong Zizhen',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'feng-yuan',
    name: '冯源',
    englishName: 'Feng Yuan',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'shen-hanshu',
    name: '沈寒暑',
    englishName: 'Shen Hanshu',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'yang-yiheng',
    name: '杨怿恒',
    englishName: 'Yang Yiheng',
    category: 'Alumni',
    position: 'PhD Student, 2021',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wang-jiaqi',
    name: '汪嘉麒',
    englishName: 'Wang Jiaqi',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'jia-zhongyu',
    name: '贾钟毓',
    englishName: 'Jia Zhongyu',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'lin-han',
    name: '林瀚',
    englishName: 'Lin Han',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'cai-shixuan',
    name: '蔡世轩',
    englishName: 'Cai Shixuan',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-zewen',
    name: '陈泽文',
    englishName: 'Chen Zewen',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-xiaoran',
    name: '张晓然',
    englishName: 'Zhang Xiaoran',
    category: 'Alumni',
    position: 'PhD Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'huang-qiaoqiao',
    name: '黄巧巧',
    englishName: 'Huang Qiaoqiao',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-chen',
    name: '章晨',
    englishName: 'Zhang Chen',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-you',
    name: '张悠',
    englishName: 'Zhang You',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'liu-mingyue',
    name: '刘明月',
    englishName: 'Liu Mingyue',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'du-dashuang',
    name: '杜大爽',
    englishName: 'Du Dashuang',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'tang-ruiyuan',
    name: '唐睿源',
    englishName: 'Tang Ruiyuan',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'pang-bo',
    name: '庞勃',
    englishName: 'Pang Bo',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wu-qiuning',
    name: '武秋凝',
    englishName: 'Wu Qiuning',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'lin-liangjie',
    name: '林良杰',
    englishName: 'Lin Liangjie',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-yitong',
    name: '陈异同',
    englishName: 'Chen Yitong',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-yukai',
    name: '陈宇剀',
    englishName: 'Chen Yukai',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wu-xinda',
    name: '吴鑫达',
    englishName: 'Wu Xinda',
    category: 'Alumni',
    position: 'PhD Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'yin-yehang',
    name: '殷叶航',
    englishName: 'Yin Yehang',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wu-runfan',
    name: '吴润凡',
    englishName: 'Wu Runfan',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-xinyi',
    name: '陈欣宜',
    englishName: 'Chen Xinyi',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-dan',
    name: '陈丹',
    englishName: 'Chen Dan',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'li-yifei',
    name: '李一非',
    englishName: 'Li Yifei',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-mingzhen',
    name: '陈明真',
    englishName: 'Chen Mingzhen',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'meng-xiao',
    name: '孟晓',
    englishName: 'Meng Xiao',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wu-yonglin',
    name: '吴泳林',
    englishName: 'Wu Yonglin',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhao-yanji',
    name: '赵延吉',
    englishName: 'Zhao Yanji',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'li-yu',
    name: '李豫',
    englishName: 'Li Yu',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhu-xujing',
    name: '朱许静',
    englishName: 'Zhu Xujing',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'liao-yichen',
    name: '廖艺琛',
    englishName: 'Liao Yichen',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'chen-qihang',
    name: '陈其航',
    englishName: 'Chen Qihang',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-rui',
    name: '张瑞',
    englishName: 'Zhang Rui',
    category: 'Alumni',
    position: 'PhD Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'ye-yuqing',
    name: '叶雨晴',
    englishName: 'Ye Yuqing',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhu-kaili',
    name: '朱凯丽',
    englishName: 'Zhu Kaili',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wang-haoyang',
    name: '王昊阳',
    englishName: 'Wang Haoyang',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'fang-yujun',
    name: '方雨君',
    englishName: 'Fang Yujun',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'jiang-hanyun',
    name: '蒋菡韵',
    englishName: 'Jiang Hanyun',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'jing-li',
    name: '景丽',
    englishName: 'Jing Li',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'duan-ke',
    name: '段轲',
    englishName: 'Duan Ke',
    category: 'Alumni',
    position: 'Master Student, 2017',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'huang-xiaoyi',
    name: '黄小倚',
    englishName: 'Huang Xiaoyi',
    category: 'Alumni',
    position: 'Master Student, 2017',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zheng-ran',
    name: '郑然',
    englishName: 'Zheng Ran',
    category: 'Alumni',
    position: 'Master Student, 2017',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-hui',
    name: '张卉',
    englishName: 'Zhang Hui',
    category: 'Alumni',
    position: 'PhD Student, 2016',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'huang-lumin',
    name: '黄璐敏',
    englishName: 'Huang Lumin',
    category: 'Alumni',
    position: 'Master Student, 2016',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'jin-mengqi',
    name: '金梦奇',
    englishName: 'Jin Mengqi',
    category: 'Alumni',
    position: 'Master Student, 2016',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'li-simeng',
    name: '李思蒙',
    englishName: 'Li Simeng',
    category: 'Alumni',
    position: 'Master Student, 2016',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhang-xiaobin',
    name: '张晓彬',
    englishName: 'Zhang Xiaobin',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhu-qi',
    name: '朱琦',
    englishName: 'Zhu Qi',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'zhu-bin',
    name: '朱斌',
    englishName: 'Zhu Bin',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wang-shuyi',
    name: '王淑怡',
    englishName: 'Wang Shuyi',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'fu-jiaqi',
    name: '傅佳琪',
    englishName: 'Fu Jiaqi',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'kevin-wolterink',
    name: 'Kevin Wolterink',
    englishName: 'Kevin Wolterink',
    category: 'Alumni',
    position: 'Master Student, 2014',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'gao-junying',
    name: '高俊颖',
    englishName: 'Gao Junying',
    category: 'Alumni',
    position: 'Master Student, 2014',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'gao-minquan',
    name: '高民权',
    englishName: 'Gao Minquan',
    category: 'Alumni',
    position: 'Master Student, 2014',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  },
  {
    id: 'wang-jiaxi',
    name: '汪佳希',
    englishName: 'Wang Jiaxi',
    category: 'Alumni',
    position: 'Master Student, 2011',
    avatar: '/avatars/avatar-placeholder.png',
    email: ''
  }
];

export const getTeamMembersByCategory = (category: TeamMember['category']) => {
  return teamMembers.filter(member => member.category === category);
};

export const getTeamMemberById = (id: string) => {
  return teamMembers.find(member => member.id === id);
};