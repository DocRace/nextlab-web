export interface TeamMember {
    id: string;
    name: string;
    englishName?: string;
    category: 'Faculty & Researchers' | 'Staff' | 'Doctoral Students' | 'Master Students' | 'Undergraduates' | 'Alumni';
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
    // Faculty & Researchers
    {
      id: 'zhang-kejun',
      name: '张克俊',
      englishName: 'Zhang Kejun',
      category: 'Faculty & Researchers',
      position: 'Director of the NEXT Lab of the College of Computer Science and Technology, Zhejiang University',
      avatar: '/avatars/zhang-kejun.png',
      email: 'zhangkejun@zju.edu.cn',
      englishBio: 'Research directions: Artificial Intelligence, affective Computing, design science; Robots, data mining; Design computing, design cognition\n\nDoctoral supervisor and professor in the fields of Computer Science and Technology, Artificial Intelligence, and Design Studies. Vice President of the International Design Institute of Zhejiang University. Person in charge of the Science and Technology Design Innovation and Entrepreneurship Laboratory (NEXT Lab) of Zhejiang University. In recent years, I have presided over more than ten projects in fields such as artificial intelligence art and design, human-computer interaction and affective computing, cross-media design and big data, including those funded by the National Natural Science Foundation of China, the National Key Research and Development Program, the Zhejiang Province "Sharpshooter" and "Leading Goose" Research and Development Breakthrough Program, the Zhejiang Province Key Natural Science Foundation, and the China Postdoctoral Science Foundation. In Journal of Computer, Journal of Mechanical Engineering, Engineering Sciences in CHINA, Design Studies, IEEE T Affective Computing, SCIENCE China-Information Science, ACM He has published over 30 papers in well-known domestic and international journals or conferences such as MM and AAAI, holds more than ten authorized inventions, and has authored several books. He was selected as a "Science and Technology Dream Chaser" in Zhejiang Province and won the Special Prize in the first Zhejiang Province University Teachers\' Teaching Innovation Competition.',
      chineseBio: '研究方向：人工智能、情感计算、设计科学；机器人、数据挖掘；设计计算、设计认知\n\n计算机科学与技术、人工智能、设计学方向博士生导师，教授。浙江大学国际设计研究院副院长。浙江大学科技设计创新创业实验室（NEXT Lab）负责人。近年来在人工智能艺术与设计、人机交互与情感计算、跨媒体设计与大数据等领域主持国家自然科学基金、国家重点研发计划课题、浙江省"尖兵""领雁"研发攻关计划、浙江省重点自然科学基金及中国博士后基金等项目十多项，在计算机学报、机械工程学报、中国工程科学、Design Studies、IEEE T Affective Computing、SCIENCE CHINA-Information Science、ACM MM、AAAI等国内外知名期刊或会议上发表论文三十余篇，拥有授权发明十多项，著作多部，入选浙江省"科技追梦人"，获首届浙江省高校教师教学创新大赛特等奖。',
      personalHomepage: 'https://person.zju.edu.cn/zhangkejun'
    },
    {
      id: 'liu-yuxuan',
      name: '刘雨萱',
      englishName: 'Liu Yuxuan',
      category: 'Staff',
      position: 'Research assistant',
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
      position: 'Teaching assistant',
      avatar: '/avatars/liang-weiqi.jpg',
      email: 'lwq0922c29@zju.edu.cn',
      englishBio: 'Year of Commencement: 2022\nPosition: Teaching Assistant\nKey Responsibilities:\n1. Zhejiang University - Apple Inc. Smart Education Center\n2. Assist in administrative management',
      chineseBio: '入职年份：2022\n工作岗位：教研助理\n工作方向：\n1、浙大-苹果公司智惠教育中心\n2、辅助行政管理'
    },
    {
      id: 'cao-yingping',
      name: '曹颖萍',
      englishName: 'Cao Yingping',
      category: 'Staff',
      position: 'Research assistant, alumni',
      avatar: '/avatars/cao-yingping.jpg',
      email: 'caoyingping@zju.edu.cn',
      englishBio: 'Year of Commencement: 2023\nPosition: Assistant to the Chair, Department of Industrial Design, Zhejiang University\nKey Responsibilities:\n1. AI for Education\n2.Design Competition Workshop Coordination\n3.Laboratory Research Project Management\n4.Laboratory Administration',
      chineseBio: '入职年份：2023\n工作岗位：浙江大学工业设计系系主任助理\n工作方向：\n1、AI for education \n2、设计竞赛工作坊\n3、实验室科研项目管理\n4、实验室行政管理'
    },
    {
      id: 'ye-wei',
      name: '叶炜',
      englishName: 'Ye Wei',
      category: 'Staff',
      position: 'Administrative staff',
      avatar: '/images/next-lab-logo.png',
      email: 'ye-wei@zju.edu.cn'
    },
  
    // Doctoral Students
    {
      id: 'li-shuyu',
      name: '李书宇',
      englishName: 'Li Shuyu',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Design Studies, 2024',
      avatar: '/avatars/li-shuyu.jpg',
      email: 'lsyxary@zju.edu.cn',
      englishBio: 'I am a Ph.D. student specializing in Music AI, leveraging expertise in both artificial intelligence and music. My driving mission is to empower everyone to understand, explore, and engage with music on a profound level. My vision is for music to serve as a universal bridge for communication, enabling people to understand others and express themselves authentically through its language. Passionate about all forms of music, I am deeply interested in exploring the intersection of science and art and pushing the boundaries of both fields.',
      chineseBio: '我是一名专攻音乐AI的博士生，利用人工智能和音乐的专业知识。我的使命是让每个人都能深刻地理解、探索和参与音乐。我的愿景是让音乐成为沟通的普遍桥梁，让人们通过音乐的语言来理解他人，并真实地表达自己。我对各种形式的音乐充满热情，对探索科学与艺术的交叉点以及推动这两个领域的界限非常感兴趣。'
    },
    {
      id: 'wang-zihao',
      name: '王子豪',
      englishName: 'Wang Zihao',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Design Studies, 2021',
      avatar: '/avatars/wang-zihao.jpg',
      email: 'carlwang1212@gmail.com',
      englishBio: 'I am a Ph.D. candidate at Zhejiang University, advised by Professor Kejun Zhang. Currently, I am a visiting scholar at Carnegie Mellon University (CMU), where I am fortunate to work with Professor Roger Dannenberg. My research explores the intersection of generative AI, real-time systems, and human-computer interaction in music. I have published several first-author papers in venues such as IJCAI, ACM Multimedia, and IEEE TAFFC, with one project being featured in the MIT Technology Review.\n\nBeyond my academic work, I have also sought to apply my research in practice. I previously co-founded a music AI startup where our team successfully secured national algorithm registration from the CAC. I also worked as a research intern at Tencent\'s AI Platform Department. During my undergraduate studies, I was honored to receive the Baosteel Scholarship and the Principal\'s Scholarship, and our team earned a national silver medal in the "Internet+" competition. I am grateful for the opportunity to contribute to the academic community by serving as a reviewer for premier conferences and journals, including ACL, IJCAI, ACM MM, IEEE TAFFC, and IEEE TMM.',
      chineseBio: '我是浙江大学博士研究生，导师是张克俊教授。目前，我是卡内基梅隆大学（CMU）的访问学者，在那里我有幸与Roger Dannenberg教授共事。我的研究探索了生成式人工智能、实时系统和音乐中的人机交互的交集。我在IJCAI、ACM Multimedia、IEEE TAFFC等期刊上发表了多篇第一作者论文，其中一个项目在MIT Technology Review上发表。\n\n除了我的学术工作，我也试图将我的研究应用到实践中。我之前共同创立了一家音乐人工智能创业公司，我们的团队成功地从CAC获得了国家算法注册。我还在腾讯AI平台部门做过研究实习生。在本科期间，我有幸获得宝钢奖学金和校长奖学金，我们的团队在"互联网+"比赛中获得了全国银奖。我很感激能有机会作为顶级会议和期刊的审稿人为学术界做出贡献，包括ACL、IJCAI、ACM MM、IEEE TAFFC和IEEE TMM。',
      achievements: '[CCF-A] PetCoCre: Zero-Shot Cross-Species Musical Co-Creation for Wellness Therapy. IJCAI 2025. First Author.\n[CCF-A] MuChin: A Chinese Colloquial Description Benchmark for Evaluating Language Models in the Field of Music. IJCAI 2024. Oral Presentation. First Author.\n[CAS Q1 Top Journal] REMAST: Real-time Emotion-based Music Arrangement with Soft Transition. IEEE Transactions on Affective Computing (TAFFC 2023). (IF: 9.6). First Author.\n[CCF-A] SongDriver: Real-time Music Accompaniment Generation without Logical Latency nor Exposure Bias. ACM Multimedia (ACMMM) 2022. Oral Presentation. First Author.\nMuDiT & MuSiT: Generative Music Models\' Alignment with Professional and Amateur Users\' Expectations. ACL 2025 Findings. First Author.\nMelodyGLM: A Large-Scale Multi-task Pre-training Framework for Symbolic Melody Generation. ArXiv Pre-print. Co-author.\nMetaBGM: Real-Time Metaverse Game Cinematic Soundtrack Generation Integrating Ambient Awareness and Personalized Experience. ArXiv Pre-print. Co-first Author.\nSketchffusion: Sketch-guided Image Editing With Diffusion Model. IEEE International Conference on Image Processing (ICIP 2023). (CCF-C). Co-author.'
    },
    {
      id: 'lu-guanting',
      name: '卢冠廷',
      englishName: 'Lu Guanting',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Design Studies, 2025',
      avatar: '/avatars/lu-guanting.jpg',
      email: '3210105631@zju.edu.cn',
      englishBio: 'Lu Guanting, a Ph.D. candidate in Design (starting 2025) specializing in AI-generated music (AIGC) and affective computing. My research explores the intersection of technology and art, focusing on how AI can understand and evoke emotions to create expressive, human-like music. Passionate about pushing the boundaries of creativity, I attempt to make human-AI collaboration more intuitive and emotionally resonant.\nAlways excited to connect with fellow researchers and creators in NEXTLab—wish we could shape the future of intelligent music together!',
      chineseBio: '卢冠廷，设计专业博士研究生（2025年入学），专攻人工智能音乐（AIGC）和情感计算。我的研究探索技术与艺术的交集，专注于人工智能如何理解和唤起情感，以创造富有表现力的、类似人类的音乐。我热衷于推动创造力的边界，试图使人类与人工智能的合作更加直观和情感共鸣。\n很高兴能与NEXT Lab的研究人员和创作者们建立联系，希望我们能共同塑造智能音乐的未来！'
    },
    {
      id: 'ma-le',
      name: '马玏',
      englishName: 'Ma Le',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Design Studies, 2022',
      avatar: '/avatars/ma-le.jpg',
      email: 'maller@zju.edu.cn',
      englishBio: 'I hold a Bachelor\'s degree in Software Engineering from the University of Electronic Science and Technology of China (UESTC), and I am currently a PhD candidate in Design. My academic background combines technical training with a human-centered design perspective, enabling me to explore research across disciplines.\nMy research interests include Human-Computer Interaction (HCI), multi-modal alignment, affective computing, and data privacy. I am particularly curious about how music intelligent systems can perceive and respond to human emotion while maintaining privacy and ethical standards. My current work focuses on investigating human factors in music intelligent systems that enhance the music listening experience under different scenarios.\nOutside of research, I value a well-rounded lifestyle. I enjoy running and swimming regularly to stay active and maintain focus. Music also plays an important role in my life—I often spend my free time playing the guitar, which helps me relax and think creatively.\nI hope to contribute to the development of interactive systems that are not only intelligent and efficient but also emotionally engaging and ethically designed.',
      chineseBio: '我拥有中国电子科技大学软件工程学士学位，目前正在攻读设计博士学位。我的学术背景结合了技术培训和以人为本的设计视角，使我能够跨学科探索研究。\n我的研究兴趣包括人机交互（HCI），多模态对齐，情感计算和数据隐私。我特别好奇音乐智能系统如何在保持隐私和道德标准的同时感知和回应人类情感。我目前的工作重点是研究音乐智能系统中的人为因素，以增强不同场景下的音乐聆听体验。\n在研究之余，我重视全面的生活方式。我喜欢定期跑步和游泳，以保持活跃和专注。音乐在我的生活中也扮演着重要的角色——我经常在空闲时间弹吉他，这有助于我放松和创造性地思考。\n我希望为互动系统的发展做出贡献，这些系统不仅智能高效，而且具有情感吸引力和道德设计。',
      achievements: '* Ma, L., Xue, B., & Wu, J. (2021, September). Centralized traffic signal control for multiple intersections based on sequence-to-sequence model and attention mechanism. In 2021 IEEE International Intelligent Transportation Systems Conference (ITSC) (pp. 2519-2524). IEEE.\n* MA, Le, et al. YuYin: a multi-task learning model of multi-modal e-commerce background music recommendation. EURASIP Journal on Audio, Speech, and Music Processing, 2023, 2023.1: 44.\n* Wang, Z., Ma, L., Zhang, C., Han, B., Xu, Y., Wang, Y., ... & Zhang, K. (2024). REMAST: Real-time emotion-based music arrangement with soft transition. IEEE Transactions on Affective Computing. (co-first author)\n* Wang, Z., Ma, L., Feng, Y., Jin, Y., & Zhang, K. (2024). SaMoye: Zero-shot Singing Voice Conversion Model Based on Feature Disentanglement and Enhancement. (co-first author)\n* Yu, J., Wu, X., Xu, Y., Zhang, T., Wu, S., Ma, L., & Zhang, K. (2025, April). SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training. In Proceedings of the AAAI Conference on Artificial Intelligence (Vol. 39, No. 24, pp. 25742-25750).'
    },
    {
      id: 'huang-ziyi',
      name: '黄梓颐',
      englishName: 'Huang Ziyi',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Computer Science and Technology, 2025',
      avatar: '/avatars/huang-ziyi.jpg',
      email: 'hpurple011016@gmail.com',
      englishBio: 'Hi, I\'m Ziyi Huang, a soon-to-be PhD student working at the intersection of music, emotion, and AI. With a background in computer science and a deep love for the arts, I\'m drawn to projects that blend technical precision with emotional depth—whether that\'s designing stress-relief music tools, building AI-powered music companions, or analyzing how people respond to sound\nOutside research, I wear many hats: freelance designer, developer, and amateur musician—not out of discipline, but because I\'ve never been good at choosing just one passion. I\'ve also participated in algorithm competitions and enjoy solving complex problems, especially when they relate to human-centered experiences.\nAs someone who\'s both technically minded and emotionally intuitive, I believe technology doesn\'t have to feel cold. My goal is to create systems that resonate with human nuance—bringing warmth, creativity, and a touch of music into everyday life.',
      chineseBio: '大家好，我是黄梓颐，即将成为博士生，研究方向是音乐、情感和人工智能的交叉。凭借计算机科学背景和对艺术的热爱，我被那些融合了技术精度和情感深度的项目所吸引——无论是设计减压音乐工具，构建人工智能音乐伴侣，还是分析人们对声音的反应。\n在研究之外，我身兼数职：自由设计师、开发人员和业余音乐家——并非出于纪律，而是因为我从来不擅长只选择一种爱好。我还参加过算法竞赛，喜欢解决复杂的问题，尤其是与人类体验相关的问题。\n作为一个既有技术头脑又有情感直觉的人，我相信技术不一定会让人感到冷漠。我的目标是创造与人类细微差别产生共鸣的系统——为日常生活带来温暖、创造力和一丝音乐。'
    },
    {
      id: 'cui-chuqiao',
      name: '崔楚峤',
      englishName: 'Cui Chuqiao',
      category: 'Doctoral Students',
      position: 'Doctoral student in Design Studies, 2023',
      avatar: '/avatars/cui-chuqiao.png',
      email: '12321106@zju.edu.cn',
      englishBio: 'CHUQIAO CUI is a PhD candidate in Artificial Intelligence at Zhejiang University. Her research focuses on intelligent art and innovative design, with an emphasis on the integration of culture and technology to drive the development of the creative industry.',
      chineseBio: '崔楚峤是浙江大学人工智能专业的博士生。主要研究方向为智能艺术与创新设计，注重文化与科技的融合，推动创意产业的发展。'
    },
    {
      id: 'zhong-chongjun',
      name: '仲崇珺',
      englishName: 'Zhong Chongjun',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Design Studies, 2024',
      avatar: '/avatars/zhong-chongjun.jpeg',
      email: 'zhong_chongjun@zju.edu.cn',
      englishBio: 'Zhong Chongjun is currently a PhD candidate in Design Science at Zhejiang University, and earned a Bachelor\'s Degree in the same field from this institution. Her research interests include human-computer interaction, digital art and human-AI co-creation.',
      chineseBio: '仲崇珺，现任浙江大学设计科学专业博士研究生，获学士学位。主要研究方向为人机交互、数字艺术、人机共创。'
    },
    {
      id: 'wu-wenqi',
      name: '伍文棋',
      englishName: 'Wu Wenqi',
      category: 'Doctoral Students',
      researchGroup: 'Design Group',
      position: 'Doctoral student in Design Studies, 2022',
      avatar: '/avatars/wu-wenqi.jpeg',
      email: 'wu-wenqi@zju.edu.cn',
      englishBio: 'The main research directions are the construction of virtual teaching and research rooms and design thinking. I have a passion for music and painting and am proficient in playing the piano. I have won the silver award in the 5th and 6th China "Internet Plus" College Students\' Innovation and Entrepreneurship Competition, the Most Innovative Award and the first prize in the Mobile Application Innovation Competition of the 5th China University Computer Competition, and the first prize in the 12th Zhejiang Province "Challenge Cup" College Students\' Entrepreneurship Competition of "Chuangqingchun" The Special Prize of the 12th "Dandelion" College Students\' Entrepreneurship Competition of Zhejiang University and other awards.',
      chineseBio: '主要研究方向为虚拟教研室建设、设计思维，爱好音乐、绘画，擅长钢琴，曾获第五届、第六届中国"互联网+"大学生创新创业大赛银奖，第五届中国高校计算机大赛移动应用创新赛最具创新奖、一等奖，"创青春"浙江省第十二届"挑战杯"大学生创业大赛一等奖，浙江大学第十二届"蒲公英"大学生创业大赛特等奖等奖项。',
      achievements: 'Kejun ZHANG, Rui ZHANG, Yehang YIN, Yifei LI, Wenqi WU, Lingyun SUN, Fei WU, Huanghuang DENG, Yunhe PAN . Visual knowledge guided intelligent generation of Chinese seal carving[J]. Frontiers of Information Technology & Electronic Engineering, 2021.'
    },
    {
      id: 'wu-songruoyao',
      name: '吴宋若瑶',
      englishName: 'Wu Songruoyao',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Electronic Information, 2022',
      avatar: '/avatars/wusong-ruoyao.jpeg',
      email: 'wu-songruoyao@zju.edu.cn',
      englishBio: 'The research direction is the co-creation of human and AI art. I enjoy music, painting and calligraphy. I have won the National Gold Award of the "Internet Plus" College Students\' Innovation and Entrepreneurship Competition, the First Prize of the China Postgraduate Artificial Intelligence Innovation Competition, the Special Prize of the Mobile Application Innovation Competition of the China University Computer Competition, the Second Prize of the Provincial "Challenge Cup" Academic Works Competition and other awards.',
      chineseBio: '研究方向为人+AI艺术共创，爱好音乐、绘画、书法，曾获"互联网+"大学生创新创业大赛全国金奖、中国研究生人工智能创新大赛一等奖、中国高校计算机大赛移动应用创新赛特等奖、"挑战杯"学术作品竞赛省二等奖等奖项。',
      achievements: '[1] Chen Zhang, LuChin Chang, Songruoyao Wu, Xu Tan, Tao Qin, Tie-Yan Liu, Kejun Zhang. ReLyMe: Improving Lyric-to- Melody Generation by Incorporating Lyric-Melody Relationships. CoRR abs/2207.05688 (2022), accepted by ACMMM 2022, oral\n[2] Xinyi Chen, Hui Zhang, Songruoyao Wu, Jun Zheng, Lingyun Sun, Kejun Zhang. A dataset for learning stylistic and cultural correlations between music and videos. Cogn. Comput. Syst. 4(2): 177-187 (2022)\n[3] Zhaolin Qiu, Yufan Ren, Canchen Li, Hongfu Liu, Yifan Huang, Yiheng Yang, Songruoyao Wu, Hanjia Zheng, Juntao Ji, Jianjia Yu, Kejun Zhang. Mind Band: A Crossmedia AI Music Composing Platform. ACM Multimedia 2019: 2231-2233'
    },
    {
      id: 'zhang-xiaoran',
      name: '张晓然',
      englishName: 'Zhang Xiaoran',
      category: 'Doctoral Students',
      researchGroup: 'Design Group',
      position: 'Doctoral student in Design Studies, 2020',
      avatar: '/avatars/zhang-xiaoran.jpeg',
      email: 'zhang-xiaoran@zju.edu.cn',
      englishBio: 'My research interests lie in design thinking and innovation and entrepreneurship education. I am proficient in dancing and have received honors such as Outstanding Graduate Student of Zhejiang University, Outstanding Youth League Cadre of Zhejiang University, and Outstanding Class Cadre of Zhejiang University.',
      chineseBio: '研究方向为设计思维、创新创业教育，擅长舞蹈，曾获浙江大学优秀研究生、浙江大学优秀团干部、浙江大学优秀班干部等荣誉。',
      achievements: '[1]吴维东,张晓然,叶雨晴,石锦澎,陆国栋,张克俊.基于竞赛数据画像的双创教育评价——中国国际"互联网+"大学生创新创业大赛数据分析[J].高等工程教育研究,2022(02):155-159.\n[2]Chen, D., et al.: How background music of shopping sites affects consumers during festival season. Cogn. Comput. Syst. 4( 2), 165– 176 (2022).\n[3]K. Zhang, et al.,"Werewolf-XL: A Database for Identifying Spontaneous Affect in Large Competitive Group Interactions" in IEEE Transactions on Affective Computing, vol. , no. 01, pp. 1-1, 5555.'
    },
    {
      id: 'wang-bolin',
      name: '王柏林',
      englishName: 'Wang Bolin',
      category: 'Doctoral Students',
      position: 'Doctoral student in Electronic Information, 2020',
      avatar: '/avatars/wang-bolin.jpg',
      email: 'wang-bolin@zju.edu.cn',
      englishBio: 'The research directions are text recognition, image restoration and semantic segmentation. I enjoy badminton and calligraphy. I have won the third prize in the Tianjin University Students\' Physics Competition, the second prize in the North China Region of the National University Internet of Things Competition, the Postgraduate Scholarship of Hebei University of Technology, the President\'s Scholarship of Hebei University of Technology and other honors.',
      chineseBio: '研究方向为文字识别、图像修复、语义分割，爱好羽毛球、书法，曾获天津市大学生物理竞赛三等奖、全国大学生物联网竞赛华北赛区二等奖、河北工业大学研究生奖学金、河北工业大学校长奖学金等荣誉。'
    },
    {
      id: 'yu-jiaxing',
      name: '俞佳兴',
      englishName: 'Yu Jiaxing',
      category: 'Doctoral Students',
      researchGroup: 'Music Group',
      position: 'Doctoral student in Design Studies, 2022',
      avatar: '/avatars/yu-jiaxing.jpg',
      email: 'yu-jiaxing@zju.edu.cn',
      englishBio: 'My research interests lie in music structure and music generation. I enjoy music, sports and reading. I am proficient in iOS development and have obtained one software copyright. I have received honors such as the Silver Award in the China "Internet Plus" College Students\' Innovation and Entrepreneurship Competition, the Special Prize in the Mobile Application Innovation Competition of the China University Computer Competition, and the WWDC19 Apple Global Developers Conference Scholarship.',
      chineseBio: '研究方向为音乐结构与音乐生成，爱好音乐、运动、阅读，擅长iOS开发，获得软著1项，曾获中国"互联网+"大学生创新创业大赛银奖、中国高校计算机大赛移动应用创新赛特等奖、WWDC19苹果全球开发者大会奖学金等荣誉。',
      achievements: 'Chen Zhang, Jiaxing Yu, LuChin Chang, Xu Tan, Jiawei Chen, Tao Qin, and Kejun Zhang. 2021. PDAugment: Data Augmentation by Pitch and Duration Adjustments for Automatic Lyrics Transcription. arXiv preprint arXiv:2109.07940.'
    },
    {
      id: 'shen-xinyi',
      name: '沈心逸',
      englishName: 'Shen Xinyi',
      category: 'Doctoral Students',
      researchGroup: 'Font Group',
      position: 'Doctoral student in Computer Science and Technology, 2021',
      avatar: '/avatars/shen-xinyi.jpeg',
      email: 'shenxinyi@zju.edu.cn',
      englishBio: 'Researcher specializing in Computer Vision and Machine Learning, with a focus on Intelligent Font Generation, Multimodal AI, and Artificial Intelligence for Digital Art. Combines deep theoretical knowledge in core AI disciplines with strong practical engineering skills. Proficient in iOS development, demonstrated by the award-winning app Seal Create which received the Most Innovative Award at the Mobile Application Innovation Competition. Actively explores the intersection of cutting-edge AI research and creative digital expression.',
      chineseBio: '专门从事计算机视觉和机器学习的研究人员，专注于智能字体生成，多模态人工智能和数字艺术的人工智能。将AI核心学科的深厚理论知识与较强的工程实践技能相结合。精通iOS开发，获奖应用Seal Create在移动应用创新大赛中获得最具创新奖。积极探索前沿人工智能研究与创造性数字表达的交叉点。'
    },
    {
      id: 'zhang-rui',
      name: '张锐',
      englishName: 'Zhang Rui',
      category: 'Doctoral Students',
      position: 'Doctoral student in Design Studies, 2018',
      avatar: '/avatars/zhang-rui.jpg',
      email: 'zhang-rui@zju.edu.cn'
    },
    {
      id: 'wu-xinda',
      name: '吴新达',
      englishName: 'Wu Xinda',
      category: 'Doctoral Students',
      position: 'Doctoral student in Design Studies, 2019',
      avatar: '/avatars/wu-xinda.jpg',
      email: 'wu-xinda@zju.edu.cn'
    },
    {
      id: 'yang-yiheng',
      name: '杨一恒',
      englishName: 'Yang Yiheng',
      category: 'Doctoral Students',
      position: 'Doctoral student in Design Studies, 2021',
      avatar: '/avatars/yang-yiheng.jpeg',
      email: 'yang-yiheng@zju.edu.cn'
    },
    
  
    // Master Students
    {
      id: 'jin-yuhang',
      name: '金宇航',
      englishName: 'Jin Yuhang',
      category: 'Master Students',
      researchGroup: 'Design Group',
      position: 'Master student in Design Studies, 2025',
      avatar: '/avatars/jin-yuhang.jpeg',
      email: '22521334@zju.edu.cn',
      englishBio: 'Master of Design candidate (expected 2025)\n• Awarded National Scholarship, Provincial Government Scholarship, and Zhejiang University (ZJU) First-Class Scholarship\n• Honored as Outstanding Student Leader and Hangzhou Asian Games Star Volunteer\n• Contributed to three academic publications in the field of AI generated music\n• Organized and participated in multiple AIGC media creation projects',
      chineseBio: '设计硕士候选人（预计2025年）\n•获国家奖学金、省政府奖学金、浙江大学一等奖学金\n•被评为优秀学生干部、杭州亚运会明星志愿者\n•在人工智能生成音乐领域发表了三篇学术论文\n•组织并参与多个AIGC媒体创作项目'
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
      englishBio: 'Artificial Intelligence Bachelor\'s degree, Class of 2025 Master\'s student in Computer Technology. Proficient in multiple programming languages and PyTorch framework, with interdisciplinary background in cognitive neuroscience. Primary research focus on high-quality, stylized image generation, with keen interest in cutting-edge developments in diffusion models, large language models, and multimodal AI. Passionate about art and design, eager to collaborate with lab members in advancing frontier research that brings happiness.',
      chineseBio: '本科学历，2025级计算机技术专业硕士研究生。精通多种编程语言和PyTorch框架，具有认知神经科学跨学科背景。主要研究方向为高质量、程式化的图像生成，对扩散模型、大型语言模型和多模态人工智能的前沿发展有浓厚的兴趣。对艺术和设计充满热情，渴望与实验室成员合作推进前沿研究，带来快乐。'
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
      chineseBio: '主要研究方向：人机交互；设计；我喜欢画画，漂亮的衣服和我可爱可爱的猫悦宝。'
    },
    {
      id: 'zheng-zehui',
      name: '郑泽晖',
      englishName: 'Zheng Zehui',
      category: 'Master Students',
      researchGroup: 'Music Group',
      position: 'Master student in Computer Science and Technology, 2023',
      avatar: '/avatars/zheng-zehui.png',
      email: 'zhengzehui@zju.edu.cn',
      englishBio: 'Hello! My name is Zheng Zehui, a third-year master\'s student (Class of 2023) majoring in Computer Science and Technology. Passionate about both technology and music, I strive to bridge the gap between these two fields.\nAs a music enthusiast, I specialize in pop piano and have basic skills in flute and guitar. Beyond performance, I\'m fascinated by music production—particularly recording techniques and arranging—and have explored AI-powered lyric generation as a creative intersection of my academic and artistic interests.\nAcademically, I focus on leveraging computational methods to solve real-world problems, with a growing curiosity about AI and multimedia applications. My goal is to blend technical expertise with artistic creativity, whether in developing intelligent music tools or exploring innovative human-computer interactions.\nLooking forward to connecting with like-minded peers and mentors! Feel free to reach out for collaborations or chats about tech, music, or their exciting overlaps.',
      chineseBio: '你好！我叫郑泽晖，是2023级计算机科学与技术专业硕士三年级学生。我对科技和音乐都充满热情，我努力弥合这两个领域之间的差距。\n作为一名音乐爱好者，我擅长流行钢琴，并有长笛和吉他的基本技能。除了表演，我还着迷于音乐制作，特别是录音技术和编曲，并探索了人工智能驱动的歌词生成，作为我学术和艺术兴趣的创造性交叉点。\n在学术上，我专注于利用计算方法来解决现实世界的问题，对人工智能和多媒体应用越来越好奇。我的目标是将技术专长与艺术创造力相结合，无论是开发智能音乐工具还是探索创新的人机交互。\n期待与志同道合的同行和导师联系！你可以自由地寻求合作或谈论科技、音乐或它们令人兴奋的重叠部分。'
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
      chineseBio: '设计专业硕士研究生，2025级。专注于AI设计和用户体验设计。曾在实验室参与多个AI产品项目。热爱艺术，不断探索科技与艺术结合的可能性。',
      achievements: '"Zhi Nong" Smart agriculture APP\n"Yi Zi Yi Yin"'
    },
    {
      id: 'liu-huaying',
      name: '刘华瑛',
      englishName: 'Liu Huaying',
      category: 'Master Students',
      researchGroup: 'Music Group',
      position: 'Master student in Industrial Design Engineering, 2024',
      avatar: '/avatars/liu-huaying.jpg',
      email: 'liuhuaying9@zju.edu.cn',
      englishBio: 'Currently studying Industrial Design Engineering major at Zhejiang University, School of Software, with research direction focusing on music-related information product design research; hobbies include graphic art, music, and reading.',
      chineseBio: '目前就读于浙江大学软件学院工业设计工程专业，研究方向为音乐相关信息产品设计研究；爱好包括图形艺术、音乐和阅读。'
    },
    {
      id: 'hou-liang',
      name: '侯亮',
      englishName: 'Hou Liang',
      category: 'Master Students',
      researchGroup: 'Design Group',
      position: 'Master student in Industrial Design Engineering, 2023',
      avatar: '/avatars/hou-liang.png',
      email: '1305901860@qq.com',
      englishBio: 'My name is Hou Liang. My research interests focus on the development and application of design thinking tools, as well as the innovative integration of XR and AI technologies in human-computer interaction. I am dedicated to exploring new product forms and interaction experiences by combining design, technology, and social needs through an interdisciplinary approach.',
      chineseBio: '我的名字叫侯亮。我的研究兴趣主要集中在设计思维工具的开发与应用，以及XR和AI技术在人机交互中的创新融合。我致力于通过跨学科的方法，将设计、技术和社会需求结合起来，探索新的产品形式和交互体验。',
      achievements: 'Design Competition：\n4 Red Dot Design Awards（Germany）\n3 IF Design Awards（Germany）\n2 IDEA Design Awards（USA）\n1 Gold Award in A\'design（Italy）'
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
      englishBio: 'Master\'s Student in Design Studies at Zhejiang University (Class of 2025)\nCounselor of the College of Computer Science and Technology, Zhejiang University (2023-2025)\nUndergraduate student majoring in Industrial Design at Zhejiang University, with a Bachelor of Engineering degree (2019-2023)\nI am interested in design thinking education methods and products. I love photography, music and film and television creation. I hope to combine my interests with research to create meaningful design works.',
      chineseBio: '浙江大学设计学专业硕士研究生（2025级）\n浙江大学计算机科学与技术学院辅导员（2023-2025）\n浙江大学工业设计专业本科生，获工学学士学位（2019-2023）\n对设计思维教育方法及产品感兴趣，热爱摄影、音乐、影视创作，希望能将兴趣与研究相结合，创造有意义的设计作品。'
    },
    {
      id: 'chen-longxuan',
      name: '陈龙轩',
      englishName: 'Chen Longxuan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2025',
      avatar: '/avatars/chen-longxuan.jpeg',
      email: 'chen_lx@zju.edu.cn',
      englishBio: 'Master\'s student in Design Studies (Class of 2025), Zhejiang University.\nHe earned his bachelor\'s degree in Industrial Design from the College of Computer Science and Technology at Zhejiang University. During his undergraduate studies, he gained extensive experience in physical product design and interactive experience design. Notably, he contributed as a core member of the "Imprint Asian Games: Intelligent Seal Engraving Exhibition in the Metaverse" project, exploring the integration of AI with traditional Chinese culture.\nHe also served as a volunteer team leader for both the Hangzhou Asian Games and Asian Para Games. After graduation, he served as a full-time student counselor at Zhejiang University for two years, receiving honors such as the "Outstanding Student Affairs Award" and "Top 10 Outstanding Student Club Advisor" from the university.',
      chineseBio: '浙江大学设计专业硕士研究生（2025级）。\n他在浙江大学计算机科学与技术学院获得工业设计学士学位。在本科期间，他在实体产品设计和交互体验设计方面积累了丰富的经验。值得一提的是，他作为核心成员参与了"印记亚运会：智能篆刻展在元宇宙"项目，探索人工智能与中国传统文化的融合。\n他还担任过杭州亚运会和亚洲残运会的志愿者队长。毕业后，他在浙江大学担任了两年的全职学生辅导员，并获得了学校颁发的"优秀学生事务奖"、"十佳优秀学生社团顾问"等荣誉。'
    },
    {
      id: 'ren-jingyan',
      name: '任婧妍',
      englishName: 'Ren Jingyan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2025',
      avatar: '/avatars/ren-jinyan.jpeg',
      email: '1520819540@qq.com',
      englishBio: 'I\'m passionate about photography, travel, and human history, having visited 17 countries so far. Through my lens, I capture fleeting moments, while immersing myself in diverse cultures and historical tales—each journey broadening my perspective.\nI also closely follow AI advancements, fascinated by its transformative potential. In daily life, I love tinkering with product design and research, turning ideas into tangible solutions.\nSeeking collaboration with like-minded individuals—those driven by curiosity and innovation. Let\'s join forces to create something impactful!',
      chineseBio: '我对摄影、旅行和人类历史充满热情，到目前为止已经访问了17个国家。通过我的镜头，我捕捉转瞬即逝的瞬间，同时让自己沉浸在不同的文化和历史故事中——每一次旅行都拓宽了我的视野。\n我也密切关注人工智能的发展，被它的变革潜力所吸引。在日常生活中，我喜欢捣鼓产品设计和研究，把想法变成切实的解决方案。\n寻求与志同道合的人合作——那些被好奇心和创新驱动的人。让我们联合起来，创造一些有影响力的东西！'
    },
    {
      id: 'jocelyn-jenica-jaya',
      name: 'JOCELYN JENICA JAYA（陈艺真）',
      englishName: 'JOCELYN JENICA JAYA',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2025',
      avatar: '/avatars/chen-yizhen.jpg',
      email: 'jocelynjenica@gmail.com',
      englishBio: 'My name is Jocelyn Jenica Jaya, a recent graduate from Zhejiang University, China, where I was awarded a Bachelor\'s degree in Computer Science and Technology in June 2025 under the Chinese Government Scholarship. My undergraduate thesis, titled "Front-end Development of Artificial Intelligence Knowledge Base Based on a Novel Knowledge Management Model," was completed under the guidance of Dr. Kai Weng. All my courses were conducted in Chinese, in which I consistently excelled, showcasing both strong academic aptitude and adaptability.\nMy academic background has equipped me with a strong foundation in programming languages like C, C++, and Java, along with hands-on experience in data structures, database systems, digital logic design, and others. Interdisciplinary courses in areas such as Technical Communication, Chinese Society, and Psychology have broadened my skills, enhancing my understanding of Chinese culture, improving communication, and fostering teamwork. Additionally, my passion for project work has led me to develop various projects, including simple games, web applications, and UI designs, sharpening both my technical abilities and my ability to collaborate effectively with diverse teams.\nBeyond academics, I actively engaged in extracurricular activities such as the badminton club, where I developed leadership, time management, and team collaboration skills. I am also musically trained, having achieved Grade 8 in practical piano and Grade 5 in music theory from The Associated Board of the Royal Schools of Music.\nFor my personality, I am a socially active, responsible, and open-minded individual who thrives in diverse environments. My strengths lie in public speaking, attentive listening, and leadership potential. I live by the motto, "Work hard, Play hard," and I consistently approach challenges with dedication, positivity, and a genuine willingness to contribute.',
      chineseBio: '我叫Jocelyn Jenica Jaya，是中国浙江大学的一名应届毕业生，于2025年6月获得中国政府奖学金，获得计算机科学与技术学士学位。本科毕业论文《基于新型知识管理模式的人工智能知识库前端开发》是在翁凯博士的指导下完成的。我的所有课程都是用中文进行的，我一直都很擅长中文，表现出很强的学术能力和适应能力。\n我的学术背景使我在C、c++和Java等编程语言方面打下了坚实的基础，并在数据结构、数据库系统、数字逻辑设计等方面积累了实践经验。技术传播、中国社会和心理学等领域的跨学科课程拓宽了我的技能，增强了我对中国文化的了解，提高了沟通能力，培养了团队合作精神。此外，我对项目工作的热情使我开发了各种项目，包括简单的游戏，web应用程序和UI设计，提高了我的技术能力和与不同团队有效合作的能力。\n除了学习，我还积极参加羽毛球俱乐部等课外活动，锻炼了我的领导能力、时间管理能力和团队协作能力。我也接受过音乐方面的训练，获得了英国皇家音乐学院联合委员会颁发的实用钢琴8级和音乐理论5级的成绩。\n就我的个性而言，我是一个积极社交、负责任、思想开放的人，能在不同的环境中茁壮成长。我的优点是善于演讲，善于倾听，有领导潜质。我的座右铭是"努力工作，尽情玩耍"，我始终以奉献、积极和真诚的意愿来应对挑战。'
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
      englishBio: 'Master\'s candidate in Design at NEXT Lab, Zhejiang University, with a background in computer science and design thinking abilities; focuses on theoretical and applied research of AI-generated music, exploring new paradigms of technology-driven music generation, interaction, and emotional expression.',
      chineseBio: '浙江大学NEXT Lab设计专业硕士研究生，具有计算机科学背景和设计思维能力；专注于人工智能音乐的理论和应用研究，探索技术驱动的音乐生成、互动和情感表达的新范式。'
    },
    {
      id: 'feng-youwei',
      name: '冯佑玮',
      englishName: 'Feng Youwei',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2024',
      avatar: '/avatars/feng-yuan.jpeg', // 使用现有头像
      email: 'feng-youwei@zju.edu.cn'
    },
    {
      id: 'huang-qiaoqiao',
      name: '黄巧巧',
      englishName: 'Huang Qiaoqiao',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/huang-qiaoqiao.jpg',
      email: 'huang-qiaoqiao@zju.edu.cn'
    },
    {
      id: 'zhang-chen',
      name: '张晨',
      englishName: 'Zhang Chen',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/zhang-chen.jpg',
      email: 'zhang-chen@zju.edu.cn'
    },
    {
      id: 'zhang-you',
      name: '张优',
      englishName: 'Zhang You',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/zhang-you.jpg',
      email: 'zhang-you@zju.edu.cn'
    },
    {
      id: 'liu-mingyue',
      name: '刘明月',
      englishName: 'Liu Mingyue',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/liu-mingyue.jpg',
      email: 'liu-mingyue@zju.edu.cn'
    },
    {
      id: 'du-dashuang',
      name: '杜大双',
      englishName: 'Du Dashuang',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/du-dashuang.jpg',
      email: 'du-dashuang@zju.edu.cn'
    },
    {
      id: 'tang-ruiyuan',
      name: '唐瑞元',
      englishName: 'Tang Ruiyuan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/tang-ruiyuan.jpg',
      email: 'tang-ruiyuan@zju.edu.cn'
    },
    {
      id: 'pang-bo',
      name: '庞博',
      englishName: 'Pang Bo',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/pang-bo.jpg',
      email: 'pang-bo@zju.edu.cn'
    },
    {
      id: 'wu-qiuning',
      name: '吴秋宁',
      englishName: 'Wu Qiuning',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/wu-qiuning.jpg',
      email: 'wu-qiuning@zju.edu.cn'
    },
    {
      id: 'lin-liangjie',
      name: '林良杰',
      englishName: 'Lin Liangjie',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/lin-liangjie.jpeg',
      email: 'lin-liangjie@zju.edu.cn'
    },
    {
      id: 'chen-yitong',
      name: '陈艺彤',
      englishName: 'Chen Yitong',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2020',
      avatar: '/avatars/chen-yitong.jpg',
      email: 'chen-yitong@zju.edu.cn'
    },
    {
      id: 'wang-jiaqi',
      name: '王家琪',
      englishName: 'Wang Jiaqi',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2021',
      avatar: '/avatars/wang-jiaqi.png',
      email: 'wang-jiaqi@zju.edu.cn'
    },
    {
      id: 'jia-zhongyu',
      name: '贾中宇',
      englishName: 'Jia Zhongyu',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2021',
      avatar: '/avatars/jia-zhongyu.jpg',
      email: 'jia-zhongyu@zju.edu.cn'
    },
    {
      id: 'lin-han',
      name: '林涵',
      englishName: 'Lin Han',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2021',
      avatar: '/avatars/lin-han.jpeg',
      email: 'lin-han@zju.edu.cn'
    },
    {
      id: 'cai-shixuan',
      name: '蔡诗轩',
      englishName: 'Cai Shixuan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2021',
      avatar: '/avatars/cai-shixuan.png',
      email: 'cai-shixuan@zju.edu.cn'
    },
    {
      id: 'chen-mingwei',
      name: '陈明伟',
      englishName: 'Chen Mingwei',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/chen-mingwei.jpg',
      email: 'chen-mingwei@zju.edu.cn'
    },
    {
      id: 'chen-zewen',
      name: '陈泽文',
      englishName: 'Chen Zewen',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2021',
      avatar: '/avatars/chen-zewen.jpeg',
      email: 'chen-zewen@zju.edu.cn'
    },
    {
      id: 'shen-lvkesheng',
      name: '沈吕克生',
      englishName: 'Shen Lvkesheng',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/shenlv-kecheng.jpg',
      email: 'shen-lvkesheng@zju.edu.cn'
    },
    {
      id: 'zhang-qiyuan',
      name: '张启元',
      englishName: 'Zhang Qiyuan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/zhang-qiyuan.png',
      email: 'zhang-qiyuan@zju.edu.cn'
    },
    {
      id: 'huang-ouying',
      name: '黄欧英',
      englishName: 'Huang Ouying',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/huang-ouying.jpg',
      email: 'huang-ouying@zju.edu.cn'
    },
    {
      id: 'duan-xuan',
      name: '段璇',
      englishName: 'Duan Xuan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/duan-xuan.jpg',
      email: 'duan-xuan@zju.edu.cn'
    },
    {
      id: 'hong-zizhen',
      name: '洪子真',
      englishName: 'Hong Zizhen',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/hong-zizhen.jpeg',
      email: 'hong-zizhen@zju.edu.cn'
    },
    {
      id: 'feng-yuan',
      name: '冯源',
      englishName: 'Feng Yuan',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/feng-yuan.jpeg',
      email: 'feng-yuan@zju.edu.cn'
    },
    {
      id: 'shen-hanshu',
      name: '沈汉书',
      englishName: 'Shen Hanshu',
      category: 'Master Students',
      position: 'Master student in Design Studies, 2022',
      avatar: '/avatars/shen-hanshu.jpg',
      email: 'shen-hanshu@zju.edu.cn'
    },
    {
      id: 'zhang-lekai',
      name: '张乐凯',
      englishName: 'Zhang Lekai',
      category: 'Faculty & Researchers',
      position: 'Visiting Scholar, Postdoctoral Researcher',
      avatar: '/avatars/zhang-lekai.jpg',
      email: 'zhang-lekai@zju.edu.cn'
    },
    {
      id: 'xing-baixi',
      name: '邢白夕',
      englishName: 'Xing Baixi',
      category: 'Faculty & Researchers',
      position: 'Postdoctoral Researcher',
      avatar: '/images/next-lab-logo.png',
      email: 'xing-baixi@zju.edu.cn'
    },
    {
      id: 'ji-shulei',
      name: '吉姝蕾',
      englishName: 'Ji Shulei',
      category: 'Faculty & Researchers',
      position: 'Postdoctoral Researcher',
      avatar: '/images/next-lab-logo.png',
      email: 'ji-shulei@zju.edu.cn'
    },

    // Staff
    
    // Alumni
    {
      id: 'wang-wenjing',
      name: '王雯静',
      englishName: 'Wang Wenjing',
      category: 'Alumni',
      position: 'Master student in Engineering Management, 2021',
      avatar: '/avatars/wang-wenjing.jpeg',
      email: 'wenjingw@zju.edu.cn',
      englishBio: 'Education:\nMaster of Engineering Management, Zhejiang University\nBachelor of Computer Science, Hangzhou Dianzi University\nUndergraduate Research & Experience:\nStudied at the Institute of Cognitive and Intelligent Computing;\nSelected for the University-Enterprise(Google) Cooperation National Undergraduate Innovation Training Program;\nSecond Prize, Zhejiang "Challenge Cup" Academic Competition\nCurrent Interests:\nExploring the intersection of AI & Design Thinking.\nPassionate about FinTech Innovation.\nPhilosophy: "Stay Hungry, Stay Foolish!"',
      chineseBio: '教育:\n浙江大学工程管理硕士\n杭州电子科技大学计算机科学学士\n研究与经历：\n曾就读于认知与智能计算研究所；\n入选校企（谷歌）合作国家级大学生创新培养计划；\n浙江省"挑战杯"学术竞赛二等奖\n当前兴趣:\n探索人工智能与设计思维的交集。\n热爱金融科技创新。\n哲理："求知若饥，虚心若愚！"'
    },
    {
      id: 'yin-yehang',
      name: '尹业航',
      englishName: 'Yin Yehang',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/yinyehang.jpg',
      email: 'yin-yehang@zju.edu.cn'
    },
    {
      id: 'wu-runfan',
      name: '吴润凡',
      englishName: 'Wu Runfan',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/wurunfan.jpg',
      email: 'wu-runfan@zju.edu.cn'
    },
    {
      id: 'chen-xinyi',
      name: '陈心怡',
      englishName: 'Chen Xinyi',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/xinyi-fang-2.JPG',
      email: 'chen-xinyi@zju.edu.cn'
    },
    {
      id: 'chen-dan',
      name: '陈丹',
      englishName: 'Chen Dan',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/chendan.jpg',
      email: 'chen-dan@zju.edu.cn'
    },
    {
      id: 'li-yifei',
      name: '李一飞',
      englishName: 'Li Yifei',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/liyifei.jpg',
      email: 'li-yifei@zju.edu.cn'
    },
    {
      id: 'chen-mingzhen',
      name: '陈明真',
      englishName: 'Chen Mingzhen',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/chenmingzhen.jpg',
      email: 'chen-mingzhen@zju.edu.cn'
    },
    {
      id: 'meng-xiao',
      name: '孟晓',
      englishName: 'Meng Xiao',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/mengxiao.jpg',
      email: 'meng-xiao@zju.edu.cn'
    },
    {
      id: 'wu-yonglin',
      name: '吴永林',
      englishName: 'Wu Yonglin',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/wuyonglin.jpg',
      email: 'wu-yonglin@zju.edu.cn'
    },
    {
      id: 'zhao-yanji',
      name: '赵彦吉',
      englishName: 'Zhao Yanji',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/zhaoyanji.jpg',
      email: 'zhao-yanji@zju.edu.cn'
    },
    {
      id: 'li-yu',
      name: '李雨',
      englishName: 'Li Yu',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/liyufang.jpg',
      email: 'li-yu@zju.edu.cn'
    },
    {
      id: 'zhu-xujing',
      name: '朱旭静',
      englishName: 'Zhu Xujing',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/zhuxujing.jpg',
      email: 'zhu-xujing@zju.edu.cn'
    },
    {
      id: 'liao-yichen',
      name: '廖一辰',
      englishName: 'Liao Yichen',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/liaoyichen.jpg',
      email: 'liao-yichen@zju.edu.cn'
    },
    {
      id: 'chen-qihang',
      name: '陈启航',
      englishName: 'Chen Qihang',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2019',
      avatar: '/avatars/chenqihang.jpg',
      email: 'chen-qihang@zju.edu.cn'
    },
    {
      id: 'ye-yuqing',
      name: '叶雨晴',
      englishName: 'Ye Yuqing',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2018',
      avatar: '/avatars/yuqing-fang-2.JPG',
      email: 'ye-yuqing@zju.edu.cn'
    },
    {
      id: 'zhu-kaili',
      name: '朱凯丽',
      englishName: 'Zhu Kaili',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2018',
      avatar: '/avatars/zhukaili.jpg',
      email: 'zhu-kaili@zju.edu.cn'
    },
    {
      id: 'wang-haoyang',
      name: '王浩阳',
      englishName: 'Wang Haoyang',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2018',
      avatar: '/avatars/wang-haoyang.jpg',
      email: 'wang-haoyang@zju.edu.cn'
    },
    {
      id: 'fang-yujun',
      name: '方玉军',
      englishName: 'Fang Yujun',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2018',
      avatar: '/avatars/fangyujunfang.png',
      email: 'fang-yujun@zju.edu.cn'
    },
    {
      id: 'jiang-hanyun',
      name: '江汉云',
      englishName: 'Jiang Hanyun',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2018',
      avatar: '/avatars/jiang-hanyun.jpg',
      email: 'jiang-hanyun@zju.edu.cn'
    },
    {
      id: 'jing-li',
      name: '景丽',
      englishName: 'Jing Li',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2018',
      avatar: '/avatars/jinglifang.png',
      email: 'jing-li@zju.edu.cn'
    },
    {
      id: 'duan-ke',
      name: '段可',
      englishName: 'Duan Ke',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2017',
      avatar: '/avatars/duan-ke.jpg',
      email: 'duan-ke@zju.edu.cn'
    },
    {
      id: 'huang-xiaoyi',
      name: '黄小艺',
      englishName: 'Huang Xiaoyi',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2017',
      avatar: '/avatars/huang-xiaoyi.jpg',
      email: 'huang-xiaoyi@zju.edu.cn'
    },
    {
      id: 'zheng-jun',
      name: '郑军',
      englishName: 'Zheng Jun',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2017',
      avatar: '/avatars/zheng-jun.jpg',
      email: 'zheng-jun@zju.edu.cn'
    },
    {
      id: 'huang-lumin',
      name: '黄鲁敏',
      englishName: 'Huang Lumin',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2016',
      avatar: '/avatars/huanglumin.jpg',
      email: 'huang-lumin@zju.edu.cn'
    },
    {
      id: 'jin-mengqi',
      name: '金梦琪',
      englishName: 'Jin Mengqi',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2016',
      avatar: '/avatars/jin-mengqi.jpg',
      email: 'jin-mengqi@zju.edu.cn'
    },
    {
      id: 'zhang-hui',
      name: '张辉',
      englishName: 'Zhang Hui',
      category: 'Alumni',
      position: 'Doctoral student in Design Studies, 2016',
      avatar: '/avatars/zhanghui.jpg',
      email: 'zhang-hui@zju.edu.cn'
    },
    {
      id: 'li-simeng',
      name: '李思萌',
      englishName: 'Li Simeng',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2016',
      avatar: '/avatars/li-simeng.jpg',
      email: 'li-simeng@zju.edu.cn'
    },
    {
      id: 'kevin-wolterink',
      name: 'Kevin Wolterink',
      englishName: 'Kevin Wolterink',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2015',
      avatar: '/avatars/Kevin-1.jpg',
      email: 'kevin-wolterink@zju.edu.cn'
    },
    {
      id: 'zhang-xiaobin',
      name: '张小斌',
      englishName: 'Zhang Xiaobin',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2015',
      avatar: '/avatars/zhangixaobin-2.jpg',
      email: 'zhang-xiaobin@zju.edu.cn'
    },
    {
      id: 'zhu-qi',
      name: '朱琦',
      englishName: 'Zhu Qi',
      category: 'Alumni',
      position: 'Master student in Design Studies, 2015',
      avatar: '/avatars/zhuqi-3.png',
      email: 'zhu-qi@zju.edu.cn'
    },
    {
      id: 'huang-zhijie',
      name: '黄志杰',
      englishName: 'Huang Zhijie',
      category: 'Alumni',
      position: 'Undergraduate student in Design Studies, 2019',
      avatar: '/avatars/huang-zhijie.png',
      email: 'huang-zhijie@zju.edu.cn'
    }
  ];

export const getTeamMembersByCategory = (category: TeamMember['category']) => {
  return teamMembers.filter(member => member.category === category);
};

export const getTeamMemberById = (id: string) => {
  return teamMembers.find(member => member.id === id);
};
