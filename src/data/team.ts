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
  publications?: string;
  projects?: string;
  researchDirection?: string;
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
    category: 'Alumni',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/teng-jiajie.jpg',
    email: '',
    englishBio: ''
  },
  {
    id: 'qiao-xianyue',
    name: '乔显越',
    englishName: 'Qiao Xianyue',
    category: 'Alumni',
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
    avatar: '/avatars/chen-pei.png',
    email: '',
    englishBio: ''
  },
  {
    id: 'zhang-hongbo',
    name: '张洪博',
    englishName: 'Zhang Hongbo',
    category: 'Researchers',
    position: 'Postdoctoral Researcher',
    avatar: '/avatars/zhang-hongbo.png',
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
    englishName: 'LIU Yuxuan',
    category: 'Staff',
    position: 'Research Assistant',
    avatar: '/avatars/liu-yuxuan.png',
    email: 'liuyuxuan@zju.edu.cn',
    chineseBio: '入职年份：2017\n工作岗位：科研助理\n工作方向：\n1、中国高校计算机大赛—移动应用创新赛\n2、浙江省iOS创新实践联盟\n3、实验室网站维护管理\n4、NEXT Lab行政管理'
  },
  {
    id: 'liang-weiqi',
    name: '梁韦琪',
    englishName: 'LIANG Weiqi',
    category: 'Staff',
    position: 'Teaching Assistant',
    avatar: '/avatars/liang-weiqi.jpg',
    email: 'lwq0922c29@zju.edu.cn',
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
    englishName: 'WU Songruoyao',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Artificial Intelligence, 2022',
    avatar: '/avatars/wu-songruoyao.jpg',
    email: 'wsry@zju.edu.cn',
    englishBio: 'Songruoyao Wu is a Ph.D. candidate in Artificial Intelligence at Zhejiang University, specializing in intelligent-assisted art creation and interactive design. Driven by a passion for bridging technology with humanistic expression, her primary work includes: a music interaction interface based on classical poetry, a melody generation method using tone and stress patterns, an intelligent music composition platform, and a database of traditional Chinese music. She has published multiple papers in relevant conferences and journals, and has received several national awards in design, AI, computing, and innovation competitions.',
    achievements: 'Papers\n1. Poems as Musical Instruments: An AI Music Performance Interface Based on the Concepts of Chinese Qin Songs. (Leonardo, accepted on 2025-02-19)\n2. Redefining Design Competence: A Framework for Equipping Product Designers in the Generative AI Era. (The Design Journal, 2025)\n3. SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training. (AAAI, 2025)\n4. Suno: Potential, Prospects, and Trends. (FITEE, 2024)\n5. ReLyMe: Improving Lyric-to-Melody Generation by Incorporating Lyric-Melody Relationships. (ACMMM, 2022)\n6. Mind Band: A Cross-Media AI Music Composing Platform. (ACMMM, 2019)\n\nAwards\n1. Poem Qin: Mental Healing App. (A\' Design Award, 2025)\n2. InkFrames: An AIGC Poem-to-Video Creation System. (First Prize of "Beautiful China" Innovative Design Competition for Graduate Students, 2025)\n3. Poem-Qin: AI Music Playing and Singing System Based on Chinese Ancient Poetry. (Silver Award of National College Students\' Industrial Design Competition, 2024)\n4. AlProducer: Short Video Generation Platform. (First Prize of China Postgraduate Artificial Intelligence Innovation Competition, 2020)\n5. Art Easiest: A Cross-Media Generation Platform for Audio-Visual Integration. (Silver Award of China College Students\' \'Internet+\' Innovation and Entrepreneurship Competition, 2019)\n6. Mind Band: A Cross-Media AI Music Composing Platform. (Gold Award of China College Students\' \'Internet+\' Innovation and Entrepreneurship Competition, 2018)\n7. Mind Band. (The Most Innovative Award of China Collegiate Computing Contest Mobile Application Innovation Contest, 2018)'
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
    achievements: 'Papers:\nSinging Timbre Popularity Assessment Based on Multimodal Large Foundation Model + ACMMM (CCF-A) + 2025 + first author\nAl-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy + IJCAI (CCF-A) + 2025 + first author\nMulti-Accent Mandarin Dry-Vocal Singing Dataset: Benchmark for Singing Accent Recognition + ACMMM (CCF-A) + 2025 + first author\nGenerative Music Models Alignment with Professional and Amateur Users\' Expectations +ACL 2025 Findings (CCF-A informal) + 2025 + first author\nMuChin: A Chinese Colloquial Description Benchmark for Evaluating Language Models in the Field of Music + IJCAI (CCF-A) + 2024 + first author\nREMAST: Real-Time Emotion-Based Music Arrangement With Soft Transition + IEEE Transactions on Affective Computing (The Top in the First Zone of the Chinese Academy of Science) + 2023 + first author\nSongDriver: Real-time Music Accompaniment Generation without Logical Latency nor Exposure Bias + ACMMM (CCF-A) + 2022 + first author\n\nAwards:\nOutstanding Graduate Student, Five-Good Graduate Student, Outstanding Student Leader, Outstanding League Member of Zhejiang University 2022-2025\nBaosteel Outstanding Student Scholarship (Top 0.1% Nationwide) + 2020\nNational Bronze Award of "Challenge Cup" China College Students\' Business Plan Competition + 2020 + Team Leader\nNational Silver Award of China International "Internet Plus" Innovation and Entrepreneurship Competition + 2019 + Team Leader\n"Top Ten Figures of the Year" of Shandong University + 2019\n"President\'s Scholarship" of Shandong University + 2020'
  },
  {
    id: 'shen-xinyi',
    name: '沈心逸',
    englishName: 'SHEN Xinyi',
    category: 'PhD Students',
    researchGroup: 'Font Group',
    position: 'PhD student in Computer Science and Technology, 2021',
    avatar: '/avatars/shen-xinyi.jpeg',
    email: 'shenxinyi@zju.edu.cn',
    englishBio: 'Researcher specializing in Computer Vision and Machine Learning, with a focus on Intelligent Font Generation, Multimodal AI, and Artificial Intelligence for Digital Art. Combines deep theoretical knowledge in core AI disciplines with strong practical engineering skills. Proficient in iOS development, demonstrated by the award-winning app Seal Create which received the Most Innovative Award at the Mobile Application Innovation Competition. Actively explores the intersection of cutting-edge AI research and creative digital expression.',
    achievements: 'Paper\n- An intelligent font generation system based on stroke inference, mitigating production labor and enhancing design experience (ESWA).\n\nPatents\n- A Method and Device for Generating Chinese Fonts Based on Stable Diffusion.\n- A Method and Device for Layered Printing of Chinese Ink Paintings Based on Artificial Intelligence.'
  },
  {
    id: 'zhong-chongjun',
    name: '仲崇珺',
    englishName: 'ZHONG Chongjun',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2021',
    avatar: '/avatars/zhong-chongjun.jpg',
    email: 'zhong_chongjun@zju.edu.cn',
    englishBio: 'I am currently a PhD candidate in Design Science at Zhejiang University, where I also earned my Bachelor\'s degree in the same field. My research focuses on human-computer interaction, digital art, and human-AI co-creation.\nBeyond my academic pursuits, I am passionate about singing and painting, and I have over ten years of professional dance training. I have twice won the First Prize in the East China Division of the China Collegiate Computing Competition – Mobile Application Innovation Contest, as well as a National Second Prize. In addition, I have received several design awards, including the A\' Design Award and the K Design Award.'
  },
  {
    id: 'yang-yiheng',
    name: '杨怿恒',
    englishName: 'YANG Yiheng',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2021',
    avatar: '/avatars/yang-yiheng.jpeg',
    email: ''
  },
  {
    id: 'yu-jiaxing',
    name: '俞佳兴',
    englishName: 'YU Jiaxing',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Design Studies, 2022',
    avatar: '/avatars/yu-jiaxing.jpg',
    email: 'yujx@zju.edu.cn',
    englishBio: 'Jiaxing Yu is a Ph.D. candidate in Design at Zhejiang University, specializing in music understanding, generation, and interaction, as well as emotional and spatial computing. His primary research focuses on the intersection of music and technology, aiming to enhance user experiences through intelligent music systems. He has published multiple high-impact papers in top international conferences and journals and has served as a reviewer for leading conferences and journals in the field. He has also received numerous national-level awards in design, computing, and innovation competitions.',
    achievements: 'Papers:\n[1] SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training. (AAAI, 2025)\n[2] Poems as Musical Instruments: an AI Music Performance Interface Based on the Concepts of Chinese Qin Songs. (Leonardo, accepted on 2025)\n[3] Generative Music Models Alignment with Professional and Amateur Users\' Expectations. (ACL Findings, 2025)\n[4] A Multimodal Interactive System for Autobiographical Memory: AI-Assisted Reflection and Expression. (CCAC, 2025)\n[5] Suno: potential, prospects, and trends. (FITEE, 2024)\n[6] Popular Hooks: A Multimodal Dataset of Musical Hooks for Music Understanding and Generation. (IEEE ICMEW, 2024)\n[7] Pdaugment: Data augmentation by pitch and duration adjustments for automatic lyrics transcription. (ISMIR, 2021)\n\nAwards:\n[1] Architone - Music Learning App. (A\' Design Award, 2025)\n[2] Poem Qin - Mental Healing App. (A\' Design Award, 2025)\n[3] Art Easiest: A Cross-Media Generation Platform for Audio-Visual Integration. (Silver Award of China College Students\' \'Internet+\' Innovation and Entrepreneurship Competition, 2019)\n[4] Art Easiest: A Cross-Media Generation Platform for Audio-Visual Integration. (The Most Innovative Award of China Collegiate Computing Contest Mobile Application Innovation Contest, 2019)\n[5] WWDC Scholarship, 2019'
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
    englishName: 'WANG Xinran',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Computer Technology, 2026',
    avatar: '/avatars/wang-xinran.jpg',
    email: 'wang_xr@zju.edu.cn',
    englishBio: 'Xinran Wang is an undergraduate student in Computer Science and Technology at Zhejiang University. Starting in 2026, she will pursue a Ph.D. in Electronic Information Engineering under a joint training program with Huawei, focusing on the intersection of artificial intelligence and music.'
  },
  {
    id: 'shao-muchuan',
    name: '邵牧川',
    englishName: 'SHAO Muchuan',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Computer Science and Technology, 2026',
    avatar: '/avatars/shao-muchuan.jpg',
    email: 'shaomuchuan@hotmail.com',
    englishBio: 'Muchuan Shao is currently an undergraduate student majoring in artificial intelligence, expected to start pursuing a Ph.D. in Computer Science and Technology from 2026. He is motivated to study multi-modal, generative A.I. with strong interests in art and multimedia.',
    achievements: '/'
  },
  {
    id: 'zhu-xiandi',
    name: '祝显堤',
    englishName: 'ZHU Xiandi',
    category: 'PhD Students',
    researchGroup: 'Music Group',
    position: 'PhD student in Computer Technology, 2026',
    avatar: '/avatars/zhu-xiandi.png',
    email: 'rju84034@gmail.com',
    englishBio: 'Xiandi Zhu is a senior undergraduate student who will pursue a Ph.D. at Zhejiang University, starting in 2026. His recent research is centered at the intersection of music, artificial intelligence, and human-computer interaction.\nResearch Interests: Multimodal Music, Explainable AI (XAI) for Music, Music Generation; Human-Computer Interaction, Affective Computing, Embodied Intelligence, VR and Player Experience Design.\nHis technical work is complemented by his deep engagement with music and language. He holds a JLPT N2 certification with a year of translation experience and has a keen interest in linguistics, particularly Chomskyan theory. He is also a practicing keyboardist, with ongoing studies in music theory, harmony, and formal analysis.',
    achievements: 'Papers:\nZeitgebers-Based User Experience Analysis and Time Perception Modeling via Transformer in VR, ISMAR, 2025.'
  },
  {
    id: 'qian-kaihang',
    name: '钱恺行',
    englishName: 'QIAN Kaihang',
    category: 'PhD Students',
    researchGroup: 'Design Group',
    position: 'PhD student in Design Studies, 2026',
    avatar: '/avatars/qian-kaihang.jpg',
    email: '3220102943@zju.edu.cn',
    englishBio: 'Qian Kaihang is a senior undergraduate student majoring in industrial design and will start pursuing a doctoral degree in design in 2026. He has a strong interest in art and multimedia and hopes to explore the feasibility of applying generative artificial intelligence to the field of design.'
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
    achievements: 'Shihua Shijie: Winner of the First Prize at the 2025 "Beautiful China" Innovative Design Competition.'
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
    achievements: 'Design Competition:\n4 Red Dot Design Awards (Germany)\n3 IF Design Awards (Germany)\n2 IDEA Design Awards (USA)\n1 Gold Award in A\'design (Italy).'
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
    achievements: 'A Chinese character stroke extraction method and device based on ControlNet. Zhang K, Chen Z, Ren T, Yin Y, Shen L, Wang B, Shen X. CN202410125336.4 [P]. 2024.06.'
  },
  {
    id: 'wang-jiaming',
    name: '王嘉茗',
    englishName: 'WANG Jiaming',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Artificial Intelligence, 2023',
    avatar: '/avatars/wang-jiaming.jpg',
    email: '22360032@zju.edu.cn',
    englishBio: 'I am a master\'s student under the Reform Program for Engineering Master\'s and Doctoral Students(ZZB). During my first year of graduate study, I worked in the music group of our laboratory. Starting from my second year, I began joint training at the CSSC Zhihai Innovation Research Institute.\nDuring the joint training period, my research focuses on Multi-Agent Reinforcement Learning and Path Planning.\nOutside of research, I enjoy playing badminton and listening to music.',
    achievements: 'Paper\nPopular Hooks: A Multimodal Dataset of Musical Hooks for Music Understanding and Generation, EI, The Second author.\nInvention patent\nA regional full coverage path planning method for unmanned underwater vehicle clusters, Invention patent (submitted), The Second author.\nAwards\nOutstanding Graduate Student, Five-Good Graduate Student of Zhejiang University.'
  },
  {
    id: 'feng-youwei',
    name: '冯佑玮',
    englishName: 'FENG Yu Wei',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Design Studies, 2024',
    avatar: '/avatars/feng-yuowei.jpg',
    email: 'david88913@gmail.com',
    englishBio: 'I am currently a graduate student at the College of Computer Science, Zhejiang University, and a member of the Music Group at NEXTLab.\nMy research interests focus on the intersection of AI music generation, XR/AR creative interaction design, and practical DAW (Digital Audio Workstation) music editing, with the aim of applying cutting-edge large models to real-world scenarios in education, artistic creation, and immersive experiences.',
    achievements: 'Patent\nA Method for Generating Continuous Scene Background Music Integrated with Environmental Perception and Personalized Experience (Patent No.: 202410318748X).\nCompetitions & Awards\nFirst Prize (Provincial Level), China Collegiate Computing Contest — Mobile Application Innovation Contest.\nGold Award (Provincial Level), "Internet+" National Innovation and Entrepreneurship Competition — Industry Track & Higher Education Main Track.\nGold Award (Provincial Level), "Challenge Cup" National College Students\' Extracurricular Academic Science and Technology Competition — "AI+" Track.'
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
    englishName: 'REN Jingyan',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Design Studies, 2025',
    avatar: '/avatars/ren-jinyan.jpeg',
    email: '1520819540@qq.com',
    englishBio: 'I\'m passionate about photography, travel, and human history, having visited 17 countries so far. Through my lens, I capture fleeting moments, while immersing myself in diverse cultures and historical tales—each journey broadening my perspective.\nI also closely follow AI advancements, fascinated by its transformative potential. In daily life, I love tinkering with product design and research, turning ideas into tangible solutions.\nSeeking collaboration with like-minded individuals—those driven by curiosity and innovation. Let\'s join forces to create something impactful!'
  },
  {
    id: 'jocelyn-jenica-jaya',
    name: 'JOCELYN JENICA JAYA（陈艺真）',
    englishName: 'Jocelyn Jenica Jaya',
    category: 'Master Students',
    researchGroup: 'Music Group',
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
    achievements: '"Zhi Nong" Smart agriculture APP.\n"Yi Zi Yi Yin".'
  },
  {
    id: 'chen-longxuan',
    name: '陈龙轩',
    englishName: 'CHEN Longxuan',
    category: 'Master Students',
    researchGroup: 'Design Group',
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
    achievements: 'Published Papers\nInkFlow - AI Short Video Information Design for Poetry Based on Film Language Knowledge Enhancement + Decoration + 2025 + First Author\nAl-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy + IJCAI (CCF-A) + 2025 + Third Author\nMulti-Accent Mandarin Dry-Vocal Singing Dataset: Benchmark for Singing Accent Recognition + ACMMM (CCF-A) + 2025 + Fourth Author\nGenerative Music Models Alignment with Professional and Amateur Users\' Expectations + ACL 2025 Findings (CCF-A informal) + 2025 + Fifth Author\nAward-Winning Works\nShihua Shijie - AIGC-Driven Poetry-to-Video Interactive System + First Prize of "Beautiful China" Graduate Innovation Practice Competition + 2025 + Second Author.'
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
    englishName: 'LU Xinye',
    category: 'Master Students',
    researchGroup: 'Music Group',
    position: 'Master student in Computer Technology, 2026',
    avatar: '/avatars/lu-xinye.jpg',
    email: 'luxinye@zju.edu.cn',
    englishBio: 'Xinye Lu is a senior undergraduate student who will pursue a Master\'s degree in Electronic Information starting in 2026. Her work focuses on AI-based image restoration and music information retrieval, with a strong interest in intelligent systems bridging culture and technology.'
  },
  {
    id: 'yuan-xinyue',
    name: '袁心悦',
    englishName: 'YUAN Xinyue',
    category: 'Master Students',
    researchGroup: 'Design Group',
    position: 'Master student in Industrial Design Engineering, 2026',
    avatar: '/avatars/yuan-xinyue.png',
    email: 'xinyueyuan@zju.edu.cn',
    englishBio: 'Set to begin her Master\'s in Industrial Design Engineering in Fall 2026, Xinyue Yuan focuses on the application of AI in creative fields. A Provincial Scholarship recipient, she has gained hands-on experience through an AIGC short video generation project and is eager to contribute to creating innovative, technology-empowered user experiences.'
  },

  // Undergraduates
  {
    id: 'chen-yizhao',
    name: '陈一兆',
    englishName: 'CHEN Yizhao',
    category: 'Undergraduates',
    position: 'Undergraduate in Computer Science and Technology, 2023',
    avatar: '/avatars/chen-yizhao.jpg',
    email: 'chen_yz@zju.edu.cn',
    englishBio: 'I am Chen Yizhao, an undergraduate student in the 2023 Mixed Class, majoring in Computer Science. My research interests center on AI-assisted music composition, with a particular focus on game music design and developing DAWs enhanced with AI assistants.\nI have received Third-Class University Scholarship (2023–2024), Outstanding Student Award for Academic Excellence (2023–2024), and First Prize in the 23rd Zhejiang University Undergraduate Mathematical Modeling Competition.',
    achievements: 'AI-assisted music composition, game music design, and DAW development with AI assistants',
    researchDirection: 'Currently, I am involved in a research project on AI-Powered Multifunctional Assistants for University Teaching, which aims to alleviate the burden of repetitive daily tasks and enhance teaching efficiency.'
  },
  {
    id: 'ma-boyang',
    name: '马博洋',
    englishName: 'MA Boyang',
    category: 'Undergraduates',
    position: 'Undergraduate in Computer Science and Technology, 2023',
    avatar: '/avatars/ma-boyang.jpeg',
    email: '1004483997@qq.com',
    englishBio: 'Ma Boyang, a junior AI major with a focus on AI-driven music design. Currently developing music visualization systems in the lab.',
    achievements: 'AI-driven music design and music visualization systems.',
    researchDirection: 'Music Visualization Project'
  },
  // Alumni
  {
    id: 'chen-mingwei',
    name: '陈铭威',
    englishName: 'CHEN Mingwei',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/chen-mingwei.jpg',
    email: ''
  },
  {
    id: 'shen-lvkecheng',
    name: '沈吕可晟',
    englishName: 'SHEN Lvkecheng',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/shen-lvkecheng.jpg',
    email: ''
  },
  {
    id: 'zhang-qiyuan',
    name: '张启元',
    englishName: 'ZHANG Qiyuan',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/zhang-qiyuan.png',
    email: ''
  },
  {
    id: 'huang-ouying',
    name: '黄欧影',
    englishName: 'HUANG Ouying',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/huang-ouying.jpg',
    email: ''
  },
  {
    id: 'duan-xuan',
    name: '段萱',
    englishName: 'DUAN Xuan',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/duan-xuan.jpg',
    email: ''
  },
  {
    id: 'hong-zizhen',
    name: '洪子帧',
    englishName: 'HONG Zizhen',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/hong-zizhen.jpeg',
    email: ''
  },
  {
    id: 'feng-yuan',
    name: '冯源',
    englishName: 'FENG Yuan',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/feng-yuan.jpeg',
    email: ''
  },
  {
    id: 'shen-hanshu',
    name: '沈寒暑',
    englishName: 'SHEN Hanshu',
    category: 'Alumni',
    position: 'Master Student, 2022',
    avatar: '/avatars/shen-hanshu.jpg',
    email: ''
  },
  {
    id: 'wang-jiaqi',
    name: '汪嘉麒',
    englishName: 'WANG Jiaqi',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/wang-jiaqi.png',
    email: ''
  },
  {
    id: 'jia-zhongyu',
    name: '贾钟毓',
    englishName: 'JIA Zhongyu',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/jia-zhongyu.jpg',
    email: ''
  },
  {
    id: 'lin-han',
    name: '林瀚',
    englishName: 'LIN Han',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/lin-han.jpeg',
    email: ''
  },
  {
    id: 'cai-shixuan',
    name: '蔡世轩',
    englishName: 'CAI Shixuan',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/cai-shixuan.png',
    email: ''
  },
  {
    id: 'chen-zewen',
    name: '陈泽文',
    englishName: 'CHEN Zewen',
    category: 'Alumni',
    position: 'Master Student, 2021',
    avatar: '/avatars/chen-zewen.jpeg',
    email: ''
  },
  {
    id: 'zhang-xiaoran',
    name: '张晓然',
    englishName: 'ZHANG Xiaoran',
    category: 'Alumni',
    position: 'PhD Student, 2020',
    avatar: '/avatars/zhang-xiaoran.jpeg',
    email: ''
  },
  {
    id: 'huang-qiaoqiao',
    name: '黄巧巧',
    englishName: 'HUANG Qiaoqiao',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/huang-qiaoqiao.jpg',
    email: ''
  },
  {
    id: 'zhang-chen',
    name: '章晨',
    englishName: 'ZHANG Chen',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/zhang-chen.jpg',
    email: ''
  },
  {
    id: 'zhang-you',
    name: '张悠',
    englishName: 'ZHANG You',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/zhang-you.jpg',
    email: ''
  },
  {
    id: 'liu-mingyue',
    name: '刘明月',
    englishName: 'LIU Mingyue',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/liu-mingyue.jpg',
    email: ''
  },
  {
    id: 'du-dashuang',
    name: '杜大爽',
    englishName: 'DU Dashuang',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/du-dashuang.jpg',
    email: ''
  },
  {
    id: 'tang-ruiyuan',
    name: '唐睿源',
    englishName: 'TANG Ruiyuan',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/tang-ruiyuan.jpg',
    email: ''
  },
  {
    id: 'pang-bo',
    name: '庞勃',
    englishName: 'PANG Bo',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/pang-bo.jpg',
    email: ''
  },
  {
    id: 'wu-qiuning',
    name: '武秋凝',
    englishName: 'WU Qiuning',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/wu-qiuning.jpg',
    email: ''
  },
  {
    id: 'lin-liangjie',
    name: '林良杰',
    englishName: 'LIN Liangjie',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/lin-liangjie.jpeg',
    email: ''
  },
  {
    id: 'chen-yitong',
    name: '陈异同',
    englishName: 'CHEN Yitong',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/chen-yitong.jpg',
    email: ''
  },
  {
    id: 'chen-yukai',
    name: '陈宇剀',
    englishName: 'CHEN Yukai',
    category: 'Alumni',
    position: 'Master Student, 2020',
    avatar: '/avatars/chen-yukai.jpg',
    email: ''
  },
  {
    id: 'wu-xinda',
    name: '吴鑫达',
    englishName: 'WU Xinda',
    category: 'Alumni',
    position: 'PhD Student, 2019',
    avatar: '/avatars/wu-xinda.jpg',
    email: ''
  },
  {
    id: 'yin-yehang',
    name: '殷叶航',
    englishName: 'YIN Yehang',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/yin-yehang.jpg',
    email: ''
  },
  {
    id: 'wu-runfan',
    name: '吴润凡',
    englishName: 'WU Runfan',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/wu-runfan.jpg',
    email: ''
  },
  {
    id: 'chen-xinyi',
    name: '陈欣宜',
    englishName: 'CHEN Xinyi',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/chen-xinyi.JPG',
    email: ''
  },
  {
    id: 'chen-dan',
    name: '陈丹',
    englishName: 'CHEN Dan',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/chen-dan.jpg',
    email: ''
  },
  {
    id: 'li-yifei',
    name: '李一非',
    englishName: 'LI Yifei',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/li-yifei.jpg',
    email: ''
  },
  {
    id: 'chen-mingzhen',
    name: '陈明真',
    englishName: 'CHEN Mingzhen',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/chen-mingzhen.jpg',
    email: ''
  },
  {
    id: 'meng-xiao',
    name: '孟晓',
    englishName: 'MENG Xiao',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/meng-xiao.jpg',
    email: ''
  },
  {
    id: 'wu-yonglin',
    name: '吴泳林',
    englishName: 'WU Yonglin',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/wu-yonglin.jpg',
    email: ''
  },
  {
    id: 'zhao-yanji',
    name: '赵延吉',
    englishName: 'ZHAO Yanji',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/zhao-yanji.jpg',
    email: ''
  },
  {
    id: 'li-yu',
    name: '李豫',
    englishName: 'LI Yu',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/li-yu.jpg',
    email: ''
  },
  {
    id: 'zhu-xujing',
    name: '朱许静',
    englishName: 'ZHU Xujing',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/zhu-xujing.jpg',
    email: ''
  },
  {
    id: 'liao-yichen',
    name: '廖艺琛',
    englishName: 'LIAO Yichen',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/liao-yichen.jpg',
    email: ''
  },
  {
    id: 'chen-qihang',
    name: '陈其航',
    englishName: 'CHEN Qihang',
    category: 'Alumni',
    position: 'Master Student, 2019',
    avatar: '/avatars/chen-qihang.jpg',
    email: ''
  },
  {
    id: 'zhang-rui',
    name: '张瑞',
    englishName: 'ZHANG Rui',
    category: 'Alumni',
    position: 'PhD Student, 2018',
    avatar: '/avatars/zhang-rui.jpg',
    email: ''
  },
  {
    id: 'ye-yuqing',
    name: '叶雨晴',
    englishName: 'YE Yuqing',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/ye-yuqing.JPG',
    email: ''
  },
  {
    id: 'zhu-kaili',
    name: '朱凯丽',
    englishName: 'ZHU Kaili',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/zhu-kaili.jpg',
    email: ''
  },
  {
    id: 'wang-haoyang',
    name: '王昊阳',
    englishName: 'WANG Haoyang',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/wang-haoyang.jpg',
    email: ''
  },
  {
    id: 'fang-yujun',
    name: '方雨君',
    englishName: 'FANG Yujun',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/fang-yujun.png',
    email: ''
  },
  {
    id: 'jiang-hanyun',
    name: '蒋菡韵',
    englishName: 'JIANG Hanyun',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/jiang-hanyun.jpg',
    email: ''
  },
  {
    id: 'jing-li',
    name: '景丽',
    englishName: 'JING Li',
    category: 'Alumni',
    position: 'Master Student, 2018',
    avatar: '/avatars/jing-li.png',
    email: ''
  },
  {
    id: 'duan-ke',
    name: '段轲',
    englishName: 'DUAN Ke',
    category: 'Alumni',
    position: 'Master Student, 2017',
    avatar: '/avatars/duan-ke.jpg',
    email: ''
  },
  {
    id: 'huang-xiaoyi',
    name: '黄小倚',
    englishName: 'HUANG Xiaoyi',
    category: 'Alumni',
    position: 'Master Student, 2017',
    avatar: '/avatars/huang-xiaoyi.jpg',
    email: ''
  },
  {
    id: 'zheng-ran',
    name: '郑然',
    englishName: 'ZHENG Ran',
    category: 'Alumni',
    position: 'Master Student, 2017',
    avatar: '/avatars/zheng-ran.jpg',
    email: ''
  },
  {
    id: 'zhang-hui',
    name: '张卉',
    englishName: 'ZHANG Hui',
    category: 'Alumni',
    position: 'PhD Student, 2016',
    avatar: '/avatars/zhang-hui.jpg',
    email: ''
  },
  {
    id: 'huang-lumin',
    name: '黄璐敏',
    englishName: 'HUANG Lumin',
    category: 'Alumni',
    position: 'Master Student, 2016',
    avatar: '/avatars/huang-lumin.jpg',
    email: ''
  },
  {
    id: 'jin-mengqi',
    name: '金梦奇',
    englishName: 'JIN Mengqi',
    category: 'Alumni',
    position: 'Master Student, 2016',
    avatar: '/avatars/jin-mengqi.jpg',
    email: ''
  },
  {
    id: 'li-simeng',
    name: '李思蒙',
    englishName: 'LI Simeng',
    category: 'Alumni',
    position: 'Master Student, 2016',
    avatar: '/avatars/li-simeng.jpg',
    email: ''
  },
  {
    id: 'zhang-xiaobin',
    name: '张晓彬',
    englishName: 'ZHANG Xiaobin',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/zhang-xiaobin.jpg',
    email: ''
  },
  {
    id: 'zhu-qi',
    name: '朱琦',
    englishName: 'ZHU Qi',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/zhu-qi.png',
    email: ''
  },
  {
    id: 'zhu-bin',
    name: '朱斌',
    englishName: 'ZHU Bin',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/zhu-bin.jpg',
    email: ''
  },
  {
    id: 'wang-shuyi',
    name: '王淑怡',
    englishName: 'WANG Shuyi',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/wang-shuyi.jpg',
    email: ''
  },
  {
    id: 'fu-jiaqi',
    name: '傅佳琪',
    englishName: 'FU Jiaqi',
    category: 'Alumni',
    position: 'Master Student, 2015',
    avatar: '/avatars/fu-jiaqi.jpg',
    email: ''
  },
  {
    id: 'kevin-wolterink',
    name: 'Kevin Wolterink',
    englishName: 'KEVIN Wolterink',
    category: 'Alumni',
    position: 'Master Student, 2014',
    avatar: '/avatars/Kevin.jpg',
    email: ''
  },
  {
    id: 'gao-junying',
    name: '高俊颖',
    englishName: 'GAO Junying',
    category: 'Alumni',
    position: 'Master Student, 2014',
    avatar: '/avatars/gao-junying.jpg',
    email: ''
  },
  {
    id: 'gao-minquan',
    name: '高民权',
    englishName: 'GAO Minquan',
    category: 'Alumni',
    position: 'Master Student, 2014',
    avatar: '/avatars/gao-minquan.jpg',
    email: ''
  },
  {
    id: 'wang-jiaxi',
    name: '汪佳希',
    englishName: 'WANG Jiaxi',
    category: 'Alumni',
    position: 'Master Student, 2011',
    avatar: '/avatars/wang-jiaxi.jpg',
    email: ''
  }
];

export const getTeamMembersByCategory = (category: TeamMember['category']) => {
  return teamMembers.filter(member => member.category === category);
};

export const getTeamMemberById = (id: string) => {
  return teamMembers.find(member => member.id === id);
};