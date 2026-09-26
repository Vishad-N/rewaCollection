import Link from "next/link";
import styles from "./page.module.css";
import ReelsSection from "@/components/ReelsSection";

const ChartIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>);
const BookIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>);
const ShopIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>);
const GlobeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>);
const EdgeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>);
const TargetIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>);
const ColorIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l5.67-2.36"></path></svg>);
const ShieldIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="12 8 12 12 14 14"></polyline></svg>);
const LeafIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 4 13a7 7 0 0 1 7-7h7v7a7 7 0 0 1-7 7z"></path><line x1="11" y1="20" x2="11" y2="13"></line></svg>);
const ShieldCheckIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>);
const FlaskIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 2v4l-6 12v4h18v-4l-6-12V2"></path><line x1="9" y1="2" x2="15" y2="2"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);
const MoleculeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="18" y1="9" x2="18" y2="15"></line><line x1="6" y1="9" x2="6" y2="15"></line><line x1="9" y1="6" x2="15" y2="6"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg>);
const CertificateIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>);

// Certification Icons
const SparkleIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"></path></svg>);
const GlobeAltIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>);
const NetworkIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path><path d="M12 8v3"></path></svg>);
const HandshakeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a2.12 2.12 0 1 0 3-3L15 9l-3 3"></path><path d="m9 9 5.5 5.5a2.12 2.12 0 1 1-3 3L6 12l-3-3"></path><path d="M6 12l-3-3a2.12 2.12 0 1 1 3-3L11 8"></path></svg>);
const BuildingIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 22v-17a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17"></path><path d="M14 22v-6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6"></path><path d="M10 6h4"></path><path d="M10 10h4"></path></svg>);
const TagIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>);
const GearIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>);

const portfolioItems = [
  { id: "parrot-beads-bag", name: "Parrot Beaded Bag", desc: "Handbags", link: "/products/parrot-beads-bag", image: "/products/Parrot_beads_bag_1.webp" },
  { id: "beads-earrings", name: "Beaded Earrings", desc: "Fashion jewellery", link: "/products/beads-earrings", image: "/products/beads_earrings.webp" },
  { id: "beads-bracelet", name: "Beaded Bracelet", desc: "Fashion jewellery", link: "/products/beads-bracelet", image: "/products/beads_bracellete.png" },
  { id: "premium-handbag", name: "Premium Luxury Handbag", desc: "Handbags", link: "/products/premium-handbag", image: "/products/premium_luxy_handbag.webp" },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>MANUFACTURER · EXPORTER · SINCE 2001</div>
          <h1>
            REVA
            <br />
            CREATIONS
          </h1>
          <div className={styles.heroTag}>Handmade in India. Built for global retail.</div>
          <p>
            We design and manufacture fashion handbags, jewellery and home furnishings with skilled women artisans. Each collection is sampled with care and finished to export standards for international buyers.
          </p>
          <Link className={styles.btn} href="/contact">
            START A DEVELOPMENT <span>→</span>
          </Link>
          <div className={styles.heroCats}>
            <Link href="/collections/fashion-jewellery">
              FASHION JEWELLERY <span>→</span>
            </Link>
            <Link href="/collections/handbags-accessories">
              HANDBAGS & ACCESSORIES <span>→</span>
            </Link>
            <Link href="/collections/home-furnishings">
              HOME FURNISHINGS <span>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/products/hero_img.png"
            alt="Reva Creations"
          />
        </div>
      </section>

      <section className={styles.about} id="about">
        <div>
          <h2>
            About
            <br />
            Us
          </h2>
          <p>
            At Reva Creations, a piece is not only an accessory. It is the work of women artisans, designers and production teams who build fashion handbags, jewellery and home textiles for retailers across the UK, Europe, the USA, Australia and Asia.
          </p>
          <p>
            We work in metals, beads, embroidery, canvas, raffia and mixed media, finished for export.
          </p>
          <Link
            className={`${styles.btn} ${styles.btnGhost}`}
            href="/about"
            style={{ marginTop: "22px" }}
          >
            MORE ABOUT US →
          </Link>
        </div>
        <div className={styles.aboutPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/about_us_img.png" alt="Reva Creations atelier" />
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.featuresContainer}>
          
          <div className={styles.featuresTopRow}>
            <div className={styles.featuresLeft}>
              <h2 className={styles.featuresTitle}>What sets us apart</h2>
              
              <div className={styles.featureCards}>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>01</div>
                  <div className={styles.featureText}>
                    <strong>Handmade</strong>
                    No mass-produced PU or machine-only bags.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>02</div>
                  <div className={styles.featureText}>
                    <strong>Women-led</strong>
                    Skilled women artisans at the centre of production.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>03</div>
                  <div className={styles.featureText}>
                    <strong>Export-ready</strong>
                    Quality, compliance and agreed timelines.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>04</div>
                  <div className={styles.featureText}>
                    <strong>Private label</strong>
                    Built to the buyer’s brief and brand.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>05</div>
                  <div className={styles.featureText}>
                    <strong>Natural materials</strong>
                    Cotton, jute, canvas, raffia and recycled cloth.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.featuresRight}>
              <div className={styles.collage}>
                <div className={styles.collageItem1Wrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/home_img1.webp" alt="Home image 1" />
                  <div className={styles.collageCaption}>Handcrafted items</div>
                </div>
                <div className={styles.collageItem2Wrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/home_img2.webp" alt="Home image 2" />
                  <div className={styles.collageCaption}>Modern aesthetics</div>
                </div>
                <div className={styles.collageInset}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/home_img3.webp" alt="Home image 3" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.materialsStrip}>
            <div className={styles.materialsList}>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/cricle_1.webp" alt="Raffia" style={{ objectPosition: "center center" }} />
                </div>
                <span>Raffia</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_2.webp" alt="Canvas" style={{ objectPosition: "bottom left" }} />
                </div>
                <span>Canvas</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_3.webp" alt="Cotton" style={{ objectPosition: "center 20%" }} />
                </div>
                <span>Cotton</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_4.webp" alt="Beads" style={{ objectPosition: "center center" }} />
                </div>
                <span>Beads</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_5.webp" alt="Metal" style={{ objectPosition: "center center" }} />
                </div>
                <span>Metal</span>
              </div>
            </div>
            <div className={styles.materialsLine}>
              Bags, jewellery and home — sampled to order.
            </div>
          </div>

        </div>
      </section>

      {/* <ReelsSection /> */}

      <section className={styles.products} id="products">
        <div className={styles.productsHead}>
          <h2>New from the atelier</h2>
          <Link href="/collections">VIEW ALL →</Link>
        </div>
        <div className={styles.grid}>
          {portfolioItems.map((product) => (
            <Link href={product.link} key={product.id} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              <div className={styles.cardMeta}>
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.desc}</span>
                </div>
                <div className={styles.arrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.productRange} id="collections">
        <div className={styles.prHeader}>
          <h2>Our Product Range</h2>
          <p className={styles.prSubtitle}>We specialize in:</p>
          <div className={styles.prDivider}></div>
        </div>
        <div className={styles.prCards}>
          <div className={styles.prCard}>
            <div className={styles.prImgWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/products/c_jewellery.webp" alt="Fashion Jewellery" />
            </div>
            <h3>Fashion Jewellery</h3>
            <ul>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Bangles</li>
              <li>Earrings</li>
              <li>Belts</li>
              <li>Promotional jewellery to high-end embellished ranges</li>
            </ul>
          </div>
          <div className={styles.prCard}>
            <div className={styles.prImgWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/products/c_handbag.webp" alt="Handbags & Accessories" />
            </div>
            <h3>Handbags & Accessories</h3>
            <ul>
              <li>Fashion handbags</li>
              <li>Promotional bags</li>
              <li>Canvas, fabric, vegan leather, and mixed-media bags</li>
              <li>Beaded and embroidered handcrafted bags</li>
            </ul>
          </div>
          <div className={styles.prCard}>
            <div className={styles.prImgWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/products/c_home.webp" alt="Home Furnishings" />
            </div>
            <h3>Home Furnishings</h3>
            <ul>
              <li>Cushions</li>
              <li>Throws</li>
              <li>Decorative accessories</li>
              <li>Artisan-made decor items</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.methodology}>
        <div className={styles.methodGrid}>
          {/* Left Column */}
          <div className={styles.sideCol}>
            <div className={styles.sideColTop}>
              <h2 className={styles.sideTitle}>WORKING<br />METHODOLOGY</h2>
              <h3 className={styles.sideSubtitle}>Trend-Driven Creations |<br />We study global fashion through:</h3>
              <div className={styles.sideDivider}></div>
              <p className={styles.sideDesc}>
                Our design team focuses on European quality at Indian production value, enabling competitive pricing across all product categories—from promotional pieces to premium collections.
              </p>
            </div>
            <div className={styles.sideColBottom}>
              <ul className={styles.iconList}>
                <li>
                  <span className={styles.iconWrapper}><ChartIcon /></span>
                  <span className={styles.listText}>Trend forecasting agencies</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><BookIcon /></span>
                  <span className={styles.listText}>International fashion magazines</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><ShopIcon /></span>
                  <span className={styles.listText}>Regular market visits to Europe</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><GlobeIcon /></span>
                  <span className={styles.listText}>Insights from global designers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Column */}
          <div className={styles.centerCol}>
            <h2 className={styles.centerTitle}>Craftsmanship &<br />Finishing</h2>
            <div className={styles.centerBlueBox}>
              <p>Each product at Reva Creations is <strong>constructed — not just manufactured.</strong> With skilled hands shaping, cutting, carving, joining, and finishing every piece, we ensure:</p>
            </div>
            <ul className={`${styles.iconList} ${styles.centerList}`}>
              <li>
                <span className={styles.iconWrapper}><EdgeIcon /></span>
                <span className={styles.listText}>Smooth edges</span>
              </li>
              <li>
                <span className={styles.iconWrapper}><TargetIcon /></span>
                <span className={styles.listText}>Accurate assembly</span>
              </li>
              <li>
                <span className={styles.iconWrapper}><ColorIcon /></span>
                <span className={styles.listText}>Color consistency</span>
              </li>
              <li>
                <span className={styles.iconWrapper}><ShieldIcon /></span>
                <span className={styles.listText}>Long-lasting durability</span>
              </li>
            </ul>
            <p className={styles.centerFooter}>Double inspection of finished goods guarantees near-perfect products.</p>
          </div>

          {/* Right Column */}
          <div className={styles.sideCol}>
            <div className={styles.sideColTop}>
              <h2 className={styles.sideTitle}>Raw Material<br />Sourcing</h2>
              <div className={styles.sideDivider}></div>
              <p className={styles.sideDesc}>
                We follow a <strong>No-Compromise-on-Quality Policy</strong>. Our raw materials are sourced across India and Asia from handpicked suppliers meeting strict norms for:
              </p>
            </div>
            <div className={styles.sideColBottom}>
              <ul className={styles.iconList}>
                <li>
                  <span className={styles.iconWrapper}><LeafIcon /></span>
                  <span className={styles.listText}>Eco-friendliness</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><ShieldCheckIcon /></span>
                  <span className={styles.listText}>Safety Standards</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><FlaskIcon /></span>
                  <span className={styles.listText}>Chemical-free Dyes</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><MoleculeIcon /></span>
                  <span className={styles.listText}>Nickel & Lead Free Components</span>
                </li>
                <li>
                  <span className={styles.iconWrapper}><CertificateIcon /></span>
                  <span className={styles.listText}>Reach & European Test Compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.certificationsSection}>
        <div className={styles.certContainer}>
          <div className={styles.certHeader}>
            <h2 className={styles.certTitle}>Certifications & Memberships</h2>
            <div className={styles.certDivider}></div>
            <p className={styles.certDesc}>
              Reva Creations continues the legacy of certified production systems and industry recognition.<br />
              We proudly follow structured QMS (Quality Management Systems) processes. We hold/maintain association with Indian export bodies:
            </p>
            <div className={styles.certDivider}></div>
          </div>
          
          <div className={styles.certGrid}>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><SparkleIcon /></div>
              <div className={styles.certContent}>
                <h4>EPCH</h4>
                <p>(Export Promotion Council for Handicrafts)</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><GlobeAltIcon /></div>
              <div className={styles.certContent}>
                <h4>ITPO</h4>
                <p>(India Trade Promotion Organisation)</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><NetworkIcon /></div>
              <div className={styles.certContent}>
                <h4>IFCCI</h4>
                <p>(Indo-France Chamber of Commerce & Industry)</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><HandshakeIcon /></div>
              <div className={styles.certContent}>
                <h4>IICCI</h4>
                <p>(Indo Italian Chamber of Commerce & Industry)</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><BuildingIcon /></div>
              <div className={styles.certContent}>
                <h4>FISME</h4>
                <p>(Federation of Indian Micro and Small & Medium Enterprises)</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}><TagIcon /></div>
              <div className={styles.certContent}>
                <h4>CLE</h4>
                <p>(Council for Leather Exports)</p>
              </div>
            </div>
            <div className={`${styles.certCard} ${styles.certCardFull}`}>
              <div className={styles.certIcon}><GearIcon /></div>
              <div className={styles.certContent}>
                <h4>IIA</h4>
                <p>(Indian Industries Association)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.finalCTA}>
          <h2 className={styles.sectionTitle}>Work with us</h2>
          <p className={styles.shortLine} style={{ marginBottom: "24px" }}>
            Fashion handbags, jewellery and home furnishings for international retail. Samples in 10–14 days. Production in 4–6 weeks after approval. Developments kept confidential.
          </p>
          <div className={styles.clientsLarge}>
            Fatface · Monsoon · Zara · Mango · New Look
          </div>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} href="/contact">ENQUIRE →</Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="/collections">VIEW COLLECTIONS →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
