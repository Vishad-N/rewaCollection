"use client";

import styles from "./ReelsSection.module.css";
import Link from "next/link";
import { useRef } from "react";

const reels = [
  { id: 1, label: "Sketch & sampling", url: "https://www.instagram.com/", imgSrc: "/atelier_sampling_1789371198985.jpg", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, label: "Hand embroidery", url: "https://www.instagram.com/", imgSrc: "/atelier_embroidery_1789371212302.jpg", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, label: "Beading & ornamentation", url: "https://www.instagram.com/", imgSrc: "/atelier_beading_1789371225188.jpg", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, label: "Finishing & QC", url: "https://www.instagram.com/", imgSrc: "/atelier_finishing_1789371237480.jpg", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 5, label: "Packed for export", url: "https://www.instagram.com/", imgSrc: "/atelier_packing_1789371334467.jpg", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

function ReelCard({ reel }: { reel: { id: number; label: string; url: string; imgSrc: string; videoSrc: string } }) {
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
      className={styles.cardWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.card}>
        <video 
          ref={videoRef}
          src={reel.videoSrc}
          poster={reel.imgSrc}
          autoPlay 
          loop 
          muted
          playsInline
          className={styles.video}
        />
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      </div>
      <div className={styles.label}>{reel.label}</div>
    </Link>
  );
}

export default function ReelsSection() {
  return (
    <section className={styles.reelsSection}>
      <div className={styles.reelsTitle}>
        <h2>From the atelier</h2>
      </div>
      <div className={styles.grid}>
        {reels.map(reel => <ReelCard key={reel.id} reel={reel} />)}
      </div>
    </section>
  );
}
