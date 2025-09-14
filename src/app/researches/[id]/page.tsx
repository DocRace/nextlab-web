import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMemberById } from "@/data/team";

const researches = {
  "music": {
    title: "NEXT + Music | Engineering the Future of Music with AI",
    date: "Updated",
    tags: ["Music Group"],
    image: "/images/research-music.png",
    link: "/researches",
    overview: `
<h4 class="font-bold text-lg mt-6 mb-2">WHAT: What We Do</h4>
<p>Our mission is to empower the innovation of music art and design by leveraging musical knowledge as our guide and artificial intelligence as our computational engine, building an ecosystem for creation and application that encompasses music generation, human-computer interaction in music, computational analysis of music and emotion, and multimodal music recommendation, to progressively address the challenges of intelligent music empowerment and production.</p>

<h4 class="font-bold text-lg mt-6 mb-2">WHY: Our Vision</h4>
<p>Throughout history, music has fascinated countless musicians and scholars with its abstract auditory expression and emotional power. As cross-media becomes a market hotspot, the demand for emotional expression through music is growing, and efficient models for audio-visual fusion are urgently needed. We aim to leverage AI, affective computing, and interaction design to clarify the essence of musical emotion, explore adaptive solutions for audio-visual fusion, and achieve high-quality, high-efficiency music creation accessible to all.</p>

<h4 class="font-bold text-lg mt-6 mb-2">HOW: How We Do It</h4>
<p>The group conducts research in music intelligence, focusing on building an audio-visual intelligent interaction ecosystem. Key areas include intelligent music generation, music structure analysis, cross-media image-audio recommendation, and user studies guided by music. We emphasize database construction, intelligent composition algorithms, short video generation models, and are developing related websites and apps.</p>

<h4 class="font-bold text-lg mt-6 mb-2">PROGRESS: Achievements & Progress</h4>
<p>The group has received support from national and provincial research funds, as well as industry partners like Alibaba and Huawei. Achievements include:</p>
<ul class="list-disc pl-6 mb-4">
  <li>Over 30 papers published in top journals and conferences (IEEE Trans. on Affective Computing, ACM MM, AAAI, ICASSP, etc.)</li>
  <li>Multiple invention patents and software copyrights</li>
  <li>Innovative projects such as short audio generation for e-commerce, cross-media creative platforms, and AI-driven music training tools</li>
  <li>National awards in innovation and entrepreneurship competitions</li>
</ul>
<p>For more, visit: <a href="https://alibabawood.aliyun.com/" class="text-blue-600 underline hover:text-blue-800" target="_blank">AlibabaWood</a>, <a href="https://enjoymusic.ai/" class="text-blue-600 underline hover:text-blue-800" target="_blank">StepBeats</a>, <a href="https://maddelta.com/" class="text-blue-600 underline hover:text-blue-800" target="_blank">MadDelta</a></p>

<h4 class="font-bold text-lg mt-6 mb-2">JOIN: Join Us</h4>
<p>If you love music, have a background in music theory, performance, or creation, or are interested in AI composition, product design, or programming, we welcome you to join us! We offer academic internships, summer camps, SRTP, and guidance for undergraduate theses. Contact: Wu (11921149@zju.edu.cn), Prof. Zhang (zhangkejun@zju.edu.cn)</p>
`,
    members: {
      leaders: [
        { id: 'wu-songruoyao', name: 'Songruoyao Wu' },
        { id: 'yu-jiaxing', name: 'Jiaxing Yu' },
      ],
      members: [
        { id: 'wang-zihao', name: 'Zihao Wang' },
        { id: 'zhong-chongjun', name: 'Chongjun Zhong' },
        { id: 'ma-le', name: 'Le Ma' },
        { id: 'zheng-zehui', name: 'Zehui Zheng' },
        { id: 'liu-haoxuan', name: 'Haoxuan Liu' },
        { id: 'lu-xinye', name: 'Xinye Lu' },
        { id: 'liu-huaying', name: 'Huaying Liu' },
        { id: 'feng-youwei', name: 'Youwei Feng' },
        { id: 'li-shuyu', name: 'Shuyu Li' },
        { id: 'chen-yizhao', name: 'Yizhao Chen' },
        { id: 'huang-ziyi', name: 'Ziyi Huang' },
      ]
    },
    projects: [
      {
        id: 'wuyun',
        title: 'WuYun: Hierarchical skeleton-guided melody generation',
        cover: '/images/project1.jpg',
        href: '/researches/music/projects/wuyun'
      },
      {
        id: 'mind-band',
        title: 'Mind Band: Crossmedia AI Music Composing Platform',
        cover: '/images/project2.jpg',
        external: 'https://nextlab-zju.github.io'
      },
      {
        id: 'lyric2melody',
        title: 'Lyric-to-Melody & Text-to-Music Generation',
        cover: '/images/project3.jpg',
        external: 'https://nextlab-zju.github.io'
      },
      {
        id: 'multimodal-music',
        title: 'Multimodal Music Applications',
        cover: '/images/project4.jpg',
        external: 'https://nextlab-zju.github.io'
      }
    ],
    publications: [
      { id: 'poems-as-musical-instruments', title: 'Poems as musical instruments' },
      { id: 'songglm', title: 'SongGLM' },
      { id: 'remast', title: 'REMAST' },
      { id: 'suno-potential', title: 'Suno: potential, prospects, and trends' },
      { id: 'muchin', title: 'MuChin' },
      { id: 'sdmuse', title: 'SDMuse' },
      { id: 'werewolf-xl', title: 'Werewolf-XL' },
      { id: 'songdriver', title: 'SongDriver' },
      { id: 'relyme', title: 'ReLyMe' },
      { id: 'multimodal-emotion-recognition', title: 'A Multimodal Framework for Large-Scale Emotion Recognition' },
      { id: 'denoispeech', title: 'DenoiSpeech' },
      { id: 'pmemo-dataset', title: 'PMEmo Dataset' },
      { id: 'emotion-driven-music-image', title: 'Emotion-driven Chinese folk music-image retrieval' },
    ],
    info: {
      text: 'To apply, please send your personal resume and your research content of interest to: yujx@zju.edu.cn',
      email: 'yujx@zju.edu.cn'
    }
  },
  "font": {
    title: "NEXT + Font | Shaping the Future of Chinese Character",
    date: "Updated",
    tags: ["Font Group"],
    image: "/images/researches-font-cover.png",
    link: "/researches",
    overview: `
<h4 class="font-bold text-lg mt-6 mb-2">WHAT: What We Do</h4>
<p>We are an interdisciplinary team leveraging AI and design to revolutionize the creation and application of Chinese fonts and digital seals.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Overview</h4>
<p>The NEXT Font Group is dedicated to addressing the unique challenges of digitizing the artistic expression of Chinese characters through computational methods. Our research spans the entire pipeline from fundamental data construction to end-user applications. We meticulously digitize and annotate large-scale datasets of historical seal scripts and calligraphy, which serve as the foundation for developing novel AI models for font style transfer and glyph generation. Beyond algorithms, we integrate interaction design and software engineering to build practical tools and platforms, including intelligent font design systems, user-friendly seal carving apps, and educational products. Our interdisciplinary approach, combining computer science, design, and cultural study, aims to make the creation and enjoyment of beautiful typography accessible to everyone.</p>
`,
    members: {
      leaders: [
        { id: 'shen-xinyi', name: 'Xinyi Shen' }
      ],
      members: [
        { id: 'wang-bolin', name: 'Bolin Wang' },
        { id: 'chen-xueyang', name: 'Xueyang Chen' },
        { id: 'lu-guanting', name: 'Guanting Lu' }
      ]
    },
    projects: [
      {
        id: 'glow-sans',
        title: 'Glow Sans Open-Source Font Family',
        cover: '/images/project-font.png',
        external: 'https://welai.github.io/glow-sans/'
      }
    ],
    publications: [
      { id: 'intelligent-font-generation', title: 'An intelligent font generation system based on stroke inference' },
      { id: 'few-shot-font', title: 'Few-shot font style transfer with multiple style encoders' },
      { id: 'visual-knowledge-seal', title: 'Visual knowledge guided intelligent generation of Chinese seal carving' }
    ],
    info: {
      text: 'Welcome to the NEXT Lab Font Group at Zhejiang University. We invite students passionate about type design, kinetic typography, Chinese calligraphy, or seal carving to join our interdisciplinary research team. Ideal candidates have experience or strong interest in algorithmic design, computer vision, deep learning, graphics, or web/mobile development—and are eager to explore the future of digital typography and cultural computation. To apply, please send your CV and a brief statement of interest to: shenxinyi@zju.edu.cn',
      email: 'shenxinyi@zju.edu.cn'
    }
  },
  "design": {
    title: "AI + Design | Creating Design Innovations for the AI era",
    date: "Updated",
    tags: ["Design Group"],
    image: "/images/researches-design-cover.png",
    link: "/researches",
    overview: `
<p>We leverage AI-assisted design to create intelligent products and nurture designers capable of facing future challenges.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Overview</h4>
<p>The NEXT Design Group drives innovation in design through technology, covering but not limited to education, manufacturing, and media creation. In design education, we promote the dissemination of design knowledge with products like the "Heritage Spark" toolkit, which integrates intangible cultural heritage with contemporary creativity, and the design textbook "Is It Design?" aimed at a general audience. In intelligent manufacturing, we combine technology and design to innovate traditional production methods, such as the personalized seal engraving machine "NEXTSEALER" and the modern salt jar "CoastalBam Jar," enhancing both the functionality and aesthetics of traditional craftsmanship. In intelligent media, we use AI to reconstruct the traditional media creation process, launching the AIGC video app "Ink Frames" and the "Life of Su Shi" series to digitally spread and creatively express traditional culture.</p>
`,
    members: {
      leaders: [
        // 请将姓名编辑于此处（中文亦可），暂以 Wenqi Wu 代为组长展示
        { id: 'wu-wenqi', name: 'Wenqi Wu' }
      ],
      members: [
        { id: 'hou-liang', name: 'Liang Hou' },
        { id: 'li-jinhe', name: 'Jinhe Li' },
        { id: 'jin-yuhang', name: 'Yuhang Jin' },
        { id: 'chen-xiaohui', name: 'Xiaohui Chen' },
        { id: 'li-xiuqi', name: 'Xiuqi Li' }
      ]
    },
    projects: [
      {
        id: 'nextsealer',
        title: 'NEXTsealer — Red Dot Winner 2024',
        cover: '/images/smart-seal-experience.png',
        external: 'https://www.red-dot.org/zh/project/nextsealer-72110'
      },
      {
        id: 'coastalbam-jar',
        title: 'CoastalBam Jar — Red Dot Winner 2024',
        cover: '/images/research-design.jpg',
        external: 'https://www.red-dot.org/zh/project/coastalbam-jar-71913'
      },
      {
        id: 'heritage-spark',
        title: 'Heritage Spark — Iron A\' Design Award 2025',
        cover: '/images/Gallery-Heritage-Spark.png',
        external: 'https://competition.adesignaward.com/ada-winner-design.php?ID=170646#Design-170646'
      },
      {
        id: 'life-of-su-shi',
        title: '"Life of Su Shi" series',
        cover: '/images/researches-design-cover.png',
        href: '#life-of-su-shi'
      }
    ],
    videos: [
      { title: 'Drinking on the Lake First Clear Then Rain', src: 'https://osss.foo/nextlab/public/videos/Poetry%20Shorts%20-%20Su%20Shi%20Footprints%2001%20-%20Drinking%20on%20the%20Lake%20First%20Clear%20Then%20Rain.mp4?v=20250914' },
      { title: 'Jiangchengzi', src: 'https://osss.foo/nextlab/public/videos/Poetry%20Shorts%20-%20Su%20Shi%20Footprints%2002%20-%20Jiangchengzi.mp4?v=20250914' },
      { title: 'Niannujiao', src: 'https://osss.foo/nextlab/public/videos/Poetry%20Shorts%20-%20Su%20Shi%20Footprints%2003%20-%20Niannujiao.mp4?v=20250914' },
      { title: 'Inscription on the West Forest Wall', src: 'https://osss.foo/nextlab/public/videos/Poetry%20Shorts%20-%20Su%20Shi%20Footprints%2004%20-%20Inscription%20on%20the%20West%20Forest%20Wall.mp4?v=20250914' }
    ],
    publications: [
      { id: 'ideationweb', title: 'IdeationWeb: Tracking the Evolution of Design Ideas in Human-AI Co-Creation' },
      { id: 'redefining-design-competence', title: 'Redefining design competence: A framework for equipping product designers in the generative AI era' }
    ],
    info: {
      text: 'Welcome to the NEXT Design Group at Zhejiang University! We invite students passionate about design, digital creativity, AI, and cultural computation to join our interdisciplinary research team. If you love design, have empathy, solid design knowledge, and experience in AI production, we welcome you to join us! To apply, please send your CV (portfolio preferred) to: Prof. Zhang (zhangkejun@zju.edu.cn).',
      email: 'zhangkejun@zju.edu.cn'
    }
  },
  "su-shi-series": {
    title: "\"Life of Su Shi\" series",
    date: "2025",
    tags: ["Design Group"],
    image: "/images/Researches-Life-of-Su-Shi-series.png",
    link: "/researches",
    overview: `
<h4 class="font-bold text-lg mt-6 mb-2">Overview</h4>
<p>Design group project "Life of Su Shi" series. Video showcase will be uploaded soon. This page will be updated once assets are prepared.</p>
`
  },
};

export default async function ResearchDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const research = researches[id as keyof typeof researches];
  if (!research) return notFound();

  return (
    <div className="min-h-screen max-w-[1000px] mx-auto py-12 px-4">
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="w-full max-w-[900px] aspect-[16/6] relative rounded-[36px] overflow-hidden">
          <Image src={research.image} alt={research.title} fill className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold mt-4 mb-2">{research.title}</h1>
        <div className="flex gap-2 mb-1">
          {research.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-medium">{tag}</span>
          ))}
        </div>
        {/* Members */}
        {('members' in research) && (
          <div className="w-full mt-4">
            <h2 className="text-2xl font-bold mb-3">Members</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-6">
              {(research as any).members.leaders.map((m: any) => {
                const tm = m.id ? getTeamMemberById(m.id) : undefined;
                const name = tm?.englishName || tm?.name || m.name;
                const avatar = tm?.avatar || "/images/next-lab-logo.png";
                const href = m.id ? `/team/${m.id}` : '#';
                return (
                  <Link key={name} href={href} className="group flex flex-col items-start text-left">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <Image src={avatar} alt={name} fill className="object-cover" />
                    </div>
                    <div className="mt-2 text-sm font-medium group-hover:underline">{name}</div>
                    <span className="mt-1 px-2 py-0.5 rounded-full bg-black text-white text-[10px] leading-none w-fit">Leader</span>
                  </Link>
                );
              })}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {(research as any).members.members.map((m: any) => {
                const tm = m.id ? getTeamMemberById(m.id) : undefined;
                const name = tm?.englishName || tm?.name || m.name;
                const avatar = tm?.avatar || "/images/next-lab-logo.png";
                const href = m.id ? `/team/${m.id}` : '#';
                return (
                  <Link key={name} href={href} className="group flex flex-col items-start text-left">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <Image src={avatar} alt={name} fill className="object-cover" />
                    </div>
                    <div className="mt-2 text-sm group-hover:underline">{name}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <h2 className="text-2xl font-bold mb-3">Overview</h2>
      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: research.overview }} />

      {/* Projects */}
      {('projects' in research) && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(research as any).projects.map((p: any) => {
              const content = (
                <div className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="relative h-[120px] bg-gray-100">
                    <Image src={p.cover} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-3 text-sm font-medium line-clamp-2">{p.title}</div>
                </div>
              );
              if (p.external) {
                return <a key={p.id} href={p.external} target="_blank" rel="noreferrer">{content}</a>;
              }
              return <Link key={p.id} href={p.href || '#'}>{content}</Link>;
            })}
          </div>
          {('videos' in research) && (
            <div id="life-of-su-shi" className="mt-8">
              <h3 className="text-xl font-semibold mb-3">"Life of Su Shi" series</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(research as any).videos.map((v: any, idx: number) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200">
                    <video controls className="w-full h-auto" src={v.src} />
                    <div className="p-3 text-sm text-gray-700">{v.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Publications */}
      {('publications' in research) && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Publications</h2>
          <ul className="list-decimal pl-6">
            {(research as any).publications.map((p: any) => (
              <li key={p.id} className="mb-2">
                <Link href={`/publications/${p.id}`} className="text-blue-600 hover:text-blue-800 underline">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Information */}
      {('info' in research) && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Information</h2>
          <p className="text-gray-700">{(research as any).info.text}</p>
          <div className="mt-2">
            <a href={`mailto:${(research as any).info.email}`} className="text-blue-600 hover:text-blue-800 underline">{(research as any).info.email}</a>
          </div>
        </div>
      )}
    </div>
  );
} 