import { useRef, useState } from "react";
import { generateThumbnail } from "../api";
import promptTemplates from "../data/promptTemplates";
import Thumbnail3D from "../components/Thumbnail3D";
import useGsapIntro from "../hooks/useGsapIntro";

export default function Generate() {
  const containerRef = useRef(null);
  useGsapIntro(containerRef);

  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);
    const url = await generateThumbnail(prompt);
    setImage(url);
    setLoading(false);
  }

  return (
    <div
      ref={containerRef}
      style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}
    >
      <h2>AI Thumbnail Generator</h2>

      {/* Prompt Templates */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Templates</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {promptTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => setPrompt(template.prompt)}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
                background: "#eee"
              }}
            >
              {template.title}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Input */}
      <textarea
        rows="4"
        placeholder="Enter thumbnail prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Thumbnail"}
      </button>

      {/* 3D Result */}
      {image && (
        <div style={{ marginTop: "30px" }}>
          <h3>3D Preview</h3>
          <Thumbnail3D image={image} />

          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <a href={image} download>
              <button>Download</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
