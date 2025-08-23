import Image from "next/image";
import Link from "next/link";

const publications = {
  // ... other publications ...
  "smart-seal-experience": {
    title: "Smart Seal Experience Project",
    authors: "NEXT LAB Calligraphy Group",
    year: "2020",
    tags: ["Research", "Project", "Calligraphy Group", "Article"],
    image: "/images/smart-seal-experience.png",
    abstract: "A digital and intelligent experience project for traditional seal carving art, integrating AI technology and cultural innovation.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Introduction</h4>
<p>The Zhejiang University Smart Seal Engraving System and Platform integrates traditional seal carving art with artificial intelligence technology, providing over 10,000 ZJU graduates with customized "Qiushi Seal" services. Through the online application, users can easily design their own seal patterns with simple operations. The project has developed technologies for style fusion and parametric generation of seal characters and patterns, as well as China's first small-scale intelligent CNC seal engraving machine, enabling a seamless software-hardware experience.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Key Features</h4>
<ul class="list-disc pl-6 mb-4">
  <li>AI-powered style fusion and parametric seal character generation</li>
  <li>Online platform for easy, personalized seal design</li>
  <li>Intelligent CNC seal engraving machine for automated production</li>
  <li>Lowered threshold for seal art cognition and creation</li>
  <li>Promotes and empowers the development of traditional Chinese culture and art</li>
  <li>Significant market potential and application value</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">Project Collaboration</h4>
<p>This project is a joint effort by the ZJU Development Liaison Office, ZJU Education Foundation, College of Computer Science and Technology, Ministry of Education AI Collaborative Center, ZJU Library, and NEXT Lab.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Experience Link</h4>
<p><a href="https://www.next.zju.edu.cn/archive/ai-seal/" class="text-blue-600 underline hover:text-blue-800" target="_blank">https://www.next.zju.edu.cn/archive/ai-seal/</a></p>
`
  },
  "lingering": {
    title: "Lingering: Cross-media Intelligent Music Generation System",
    authors: "NEXT LAB Music Group",
    year: "2020",
    tags: ["Research", "Music Group", "Article"],
    image: "/images/Lingering.jpg",
    abstract: "Lingering is a cross-media intelligent music generation system powered by optimized Transformer XL and large-scale MIDI data, supporting automatic music creation and video-music matching.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Introduction</h4>
<p>Lingering is a cross-media intelligent music generation system developed by NEXT LAB. Leveraging an optimized Transformer XL model and a large-scale MIDI dataset, Lingering is capable of automatic learning, inference, and summarization of musical features such as chords, rhythm, and style. The system can predict note progressions and generate a large number of music clips in a short time.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Key Features</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Automatic music generation based on advanced AI models and music theory rules</li>
  <li>Support for rapid, batch creation of music clips</li>
  <li>Video and image-based music matching for VLOG and short video creation</li>
  <li>Cross-modal (audio-visual) fusion for richer music expression</li>
  <li>Continuous optimization for controllable music style and emotion generation</li>
  <li>Collaboration with professional music teams for improved evaluation and quality</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">Achievements</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Gold Award, China "Internet+" College Student Innovation and Entrepreneurship Competition</li>
  <li>Gold Award, "Chuang Qingchun" College Student Entrepreneurship Competition</li>
  <li>Special Prize, China College Computer Competition – Mobile Application Innovation</li>
  <li>Selected for the 22nd China International Industry Fair, exhibited alongside top academic achievements</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">Demo Videos</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Introduction Video: <a href="https://pan.baidu.com/s/1BB-r1PrCNmFK5ay9QF2-7Q" class="text-blue-600 underline hover:text-blue-800" target="_blank">Baidu Cloud Link</a> (Password: l3qt)</li>
  <li>Demo Video: <a href="https://pan.baidu.com/s/1hm1V03RtfjHJGMVY6BO92Q" class="text-blue-600 underline hover:text-blue-800" target="_blank">Baidu Cloud Link</a> (Password: b1o3)</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">Future Work</h4>
<p>We are continuously optimizing the music generation model to enable more controllable style and emotion generation, and to improve efficiency and quality. Collaboration with professional music teams is ongoing to enhance evaluation methods and overall output quality.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Contact</h4>
<p>For more information about Lingering or collaboration opportunities, please contact NEXT LAB.</p>
`
  },
  "seal-create": {
    title: "Seal Create",
    authors: "NEXT LAB Calligraphy Group",
    year: "2020",
    tags: ["Research", "Project", "Calligraphy Group", "Article"],
    image: "/images/seal-create.png",
    abstract: "Seal Create is an interactive app that brings the traditional art of seal carving to life, making it accessible and engaging through technology and gamification.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Introduction</h4>
<p>Seal Create is an application dedicated to inheriting and promoting intangible cultural heritage, specifically the art of seal carving. By leveraging technology, Seal Create makes the complex and often obscure elements of seal culture more intuitive and enjoyable to learn.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Features</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Gamified experience of the traditional seal carving process</li>
  <li>Multiple interactive modes simulating brush and knife techniques</li>
  <li>Supports 3D printing and mechanical engraving for real-world seal creation</li>
  <li>Helps users learn about seal art, experience the joy of creation, and appreciate the beauty of Chinese characters and design</li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">Mission</h4>
<p>Seal Create aims to help people discover, enjoy, and create the beauty of characters and design through simple and fun interactions, making the art of seal carving accessible to all.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Download</h4>
<p>The app is now available on the App Store. Click the link below to download and experience:</p>
<p><a href="https://apps.apple.com/cn/app/seal-create/id1515121113" class="text-blue-600 underline hover:text-blue-800" target="_blank">https://apps.apple.com/cn/app/seal-create/id1515121113</a></p>
`
  },
  "werewolf-xl": {
    title: "Werewolf-XL Dataset",
    authors: "K. Zhang, Kejun and Wu, Xinda and Xie, Xinzhang and Zhang, Xiaoran and Zhang, Hui and Chen, Xiaoyun and Sun, Lingyun",
    year: "2021",
    tags: ["Dataset", "Affective Computing", "Group Interaction", "Emotion Recognition"],
    image: "/images/publication-werewolf-xl.png",
    abstract: "A large-scale spontaneous audio-visual database for affective computing and group interaction analysis, containing 890 minutes of recordings from 129 subjects playing the Werewolf game, with rich emotion annotations and extensive benchmarks.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Introduction</h4>
<p>Affective computing and natural human-computer interaction, which would be capable of interpreting and responding intelligently to the social cues of interaction in crowds, are more needed than ever as an individual's affective experience is often related to others in group activities. To develop the next-generation intelligent interactive systems, we require numerous human facial expressions with accurate annotations. However, existing databases usually consider non-spontaneous human behavior (posed or induced), individual or dyadic setting, and a single type of emotion annotation. To address this need, we created the Werewolf-XL database, which contains a total of 890 minutes of spontaneous audio-visual recordings of 129 subjects in a group interaction of nine individuals playing a conversational role-playing game called Werewolf. We provide 131,688 individual utterance-level video clips with internal self-assessment of 18 non-prototypical emotional categories and external assessment of pleasure, arousal, and dominance, including 14,632 speakers' samples and the rest of listeners' samples. Besides, the results of the annotation agreement analysis show fair reliability and validity. Role information and outcomes of the game are also recorded. Furthermore, we provided extensive benchmarks of unimodal and multimodal emotional recognition results. The database is made publicly available.</p>
<h4 class="font-bold text-lg mt-6 mb-2">Download | Baidu Cloud</h4>
<h4 class="font-bold text-base mt-4 mb-1">1 Video</h4>
Werewolf-XL Dataset | <a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: 5vja<br/>Werewolf-XL_Speaker_Video | <a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: 2tqc
<h4 class="font-bold text-base mt-4 mb-1">2 Emotion Labels</h4>
All | <a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: hrda<br/>Categorical | <a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: 1unw<br/>PAD | <a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: fa42
<h4 class="font-bold text-base mt-4 mb-1">3 Player participation log files</h4>
<a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: yc6m
<h4 class="font-bold text-base mt-4 mb-1">4 Baseline Features and Code</h4>
<a href="#" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> | Password: sfi7
<h4 class="font-bold text-base mt-4 mb-1">5 Github Links</h4>
Github: <a href="https://github.com/Xinda-Wu/Werewolf-XL-Baseline" class="text-blue-600 underline hover:text-blue-800" target="_blank">https://github.com/Xinda-Wu/Werewolf-XL-Baseline</a>
<h4 class="font-bold text-base mt-4 mb-1">License & co</h4>
Please cite our paper if you use our code or data.<br/>K. Zhang et al., "Werewolf-XL: A Database for Identifying Spontaneous Affect in Large Competitive Group Interactions," in IEEE Transactions on Affective Computing, doi: 10.1109/TAFFC.2021.3101563.`
  },
  "journal-conference-list": {
    title: "Related Journals and Conferences Overview",
    authors: "NEXT LAB Team",
    year: "2020",
    tags: ["Article"],
    image: "/images/journal-conference-list.jpg",
    abstract: "CCF recommended conferences and journals related to NEXT LAB research directions, including HCI, multimedia, and affective computing.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Overview</h4>
<p>This page lists the CCF recommended conferences and journals relevant to NEXT LAB's research directions, including Human-Computer Interaction (HCI), Multimedia, and Affective Computing. The list covers both conference and journal recommendations, with their levels, focus areas, and full names.</p>
<h4 class="font-bold text-lg mt-6 mb-2">Recommended Conferences</h4>
<div class="overflow-x-auto">
<table class="min-w-full text-sm border border-gray-200 mb-6">
  <thead class="bg-gray-50">
    <tr>
      <th class="px-3 py-2 border-b font-semibold">Level</th>
      <th class="px-3 py-2 border-b font-semibold">Area</th>
      <th class="px-3 py-2 border-b font-semibold">Acronym</th>
      <th class="px-3 py-2 border-b font-semibold">Deadline</th>
      <th class="px-3 py-2 border-b font-semibold">Full Name</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="px-3 py-2 border-b">CCFA</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">CHI</td><td class="px-3 py-2 border-b">Sep</td><td class="px-3 py-2 border-b">ACM Conference on Human Factors in Computing Systems</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">ISS (ITS)</td><td class="px-3 py-2 border-b">Jun</td><td class="px-3 py-2 border-b">ACM International Conference on Interactive Tabletops and Surfaces</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">MobileHCI</td><td class="px-3 py-2 border-b">Feb</td><td class="px-3 py-2 border-b">International Conference on Human Computer Interaction with Mobile Devices and Services</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFC</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">DIS</td><td class="px-3 py-2 border-b">Jan</td><td class="px-3 py-2 border-b">ACM Conference on Designing Interactive Systems</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFC</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">ICMI</td><td class="px-3 py-2 border-b">May</td><td class="px-3 py-2 border-b">ACM International Conference on Multimodal Interaction</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFA</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">ACM MM</td><td class="px-3 py-2 border-b">Apr</td><td class="px-3 py-2 border-b">ACM International Conference on Multimedia</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">ICMR</td><td class="px-3 py-2 border-b">Jan</td><td class="px-3 py-2 border-b">ACM SIGMM International Conference on Multimedia Retrieval</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">ICME</td><td class="px-3 py-2 border-b">Nov/Dec</td><td class="px-3 py-2 border-b">IEEE International Conference on Multimedia & Expo</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Multimedia (AR/MR)</td><td class="px-3 py-2 border-b">ISMAR</td><td class="px-3 py-2 border-b">Mar</td><td class="px-3 py-2 border-b">International Symposium on Mixed and Augmented Reality</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFC</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">MMM</td><td class="px-3 py-2 border-b">May</td><td class="px-3 py-2 border-b">International Conference on Multimedia Modeling</td></tr>
  </tbody>
</table>
</div>
<h4 class="font-bold text-lg mt-6 mb-2">Recommended Journals</h4>
<div class="overflow-x-auto">
<table class="min-w-full text-sm border border-gray-200 mb-6">
  <thead class="bg-gray-50">
    <tr>
      <th class="px-3 py-2 border-b font-semibold">Level</th>
      <th class="px-3 py-2 border-b font-semibold">Area</th>
      <th class="px-3 py-2 border-b font-semibold">Acronym</th>
      <th class="px-3 py-2 border-b font-semibold">Full Name</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Affective Computing</td><td class="px-3 py-2 border-b">TAC</td><td class="px-3 py-2 border-b">IEEE Transactions on Affective Computing</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">TOMCCAP</td><td class="px-3 py-2 border-b">ACM Transactions on Multimedia Computing, Communications and Applications</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">TMM</td><td class="px-3 py-2 border-b">IEEE Transactions on Multimedia</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">JASA</td><td class="px-3 py-2 border-b">Journal of The Acoustical Society of America</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFC</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">MS</td><td class="px-3 py-2 border-b">Multimedia Systems</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFC</td><td class="px-3 py-2 border-b">Multimedia</td><td class="px-3 py-2 border-b">MTA</td><td class="px-3 py-2 border-b">Multimedia Tools and Applications</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFA</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">TOCHI</td><td class="px-3 py-2 border-b">ACM Transactions on Computer-Human Interaction</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFA</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">IJHCS</td><td class="px-3 py-2 border-b">International Journal of Human Computer Studies</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">Human Computer Interaction</td></tr>
    <tr><td class="px-3 py-2 border-b">CCFB</td><td class="px-3 py-2 border-b">HCI</td><td class="px-3 py-2 border-b">IJHCI</td><td class="px-3 py-2 border-b">International Journal of Human-Computer Interaction</td></tr>
  </tbody>
</table>
</div>
`
  },
  "pmemo-dataset": {
    title: "PMEmo: Pop Music Emotion Dataset",
    authors: "NEXT LAB Music Group",
    year: "2020",
    tags: ["Dataset", "Research", "Music Group", "Article"],
    image: "/images/pmemo-dataset.png",
    abstract: "A dataset for music emotion recognition, providing rich annotations for pop music tracks, including emotion labels and physiological signals.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Introduction</h4>
<p>Music Emotion Recognition (MER) has recently received considerable attention. To support MER research, which requires large music content libraries, we present the PMEmo dataset containing emotion annotations of 794 songs as well as simultaneous electrodermal activity (EDA) signals. A well-designed music emotion experiment was conducted for collecting high-quality affective-annotated music corpus, recruiting 457 subjects. The dataset is publicly available to the research community and is intended for benchmarking in music emotion retrieval and recognition.</p>
<p>To straightforwardly evaluate methodologies for music affective analysis, PMEmo also involves pre-computed audio, text, and physiological feature sets. Additionally, manually selected chorus excerpts (compressed in MP3) of songs are provided to facilitate chorus-related research. The article "The PMEmo Dataset for Music Emotion Recognition" describes in detail the resource acquisition, subject selection, experiment design, annotation collection procedures, dataset content, and data reliability analysis. Its usage in basic music emotion recognition tasks demonstrates the PMEmo dataset's competence for MER work. Compared to other datasets, PMEmo is novel in the organization and management of annotators and is characterized by its large amount of music with simultaneous physiological signals.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Links</h4>
<ul class="list-disc pl-6 mb-4">
  <li>More details: <a href="http://huisblog.cn/PMEmo/" class="text-blue-600 underline hover:text-blue-800" target="_blank">http://huisblog.cn/PMEmo/</a></li>
  <li>View on Github: <a href="https://github.com/HuiZhangDB/PMEmo" class="text-blue-600 underline hover:text-blue-800" target="_blank">https://github.com/HuiZhangDB/PMEmo</a></li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">Download</h4>
<ul class="list-disc pl-6 mb-4">
  <li>Baidu Netdisk (2018 version): <a href="https://pan.baidu.com/s/1dReijy5eYeFZiz7j3uatEQ" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> (Code: xsad)</li>
  <li>Baidu Netdisk (2019 version): <a href="https://pan.baidu.com/s/1q0dJZVIKeT52gqgoer37pQ" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a> (Code: huav)</li>
  <li>Google Drive (2018 version): <a href="https://drive.google.com/drive/folders/1NhN4KaLQPFg9nRNOwne-Lnkxi3nlJHR3" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a></li>
  <li>Google Drive (2019 version): <a href="https://drive.google.com/drive/folders/1qDk6hZDGVlVXgckjLq9LvXLZ9EgK9gw0" class="text-blue-600 underline hover:text-blue-800" target="_blank">Download Link</a></li>
</ul>

<h4 class="font-bold text-lg mt-6 mb-2">License & co</h4>
<p>Please cite our paper if you use our code or data.</p>
<pre class="bg-gray-100 p-2 rounded text-xs overflow-x-auto">@inproceedings{
  Zhang:2018:PDM:3206025.3206037,
  author = {Zhang, Kejun and Zhang, Hui and Li, Simeng and Yang, Changyuan and Sun, Lingyun},
  title = {The PMEmo Dataset for Music Emotion Recognition},
  booktitle = {Proceedings of the 2018 ACM on International Conference on Multimedia Retrieval},
  series = {ICMR '18},
  year = {2018},
  isbn = {978-1-4503-5046-4},
  location = {Yokohama, Japan},
  pages = {135--142},
  numpages = {8},
  url = {http://doi.acm.org/10.1145/3206025.3206037},
  doi = {10.1145/3206025.3206037},
  acmid = {3206037},
  publisher = {ACM},
  address = {New York, NY, USA},
  keywords = {dataset, eda, experiment, music emotion recognition},
}</pre>
`
  },
  "art-easiest": {
    title: "Art Easiest",
    authors: "NEXT LAB Mobile Innovation Group",
    year: "2020",
    tags: ["Research", "Project", "Mobile Innovation", "Article"],
    image: "/images/art-easiest.jpg",
    abstract: "Art Easiest is a cross-media creative platform that fuses vision and sound, enabling users to generate artistic images and creative Vlogs with AI-powered tools.",
    content: `
<h4 class="font-bold text-lg mt-6 mb-2">Introduction</h4>
<p>Art Easiest is a cross-media generation platform that fuses vision and sound. Leveraging machine vision technology, Art Easiest can blend human figures with artistic scenes, offering a variety of creative image features. Building on static image processing, the platform extends to dynamic effects by integrating sound generation, script arrangement, and video editing, enabling intelligent video creation.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Mobile Application</h4>
<p>On mobile devices, Art Easiest provides users with interactive painting experiences and creative Vlog (video log) generation. AI technology empowers artistic creation, significantly lowering the barrier for users. For custom services, the platform can be applied to film post-production, advertising short video creation, and more, offering sound effect generation and intelligent short video production with unique artistic effects.</p>

<h4 class="font-bold text-lg mt-6 mb-2">Project Goal</h4>
<p>Driven by technology and inspired by art, Art Easiest aims to build an ecosystem for audio-visual creative expression. The goal is to provide users with convenient and fun ways to express creativity, sparking a new wave of cross-media intelligent generation that fuses vision and sound.</p>
`
  },
  // ... other publications ...
};

export default async function PublicationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const publication = publications[id as keyof typeof publications];

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Publication Not Found</h1>
          <Link
            href="/publications"
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Publications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-[240px] w-full">
        <div className="relative h-full max-w-[1920px] mx-auto flex items-start pt-8">
          <div className="inline-flex">
            <div className="bg-blue-100 rounded-[9999px] py-4 px-10 flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 mr-5">
                  <Image
                    src="/icons/publications.svg"
                    alt="Publications"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-5xl font-bold text-black">Publication Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[500px] rounded-[36px] overflow-hidden">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">{publication.title}</h2>
            <div className="flex items-center text-gray-500 mb-4">
              <span className="mr-4">By {publication.authors}</span>
              <span className="text-sm">{publication.year}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {publication.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Abstract</h3>
              <p className="text-gray-600">{publication.abstract}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Content</h3>
              <div className="text-gray-600 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: publication.content }} />
            </div>
            <div className="mt-8">
              <Link
                href="/publications"
                className="inline-flex items-center text-white px-4 py-2 rounded-full w-fit hover:bg-black/80 transition-colors"
                style={{
                  backgroundColor: '#000000',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Back to Publications
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 