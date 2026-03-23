// src/pages/BlogPostPage.jsx
import { BLOG_POSTS } from "./BlogPage";

export default function BlogPostPage({ slug, navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";
  const post  = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return (
    <div style={{ paddingTop: 68, textAlign: "center", padding: "120px 24px" }}>
      <h2 style={{ fontFamily: serif, fontSize: 32, color: "#1a202c" }}>Post not found</h2>
      <button onClick={() => navigate("blog")} style={{ marginTop: 24, padding: "12px 24px", background: "#c4622d", color: "#fff", border: "none", cursor: "pointer", fontFamily: sans }}>← Back to Blog</button>
    </div>
  );

  // Simple markdown-like renderer
  function renderContent(content) {
    return content.trim().split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} style={{ fontFamily: serif, fontSize: 28, fontWeight: 900, color: "#1a202c", marginTop: 40, marginBottom: 16 }}>{line.replace("## ", "")}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: "#1a202c", marginTop: 28, marginBottom: 12 }}>{line.replace("### ", "")}</h3>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: "#1a202c", marginBottom: 8 }}>{line.replace(/\*\*/g, "")}</p>;
      if (line.startsWith("- ")) return <li key={i} style={{ fontFamily: sans, fontSize: 15, color: "#4a5568", lineHeight: 1.7, marginBottom: 4 }}>{line.replace("- ", "")}</li>;
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} style={{ fontFamily: sans, fontSize: 16, color: "#4a5568", lineHeight: 1.8, marginBottom: 16 }}>{line}</p>;
    });
  }

  return (
    <div style={{ paddingTop: 68 }}>
      <div style={{ background: post.color, padding: "60px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <button onClick={() => navigate("blog")}
            style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", padding: "8px 16px", cursor: "pointer", fontFamily: sans, fontSize: 13, marginBottom: 24, borderRadius: 4 }}>
            ← Back to Blog
          </button>
          <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{post.category} · {post.date} · {post.readTime}</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>{post.title}</h1>
        </div>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 80px" }}>
        {renderContent(post.content)}
        <div style={{ marginTop: 60, padding: 32, background: "#faf6ef", border: "1px solid #e2e8f0", borderRadius: 16, textAlign: "center" }}>
          <p style={{ fontFamily: serif, fontSize: 22, fontWeight: 900, color: "#1a202c", marginBottom: 12 }}>Ready to try it yourself?</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 28px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              🍳 Try Che AF Free
            </a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 28px", background: "#2563eb", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              🍹 Try Mix-R Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
