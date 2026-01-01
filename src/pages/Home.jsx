import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>AI Thumbnail Generator</h1>
      <p>Create YouTube-style thumbnails using AI!</p>
      <Link to="/generate">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Start Creating →
        </button>
      </Link>
    </div>
  );
}
