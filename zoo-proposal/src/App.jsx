import React, { useEffect, useState } from "react";
import heroVideo from "./assets/guinea1.mp4";
import blueprintImage from "./assets/blueprint.png";
import concept4dGaussianSplat from "./assets/concept-4d-gaussian-splat.png";

export default function App() {
  const [blueprintLightboxOpen, setBlueprintLightboxOpen] = useState(false);

  useEffect(() => {
    if (!blueprintLightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setBlueprintLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [blueprintLightboxOpen]);

  const benefits = [
    {
      title: "Holographic Presence",
      text: "This is volumetric capture—the kind of hologram people have dreamed about in sci-fi for decades. Visitors are inside a living light field, not a hand-modeled mesh pretending to be fur and glass.",
    },
    {
      title: "Infinite Fidelity",
      text: "Because the representation is continuous in time, reconstructed playback can be explored at very high effective frame rates—deep slow motion for subtle behavior—without being limited to a single camera’s native frame rate (this is about the trained asset’s timeline, not a promise of raw live 10,000 FPS capture).",
    },
    {
      title: "Universal Accessibility",
      text: "Compressed streams in the 30–60 Mbps range enable high-quality virtual drop-ins from home on phones and browsers, and on standalone VR headsets such as Meta Quest 3, without a studio uplink.",
    },
    {
      title: "Non-invasive “Virtual Twin”",
      text: "Velocity and time-span data baked into 4D splats support movement tracking and a persistent virtual twin—enabling predictive behavioral analysis and richer education without stressing the animals on-site.",
    },
  ];

  const deliverables = [
    "Proposal-ready interactive 3D habitat (Gaussian splat proof of concept)",
    "360° camera system design tailored to the guinea pig exhibit (low-profile, habitat-integrated, non-invasive)",
    "Permanent multi-camera capture architecture for future 4D expansion",
    "Web-based interactive experience for stakeholders, visitors, and donors",
    "Digital twin of the habitat for education, preservation, and media use",
    "Optional expansion path to kiosk, Unreal Engine, and AR experiences",
  ];

  const v1PipelineSpecs = [
    {
      label: "Chunk length",
      detail:
        "~30 seconds per segment. Each finished chunk becomes a new scene that plays after it is rendered.",
    },
    {
      label: "Capture",
      detail:
        "Fixed, synchronized multi-camera rig covering the bounded activity zone.",
    },
    {
      label: "Processing cadence",
      detail:
        "Selected chunks are promoted from continuous capture into reconstruction jobs (v1 assumes on the order of ~10 minutes training per 30-second segment on a single reconstruction box).",
    },
    {
      label: "Playback delay",
      detail:
        "Intentional gap between capture and display; the system shows the latest completed chunk, not the chunk currently being captured.",
    },
  ];

  const coreBomItems = [
    {
      title: "Directional reconstruction cameras",
      line: "14 × FLIR Blackfly S BFS-PGE-16S2C-CS — $371 each → $5,194",
      note: "Compact 29 × 29 × 30 mm, 36 g, GigE PoE, global shutter, CS-mount, 1440 × 1080, 78 fps, with IEEE1588 clock sync called out in the Blackfly S materials. Count matches GP-01 perimeter cameras.",
    },
    {
      title: "Lenses for the directional cameras",
      line: "14 × Tamron 13FM06IR 6 mm CS-mount lenses — $48.95 each → $685.30",
      note: "Budget 6 mm CS-mount option for perimeter views; alternate focal lengths or brands can be swapped per site survey and alignment tests.",
    },
    {
      title: "House-mounted 360 cameras",
      line: "5 × Insta360 X4 — $424.99 each → $2,124.95",
      note: "Current official product; compact at 46 × 123.6 × 37.6 mm and 203 g.",
    },
    {
      title: "Camera network switch",
      line: "1 × Ubiquiti Enterprise 24 PoE — $799",
      note: "12 × 1GbE PoE+, 12 × 2.5GbE PoE+, 2 × 10G SFP+, 400W total PoE budget.",
    },
    {
      title: "Capture / ingest box",
      line: "1 × Minisforum MS-01 Workstation (32GB RAM + 1TB SSD) — $1,015",
      note: "Dual 10GbE SFP+, dual 2.5GbE, compact workstation-class I/O.",
    },
    {
      title: "10G link from switch to ingest box",
      line: "1 × Ubiquiti 10G SFP+ DAC cable — $13",
      note: "Short 10Gb link between the Enterprise switch and the MS-01 in rack/closet.",
    },
    {
      title: "Reconstruction / training box",
      line: "1 × RTX 5090 workstation allowance — $4,449.99",
      note: "Illustrative allowance for a workstation with RTX 5090-class GPU (32 GB GDDR7 class). System pricing varies by vendor and configuration—anchor with formal quotes before procurement.",
    },
    {
      title: "Patch panel",
      line: "1 × 24-port Cat6 patch panel — $84.99",
      note: "Structured termination anchor for field runs.",
    },
    {
      title: "Network cabinet / closet box",
      line: "1 × 9U wall-mount cabinet — $181.46",
      note: "Wall-mount enclosure for switch, patch, and small gear.",
    },
    {
      title: "Outdoor-rated Ethernet cable",
      line: "1 × 1000 ft spool outdoor / direct-burial Cat6 — $353.28",
      note: "Exterior-rated jacket; still pair with conduit as required by site.",
    },
    {
      title: "Conduit",
      line: "25 × 10 ft sticks of 3/4 in. Schedule 40 PVC — $10.32 each → $258.00",
      note: "250 ft total as a starting allowance.",
    },
    {
      title: "Weatherproof field boxes",
      line: "14 × NEMA 4X polycarbonate weatherproof junction boxes — $28.32 each → $396.48",
      note: "One per directional camera position as a budget placeholder for protected terminations.",
    },
    {
      title: "UPS",
      line: "1 × APC BX1500M — $189.99",
      note: "1500 VA / 900W—covers network core and short outages.",
    },
  ];

  const phases = [
    {
      step: "01",
      title: "Continuous capture",
      text: "A synchronized multi-camera array records the bounded activity zone continuously; feeds stay time-aligned and calibrated for segmentation and reconstruction.",
    },
    {
      step: "02",
      title: "30-second chunks",
      text: "The pipeline works in ~30-second segments carved from continuous capture—each segment is a discrete unit that can become a new playable scene once processed.",
    },
    {
      step: "03",
      title: "Selective promotion",
      text: "Not every moment trains at once. Chunks are promoted from the capture buffer into reconstruction jobs as capacity allows—matching multi-minute training per segment on v1 hardware.",
    },
    {
      step: "04",
      title: "Latest completed chunk",
      text: "The phone-friendly web viewer and Nashville Zoo App show the newest finished chunk—never the segment currently being rendered.",
    },
  ];

  return (
    <div className="page-shell">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #0b1220;
          color: #e7edf7;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(84, 144, 255, 0.18), transparent 28%),
            radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.12), transparent 24%),
            linear-gradient(180deg, #0a0f1a 0%, #0d1526 100%);
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(8, 13, 25, 0.68);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 0;
        }

        .brand {
          font-weight: 800;
          letter-spacing: 0.02em;
          font-size: 1rem;
        }

        .brand-sub {
          display: block;
          font-size: 0.78rem;
          color: #9fb0cc;
          font-weight: 500;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          color: #bfd0ea;
          font-size: 0.95rem;
        }

        .hero {
          padding: 76px 0 44px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          align-items: center;
        }

        .hero-copy {
          text-align: center;
        }

        .hero-copy .eyebrow {
          margin-left: auto;
          margin-right: auto;
        }

        .hero-copy .button-row {
          justify-content: center;
        }

        .hero-copy p {
          margin-left: auto;
          margin-right: auto;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(83, 136, 255, 0.13);
          border: 1px solid rgba(83, 136, 255, 0.25);
          color: #cfe0ff;
          font-size: 0.84rem;
          margin-bottom: 18px;
        }

        .hero h1 {
          font-size: clamp(2.2rem, 4vw, 4.6rem);
          line-height: 0.96;
          margin: 0 0 16px;
          letter-spacing: -0.04em;
          text-align: center;
        }

        .hero p {
          font-size: 1.06rem;
          line-height: 1.7;
          color: #b8c6dc;
          max-width: 720px;
          margin: 0 0 26px;
        }

        .button-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 26px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          padding: 14px 18px;
          font-weight: 700;
          transition: transform 0.18s ease, opacity 0.18s ease, border-color 0.18s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #4f86ff, #65d1ff);
          color: #07111e;
          box-shadow: 0 18px 35px rgba(79, 134, 255, 0.22);
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #d5e2f7;
          background: rgba(255, 255, 255, 0.02);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .stat-card,
        .card,
        .feature-card,
        .phase-card,
        .pricing-card,
        .deliverable-card {
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.2);
          border-radius: 24px;
        }

        .stat-card {
          padding: 18px;
          text-align: center;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .stat-label {
          color: #a6b7d1;
          font-size: 0.92rem;
          line-height: 1.4;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .hero-panel {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: min(420px, 100%);
          aspect-ratio: 9 / 16;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .section {
          padding: 34px 0 70px;
        }

        .section-heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 22px;
        }

        .section-heading > div {
          width: min(100%, 900px);
          margin-left: auto;
          margin-right: auto;
        }

        .section-heading h2 {
          margin: 0 0 8px;
          font-size: clamp(1.75rem, 2.7vw, 2.9rem);
          letter-spacing: -0.03em;
          text-align: center;
          text-wrap: balance;
        }

        .section-heading p {
          margin: 0 auto;
          color: #aac0db;
          max-width: 760px;
          line-height: 1.7;
        }

        .viewer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 22px;
          align-items: stretch;
        }

        .card {
          padding: 18px;
        }

        .viewer-wrap {
          overflow: hidden;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.08);
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        iframe,
        video {
          width: 100%;
          height: 520px;
          border: 0;
          display: block;
          border-radius: 18px;
          background: #07101b;
        }

        .info-stack {
          display: grid;
          gap: 16px;
        }

        .mini-note {
          font-size: 0.92rem;
          line-height: 1.7;
          color: #b6c7dc;
        }

        .bullet-list {
          margin: 0;
          padding-left: 18px;
          color: #d8e5f6;
          line-height: 1.8;
        }

        .bullet-list li + li {
          margin-top: 6px;
        }

        .process-grid,
        .benefits-grid {
          display: grid;
          gap: 18px;
        }

        .process-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .benefits-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .technical-concept-figure {
          margin: 0 auto 28px;
          max-width: min(100%, 900px);
        }

        .technical-concept-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.2);
        }

        .technical-concept-caption {
          margin: 14px 0 0;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #a6b7d1;
          text-align: center;
        }

        .commercial-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-bottom: 22px;
          align-items: stretch;
        }

        .commercial-support-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          align-items: start;
        }

        .commercial-wide {
          margin-bottom: 22px;
        }

        .commercial-outcome {
          margin-top: 14px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.94rem;
          color: #c8d6ea;
          line-height: 1.6;
        }

        .commercial-outcome strong {
          color: #e7edf7;
        }

        .commercial-includes-label {
          margin: 0 0 8px;
          font-weight: 700;
          color: #e7edf7;
          font-size: 0.95rem;
        }

        .commercial-card .price-line {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #e7edf7;
          margin: 10px 0 12px;
        }

        .commercial-card h4 {
          margin: 20px 0 8px;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #9fb0cc;
        }

        .commercial-card h4:first-of-type {
          margin-top: 0;
        }

        .commercial-card ul.tight-list {
          margin: 8px 0 0;
          padding-left: 18px;
          color: #b4c4d9;
          line-height: 1.65;
        }

        .commercial-card ul.tight-list li + li {
          margin-top: 6px;
        }

        .payment-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 8px;
          font-size: 0.95rem;
          color: #dce7f5;
        }

        .payment-table th,
        .payment-table td {
          padding: 12px 0;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .payment-table th {
          color: #9fb0cc;
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .payment-table td:last-child {
          text-align: right;
          font-weight: 800;
          color: #e7edf7;
          white-space: nowrap;
        }

        .payment-table.payment-table-milestones td:last-child {
          white-space: normal;
          max-width: 240px;
          font-weight: 700;
        }

        .payment-table tr:last-child td {
          border-bottom: none;
        }


        .phase-card,
        .feature-card,
        .pricing-card,
        .deliverable-card {
          padding: 20px;
        }

        .phase-step {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(100, 180, 255, 0.16);
          color: #d7e7ff;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .phase-card h3,
        .feature-card h3,
        .pricing-card h3,
        .pricing-phase-title {
          margin: 0 0 10px;
          font-size: 1.08rem;
        }

        .phase-card p,
        .feature-card p {
          margin: 0;
          color: #b4c4d9;
          line-height: 1.65;
          text-align: start;
        }

        .pricing-card p,
        .deliverable-card p {
          margin: 0;
          color: #b4c4d9;
          line-height: 1.65;
        }

        .diagram-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.75fr;
          gap: 22px;
          align-items: stretch;
        }

        .diagram-toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
          justify-content: center;
        }

        .diagram-box {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(6, 10, 18, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .diagram-preview-wrap {
          border-radius: 24px;
          overflow: hidden;
          cursor: zoom-in;
        }

        .diagram-preview-wrap:focus {
          outline: none;
        }

        .diagram-preview-wrap:focus-visible {
          outline: 2px solid rgba(103, 232, 249, 0.45);
          outline-offset: 3px;
        }

        .diagram-preview-trigger {
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          border: none;
          background: none;
          cursor: zoom-in;
          font: inherit;
          color: inherit;
        }

        .diagram-blueprint {
          display: block;
          width: 100%;
          height: auto;
        }

        .diagram-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(4, 8, 16, 0.92);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: max(16px, 2.5vw);
        }

        .diagram-lightbox-close {
          position: absolute;
          top: 16px;
          right: 18px;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.5);
          color: #e7edf7;
          font-size: 1.65rem;
          line-height: 1;
          cursor: pointer;
          z-index: 10001;
        }

        .diagram-lightbox-img {
          max-width: min(96vw, 2000px);
          max-height: min(92vh, 2000px);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.55);
        }

        .diagram-caption {
          margin-top: 14px;
          color: #a9bdd6;
          line-height: 1.7;
        }

        .legend {
          display: grid;
          gap: 14px;
          margin-top: 10px;
        }

        .legend-item {
          display: flex;
          align-items: start;
          gap: 12px;
          color: #dbe8f7;
          line-height: 1.65;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          margin-top: 6px;
          flex: 0 0 auto;
        }

        .dot-blue { background: #71b8ff; }
        .dot-cyan { background: #67e8f9; }
        .dot-gold { background: #facc15; }
        .dot-green { background: #4ade80; }
        .dot-yellow { background: #facc15; }
        .dot-red { background: #ef4444; }
        .dot-purple { background: #a855f7; }

        .deliverables-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 22px;
        }

        .deliverable-list {
          margin: 0;
          padding-left: 20px;
          line-height: 1.9;
          color: #dce9f8;
        }

        .pilot-narrative {
          text-align: left;
        }

        .pilot-narrative p {
          margin: 0 0 12px;
          color: #b4c4d9;
          line-height: 1.65;
        }

        .pilot-narrative p:last-child {
          margin-bottom: 0;
        }

        .pilot-narrative-lead {
          margin-top: 4px;
          margin-bottom: 8px;
          font-weight: 600;
          color: #dce7f5;
        }

        .pilot-narrative ul {
          margin: 0 0 12px;
          padding-left: 20px;
          color: #b4c4d9;
          line-height: 1.65;
        }

        .pilot-narrative li + li {
          margin-top: 4px;
        }

        .pricing-card {
          position: relative;
        }

        .pricing-card.recommended {
          border-color: rgba(103, 232, 249, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 18px 48px rgba(65, 195, 230, 0.14);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 14px;
          background: rgba(255, 255, 255, 0.06);
          color: #d5e7f8;
        }

        .recommended .pill {
          background: rgba(103, 232, 249, 0.14);
          color: #c8fbff;
        }

        .price {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin: 8px 0 12px;
        }

        .price-sub {
          color: #8ea3be;
          font-size: 0.9rem;
          margin-bottom: 18px;
        }

        .pricing-card ul {
          margin: 0;
          padding-left: 18px;
          color: #dce7f5;
          line-height: 1.8;
        }

        .cta {
          padding: 16px 0 90px;
        }

        .cta-box {
          border-radius: 30px;
          padding: 34px;
          background:
            linear-gradient(135deg, rgba(77, 122, 255, 0.2), rgba(86, 211, 255, 0.14)),
            rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: center;
          justify-items: center;
          text-align: center;
        }

        .cta h2 {
          margin: 0 0 10px;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          letter-spacing: -0.03em;
          text-align: center;
        }

        .cta p {
          margin: 0 auto;
          color: #d4e0f0;
          line-height: 1.7;
          max-width: 760px;
        }

        .cta .button-row {
          justify-content: center;
        }

        .footer {
          padding: 0 0 36px;
          color: #8ca0ba;
          font-size: 0.92rem;
          text-align: center;
        }

        .deliverable-card h2 {
          text-align: center;
        }

        .feature-card h3,
        .phase-card h3 {
          text-align: center;
        }

        .phase-step {
          margin-left: auto;
          margin-right: auto;
        }

        .commercial-card .pricing-phase-title {
          text-align: center;
        }

        .diagram-grid .card > h3 {
          text-align: center;
        }

        .section .card > h3 {
          text-align: center;
        }

        .section .pipeline-card {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          text-align: left;
        }

        .section .pipeline-card > h3 {
          text-align: center;
        }

        .pipeline-card + .pipeline-card {
          margin-top: 22px;
        }

        .pipeline-roadmap-version {
          margin: 0 0 8px;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #9fb0cc;
        }

        .pipeline-roadmap-version + p {
          margin-top: 0;
        }

        .pipeline-roadmap-block + .pipeline-roadmap-block {
          margin-top: 18px;
        }

        .bom-card {
          text-align: left;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .bom-list {
          display: grid;
          gap: 1.35rem;
        }

        .bom-item-title {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #9fb0cc;
          margin-bottom: 6px;
        }

        .bom-item-line {
          font-weight: 700;
          color: #e7edf7;
          line-height: 1.45;
        }

        .bom-item-note {
          margin: 8px 0 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #b4c4d9;
        }

        .bom-subtotal {
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.95rem;
          line-height: 1.65;
          color: #c8d6ea;
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .viewer-grid,
          .diagram-grid,
          .deliverables-layout,
          .cta-box {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .commercial-options,
          .commercial-support-grid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 780px) {
          .nav-inner {
            flex-direction: column;
            align-items: start;
          }

          .benefits-grid,
          .hero-stats,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 44px;
          }

          .section {
            padding: 26px 0 56px;
          }

          .card,
          .phase-card,
          .feature-card,
          .pricing-card,
          .deliverable-card {
            border-radius: 20px;
          }

          .cta-box {
            padding: 24px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <div>
            <div className="brand">Volumetric Zoo Proposal</div>
            <span className="brand-sub">Guinea Pig Habitat · 3D / 4D Interactive Experience</span>
          </div>

          <div className="nav-links">
            <a href="#proof">Proof</a>
            <a href="#pipeline">v1 Pipeline</a>
            <a href="#diagram">Camera Plan</a>
            <a href="#bom">BOM</a>
            <a href="#benefits">Benefits</a>
            <a href="#technical">Technical</a>
            <a href="#commercial">Commercial</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Proposal concept · The birth of a new medium</div>
            <h1>
              The zoo’s first living hologram: a 4D reconstruction of reality—not
              CGI—that runs in real time.
            </h1>
            <p>
              Visitors are not looking at synthetic models. They are seeing a{" "}
              <strong>4D reconstruction of reality</strong> that is both photoreal
              and rendered live—light behaving as it does in the real habitat.
            </p>
            <p>
              The medium is new: users can move the camera{" "}
              <strong>anywhere through space and through time</strong>, enabling a
              bullet-time read of guinea pig motion—slow it to a crawl, replay a
              hop, or study social behavior from any angle.
            </p>

            <div className="button-row">
              <a className="btn btn-primary" href="#proof">
                Experience the demo
              </a>
              <a className="btn btn-secondary" href="#diagram">
                See Camera Placement
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">360°</div>
                <div className="stat-label">
                  Proposed perimeter camera layout around the habitat
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Space + time</div>
                <div className="stat-label">
                  Navigate the volume in 3D and scrub time for bullet-time animal motion
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Pilot Ready</div>
                <div className="stat-label">
                  Proposal format designed for stakeholder review and next-step approval
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-panel">
              <video
                className="hero-video"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="Guinea pig habitat — volumetric motion preview"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="proof" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Interactive volumetric demo</h2>
              <p>
                The embedded viewer is a <strong>handheld</strong> Gaussian splat from
                phone video <strong>outside the habitat</strong>—a lightweight proof of
                the medium, not the installed rig. The program design targets
                GP-01’s synchronized multi-camera layout, continuous capture, chunked
                reconstruction, and a path to a permanent virtual twin (see blueprint
                and pipeline sections).
              </p>
            </div>
          </div>

          <div className="viewer-grid">
            <div className="card">
              <div className="viewer-wrap">
                <iframe
                  title="Guinea Pig Habitat 3D Splat"
                  allow="fullscreen; xr-spatial-tracking"
                  src="https://superspl.at/s?id=5350756a"
                />
              </div>

              <p
                className="mini-note"
                style={{ marginTop: "14px", marginBottom: 0 }}
              >
                <strong style={{ color: "#d8e5f6" }}>Navigate:</strong> drag to
                orbit, scroll to zoom, right-drag to pan. Double-click to
                refocus. Press V to switch between orbit and fly modes. In fly
                mode: WASD to move horizontally, Q to move down, E to move up.
              </p>

              <div style={{ marginTop: "14px" }}>
                <a
                  className="btn btn-secondary"
                  href="https://superspl.at/s?id=5350756a"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Viewer in New Tab
                </a>
              </div>
            </div>

            <div className="info-stack">
              <div className="card">
                <h3 style={{ marginTop: 0 }}>What this proves</h3>
                <ul className="bullet-list">
                  <li>The exhibit can be reconstructed into a navigable 3D scene.</li>
                  <li>The habitat has enough texture, depth, and geometry for compelling splat output.</li>
                  <li>A permanent synchronized 360° camera install would improve fidelity and enable true 4D capture.</li>
                </ul>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Proposal note</h3>
                <p className="mini-note">
                  This proof of concept was generated from a consumer phone
                  capture rather than a permanent multi-camera array. A fixed,
                  synchronized 360° deployment would materially improve scene
                  consistency, animal motion capture, and repeatable output quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>How the system works</h2>
              <p>
                The habitat is recorded continuously by a synchronized camera
                system. Footage is segmented into ~30-second chunks; selected
                chunks are promoted into reconstruction. Each finished chunk becomes
                a new navigable scene in the app. Instead of watching a single
                camera view, users inspect real animal motion through space and
                time from a browser.
              </p>
            </div>
          </div>

          <div className="process-grid">
            {phases.map((phase) => (
              <div className="phase-card" key={phase.step}>
                <div className="phase-step">{phase.step}</div>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>v1 exhibit pipeline (chunk-based)</h2>
              <p>
                The first production loop is deliberately simple:{" "}
                <strong>continuous multi-view capture</strong> →{" "}
                <strong>~30-second segments</strong> →{" "}
                <strong>selective promotion</strong> into reconstruction (minutes
                per segment on v1 hardware, not seconds) →{" "}
                <strong>publish a playable splat chunk</strong> →{" "}
                <strong>show the newest finished chunk</strong> in the viewer.
                That matches how Gaussian-based systems are used: they{" "}
                <em>train</em> on prepared multi-view sequences, then{" "}
                <em>render</em> the trained scene at interactive rates—not a raw
                live camera passthrough. There is no assumption of overlapping
                chunk handoffs; each published scene stands on its own.
              </p>
            </div>
          </div>

          <div className="card pipeline-card">
            <h3 style={{ marginTop: 0 }}>Concrete v1 spec</h3>
            <ul className="bullet-list">
              {v1PipelineSpecs.map((row) => (
                <li key={row.label}>
                  <strong style={{ color: "#e7edf7" }}>{row.label}:</strong>{" "}
                  {row.detail}
                </li>
              ))}
            </ul>
            <p className="mini-note" style={{ marginTop: 18, marginBottom: 0 }}>
              <strong style={{ color: "#d8e5f6" }}>Why it works:</strong> this
              keeps the experience honest and sustainable on a single
              reconstruction box while still delivering near-live volumetric
              playback.
            </p>
          </div>

          <div className="card pipeline-card">
            <h3 style={{ marginTop: 0 }}>Roadmap</h3>
            <div className="pipeline-roadmap-block">
              <div className="pipeline-roadmap-version">Version 1</div>
              <p style={{ marginBottom: 0 }}>
                Continuous capture → segment into ~30-second chunks → promote
                selected chunks into reconstruction → publish the newest finished
                chunk to the phone / web viewer.
              </p>
            </div>
            <div className="pipeline-roadmap-block">
              <div className="pipeline-roadmap-version">Version 2+</div>
              <p style={{ marginBottom: 0 }}>
                Shorter delays, more automation, and over time a path toward a
                near-live viewing experience—still bounded by reconstruction and
                QC, not a raw camera passthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="diagram" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Guinea pig habitat — bird’s-eye blueprint</h2>
              <p>
                Sheet <strong>GP-01 Rev D</strong>: measured enclosure (~73.99 m²),
                visitor path, and a <strong>19-camera</strong> synchronized layout
                (14 perimeter + 5 house-mounted for shelter coverage) with two
                assumed power drops routing to all cameras.
              </p>
            </div>
          </div>

          <div className="diagram-grid">
            <div className="card">
              <div className="diagram-toolbar">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setBlueprintLightboxOpen(true)}
                >
                  Expand full size
                </button>
                <a
                  className="btn btn-secondary"
                  href={blueprintImage}
                  download="guinea-pig-habitat-blueprint-GP-01.png"
                >
                  Download PNG
                </a>
              </div>

              <div className="diagram-box diagram-preview-wrap">
                <button
                  type="button"
                  className="diagram-preview-trigger"
                  onClick={() => setBlueprintLightboxOpen(true)}
                  aria-label="Expand blueprint to full screen"
                >
                  <img
                    className="diagram-blueprint"
                    src={blueprintImage}
                    alt="Bird's-eye blueprint: guinea pig habitat with 19 cameras, power drops P1 and P2, and dimensional callouts"
                  />
                </button>
              </div>

              <div className="diagram-caption">
                GP-01 layout: 14 low-profile perimeter cameras, 5 house-integrated
                cameras for shelter coverage, and 2 power sources feeding the full
                ring (see schedule on sheet). Use{" "}
                <strong>Expand full size</strong> or click the image for detail;
                <strong> Download PNG</strong> for offline review.
              </div>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Placement logic</h3>

              <div className="legend">
                <div className="legend-item">
                  <span className="dot dot-yellow" />
                  <div>
                    <strong>Perimeter cameras (14)</strong>
                    <br />
                    Even spacing along the inside of the rock wall for full
                    synchronized coverage around the habitat edge.
                  </div>
                </div>

                <div className="legend-item">
                  <span className="dot dot-red" />
                  <div>
                    <strong>House-mounted cameras (5)</strong>
                    <br />
                    One integrated camera per shelter for interior and doorway
                    coverage where the ring alone would miss detail.
                  </div>
                </div>

                <div className="legend-item">
                  <span className="dot dot-purple" />
                  <div>
                    <strong>Power (P1, P2)</strong>
                    <br />
                    Two assumed drops distribute power along dashed routes to all 19
                    camera positions on the blueprint.
                  </div>
                </div>

                <div className="legend-item">
                  <span className="dot dot-green" />
                  <div>
                    <strong>Capture zone</strong>
                    <br />
                    The enclosed habitat and structures where multi-view imagery
                    reconstructs a navigable 3D / 4D splat volume.
                  </div>
                </div>
              </div>

              <div style={{ height: 18 }} />

              <h3>Why this layout works</h3>
              <ul className="bullet-list">
                <li>Full 360° perimeter coverage supports true volumetric reconstruction.</li>
                <li>Multi-height capture helps resolve shelters, foliage, and uneven ground.</li>
                <li>Existing installation points can reduce construction complexity and cost.</li>
                <li>The proposal stays modular: pilot small, expand later.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="bom" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Core BOM</h2>
              <p>
                Illustrative hardware bill of materials aligned to the GP-01 camera
                count (14 perimeter directional + 5 house 360 = 19 total). Line items
                and street prices
                change with vendor quotes—treat this as a planning anchor, not a
                purchase order.
              </p>
            </div>
          </div>

          <div className="card bom-card">
            <div className="bom-list">
              {coreBomItems.map((row) => (
                <div className="bom-item" key={row.title}>
                  <div className="bom-item-title">{row.title}</div>
                  <div className="bom-item-line">{row.line}</div>
                  {row.note ? (
                    <p className="bom-item-note">{row.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="bom-subtotal">
              <strong style={{ color: "#e7edf7" }}>Core priced subtotal:</strong>{" "}
              ~$15,745.44 before tax, shipping, labor, and site-specific mounting
              hardware.
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Why the zoo benefits</h2>
              <p>
                The habitat becomes a living digital medium: stronger guest and
                remote experiences (including in the browser and on phones), richer
                education and research, and a durable record of the animals and
                space—not a one-off render.
              </p>
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="deliverables-layout">
            <div className="deliverable-card">
              <h2 style={{ marginTop: 0, marginBottom: 14 }}>Scope & deliverables</h2>
              <ul className="deliverable-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="deliverable-card">
              <h2 style={{ marginTop: 0, marginBottom: 14 }}>Pilot narrative</h2>
              <div className="pilot-narrative">
                <p>
                  The handheld splat is a proof layer—not the end state.
                </p>
                <p>
                  The full system evolves into a permanent volumetric capture
                  installation: a synchronized multi-camera array that continuously
                  reconstructs the habitat into a living digital twin.
                </p>
                <p className="pilot-narrative-lead">This enables:</p>
                <ul>
                  <li>Immersive remote exploration</li>
                  <li>Educational overlays and storytelling</li>
                  <li>Long-term digital preservation of the exhibit</li>
                </ul>
                <p>
                  The result is not just a model, but a dynamic, evolving experience
                  that extends the exhibit beyond the fence in time and space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technical" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Technical appendix</h2>
              <p>
                Sales-ready detail: why 4D Gaussian splats outperform conventional
                photo scans and static meshes for fur, glass, and living motion.
              </p>
            </div>
          </div>

          <figure className="technical-concept-figure">
            <img
              src={concept4dGaussianSplat}
              alt="Conceptual comparison: a camera samples a dynamic scene into a single image, while 4D Gaussians are conditioned on time, splatted to 2D, and blended into an image."
              className="technical-concept-img"
              loading="lazy"
            />
            <figcaption className="technical-concept-caption">
              Conceptual diagram: 4D Gaussian Splatting produces high-quality video
              in real time by optimizing a set of 4D elements that represent how a
              scene changes across space and time. The way it renders images is
              conceptually similar to how cameras capture dynamic scenes.
            </figcaption>
          </figure>

          <div className="benefits-grid">
            <div className="feature-card">
              <h3>View dependency</h3>
              <p>
                Guinea pigs look real because the pipeline solves the{" "}
                <strong>view dependency problem</strong>: fur color and sheen shift
                the way they do in nature as the visitor’s viewing angle
                changes—not a single baked texture slapped on a model.
              </p>
            </div>
            <div className="feature-card">
              <h3>Transparency &amp; high-frequency detail</h3>
              <p>
                4D splats excel at tiny, high-frequency detail—individual hairs,
                whiskers, bedding texture—and at{" "}
                <strong>transparency</strong> such as exhibit glass or water,
                where traditional photo-to-mesh workflows often break down or look
                flat.
              </p>
            </div>
            <div className="feature-card">
              <h3>Path tracing &amp; relighting</h3>
              <p>
                The same asset feeds path-traced pipelines: add digital props,
                wardrobe, or signage that picks up real reflections, and relight or
                fog the scene for moody donor films and curriculum without
                remeshing the habitat.
              </p>
            </div>
            <div className="feature-card">
              <h3>Institutional record</h3>
              <p>
                The splat becomes a durable digital file—parallel to how landmarks
                are preserved in 3D—so the zoo retains a time-addressable record of
                the animals and space even if the physical exhibit evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="commercial" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Recommended Engagement Structure</h2>
              <p>
                Commercial terms, billing, and milestones below. Scope includes
                bespoke workflow software for capture, chunking, reconstruction
                orchestration, publish/swap, and operator handoff, not field hardware
                alone. Figures are illustrative pending executed agreement.
              </p>
            </div>
          </div>

          <div className="commercial-options">
            <div className="card commercial-card">
              <h3 className="pricing-phase-title">
                Phase 1 — Discovery + Feasibility Pilot
              </h3>
              <div className="price-line">$22,500</div>
              <p>
                Phase 1 defines the technical plan for the MVP, including camera
                layout, chunking workflow, software architecture, budget, and acceptance
                criteria.
              </p>
              <p className="commercial-includes-label">Includes:</p>
              <ul className="tight-list">
                <li>Final habitat camera plan and revised blueprint package</li>
                <li>30-second chunking and reconstruction workflow definition</li>
                <li>
                  Software architecture for ingest → reconstruct → publish → viewer
                  swap
                </li>
                <li>BOM, procurement plan, and acceptance criteria</li>
                <li>Project schedule, risk register, and proof strategy</li>
              </ul>
              <div className="commercial-outcome">
                <strong>Outcome:</strong> A signed-off design package and a go / no-go
                decision for MVP implementation.
              </div>
            </div>

            <div className="card commercial-card">
              <h3 className="pricing-phase-title">
                Phase 2 — MVP Installation + Habitat Integration
              </h3>
              <div className="price-line">$72,500 – $92,500</div>
              <p>
                Proceeds only upon owner approval following Phase 1. Covers the
                software and field integration required to deliver a working MVP in
                the habitat, including a <strong>15–30 day stabilization</strong>{" "}
                window.
              </p>
              <p className="commercial-includes-label">Includes:</p>
              <ul className="tight-list">
                <li>
                  Custom pipeline software for chunk ingest, orchestration, publish,
                  and viewer swap
                </li>
                <li>
                  Installation coordination, synchronization, and calibration support
                </li>
                <li>Dry-run and integrated pilot in habitat</li>
                <li>Operator training, runbook, and closeout documentation</li>
              </ul>
              <p className="mini-note" style={{ marginBottom: 0 }}>
                <strong>Excluded unless expressly bundled:</strong> Hardware, materials,
                cloud GPU, travel, permits, taxes, and third-party costs.
              </p>
              <div className="commercial-outcome">
                <strong>Outcome:</strong> A working MVP that captures habitat chunks,
                reconstructs them, publishes playable output, and supports operator
                handoff.
              </div>
            </div>
          </div>

          <div className="card commercial-card commercial-wide">
            <h3 className="pricing-phase-title">
              Illustrative combined total (professional services only)
            </h3>
            <p style={{ marginBottom: 0 }}>
              <strong>$95,000–$115,000</strong> simply restates Phase 1 plus Phase 2
              professional services (before retention)—not an additional fee; materials
              and hardware stay separate unless bundled.
            </p>
          </div>

          <div className="card commercial-card commercial-wide">
            <h3 className="pricing-phase-title">Milestone billing</h3>
            <p>
              Progress payments are tied to <strong>documented deliverables and
              acceptance milestones</strong>, not elapsed time alone. Professional
              services and materials are billed separately unless a turnkey agreement
              is expressly negotiated and signed.
            </p>

            <table className="payment-table payment-table-milestones">
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Phase 1 — Design, architecture, and release package.</strong>{" "}
                    Due at <strong>notice to proceed</strong>. Covers kickoff and
                    stakeholder alignment; revised GP-01 blueprint package; final
                    habitat camera layout and integration plan; 30-second (illustrative)
                    chunk capture workflow definition; software architecture for
                    capture → package → reconstruct → publish → viewer swap; BOM and
                    procurement coordination; schedule, risk register, and acceptance
                    criteria.
                  </td>
                  <td>$22,500</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 2a — Software alpha and off-site workflow demo.</strong>{" "}
                    Due upon <strong>successful off-site demonstration</strong> of MVP
                    workflow. Covers capture/chunk packaging, reconstruction job
                    orchestration, publish/output packaging, viewer load/swap logic,
                    baseline logging and operator controls, demonstration on
                    representative test footage.
                  </td>
                  <td>25% of Phase 2 PS</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 2b — Habitat installation and system bring-up.</strong>{" "}
                    Due upon <strong>field installation completion and system
                    verification</strong>. Covers installation coordination; power and
                    low-voltage verification; camera network verification; sync and
                    calibration checks; successful ingest from habitat hardware.
                  </td>
                  <td>25% of Phase 2 PS</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 2c — Integrated pilot and commissioning.</strong>{" "}
                    Due upon <strong>successful end-to-end habitat pilot</strong>.
                    Covers dry-run of capture → reconstruct → publish in the habitat
                    zone; commissioning support; tuning and operator workflow validation;
                    owner review session.
                  </td>
                  <td>30% of Phase 2 PS</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phase 2d — Acceptance, training, and closeout.</strong>{" "}
                    Due upon training, closeout delivery, and written acceptance.
                    Covers operator training; runbook and closeout materials; punch-list
                    completion or agreed punch-list procedure; written acceptance or
                    substantial completion.
                  </td>
                  <td>15% of Phase 2 PS</td>
                </tr>
                <tr>
                  <td>
                    <strong>Retention / stabilization.</strong> Held{" "}
                    <strong>15–30 days after go-live</strong> (per agreement). Released
                    upon completion of agreed stabilization support period.
                  </td>
                  <td>5% of total PS</td>
                </tr>
              </tbody>
            </table>
            <p className="mini-note" style={{ marginTop: 14, marginBottom: 0 }}>
              <strong>Phase 2 PS</strong> = contracted Phase 2 professional-services
              amount ($72,500–$92,500 range). <strong>Total PS</strong> = Phase 1 + Phase
              2. Milestone percentages above follow the agreed Phase 2 total; net terms
              (e.g. net-30) are stated in the agreement.
            </p>
          </div>

          <div className="commercial-support-grid">
            <div className="card commercial-card">
              <h3 className="pricing-phase-title">Billing structure</h3>
              <h4>Professional services</h4>
              <p>
                Include exhibit-technology architecture,{" "}
                <strong>custom software development</strong> for chunked capture and
                publish workflow, integration engineering, low-voltage planning,
                installation coordination, synchronization and calibration support,
                commissioning, training, and closeout documentation—bounded by the
                signed SOW.
              </p>
              <h4>Materials / equipment</h4>
              <p>
                <strong>Excluded from the professional-services lump sum</strong> unless
                expressly listed. Cameras, mounts, 360° units, cabling, networking,
                power hardware, enclosures, compute hardware, display hardware, and
                other BOM items are quoted separately and billed as owner-approved
                pass-through, allowance, or separate materials schedule.
              </p>
              <h4>Third-party and operating costs</h4>
              <p style={{ marginBottom: 0 }}>
                Cloud GPU, storage, software licenses, permit fees, lift or access
                equipment, taxes, travel, and owner-furnished equipment delays are
                excluded unless specifically listed in the agreement.
              </p>
            </div>

            <div className="card commercial-card">
              <h3 className="pricing-phase-title">Change orders &amp; clarification</h3>
              <h4>Change orders</h4>
              <p>
                Owner-requested scope changes, site-condition changes, added features, or
                work outside the defined scope require a{" "}
                <strong>written change order</strong>, time-and-materials
                authorization, or separate agreement before execution.
              </p>
              <h4>Commercial clarification</h4>
              <p style={{ marginBottom: 0 }}>
                Proposal pricing assumes an <strong>MVP installation scope</strong> and
                defined acceptance criteria. Additional software features, expanded
                habitats, multi-zone deployment, or ongoing support beyond the included
                stabilization period will be quoted under change order or support
                agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Pilot the first volumetric exhibit experience.</h2>
              <p>
                This proposal demonstrates a practical first step toward turning
                a live zoo habitat into a digitally explorable environment with a
                clear path to permanent 4D infrastructure.
              </p>
            </div>

            <div className="button-row" style={{ marginBottom: 0 }}>
              <a className="btn btn-primary" href="mailto:h3artfield@gmail.com">
                Start Pilot Discussion
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Guinea pig habitat volumetric proposal · Commercial figures are
          illustrative pending executed agreement. Hosted demo relies on
          third-party viewer (superspl.at).
        </div>
      </footer>

      {blueprintLightboxOpen ? (
        <div
          className="diagram-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Blueprint full size"
          onClick={() => setBlueprintLightboxOpen(false)}
        >
          <button
            type="button"
            className="diagram-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setBlueprintLightboxOpen(false);
            }}
            aria-label="Close expanded blueprint"
          >
            ×
          </button>
          <img
            className="diagram-lightbox-img"
            src={blueprintImage}
            alt="Bird's-eye blueprint: guinea pig habitat with 19 cameras, power drops P1 and P2, and dimensional callouts"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}