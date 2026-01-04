import { Link } from "react-router-dom";
import { useRef } from "react";
import Hero3D from "../components/Hero3D";
import useGsapHero from "../hooks/useGsapHero";

export default function Home() {
  const heroRef = useRef(null);
  useGsapHero(heroRef);

  return (
    <div
      ref={heroRef}
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "40px"
      }}
    >
      {/* LEFT CONTENT */}
      <div>
        <h1 className="hero-text" style={{ fontSize: "3rem" }}>
          AI Thumbnail Generator
        </h1>

        <p className="hero-text" style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Create eye-catching YouTube thumbnails using AI & 3D visuals.
        </p>

        <Link to="/generate">
          <button
            className="hero-text"
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Get Started →
          </button>
        </Link>
      </div>

      {/* RIGHT 3D SCENE */}
      <div style={{ height: "400px" }}>
        <Hero3D />
      </div>
    </div>
  );
}
