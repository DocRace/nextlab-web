import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const courses = {
  "audio-music-technology": {
    title: "Integration of Audio Music and Computer – Audio Music Technology",
    date: "Jan 09, 2023",
    tags: ["Course", "Article"],
    image: "/images/course-audio-music.png",
    link: "https://www.icourse163.org/course/0809FDU062-1462119161?outVendor=zw_mooc_pclszykctj_",
    overview: `This course focuses on the emerging interdisciplinary field of music technology, music artificial intelligence, and computer audition/AI acoustics. The field is generally considered to have started with the establishment of the ISMIR (International Society of Music Information Retrieval Conference) in 2000. As a high-threshold interdisciplinary subject with significant academic and practical value, talent cultivation is both challenging and crucial for the development of the discipline.<br/><br/>Due to the long-standing separation of arts and sciences in China, there are very few interdisciplinary talents in this field domestically, while such talents are more common in developed countries due to their general education philosophy. In the entire industry chain of music technology, music AI, and computer audition/AI acoustics, developed countries occupy high-end positions, generating significant profits from China each year. In recent years, with the rise of interdisciplinary thinking and the popularity of AI technology, the demand for domestic talents in music technology and related fields has rapidly increased.<br/><br/>Previously, research and teaching in this field in China were scattered. Since the establishment of the National Conference on Sound and Music Technology (CSMT) in 2013, the field has gradually become more cohesive. The course leader has authored two major reviews (2017–2020) on music technology and computer audition, edited the Chinese academic monograph "Integration of Audio Music and Computer – Audio Music Technology (Vol. 1 & 2)", and defined key terms in Baidu Baike. These efforts laid the foundation for launching the first online course in this field in China.<br/><br/>The course is structured as a series of popular science reports, open to the public, providing a comprehensive overview of academic theories and industrial applications. Those interested in specific directions can collaborate with relevant mentors for deeper research. The faculty is distributed across comprehensive universities, technical universities, and music academies, making online courses an effective solution.`,
    syllabus: [
      "Chapter 1: Overview of Music Technology, Music AI, and Computer Audition",
      "Chapter 2: Fundamentals of Acoustics",
      "Chapter 3: Music Psychology",
      "Chapter 4: Audio Features and Signal Processing",
      "Chapter 5: Pitch Estimation, Melody Extraction, Automatic Music Transcription, Rhythm Analysis",
      "Chapter 6: Harmony Analysis, Singing Voice Processing",
      "Chapter 7: Music Search, Structure Analysis",
      "Chapter 8: Music Emotion Computing, Music Recommendation",
      "Chapter 9: Music Classification, Timbre Analysis, Copyright Protection",
      "Chapter 10: Automatic Composition, Singing Voice Synthesis",
      "Chapter 11: Performance Data & Modeling, AI-assisted Music Education, Quantitative Analysis of Performance",
      "Chapter 12: Intelligent Recording/Mixing, Soundscape & Sound Design, Computer Interaction & Sound Art",
      "Chapter 13: Digital Instrument Synthesis, New Instrument Design, Music Robots",
      "Chapter 14: Computer Audition for General Audio (I)",
      "Chapter 15: Computer Audition for General Audio (II)",
      "Chapter 16: Cochlear Implants, Artistic Voice Analysis, Music Therapy"
    ],
    references: [
      "Antonio Camurri, Giovanni De Poli, and Davide Rocchesso, 'A Taxonomy for Sound and Music Computing', Computer Music Journal (CMJ), Vol. 19, No. 2, Summer 1995, pp. 4-5.",
      "Shlomo Dubnov, 'Computer Audition: An introduction and research survey', ACM Multimedia International Conference (ACM MM), Tutorial, October 2006, USA.",
      "Michael J. Bianco et al., 'Machine learning in acoustics: Theory and applications', JASA, Vol. 146, No. 5, Nov 2019, pp. 3590–3628.",
      "'Integration of Audio Music and Computer – Audio Music Technology', Fudan University Press, 2019/2021.",
      "'Understanding Digital Music – MIR Technology Review', CSMT 2017, Fudan Journal (Natural Science), 2018.",
      "'Understanding Digital Sound – Computer Audition Review', CSMT 2018, Fudan Journal (Natural Science), 2019.",
      "Baidu Baike entries: Music Technology, Music AI, MIR, Computer Audition, CSMT."
    ]
  },
  "swift-innovation": {
    title: "Introduction to Swift Innovation",
    date: "Jan 09, 2023",
    tags: ["Course", "Swift", "Article"],
    image: "/images/course-swift.jpg",
    link: "https://www.icourse163.org/course/ZJU-1450024180",
    overview: `This course systematically teaches Swift fundamentals, advanced topics, and practical knowledge, integrating typical applications such as AI, AR, Face ID, and Accessibility. It features sharing from WWDC Scholarship winners, China 'Internet+' National Competition Gold Medalists, and top awardees from the China College Computer Competition for Mobile Application Innovation, aiming to cultivate learners' development capabilities in the iOS ecosystem and enhance their innovation and entrepreneurship skills in mobile applications.`,
    instructors: [
      "Kejun Zhang (Zhejiang University)",
      "Hongming Zhu (Tongji University)",
      "Zhanxun Dong (Shanghai Jiao Tong University)",
      "Xiaogang Zhao (Wuhan University)"
    ],
    syllabus: [
      "Week 1: Course Introduction, Swift Basics, Mobile App Design Process, iOS HCI Basics, iOS Interaction Practice, Constants, Variables, Functions, Arrays & Dictionaries, Control Flow, Learning Sharing, Swift Playgrounds Introduction",
      "Week 2: Functions & Closures, Playground Practice, Objects & Classes, More Swift Playgrounds, Unit Test",
      "Week 3: Objects & Classes (cont.), Enumerations & Structures, Protocols & Extensions, Error Handling, More Swift Playgrounds, Unit Test",
      "Week 4: Advanced Playground Practice, Xcode Practice, Unit Test",
      "Week 5: WWDC Case Sharing, More Swift Playgrounds, Learning Sharing",
      "Week 6: SceneKit Basics & Practice, Building AR Apps on iOS, True Depth",
      "Week 7: AR Topic Sharing",
      "Week 8: AI Topic Sharing, Sensor Topic Sharing",
      "Week 9: Animation Topic Sharing",
      "Week 10: MAIC Case Sharing",
      "Week 11: More MAIC Case Sharing"
    ],
    references: [
      "Stanford University: Developing iOS 11 Apps with Swift",
      "Plymouth University: iOS Development in Swift",
      "A Swift Tour",
      "iOS Human Interface Guidelines",
      "WWDC 2018 Designing Fluid Interface",
      "Material Design Guidelines",
      "Fluent Design System",
      "Apple Design Resources",
      "Principle Tutorial",
      "Apple Developer Center & Sample Code",
      "Brian Advent Video",
      "Lynda Course",
      "Awesome Swift Playgrounds",
      "WWDC Scholarship Winners 2017-2019 Collections"
    ]
  },
  "design-thinking": {
    title: "Design Thinking and Innovative Design",
    date: "Jan 08, 2023",
    tags: ["Course", "Design Group", "Article"],
    image: "/images/course-design-thinking.png",
    link: "https://www.icourse163.org/course/ZJU-1003462001#/info",
    overview: `This course aims to integrate research achievements in China's innovative design field with cutting-edge global design thinking, building a knowledge system of 'Innovative Design + Design Thinking + Entrepreneurial Practice'. Focusing on 'Design Thinking' and 'Innovation & Entrepreneurship', and emphasizing interdisciplinarity, cross-domain, and international perspectives, the course addresses real needs for national and regional development and aims to effectively enhance product innovation and entrepreneurial practice capabilities.<br/><br/>Course Features:<br/>1. Interdisciplinary, cross-domain, and international teaching scheme, covering technology, culture, art, human-centered, business, and integrated design, as well as the steps of design thinking: needs understanding, problem definition, ideation, prototyping, iteration, and result release.<br/>2. A knowledge system of 'Design Thinking + Innovative Design + Entrepreneurial Practice', deeply integrating innovation and entrepreneurship education.<br/>3. An integrated model for cultivating 'Innovation + Entrepreneurship' abilities, promoting learning and teaching through competitions, and systematically enhancing innovation and entrepreneurship skills.`,
    syllabus: [
      "Week 1: Course Introduction, Basics of Design Thinking, Needs Understanding, Unit Test 1",
      "Week 2: Problem Definition, Ideation, Prototyping, Unit Test 2, Assignment 1",
      "Week 3: Iteration, Result Release, Methods & Tools (Part 1), Unit Test 3",
      "Week 4: Methods & Tools (Part 2), Interviews, Basics of Innovative Design, Supplementary Materials, Unit Test 4",
      "Week 5: Human-centered Innovative Design, Mentor Interviews, Supplementary Materials, Unit Test 5, Assignment 2",
      "Week 6: Technology-driven Innovative Design, Supplementary Materials, Unit Test 6",
      "Week 7: Art-driven Innovative Design, Business-driven Innovative Design, Supplementary Materials, Unit Test 7",
      "Week 8: Culture-driven Innovative Design, Supplementary Materials, Unit Test 8",
      "Week 9: More on Culture-driven Innovation, Design-driven Innovation & Entrepreneurship, Entrepreneurship Education, Supplementary Materials",
      "Week 10: Case Studies 1-3",
      "Week 11: Case Studies 4-5, Course Summary, Expert Interviews"
    ],
    references: [
      "Positive Computing: Technology for Wellbeing and Human Potential, Rafael Calvo, Dorian Peters, et al.",
      "Business Model Generation, Chunlei Chai",
      "Design Thinking Innovation Guide, Keyue Wang, Linlin Shui, Hao Jiang",
      "Comprehensive Research Report on Innovative Design, Chinese Academy of Engineering",
      "The Design of Everyday Things, Donald Norman",
      "Design Thinking for Entrepreneurship, Shaoji Du",
      "Innovative Design Thinking, Bainian Lu",
      "The Design Thinking Playbook, Michael Lewrick, Patrick Link, Larry Leifer",
      "... (and more, see your original list for full references)"
    ]
  }
};

export default function CourseDetail({ params }) {
  const { id } = params;
  const course = courses[id];
  if (!course) return notFound();

  return (
    <div className="min-h-screen max-w-[900px] mx-auto py-12 px-4">
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="w-full max-w-[900px] aspect-[16/6] relative rounded-[36px] overflow-hidden">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold mt-4 mb-2">{course.title}</h1>
        <div className="flex gap-2 mb-1">
          {course.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">{tag}</span>
          ))}
        </div>
        <div className="text-gray-500 text-sm">{course.date}</div>
        <Link href={course.link} target="_blank" className="inline-flex items-center text-white px-6 py-2 rounded-full font-semibold bg-black hover:bg-gray-800 transition-colors shadow">
          Go to Course
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>
      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: course.overview }} />
      {course.instructors && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Instructors</h2>
          <ul className="list-disc pl-6">
            {course.instructors.map(name => <li key={name}>{name}</li>)}
          </ul>
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Syllabus</h2>
        <ul className="list-disc pl-6">
          {course.syllabus.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">References</h2>
        <ul className="list-disc pl-6">
          {course.references.map(ref => <li key={ref}>{ref}</li>)}
        </ul>
      </div>
    </div>
  );
} 