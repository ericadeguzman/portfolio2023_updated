/**
 * Add your own tracks here.
 * Use direct URLs to .mp3 (or .ogg) files.
 * You can host files in /public and reference as /your-file.mp3,
 * or use external URLs.
 */
export type Track = {
  title: string;
  artist?: string;
  src: string;
};

export const tracks: Track[] = [
  // Replace these with your own song URLs (direct links to .mp3 or .ogg)
  // Example: { title: "Song name", artist: "Artist", src: "/music/track1.mp3" },
  // Or from the web: { title: "Track", artist: "Artist", src: "https://example.com/song.mp3" },
  {
    title: "Beep Boop",
    artist: "Robots",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "SoundHelix 2",
    artist: "Demo",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];
