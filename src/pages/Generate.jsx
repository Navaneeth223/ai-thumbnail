import { useState } from "react";
import { generateThumbnail } from "../api";
import promptTemplates from "../data/promptTemplates";

export default function Generate() {
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
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
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

      {/* Result */}
      {image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result</h3>
          <img src={image} alt="Thumbnail" width="512" />
          <br /><br />
          <a href={image} download>
            <button>Download</button>
          </a>
        </div>
      )}
    </div>
  );
}
