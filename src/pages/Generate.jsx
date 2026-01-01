import { useState } from "react";
import { generateThumbnail } from "../api";

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
    <div style={{ padding: "20px" }}>
      <h2>Create Thumbnail</h2>

      <textarea
        rows="3"
        placeholder="Enter thumbnail prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Thumbnail"}
      </button>

      {image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Thumbnail:</h3>
          <img src={image} alt="Generated Thumbnail" width="512" />
          <br /><br />
          <a href={image} download>
            <button>Download</button>
          </a>
        </div>
      )}
    </div>
  );
}
