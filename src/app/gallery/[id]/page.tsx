import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompetitionById } from "@/data/competitions";
import { use } from "react";

export default function CompetitionDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const competition = getCompetitionById(id);
  
  if (!competition) return notFound();

  return (
    <div className="min-h-screen max-w-[1000px] mx-auto py-12 px-4">
      {/* Back to Gallery button */}
      <div className="mb-8">
        <Link href="/gallery#competition-entries" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>
      </div>

      {/* Header Image */}
      <div className="mb-8">
        <div className="w-full max-w-[900px] aspect-[16/6] relative rounded-[36px] overflow-hidden mb-6">
          <Image 
            src={competition.image} 
            alt={competition.title} 
            fill 
            className="object-cover" 
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {competition.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Year:</span>
            <span>{competition.year}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Award Winners:</h3>
          <p className="text-gray-600">{competition.winners}</p>
        </div>
      </div>

      {/* Award Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Award</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-lg font-semibold text-amber-900">{competition.award}</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="bg-gray-50 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">{competition.description}</p>
        </div>
      </div>

      {/* View Details Button */}
      {competition.link && (
        <div className="mb-8">
          <Link 
            href={competition.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

