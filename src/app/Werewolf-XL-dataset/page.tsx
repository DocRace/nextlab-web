import Image from "next/image";
import Link from "next/link";

export default function WerewolfXLDataset() {
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
                    alt="Dataset"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Werewolf-XL Dataset</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-4 py-6 md:py-12">
        <div className="max-w-5xl">
          {/* Introduction Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Affective computing and natural human-computer interaction, which would be capable of interpreting and responding intelligently to the social cues of interaction in crowds, are more needed than ever as an individual's affective experience is often related to others in group activities. To develop the next-generation intelligent interactive systems, we require numerous human facial expressions with accurate annotations. However, existing databases usually consider non-spontaneous human behavior (posed or induced), individual or dyadic setting, and a single type of emotion annotation. To address this need, we created the Werewolf-XL database, which contains a total of 890 minutes of spontaneous audio-visual recordings of 129 subjects in a group interaction of nine individuals playing a conversational role-playing game called Werewolf. We provide 131,688 individual utterance-level video clips with internal self-assessment of 18 non-prototypical emotional categories and external assessment of pleasure, arousal, and dominance, including 14,632 speakers' samples and the rest of listeners' samples. Besides, the results of the annotation agreement analysis show fair reliability and validity. Role information and outcomes of the game are also recorded. Furthermore, we provided extensive benchmarks of unimodal and multimodal emotional recognition results. The database is made publicly available.
            </p>
          </div>

          {/* Download Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold">Download | Baidu Cloud</h2>
            </div>
            
            <div className="space-y-8">
              {/* 1. Video */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">1 Video</h3>
                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <span className="text-gray-700">Werewolf-XL Dataset | </span>
                      <a 
                        href="https://pan.baidu.com/s/1oqC8Wt7MZPaT_3gYiDtXDA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">5vja</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <span className="text-gray-700">Werewolf-XL_Speaker_Video | </span>
                      <a 
                        href="https://pan.baidu.com/s/1qnZpEfaJYTQSvOhp-mlNGw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">2tqc</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Emotion Labels */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">2 Emotion Labels</h3>
                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <span className="text-gray-700">All | </span>
                      <a 
                        href="https://pan.baidu.com/s/13-ePhEKTkQmnUQsFkIm0Tg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">hrda</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <span className="text-gray-700">Categorical | </span>
                      <a 
                        href="https://pan.baidu.com/s/1dvC8tLw2-kI9IjgPrX7_hA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">1unw</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <span className="text-gray-700">PAD | </span>
                      <a 
                        href="https://pan.baidu.com/s/1XYb1PYQzPXJGVgaQ7HYy8Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">fa42</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Player participation log files */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">3 Player participation log files</h3>
                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <a 
                        href="https://pan.baidu.com/s/1qfDUZg-sB5gDGHC1IXJ2hA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">yc6m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Baseline Features and Code */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">4 Baseline Features and Code</h3>
                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">•</span>
                    <div>
                      <a 
                        href="https://pan.baidu.com/s/1LvVeKJ6Ql3Z9b4t9o9F6HQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Download Link
                      </a>
                      <span className="text-gray-700"> | Password: </span>
                      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">sfi7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Github Links Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">5 Github Links</h2>
            <div className="pl-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <div>
                  <span className="text-gray-700">Github: </span>
                  <a 
                    href="https://github.com/Xinda-Wu/Werewolf-XL-Baseline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    https://github.com/Xinda-Wu/Werewolf-XL-Baseline
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* License & Citation Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">License & co</h2>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Please cite our paper if you use our code or data.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm md:text-base text-gray-800 font-mono leading-relaxed">
                  K. Zhang et al., "Werewolf-XL: A Database for Identifying Spontaneous Affect in Large Competitive Group Interactions," in IEEE Transactions on Affective Computing, doi: 10.1109/TAFFC.2021.3101563.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex gap-4">
            <Link 
              href="/publications"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Publications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

