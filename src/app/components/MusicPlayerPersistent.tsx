"use client";

import { useState } from "react";
import { CaretLeft, CaretRight, MusicNotes } from "@phosphor-icons/react";
import MusicPlayer from "./MusicPlayer";

export default function MusicPlayerPersistent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* Tab to show player when hidden - sticks out from bottom left, arrow right */}
      {!isVisible && (
        <button
          type="button"
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 left-0 z-50 flex items-center gap-2 rounded-r-lg border border-l-0 border-white/20 bg-black/80 py-2 pl-2 pr-3 text-white/90 shadow-lg transition hover:bg-black/90 hover:text-white pointer-events-auto"
          aria-label="Show music player"
        >
          <MusicNotes size={20} weight="fill" className="text-[#03dc2c]" />
          <span className="text-sm font-medium">Music</span>
          <CaretRight size={16} weight="bold" />
        </button>
      )}

      {/* Player always in DOM so audio keeps playing; hidden via CSS when collapsed */}
      <div
        className={`fixed bottom-0 left-0 z-50 p-4 flex flex-row items-end gap-0 pointer-events-none transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pointer-events-auto">
          <MusicPlayer />
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="pointer-events-auto flex items-center justify-center w-10 h-14 rounded-r-md rounded-l-none border border-l-0 border-white/20 bg-black/60 text-white/70 hover:text-white hover:bg-black/80 transition"
          aria-label="Hide music player"
        >
          <CaretLeft size={20} weight="bold" />
        </button>
      </div>
    </>
  );
}
