"use client";

import styles from "./ReelsSection.module.css";
import Link from "next/link";
import { useRef } from "react";

// The user mentioned they will add links later. 
// Using a placeholder flower video for now to demonstrate autoplay and unmuting.
const placeholderVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const reels = [
  { id: 1, url: "#", videoSrc: placeholderVideo },
  { id: 2, url: "#", videoSrc: placeholderVideo },
  { id: 3, url: "#", videoSrc: placeholderVideo },
  { id: 4, url: "#", videoSrc: placeholderVideo },
  { id: 5, url: "#", videoSrc: placeholderVideo },
];

function ReelCard({ reel }: { reel: { id: number; url: string; videoSrc: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <Link 
      href={reel.url} 
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={reel.videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.icon}>
        {/* Instagram Reels Icon SVG */}
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      </div>
    </Link>
  );
}

export default function ReelsSection() {
  return (
    <section className={styles.reelsSection}>
      <div className={styles.reelsTitle}>
        <h2>Instagram Reels</h2>
      </div>
      <div className={styles.grid}>
        {reels.map(reel => <ReelCard key={reel.id} reel={reel} />)}
      </div>
    </section>
  );
}
