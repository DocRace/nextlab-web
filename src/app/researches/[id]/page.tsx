import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const researches = {
  "music": {
    title: "NEXT + Music | Creating New Horizons with Music",
    date: "Jun 11, 2022",
    tags: ["Music Group"],
    image: "/images/research-music.png",
    link: "/researches", // 可替换为外部或更具体的介绍链接
    overview: `
<h4 class="font-bold text-lg mt-6 mb-2">WHAT: What We Do</h4>
<p>The MUSIC-AI (Intelligent Music Group) consists of 3 PhD students, 15 master's students, and 4 undergraduates from Computer Science, Digital Media, Software Engineering, and Design. We are dedicated to using music knowledge as guidance and AI technology as the computational engine to empower innovation in music art and design. Our goal is to build an ecosystem for creative practices and applications spanning music generation, human-computer music interaction, music (emotional) computing analysis, and multimodal music recommendation, gradually addressing challenges in intelligent music empowerment and production.</p>

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
  },
  "font": {
    title: "NEXT + Font | We Make Fonts, We Compute Fonts",
    date: "Jun 10, 2022",
    tags: ["Font Group"],
    image: "/images/research-font.png",
    link: "/researches", // 可替换为外部或更具体的介绍链接
    overview: `
<h4 class="font-bold text-lg mt-6 mb-2">WHAT: What We Do</h4>
<p>The Intelligent Font Group consists of PhD, master's, and undergraduate students from Computer Science, Software Engineering, Design, Industrial Design, Mechanical Engineering, and Marketing. We focus on calligraphy font generation and digital/intelligent seal carving, including database construction, calligraphy layout, font generation models, and the development of web/apps and smart devices.</p>

<h4 class="font-bold text-lg mt-6 mb-2">WHY: Our Vision</h4>
<p>Chinese characters' vast set and complex structure have long posed challenges for digitalization and artistic expression. We aim to use AI and interaction design to make high-quality Chinese font creation easier, enrich creative tools for artists and designers, and make beautiful fonts accessible to everyone.</p>

<h4 class="font-bold text-lg mt-6 mb-2">HOW: How We Do It</h4>
<p>We digitize and annotate tens of thousands of seal images and standard/stylized characters, develop font style transfer and calligraphy generation algorithms, and build interactive tools for font design. We also create cultural products and apps for seal carving and calligraphy education.</p>

<h4 class="font-bold text-lg mt-6 mb-2">PROGRESS: Achievements & Progress</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Open-source font family "Glow Sans" (free for commercial use): <a href="https://github.com/welai/glow-sans" class="text-blue-600 underline hover:text-blue-800" target="_blank">GitHub</a>, <a href="https://welai.github.io/glow-sans" class="text-blue-600 underline hover:text-blue-800" target="_blank">Demo</a></li>
  <li>Published papers in AIART 2020, Frontiers of Information Technology & Electronic Engineering, Science China Information Sciences, etc.</li>
  <li>Patents and software copyrights for font and seal carving technologies</li>
  <li>Development of seal carving platforms and apps</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">JOIN: Join Us</h4>
<p>If you are passionate about Chinese character history, calligraphy, font design, or have experience in deep learning, computer vision, or app/web development, we welcome you to join us! Contact: Wang (12021168@zju.edu.cn), Prof. Zhang (zhangkejun@zju.edu.cn)</p>
`,
  },
  "design": {
    title: "NEXT + Design | Pioneering Design Science Education in China",
    date: "Jun 09, 2022",
    tags: ["Design Group"],
    image: "/images/research-design.jpg",
    link: "/researches", // 可替换为外部或更具体的介绍链接
    overview: `
<h4 class="font-bold text-lg mt-6 mb-2">WHAT: What We Do</h4>
<p>DESIGN-Ed (Design Education Group) consists of PhD, master's, and undergraduate students from Computer Science, Digital Media, and Design. We are passionate about design education and aim to apply design thinking to business, technology, culture, and art, building a product system from design cognition and experience to practice, and promoting the development of design education in China.</p>

<h4 class="font-bold text-lg mt-6 mb-2">WHY: Our Vision</h4>
<p>Design is a way for humans to unleash creativity and interact with the world. As "Design + X" becomes a trend, we believe design thinking should be taught across all fields to inspire innovation. Our mission is to teach design language and methods in engaging ways, making design accessible and impactful in every industry.</p>

<h4 class="font-bold text-lg mt-6 mb-2">HOW: How We Do It</h4>
<p>We research design theory and practice, propose a five-step design education method, and develop DESIGN-X animation and DESIGN-T card tools for hands-on learning. Our ecosystem includes online courses, educational tools, and virtual labs for interdisciplinary design talent cultivation.</p>

<h4 class="font-bold text-lg mt-6 mb-2">PROGRESS: Achievements & Progress</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Children's design animation copyright</li>
  <li>DESIGN-X animation series and DESIGN-T card tool (national innovation project)</li>
  <li>Virtual teaching lab for "Design + X" innovation and entrepreneurship education</li>
  <li>Editorial participation in Stanford Innovation Review's "Design Education & Innovation" issue</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">JOIN: Join Us</h4>
<p>If you love design, have empathy, solid design knowledge, or experience in video production or education, we welcome you to join us! Contact: Wu (wwq.zju@foxmail.com), Prof. Zhang (zhangkejun@zju.edu.cn)</p>
`,
  },
};

export default function ResearchDetail({ params }) {
  const { id } = params;
  const research = researches[id];
  if (!research) return notFound();

  return (
    <div className="min-h-screen max-w-[900px] mx-auto py-12 px-4">
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
        <div className="text-gray-500 text-sm">{research.date}</div>
        <Link href={research.link} target="_blank" className="inline-flex items-center text-white px-6 py-2 rounded-full font-semibold bg-black hover:bg-gray-800 transition-colors shadow">
          Go to Research
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>
      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: research.overview }} />
    </div>
  );
} 