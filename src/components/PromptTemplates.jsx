export default function PromptTemplates({ onSelect }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Prompt Templates</h3>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {onSelect.templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect.setPrompt(template.prompt)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: "#f5f5f5"
            }}
          >
            {template.title}
          </button>
        ))}
      </div>
    </div>
  );
}
