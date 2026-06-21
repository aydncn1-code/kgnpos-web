"use client";

import { useState } from "react";

export default function LazyYoutube({ videoId, title }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="absolute inset-0 w-full h-full flex items-center justify-center group bg-black"
      aria-label={`${title} videosunu oynat`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 w-16 h-16 rounded-full bg-[#E85D04] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
}
