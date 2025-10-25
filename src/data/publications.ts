export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: string;
  venue: string;
  abstract?: string;
  link?: string;
  demo?: string;
  code?: string;
  additionalInfo?: string;
  chineseLink?: string;
  image: string;
  tags: string[];
}

export const publications: Publication[] = [
  // 2025年论文
  {
    id: "poems-as-musical-instruments",
    title: "Poems as musical instruments: an AI music performance interface based on the concepts of chinese qin songs",
    authors: "Songruoyao Wu, Jiaxing Yu, Kejun Zhang*, Wenqi Wu, Chongjun Zhong, Xiuqi Li",
    year: "2025",
    venue: "Leonardo",
    abstract: "The author has designed a new interface of musical expression called Poem-Qin, which reveals the relationship between text and music, supporting self-accompanied singing and cross-media musical practices. Drawing inspiration from Chinese qin songs and movable-type printing, the author creatively integrates Chinese characters into the interface, controlling music with tone inflections and linguistic rhythms. Moreover, they have developed an AI model for text-to-melody composing to assist in creating new music content. User and audience testing has demonstrated that it offers a positive experience and effective creative results.",
    link: "https://apps.apple.com/us/app/poem-qin/id6504380560",
    image: "/images/Poems as musical instruments cover.png",
    tags: ["Music"]
  },
  {
    id: "singing-timbre-popularity",
    title: "Singing Timbre Popularity Assessment Based on Multimodal Large Foundation Model",
    authors: "Zihao Wang, Ruibin Yuan, Ziqi Geng, Hengjia Li, Xingwei Qu, Xinyi Li, Songye Chen, Haoying Fu, Roger B. Dannenberg, Kejun Zhang",
    year: "2025",
    venue: "Proceedings of the 33rd ACM International Conference on Multimedia",
    abstract: "Automated singing assessment is crucial for education, entertainment, and talent discovery. However, existing systems are hindered by two fundamental limitations: first, their reliance on reference tracks (e.g., the original song), which stifles creative expression, and second, their simplification of complex vocal performances into a single, often non-diagnostic score based on pitch and rhythm. This paradigm fails to capture the nuanced, multifaceted attributes that define expert-level singing. Echoing the recent shift in other AI domains from discriminative to descriptive evaluation, we advocate for a new paradigm in singing assessment. This paper aims to build a complete ecosystem for reference-free, multi-dimensional, and descriptive singing assessment. First, we construct Sing-MD, a large-scale, multi-dimensional singing dataset annotated by experts across four core dimensions: breath control, timbre quality, emotional expression, and vocal technique. Analysis of this dataset reveals a key finding: significant annotation inconsistencies among experts, which challenges the validity of traditional accuracy-based evaluation metrics. Second, standard Multimodal Large Language Models (MLLMs) are unable to analyze full-length songs on resource-constrained, consumer-grade hardware due to memory limitations. This challenge leads to a \"human label-audio input mismatch\" problem and results in poor performance. To address this issue, we designed VocalVerse, an efficient hybrid architecture. It leverages a lightweight acoustic encoder and specialized modules to process the entire song, thereby learning global performance features, modeling long-term dependencies, and ultimately overcoming this limitation. Third, to address the shortcomings of automated metrics, we establish a new evaluation benchmark—HTPR (Human-in-the-loop Tiered Perceptual Ranking)—which evaluates a model's ability to generate perceptually valid performance rankings, rather than predicting a noisy \"ground-truth\" score. Our comprehensive experiments show that on the H-TPR benchmark, our VocalVerse framework can effectively learn and distinguish singing quality across different dimensions, thereby creating perceptually valid quality rankings and significantly outperforming existing baselines.",
    link: "https://doi.org/10.1145/3746027.3758148",
    image: "/images/paper2-singing-cover.png",
    tags: ["Music"]
  },
  {
    id: "multi-accent-mandarin-singing",
    title: "Multi-Accent Mandarin Dry-Vocal Singing Dataset: Benchmark for Singing Accent Recognition",
    authors: "Zihao Wang, Shulei Ji, Le Ma, Yuhang Jin, Shun Lei, Jianyi Chen, Haoying Fu, Roger B. Dannenberg, Kejun Zhang",
    year: "2025",
    venue: "Proceedings of the 33rd ACM International Conference on Multimedia",
    abstract: "Singing accent research is underexplored compared to speech accent studies, primarily due to the scarcity of suitable datasets. Existing singing datasets often suffer from detail loss, frequently resulting from the vocal-instrumental separation process. Additionally, they often lack regional accent annotations. To address this, we introduce the Multi-Accent Mandarin Dry-Vocal Singing Dataset (MADVSD). MADVSD comprises over 670 hours of dry vocal recordings from 4,206 native Mandarin speakers across nine distinct Chinese regions. In addition to each participant recording audio of three popular songs in their native accent, they also recorded phonetic exercises covering all Mandarin vowels and a full octave range. We validated MADVSD through benchmark experiments in singing accent recognition, demonstrating its utility for evaluating state-of-the-art speech models in singing contexts. Furthermore, we explored dialectal influences on singing accent and analyzed the role of vowels in accentual variations, leveraging MADVSD's unique phonetic exercises.",
    link: "https://doi.org/10.1145/3746027.3758210",
    image: "/images/multi-accent-paper-3.png",
    tags: ["Music"]
  },
  {
    id: "ai-assisted-human-pet-musical",
    title: "AI-Assisted Human-Pet Artistic Musical Co-Creation for Wellness Therapy",
    authors: "Zihao Wang, Le Ma, Yuhang Jin, Yongsheng Feng, Xin Pan, Shulei Ji, Kejun Zhang",
    year: "2025",
    venue: "Proceedings of the 34th International Joint Conference on Artificial Intelligence",
    abstract: "This paper explores AI-mediated human-pet musical co-creation from an interdisciplinary perspective, leveraging recent advancements in animal-assisted therapy. These advancements have shown significant psychosocial benefits, especially in reducing anxiety and enhancing social engagement. Building on these findings, this study innovatively employs pet vocal timbres as 'digital avatars' to enhance emotional investment during the music creation process. We propose PetCoCre, a novel system that applies pet vocal timbres in three distinct character paradigms within AI music creation: (1) PetRhythm: using pet voices as rhythmic percussion through beat synchronization. (2) PetMelody: enabling pet voices to act as melodic instruments via pitch-shifting alignment. (3) PetVocalia: utilizing pet vocal timbres as the target timbre for SVC (Singing Voice Conversion), where the converted singing voice replaces the original singer's voice, thus preserving the original semantic content. Beyond these character paradigms, our technical innovation lies in proposing SaMoye, the first open-source, high-quality zero-shot SVC model that effectively overcomes existing methods' zero-shot limitations by employing mixed speaker embeddings for timbre enhancement and leveraging a large-scale singing voice dataset. In our experiments, we collected dog and cat vocalization data from pet stores and conducted experiments with 30 participants. Results demonstrate that the human-pet co-creation mode led to significant enhancements in pleasure and creative satisfaction compared to solo AI music generation, along with a significant reduction in participants' anxiety levels. Through collaborative art creation, this research pioneers new paradigms for animal-assisted therapeutic interventions and expands the boundaries of AI-assisted creative collaboration.",
    link: "https://www.ijcai.org/proceedings/2025/",
    image: "/images/paper4-ai-assisted.png",
    tags: ["Music"]
  },
  {
    id: "ideationweb",
    title: "IdeationWeb: Tracking the Evolution of Design Ideas in Human-AI Co-Creation",
    authors: "Hanshu Shen, Lyukesheng Shen, Wenqi Wu, Kejun Zhang*",
    year: "2025",
    venue: "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems",
    abstract: "Due to the remarkable content generation capabilities, large language models (LLMs) have demonstrated potential in supporting early-stage conceptual design. However, current interaction paradigms often struggle to effectively facilitate multi-round idea exploration and selection, leading to random outputs, unclear iterations, and cognitive overload. To address these challenges, we propose a human-AI co-ideation framework aimed at tracking the evolution of design ideas. This framework leverages a structured idea representation, an analogy-based reasoning mechanism and interactive visualization techniques. It guides both designers and AI to systematically explore design spaces. We also develop a prototype system, IdeationWeb, which integrates an intuitive, mind map-like visual interface and interactive methods to support co-ideation. Our user study validates the framework's feasibility, demonstrating enhanced collaboration and creativity between humans and AI. Furthermore, we identified collaborative design patterns from user behaviors, providing valuable insights for future human-AI interaction design.",
    link: "https://dl.acm.org/doi/10.1145/3706598.3713375",
    image: "/images/content-placeholder.png",
    tags: ["Design"]
  },
  {
    id: "redefining-design-competence",
    title: "Redefining design competence: A framework for equipping product designers in the generative AI era",
    authors: "Kejun Zhang*, Xiaoran Zhang, Wenqi Wu, Songruoyao Wu, Shixuan Cai, Hanshu Shen",
    year: "2025",
    venue: "The Design Journal",
    abstract: "As generative artificial intelligence (AI) is increasingly applied in product design, identifying the new competence designers need to adapt to industry changes has become a topic of high interest in the design community. This study aims to construct a new design competence framework to deepen the understanding of the competence dimensions required by designers in the era of generative AI. First, the initial framework was determined through a literature review. Then, through three rounds of empirical research—semi-structured interviews (N = 35), expert surveys (N = 36), and designer surveys (N = 109)—the specific content of the framework was repeatedly evaluated and refined. Finally, the framework was applied to design practice (N = 43) to explore its impact on design outcomes. The study concluded that design competence in the era of generative AI consists of four core aspects: design aesthetics competence, design thinking competence, design practice competence, and design resilience competence.",
    link: "https://www.tandfonline.com/doi/full/10.1080/14606925.2025.2462862",
    image: "/images/paper14-cover.png",
    tags: ["Design"]
  },
  {
    id: "songglm",
    title: "SongGLM: Lyric-to-Melody Generation with 2D Alignment Encoding and Multi-Task Pre-Training",
    authors: "Jiaxing Yu, Xinda Wu, Yunfei Xu, Tieyao Zhang, Songruoyao Wu, Le Ma, and Kejun Zhang*",
    year: "2025",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
    abstract: "Lyric-to-melody generation aims to automatically create melodies based on given lyrics, requiring the capture of complex and subtle correlations between them. However, previous works usually suffer from two main challenges: 1) lyric-melody alignment modeling, which is often simplified to one-syllable/word-to-one-note alignment, while others have the problem of low alignment accuracy; 2) lyric-melody harmony modeling, which usually relies heavily on intermediates or strict rules, limiting model's capabilities and generative diversity. In this paper, we propose SongGLM, a lyric-to-melody generation system that leverages 2D alignment encoding and multi-task pre-training based on the General Language Model (GLM) to guarantee the alignment and harmony between lyrics and melodies. Specifically, 1) we introduce a unified symbolic song representation for lyrics and melodies with word-level and phrase-level (2D) alignment encoding to capture the lyric-melody alignment; 2) we design a multi-task pre-training framework with hierarchical blank infilling objectives (n-gram, phrase, and long span), and incorporate lyric-melody relationships into the extraction of harmonized n-grams to ensure the lyric-melody harmony. We also construct a large-scale lyric-melody paired dataset comprising over 200,000 English song pieces for pre-training and fine-tuning. The objective and subjective results indicate that SongGLM can generate melodies from lyrics with significant improvements in both alignment and harmony, outperforming all the previous baseline methods.",
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/34766",
    demo: "https://nextlab-zju.github.io/songglm/",
    code: "https://github.com/nextlab-zju/songglm",
    image: "/images/7-cover.png",
    tags: ["Music"]
  },
  {
    id: "intelligent-font-generation",
    title: "An intelligent font generation system based on stroke inference, mitigating production labor and enhancing design experience",
    authors: "Bolin Wang, Kejun Zhang*, Zewen Chen, etc.",
    year: "2025",
    venue: "Expert Systems with Applications",
    abstract: "In the era of artificial intelligence, although font generation technology has made continuous progress, it still faces challenges such as insufficient automation and high manual labor costs. Existing methods struggle to balance efficiency and design quality, and the efficiency issue is particularly prominent in large-scale Chinese font production. To enhance the efficiency of font production, two core problems must be addressed: (1) Accurate stroke generation: Current intelligent font generation methods often fail to accurately reconstruct stroke structures. Deviations in stroke details and design specifications affect overall consistency and aesthetic quality. (2) Efficient intelligent interaction: Traditional font design tools feature complex interaction processes. Adjusting strokes and styles is time-consuming and labor-intensive, lacking intuitive and intelligent editing mechanisms. This leads to high modification costs and cumbersome workflows. To address these issues, this paper proposes an intelligent font generation system based on stroke reasoning. By recognizing and matching font strokes, the system improves generation accuracy and optimizes the production process. A Chinese character information database is constructed to support efficient and precise stroke-level reasoning and generation. Furthermore, the system enables stroke-level interaction, allowing designers to directly adjust stroke details instead of modifying entire characters, thereby enhancing design flexibility and efficiency.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0957417424025247",
    image: "/images/8-cover.png",
    tags: ["Font"]
  },

  // 2024年论文
  {
    id: "remast",
    title: "REMAST: Real-time Emotion-based Music Arrangement with Soft Transition",
    authors: "Zihao Wang, Le Ma, Chen Zhang, Bo Han, Yunfei Xu, Yikai Wang, Xinyi Chen, HaoRong Hong, Wenbo Liu, Xinda Wu, Kejun Zhang*",
    year: "2024",
    venue: "IEEE Transactions on Affective Computing",
    abstract: "Music as an emotional intervention media has important applications in scenarios such as music therapy, games, and movies. However, music needs real-time arrangement according to changing emotions, bringing challenges to balance emotion real-time fit and soft emotion transition due to the fine-grained and mutable nature of the target emotion. Existing studies mainly focus on achieving emotion real-time fit, while the issue of smooth transition remains understudied, affecting the overall emotional coherence of the music. In this paper, we propose REMAST to address this trade-off. Specifically, we recognize the last timestep's music emotion and fuse it with the current timestep's input emotion. The fused emotion then guides REMAST to generate the music based on the input melody. To adjust music similarity and emotion real-time fit flexibly, we downsample the original melody and feed it into the generation model. Furthermore, we design four music theory features by domain knowledge to enhance emotion information and employ semi-supervised learning to mitigate the subjective bias introduced by manual dataset annotation. According to the evaluation results, REMAST surpasses the state-of-the-art methods in objective and subjective metrics. These results demonstrate that REMAST achieves real-time fit and smooth transition simultaneously, enhancing the coherence of the generated music.",
    link: "https://ieeexplore.ieee.org/document/10734159",
    demo: "https://github.com/CarlWangChina/REMAST-Real-time-Emotion-based-Music-Arrangement-with-Soft-Transition",
    code: "https://github.com/CarlWangChina/REMAST-Real-time-Emotion-based-Music-Arrangement-with-Soft-Transition",
    image: "/images/paper9-cover-remast.png",
    tags: ["Music"]
  },
  {
    id: "suno-potential",
    title: "Suno: potential, prospects, and trends",
    authors: "Jiaxing Yu, Songruoyao Wu, Guanting Lu, Zijin Li, Li Zhou, Kejun Zhang*",
    year: "2024",
    venue: "Frontiers of Information Technology & Electronic Engineering",
    abstract: "Suno has attracted wide attention due to its impressive capabilities. It demonstrates technological advancements and opens up new possibilities for music composition, representing a milestone in the development of artificial intelligence (AI) music generation. In this paper, we first introduce the background and summarize the general technical framework of AI music generation, followed by an analysis of Suno's advantages and disadvantages. Finally, we discuss the future trends in Music and AI.",
    link: "https://link.springer.com/article/10.1631/FITEE.2400299",
    image: "/images/10-cover.png",
    tags: ["Music"]
  },
  {
    id: "muchin",
    title: "MuChin: A Chinese Colloquial Description Benchmark for Evaluating Language Models in the Field of Music",
    authors: "Zihao Wang, Shuyu Li, Tao Zhang, Qi Wang, Pengfei Yu, Jinyang Luo, Yan Liu, Ming Xi, Kejun Zhang*",
    year: "2024",
    venue: "Thirty-Third International Joint Conference on Artificial Intelligence",
    abstract: "The rapidly evolving multimodal Large Language Models (LLMs) urgently require new benchmarks to uniformly evaluate their performance on understanding and textually describing music. However, due to semantic gaps between Music Information Retrieval (MIR) algorithms and human understanding, discrepancies between professionals and the public, and low precision of annotations, existing music description datasets cannot serve as benchmarks. To this end, we present MuChin, the first open-source music description benchmark in Chinese colloquial language, designed to evaluate the performance of multimodal LLMs in understanding and describing music. We established the Caichong Music Annotation Platform (CaiMAP) that employs an innovative multi-person, multi-stage assurance method, and recruited both amateurs and professionals to ensure the precision of annotations and alignment with popular semantics. Utilizing this method, we built a dataset with multi-dimensional, high-precision music annotations, the Caichong Music Dataset (CaiMD), and carefully selected 1,000 high-quality entries to serve as the test set for MuChin. Based on MuChin, we analyzed the discrepancies between professionals and amateurs in terms of music description, and empirically demonstrated the effectiveness of annotated data for fine-tuning LLMs. Ultimately, we employed MuChin to evaluate existing music understanding models on their ability to provide colloquial descriptions of music. All data related to the benchmark, along with the scoring code and detailed appendices, have been open-sourced.",
    link: "https://arxiv.org/abs/2402.09871",
    demo: "https://github.com/CarlWangChina/MuChin",
    code: "https://github.com/CarlWangChina/MuChin",
    image: "/images/paper11-muchin-cover.png",
    tags: ["Music"]
  },
  {
    id: "sdmuse",
    title: "SDMuse: Stochastic Differential Music Editing and Generation via Hybrid Representation",
    authors: "C. Zhang, Y. Ren, K. Zhang* and S. Yan",
    year: "2024",
    venue: "IEEE Transactions on Multimedia",
    abstract: "While deep generative models have empowered music generation, it remains a challenging and under-explored problem to edit an existing musical piece at fine granularity. In this article, we propose SDMuse, a unified Stochastic Differential Music editing and generation framework, which can not only compose a whole musical piece from scratch, but also modify existing musical pieces in many ways, such as combination, continuation, inpainting, and style transferring. The proposed SDMuse follows a two-stage pipeline to achieve music generation and editing on top of a hybrid representation including pianoroll and MIDI-event. In particular, SDMuse first generates/edits pianoroll by iteratively denoising through a stochastic differential equation (SDE) based on a diffusion model generative prior, and then refines the generated pianoroll and predicts MIDI-event tokens auto-regressively. We evaluate the generated music of our method on ailabs1k7 pop music dataset in terms of quality and controllability on various music editing and generation tasks. Experimental results demonstrate the effectiveness of our proposed stochastic differential music editing and generation process, as well as the hybrid representations.",
    link: "https://ieeexplore.ieee.org/document/10149095",
    image: "/images/SDMuse.jpeg",
    tags: ["Music"]
  },

  // 2023年论文
  {
    id: "werewolf-xl",
    title: "Werewolf-XL: A Database for Identifying Spontaneous Affect in Large Competitive Group Interactions",
    authors: "Kejun Zhang, Xinda Wu, Xinhang Xie, Xiaoran Zhang, Hui Zhang, Xiaoyu Chen, Lingyun Sun",
    year: "2023",
    venue: "IEEE Transactions on Affective Computing",
    abstract: "Affective computing and natural human-computer interaction, which would be capable of interpreting and responding intelligently to the social cues of interaction in crowds, are more needed than ever as an individual's affective experience is often related to others in group activities. To develop the next-generation intelligent interactive systems, we require numerous human facial expressions with accurate annotations. However, existing databases usually consider nonspontaneous human behavior (posed or induced), individual or dyadic setting, and a single type of emotion annotation. To address this need, we created the Werewolf-XL database, which contains a total of 890 minutes of spontaneous audio-visual recordings of 129 subjects in a group interaction of nine individuals playing a conversational role-playing game called Werewolf. We provide 131,688 individual utterance-level video clips with internal self-assessment of 18 non-prototypical emotional categories and external assessment of pleasure, arousal, and dominance, including 14,632 speakers' samples and the rest of listeners' samples. Besides, the results of the annotation agreement analysis show fair reliability and validity. Role information and outcomes of the game are also recorded. Furthermore, we provided extensive benchmarks of unimodal and multimodal emotional recognition results. The database is made publicly available.",
    link: "https://ieeexplore.ieee.org/document/9506939",
    image: "/images/Werewolf-XL.png",
    tags: ["Music"]
  },

  // 2022年论文
  {
    id: "songdriver",
    title: "SongDriver: Real-time Music Accompaniment Generation without Logical Latency nor Exposure Bias",
    authors: "Zihao Wang, Kejun Zhang*, Yuxing Wang, Chen Zhang, Qihao Liang, Pengfei Yu, Yongsheng Feng, Wenbo Liu, etc.",
    year: "2022",
    venue: "Proceedings of the 30th ACM International Conference on Multimedia",
    abstract: "Real-time music accompaniment generation has a wide range of applications in the music industry, such as music education and live performances. However, automatic real-time music accompaniment generation is still understudied and often faces a trade-off between logical latency and exposure bias. In this paper, we propose SongDriver, a real-time music accompaniment generation system without logical latency nor exposure bias. Specifically, SongDriver divides one accompaniment generation task into two phases: 1) The arrangement phase, where a Transformer model first arranges chords for input melodies in real-time, and caches the chords for the next phase instead of playing them out. 2) The prediction phase, where a CRF model generates playable multi-track accompaniments for the coming melodies based on previously cached chords. With this two-phase strategy, SongDriver directly generates the accompaniment for the upcoming melody, achieving zero logical latency. Furthermore, when predicting chords for a timestep, SongDriver refers to the cached chords from the first phase rather than its previous predictions, which avoids the exposure bias problem. Since the input length is often constrained under real-time conditions, another potential problem is the loss of long-term sequential information. To make up for this disadvantage, we extract four musical features from a long-term music piece before the current time step as global information. In the experiment, we train SongDriver on some open-source datasets and an original àiMusic Dataset built from Chinese-style modern pop music sheets. The results show that SongDriver outperforms existing SOTA (state-of-the-art) models on both objective and subjective metrics, meanwhile significantly reducing the physical latency.",
    link: "https://dl.acm.org/doi/10.1145/3503161.3548368",
    demo: "https://github.com/CarlWangChina/SongDriver-Real-time-Music-Accompaniment-Generation-without-Logical-Latency-nor-Exposure-Bias",
    code: "https://github.com/CarlWangChina/SongDriver-Real-time-Music-Accompaniment-Generation-without-Logical-Latency-nor-Exposure-Bias",
    image: "/images/SongDriver.jpeg",
    tags: ["Music"]
  },
  {
    id: "relyme",
    title: "ReLyMe: Improving Lyric-to-Melody Generation by Incorporating Lyric-Melody Relationships",
    authors: "Zhang, Chen, Luchin Chang, Songruoyao Wu, Xu Tan, Tao Qin, Tie-Yan Liu, and Kejun Zhang*",
    year: "2022",
    venue: "Proceedings of the 30th ACM International Conference on Multimedia",
    abstract: "Lyric-to-melody generation, which generates melody according to given lyrics, is one of the most important automatic music composition tasks. With the rapid development of deep learning, previous works address this task with end-to-end neural network models. However, deep learning models cannot well capture the strict but subtle relationships between lyrics and melodies, which compromises the harmony between lyrics and generated melodies. In this paper, we propose ReLyMe, a method that incorporates Relationships between Lyrics and Melodies from music theory to ensure the harmony between lyrics and melodies. Specifically, we first introduce several principles that lyrics and melodies should follow in terms of tone, rhythm, and structure relationships. These principles are then integrated into neural network lyric-to-melody models by adding corresponding constraints during the decoding process to improve the harmony between lyrics and melodies. We use a series of objective and subjective metrics to evaluate the generated melodies. Experiments on both English and Chinese song datasets show the effectiveness of ReLyMe, demonstrating the superiority of incorporating lyric-melody relationships from the music domain into neural lyric-to-melody generation.",
    link: "https://dl.acm.org/doi/10.1145/3503161.3548357",
    additionalInfo: "论文网站有视频可供下载",
    image: "/images/ReLyMe.png",
    tags: ["Music"]
  },
  {
    id: "few-shot-font",
    title: "Few-shot font style transfer with multiple style encoders",
    authors: "Zhang Kejun, Zhang Rui, Wu Yonglin, Li Yifei, Ling Yonggen, Wang Bolin, Sun Lingyun, Li Yingming",
    year: "2022",
    venue: "Science China Information Sciences",
    link: "https://www.nstl.gov.cn/paper_detail.html?id=cf451d9d8821a6023e5e18cfd4685ef5",
    image: "/images/Few-shot font style transfer.jpg",
    tags: ["Font"]
  },
  {
    id: "visual-knowledge-seal",
    title: "Visual knowledge guided intelligent generation of Chinese seal carving",
    authors: "Zhang Kejun, Zhang Rui, Yin Yehang, Li Yifei, Wu Wenqi, Sun Lingyun, Wu Fei, Deng Huanghuang, Pan Yunhe",
    year: "2022",
    venue: "Frontiers of Information Technology & Electronic Engineering",
    abstract: "We digitally reproduce the process of resource collaboration, design creation, and visual presentation of Chinese seal-carving art. We develop an intelligent seal-carving art-generation system (Zhejiang University Intelligent Seal-Carving System, http://www.next.zju.edu.cn/seal/; the website of the seal-carving search and layout system is http://www.next.zju.edu.cn/seal/search_app/) to deal with the difficulty in using a visual knowledge guided computational art approach. The knowledge base in this study is the Qiushi Seal-Carving Database, which consists of open datasets of images of seal characters and seal stamps. We propose a seal character generation method based on visual knowledge, guided by the database and expertise. Furthermore, to create the layout of the seal, we propose a deformation algorithm to adjust the seal characters and calculate layout parameters from the database and knowledge to achieve an intelligent structure. Experimental results show that this method and system can effectively deal with the difficulties in the generation of seal carving. Our work provides theoretical and applied references for the rebirth and innovation of seal-carving art.",
    link: "https://link.springer.com/article/10.1631/FITEE.2100094?noAccess=true",
    demo: "http://www.next.zju.edu.cn/seal/",
    image: "/images/seal-create.png",
    tags: ["Font"]
  },
  {
    id: "multimodal-emotion-recognition",
    title: "A Multimodal Framework for Large-Scale Emotion Recognition by Fusing Music and Electrodermal Activity Signals",
    authors: "Yin, Guanghao., Sun, Shouqian., Yu, Dian., Li, Dejian., Kejun Zhang*",
    year: "2022",
    venue: "ACM Transactions on Multimedia Computing, Communications and Applications",
    abstract: "Considerable attention has been paid to physiological signal-based emotion recognition in the field of affective computing. For reliability and user-friendly acquisition, electrodermal activity (EDA) has a great advantage in practical applications. However, EDA-based emotion recognition with large-scale subjects is still a tough problem. The traditional well-designed classifiers with hand-crafted features produce poorer results because of their limited representation abilities. And the deep learning models with auto feature extraction suffer the overfitting drop-off because of large-scale individual differences. Since music has a strong correlation with human emotion, static music can be involved as the external benchmark to constrain various dynamic EDA signals. In this article, we make an attempt by fusing the subject's individual EDA features and the external evoked music features. And we propose an end-to-end multimodal framework, the one-dimensional residual temporal and channel attention network (RTCAN-1D). For EDA features, the channel-temporal attention mechanism for EDA-based emotion recognition is first involved in mine the temporal and channel-wise dynamic and steady features. The comparisons with single EDA-based SOTA models on DEAP and AMIGOS datasets prove the effectiveness of RTCAN-1D to mine EDA features. For music features, we simply process the music signal with the open-source toolkit openSMILE to obtain external feature vectors. We conducted systematic and extensive evaluations. The experiments on the current largest music emotion dataset PMEmo validate that the fusion of EDA and music is a reliable and efficient solution for large-scale emotion recognition.",
    link: "https://dl.acm.org/doi/10.1145/3490686",
    image: "/images/A Multimodal Framework for Large-Scale Emotion Recognition.png",
    tags: ["Music"]
  },

  // 2021年论文
  {
    id: "denoispeech",
    title: "Denoispeech: Denoising text to speech with frame-level noise modeling",
    authors: "Zhang, Chen, Yi Ren, Xu Tan, Jinglin Liu, Kejun Zhang*, Tao Qin, Sheng Zhao, and Tie-Yan Liu",
    year: "2021",
    venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
    abstract: "While neural-based text to speech (TTS) models can synthesize natural and intelligible voice, they usually require high-quality speech data, which is costly to collect. In many scenarios, only noisy speech of a target speaker is available, which presents challenges for TTS model training for this speaker. Previous works usually address the challenge using two methods: 1) training the TTS model using the speech denoised with an enhancement model; 2) taking a single noise embedding as input when training with noisy speech. However, they usually cannot handle speech with real-world complicated noise such as those with high variations along time. In this paper, we develop DenoiSpeech, a TTS system that can synthesize clean speech for a speaker with noisy speech data. In DenoiSpeech, we handle real-world noisy speech by modeling the fine-grained frame-level noise with a noise condition module, which is jointly trained with the TTS model. Experimental results on real-world data show that DenoiSpeech outperforms the previous two methods by 0.31 and 0.66 MOS respectively.",
    link: "https://ieeexplore.ieee.org/document/9413934",
    image: "/images/Denoispeech.jpeg",
    tags: ["Music"]
  },

  // 2018年论文
  {
    id: "pmemo-dataset",
    title: "The PMEmo Dataset for Music Emotion Recognition",
    authors: "Kejun Zhang, Hui Zhang, Simeng Li, Changyuan Yang, Lingyun Sun",
    year: "2018",
    venue: "International Conference on Multimedia Retrieval",
    abstract: "Music Emotion Recognition (MER) has recently received considerable attention. To support the MER research which requires large music content libraries, we present the PMEmo dataset containing emotion annotations of 794 songs as well as the simultaneous electrodermal activity (EDA) signals. A Music Emotion Experiment was well-designed for collecting the affective-annotated music corpus of high quality, which recruited 457 subjects. The dataset is publically available to the research community, which is foremost intended for benchmarking in music emotion retrieval and recognition. To straightforwardly evaluate the methodologies for music affective analysis, it also involves pre-computed audio feature sets. In addition to that, manually selected chorus excerpts (compressed in MP3) of songs are provided to facilitate the development of chorus-related research. In this article, We describe in detail the resource acquisition, subject selection, experiment design and annotation collection procedures, as well as the dataset content and data reliability analysis. We also illustrate its usage in some simple music emotion recognition tasks which testified the PMEmo dataset's competence for the MER work. Compared to other homogeneous datasets, PMEmo is novel in the organization and management of the recruited annotators, and it is also characterized by its large amount of music with simultaneous physiological signals.",
    link: "https://dl.acm.org/doi/10.1145/3206025.3206037",
    image: "/images/The PMEmo Dataset.png",
    tags: ["Music"]
  },

  // 2017年论文
  {
    id: "rehabilitation-exoskeleton-control",
    title: "Research on the Control Method of an Upper-limb Rehabilitation Exoskeleton Based on Classification of Motor Imagery EEG",
    authors: "Zhichuan Tang, Shouqian Sun, Kejun Zhang*",
    year: "2017",
    venue: "Journal of Mechanical Engineering",
    abstract: "For solving the problem how the hemiplegic patients control the upper-limb exoskeleton during the active rehabilitation training, this study proposed an EEG classification method based on single-trial motor imagery. And this method in the real-time control of an upper-limb exoskeleton developed is applied. Aiming at the low noise-signal ratio and large individual differences of EEG, an advanced CSP algorithm for feature extraction is proposed. Combining this algorithm with SVM classifier, the single-trial motor imagery EEG is classified. Then, this method to construct classification models in two different paradigms is used, and evaluated the classification performance of two models. The classification model which had a better performance is applied in the real-time control of an upper-limb exoskeleton, to verify the feasibility of this method. The average accuracy is 87.12%±2.03% across all subjects in real-time control. The results demonstrate that the upper-limb exoskeleton can be controlled accurately based on the proposed method, and this study is provided the theory evidence and practical basis for BCI technology used in the rehabilitation training.",
    link: "https://qikan.cmes.org/jxgcxb/EN/10.3901/JME.2017.10.060",
    image: "/images/Research on the Control Method of an Upper-limb Rehabilitation Exoskeleton.jpeg",
    tags: ["Design"]
  },

  // 2016年论文
  {
    id: "motor-imagery-cnn",
    title: "Motor Imagery Classification Based on Deep Convolutional Neural Network and Its Application in Exoskeleton Controlled by EEG",
    authors: "Zhichuan Tang, Kejun Zhang*, Chao Li, Shouqian Sun, Qi Huang, Sanyuan Zhang",
    year: "2016",
    venue: "Chinese Journal of Computers",
    abstract: "Brain-Computer Interface (BCI) based on motor imagery (MI) has been applied in the rehabilitation exoskeleton widely. In the practical use, the low signal-noise ratio of electroencephalogram (EEG) signal results in the low classification accuracy in BCI. Therefore, many studies have focused on the improvement of feature extraction and classification algorithms. In this paper, we proposed an original method based on the deep convolutional neural network (CNN) to perform feature extraction and classification for single-trial MI EEG signal. Firstly, according to the EEG signal's characteristic that combining time and space information, we constructed a 5-layer CNN model to classify the MI; secondly, MI experimental paradigm was designed based on imagining left hand movement and foot movement, and the experimental data of MI were collected; thirdly, the proposed method was used in the public data set and experimental data set to build classification model, compared with the other three methods (power+SVM, CSP+SVM and MRA+LDA); finally, the classification model which achieved the best classification performance was applied in real-time control of upper-limb exoskeleton to verify the effectiveness of our proposed method. The results demonstrate that CNN can further improve classification performance: the average accuracies of public data set (90.75% ±2.47%) and experimental data set (89.51%±2.95%) using CNN are both higher than that using the other three methods. Furthermore, in real-time control of upper-limb exoskeleton, the average accuracy of all subjects reaches to 88.75% ±3.42%, which verifies the effectiveness of the CNN method. The proposed method can recognize MI, and provides theoretical basis and technical support for BCI applications in the field of rehabilitation exoskeleton.",
    link: "https://kns.cnki.net/kcms2/article/abstract?v=Y2E-z2Sa5CMkHvH2Yl2aaU6eV6gqklmQtEAqXv7yJRZasyOs-4tInBEV6xvghs4JoTZjnFUttuseJh029bwhWgKiUbYFnDFlu8Lbc8HUHEDBEHtjrgJcOZGTTc3x2rsfQjbqzvcOFQPR_C4HoxHclyPbj51-LG7l8xbTHdc4KKc9DpIe6OEYgQ==&uniplatform=NZKPT&language=CHS",
    image: "/images/Motor Imagery Classification.jpeg",
    tags: ["Design"]
  },
  {
    id: "gender-differences-online",
    title: "Gender differences in the effect of communication on college students' online decisions",
    authors: "Chunlei Chai, Xun Wu, Danni Shen, Dan Li, Kejun Zhang*",
    year: "2016",
    venue: "Computers in Human Behavior",
    abstract: "This study focuses on gender differences in the influence of online communication on e-commerce purchase decision strategies. From the literature, we deduce a new theoretical model based on three foundational theories and design a 2 ∗ 2 mixed factorial experiment to test the influence of online communication in cases with and without online communication. This involves analyzing screen-recording data to check the effect of shopping behavior initiation, and using questionnaire research to test differences in the user experience before and after such communication. Finally, we concluded that the influence of online communication differs between men and women, and the influence is largely positive to both males and females.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0747563216305015",
    image: "/images/Gender differences.png",
    tags: ["Design"]
  },

  // 2015年论文
  {
    id: "shadow-puppet",
    title: "A method of shadow puppet figure modeling and animation",
    authors: "Xiaofang Huang, Shouqian Sun, Kejun Zhang*, Tianning Xu, Jianfeng Wu, Bin Zhu",
    year: "2015",
    venue: "Frontiers of Informaiton Technology & Electronic Engineering",
    abstract: "To promote the development of the intangible cultural heritage of the world, shadow play, many studies have focused on shadow puppet modeling and interaction. Most of the shadow puppet figures are still imaginary, spread by ancients, or carved and painted by shadow puppet artists, without consideration of real dimensions or the appearance of human bodies. This study proposes an algorithm to transform 3D human models to 2D puppet figures for shadow puppets, including automatic location of feature points, automatic segmentation of 3D models, automatic extraction of 2D contours, automatic clothes matching, and animation. Experiment proves that more realistic and attractive figures and animations of the shadow puppet can be generated in real time with this algorithm.",
    link: "https://link.springer.com/article/10.1631/FITEE.1400351",
    image: "/images/A method of shadow puppet figure modeling and animation.jpeg",
    tags: ["Font"]
  },
  {
    id: "emotion-driven-music-image",
    title: "Emotion-driven Chinese folk music-image retrieval based on DE-SVM",
    authors: "Xing, B., Zhang, K*., Sun, S., Zhang, L., Gao, Z., Wang,J., and Chen, S",
    year: "2015",
    venue: "Neurocomputing",
    abstract: "In this study, we attempt to explore cross-media retrieval between music and image data based on the emotional correlation. Emotion feature analytic could be the bridge of cross-media retrieval, since emotion represents the user׳s perspective and effectively meets the user׳s retrieval need. Currently, there is little research about the emotion correlation of different multimedia data (e.g. image or music). We propose a promising model based on Differential Evolutionary-Support Vector Machine (DE-SVM) to build up the emotion-driven cross-media retrieval system between Chinese folk image and Chinese folk music. In this work, we first build up the Chinese Folk Music Library and Chinese Folk Image Library. Second, we compare Back Propagation(BP), Linear Regression(LR) and Differential Evolutionary-Support Vector Machine (DE-SVM), and find that DE-SVM has the best performance. Then we conduct DE-SVM to build the optimal model for music/image emotion recognition. Finally, an Emotion-driven Chinese Folk Music-Image Exploring System based on DE-SVM is developed and experiment results show our method is effective in terms of retrieval performance.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0925231214010212",
    image: "/images/Emotion-driven Chinese folk music-image retrieval.jpg",
    tags: ["Music"]
  },

  // 2014年论文
  {
    id: "designers-perception-sketching",
    title: "Designers' perception during sketching: An examination of Creative Segment theory using eye movements",
    authors: "Sun Lingyun, Xiang Wei, Chai Chunlei, Yang Zhiyuan, Zhang, Kejun",
    year: "2014",
    venue: "Design Studies",
    abstract: "As a visual thinking tool, sketching strongly supports the conceptual stage of product design. Designers perceive their sketches and discover new ideas. Creative Segment theory models sketching process as a Creative Segment tree, and reveals the Creative Segment-centered pattern of sketching activities. However, the perception of sketches is important during sketching, whether designers' perception is in accord with this theory has not been examined. This article reports an experiment that recorded participants' eye movements to analyze their perception. Participants displayed unique eye movement features during Creative Segments, their fixations changed during the generation of Creative Segments and differed when generating Creative Segments on the three-level branches of the tree. These results provide evidence for the Creative Segment theory.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0142694X14000428",
    image: "/images/Designers perception during sketching.png",
    tags: ["Design"]
  },
  {
    id: "vibration-backpack-ergonomics",
    title: "An ergonomics evaluation of the vibration backpack harness system in walking",
    authors: "Zhichuan Tang, Shouqian Sun, Jian Wang, Kejun Zhang*",
    year: "2014",
    venue: "International Journal of Industrial Ergonomics",
    abstract: "Many studies in backpack design have been focused on reducing trunk muscle activity and improving overall comfort while the wearers (college students and outdoor enthusiasts) were walking. However, little work has done on combining the vibration with harness system design. The purpose of the present study was to evaluate the effect of the vibration backpack harness system on trunk muscle activity and overall comfort in walking. There were four vibrators sewn in the four different positions of our harness system. Subjects were asked to support a load (20% body weight) on their backpack while performing 5-min walking trials on the treadmill (speed = 1.6 m/s) with different frequencies of vibration (0 Hz, 28 Hz, 35 Hz, 42 Hz). The objective measures of trunk muscle activity (electromyography) were obtained during the walking task. Subjects also were asked to complete subjective ratings of comfort. The results of the objective measures in this study had shown that the vibration function had a positive effect on reducing muscle activity for upper trapezius (UT), but not for erector spinae (ES). From the data of the two subjective surveys in our study, the comfort level of no-vibration state (0 Hz) was worse than vibration state (28 Hz, 35 Hz, 42 Hz) for both muscles, and when the frequency was 35 Hz, the comfort of the harness system was higher than the other three frequencies. The findings of the present study support that backpack with low frequency vibration has a positive effect on reducing trunk muscle activity and improving overall comfort level for wearers in walking.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0169814114001279",
    image: "/images/An ergonomics evaluation of the vibration backpack harness system in walking.png",
    tags: ["Design"]
  },

  // 2013年论文
  {
    id: "web-music-emotion-recognition",
    title: "Web Music Emotion Recognition Based on Higher Effective Gene Expression Programming",
    authors: "Kejun Zhang, Shouqian Sun",
    year: "2013",
    venue: "Neurocomputing",
    abstract: "In the study, we present a higher effective algorithm, called revised gene expression programming (RGEP), to construct the model for music emotion recognition. Our main contributions are as follows: firstly, we describe the basic mechanisms of music emotion recognition and introduce gene expression programming (GEP) to deal with the model construction for music emotion recognition. Secondly, we present RGEP based on backward-chaining evolutionary algorithm and use GEP, RGEP, and SVM to construct the models for music emotion recognition separately, the results show that the models obtained by SVM, GEP, and RGEP are satisfactory and well confirm the experimental values. Finally, we report the comparison of these models, and we find that the model obtained by RGEP outperforms classification accuracy of the model by GEP and takes almost 15% less processing time of GEP and even half processing time of SVM, which offers a new efficient way for solving music emotion recognition problems; moreover, because processing time is essential for the problem of large scale music information retrieval, therefore, RGEP might prompt the development of the music information retrieval technology.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0925231212007035",
    image: "/images/Web Music Emotion Recognition.jpeg",
    tags: ["Music"]
  }
];

export function getPublicationById(id: string): Publication | undefined {
  return publications.find(pub => pub.id === id);
}

export function getPublicationsByYear(year: string): Publication[] {
  return publications.filter(pub => pub.year === year);
}

export function getAllPublications(): Publication[] {
  return publications.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}
