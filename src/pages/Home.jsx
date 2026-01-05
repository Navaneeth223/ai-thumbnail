import { Link } from "react-router-dom";
import Hero3D from "../components/Hero3D";
import useGsapScroll from "../hooks/useGsapScroll";

export default function Home() {
  useGsapScroll();

  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem" }}>AI Thumbnail Generator</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            Create stunning thumbnails with AI & 3D.
          </p>
          <Link to="/generate">
            <button style={{ marginTop: "20px", padding: "12px 24px" }}>
              Get Started →
            </button>
          </Link>
        </div>

        <div style={{ height: "400px" }}>
          <Hero3D />
        </div>
      </div>

      {/* SCROLL SECTION */}
      <div
        className="scroll-section"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "40px",
        }}
      >
        {/* TEXT */}
        <div>
          <h2 className="scroll-text" style={{ fontSize: "2.5rem" }}>
            Built for Creators
          </h2>
          <p className="scroll-text" style={{ marginTop: "10px" }}>
            Generate thumbnails that get more clicks.
          </p>
          <p className="scroll-text">
            Powered by AI, enhanced with 3D & animations.
          </p>
        </div>

        {/* 3D */}
        <div className="scroll-3d" style={{ height: "350px" }}>
          <Hero3D />
        </div>
      </div>
    </>
  );
}
