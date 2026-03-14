"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "@phosphor-icons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { tracks } from "../data/tracks";
import AudioVisualizer from "./AudioVisualizer";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const track = tracks[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      setCurrentIndex((i) => (i + 1) % tracks.length);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume;
  }, [volume]);

  const goTo = (index: number) => {
    setCurrentIndex((index + tracks.length) % tracks.length);
    setProgress(0);
    setCurrentTime(0);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const value = parseFloat(e.target.value);
    if (audio) {
      audio.currentTime = (value / 100) * audio.duration;
      setProgress(value);
      setCurrentTime(audio.currentTime);
    }
  };

  const formatTime = (s: number) => {
    if (!isFinite(s) || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  if (tracks.length === 0) return null;

  return (
    <div
      id="player"
      className="flex flex-col w-full max-w-md rounded-lg bg-black/60 border border-white/10 overflow-hidden"
    >
      <audio ref={audioRef} src={track.src} preload="metadata" />

      {/* Song track: visualizer same width as progress bar */}
      <div className="w-full px-4">
        <div className="w-full min-h-[72px] bg-black/40 overflow-hidden">
          <AudioVisualizer isPlaying={isPlaying} className="w-full h-full min-h-[72px]" />
        </div>
        {/* Progress bar directly under visualizer (same px-4) */}
        <div className="w-full flex items-center gap-2 mt-2 bg-black/30 py-2">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={seek}
            className="flex-1 h-1.5 rounded-full appearance-none bg-white/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#03dc2c] cursor-pointer"
          />
          <span className="text-white/60 text-xs tabular-nums shrink-0 w-16 text-right">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Playback controls directly underneath the track */}
      <div className="flex flex-row items-center gap-3 px-4 pb-4 pt-3 w-full">
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="p-1.5 rounded-full text-white/80 hover:text-[#03dc2c] hover:bg-white/10 transition-colors"
            aria-label="Previous track"
          >
            <SkipBack size={24} weight="fill" />
          </button>
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-[#03dc2c] text-black hover:bg-[#02b824] transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={24} weight="fill" />
            ) : (
              <Play size={24} weight="fill" className="ml-0.5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="p-1.5 rounded-full text-white/80 hover:text-[#03dc2c] hover:bg-white/10 transition-colors"
            aria-label="Next track"
          >
            <SkipForward size={24} weight="fill" />
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">
            {track.title}
            {track.artist && (
              <span className="text-white/60 font-normal"> · {track.artist}</span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <FontAwesomeIcon icon={faVolumeHigh} className="text-white/80 w-4 h-4" aria-hidden />
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-14 h-1 rounded-full appearance-none bg-white/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#673ffb] cursor-pointer"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
}
