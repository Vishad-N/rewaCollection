import SphereGallery3D from "@/components/SphereGallery3D";
import styles from "./gallery.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Reva Creation",
  description: "Explore our collection of handcrafted fashion handbags, jewellery, and home furnishings.",
};

const galleryImages = Array.from({ length: 58 }, (_, i) => ({
  image: `/gallary/${i + 1}.png`,
  link: "/collections"
}));

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <div className={styles.galleryWrapper}>
        <SphereGallery3D 
          className="gallery-host"
          images={galleryImages}
          branches={galleryImages.length}
          background="transparent"
          core={{
            coreColor: "#cca066", // Gold
            coreSize: 14,
            lineColor: "#2a241c" // Ink
          }}
          hover={200}
          speed={10}
          direction="clockwise"
          size={24}
        />
        <div className={`${styles.sideText} ${styles.leftText}`}>
          <h1>3D Gallery</h1>
        </div>
        <div className={`${styles.sideText} ${styles.rightText}`}>
          <p>PINCH TO ZOOM &amp; DRAG TO ROTATE</p>
        </div>
      </div>
    </main>
  );
}
