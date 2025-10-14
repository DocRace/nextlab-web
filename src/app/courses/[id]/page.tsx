import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Course = {
  title: string;
  date: string;
  tags: string[];
  image: string;
  chineseLink?: string;
  englishLink?: string;
  overview: string;
  syllabus: string[];
  references: string[];
  instructors?: string[];
  exhibition?: {
    title: string;
    description: string;
    videoUrl?: string;
    link?: string;
    linkText?: string;
  };
};

const courses: Record<string, Course> = {
  "audio-music-technology": {
    title: "Integration of Audio Music and Computer – Audio Music Technology",
    date: "Jan 09, 2023",
    tags: ["Course", "Article"],
    image: "/images/course-audio-music.png",
    chineseLink: "https://www.icourse163.org/course/0809FDU062-1462119161?outVendor=zw_mooc_pclszykctj_",
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
    chineseLink: "https://www.icourse163.org/course/ZJU-1450024180",
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
    title: "Design Thinking And Innovation Design",
    date: "Updated",
    tags: ["Course", "Design Thinking"],
    image: "/images/course-design-thinking.png",
    chineseLink: "https://www.icourse163.org/course/ZJU-1003462001?from=searchPage&outVendor=zw_mooc_pcssjg_",
    englishLink: "https://www.coursera.org/learn/design-thinking-innovation",
    overview: `As for business management problem, scientific research problem, or engineering problem, the process of finding the solutions to these problems can be regarded as the process of "design". Using design thinking, people can find suitable solutions in various fields.<br/><br/>In view of this, we developed this course "Design Thinking and Innovation Design". With the mission of strengthening moral education and cultivating people, this course is a general education course of innovation and entrepreneurship for all students. It is committed to cultivating production innovation and entrepreneurial practice students with "design-led and innovation-driven". The course is taught by professors Zhang Kejun, Sun Lingyun and Chai Chunlei. The main contents include design thinking theory, methods and tools, innovation design connotation, approaches and key technologies, and outstanding cases of innovation and entrepreneurship practice.`,
    instructors: [
      "Kejun Zhang", "Lingyun Sun", "Chunlei Chai"
    ],
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
    references: [],
    exhibition: {
      title: "Course Exhibition",
      description: "View course materials and resources",
      link: "https://pan.baidu.com/s/1zoKZOmZpLe8IKDu82L4AxA",
      linkText: "Baidu Netdisk Link (Extraction code: nexn)"
    }
  }
};

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses[id];
  if (!course) return notFound();

  return (
    <div className="min-h-screen max-w-[1200px] mx-auto py-12 px-4">
      {/* Course Header */}
      <div className="mb-12">
        <div className="w-full aspect-[16/6] relative rounded-[36px] overflow-hidden mb-6">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
        </div>
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <div className="flex gap-2 mb-4">
          {course.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">{tag}</span>
          ))}
        </div>
        <div className="text-gray-500 text-lg">{course.date}</div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Overview and Syllabus */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Section */}
          <section className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Overview</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: course.overview }} />
          </section>

          {/* Syllabus Section */}
          <section className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Syllabus</h2>
            <div className="space-y-3">
              {course.syllabus.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exhibition Section */}
          {course.exhibition && (
            <section className="bg-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{course.exhibition.title}</h2>
              <p className="text-gray-700 mb-4">{course.exhibition.description}</p>
              {course.exhibition.link && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <a 
                    href={course.exhibition.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {course.exhibition.linkText}
                  </a>
                </div>
              )}
            </section>
          )}
        </div>

        {/* Right Column - Course Links and Additional Info */}
        <div className="space-y-6">
          {/* Course Links */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Course Access</h3>
            <div className="space-y-3">
              {course.chineseLink && (
                <Link 
                  href={course.chineseLink} 
                  target="_blank" 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Go to Course (Chinese)
                </Link>
              )}
              {course.englishLink && (
                <Link 
                  href={course.englishLink} 
                  target="_blank" 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Go to Course (English)
                </Link>
              )}
            </div>
          </div>

          {/* Instructors */}
          {course.instructors && (
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Instructors</h3>
              <div className="space-y-2">
                {course.instructors.map((name, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {course.references.length > 0 && (
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">References</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {course.references.map((ref, index) => (
                  <div key={index} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                    {ref}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 