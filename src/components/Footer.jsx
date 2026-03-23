// src/components/Footer.jsx
export default function Footer({ navigate }) {
  const linkStyle = { background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', system-ui, sans-serif", color: "rgba(245,240,232,0.6)", padding: "4px 0", display: "block", textAlign: "left" };

  return (
    <footer style={{ background: "#0a0a0a", color: "#f5f0e8", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>🍳</span>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 900, color: "#f5f0e8" }}>
                  Che <span style={{ color: "#c4622d", fontStyle: "italic" }}>AF</span>
                </div>
                <div style={{ fontSize: 11, color: "#718096" }}>& Mix-R</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 14, color: "rgba(245,240,232,0.55)", lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
              AI-powered cooking and cocktail apps. Cook and drink like you know — from exactly what you have.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.instagram.com/cheaf_cooklikeyouknow" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 20, textDecoration: "none" }}>📸</a>
            </div>
          </div>

          {/* Apps */}
          <div>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, fontWeight: 600, color: "#c4622d", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Apps</p>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block", marginBottom: 8 }}>🍳 Che AF</a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block", marginBottom: 8 }}>🍹 Mix-R</a>
            <button onClick={() => navigate("pricing")} style={{ ...linkStyle, marginBottom: 8 }}>Bundle Deal</button>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, fontWeight: 600, color: "#c4622d", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Company</p>
            <button onClick={() => navigate("about")} style={{ ...linkStyle, marginBottom: 8 }}>About</button>
            <button onClick={() => navigate("blog")} style={{ ...linkStyle, marginBottom: 8 }}>Blog</button>
            <button onClick={() => navigate("contact")} style={{ ...linkStyle, marginBottom: 8 }}>Contact</button>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, fontWeight: 600, color: "#c4622d", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
            <a href="https://che-af.vercel.app/#terms" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block", marginBottom: 8 }}>Terms of Service</a>
            <a href="https://che-af.vercel.app/#privacy" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block", marginBottom: 8 }}>Privacy Policy</a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, color: "rgba(245,240,232,0.3)" }}>
            © 2026 Che AF & Mix-R · Cook Like You Know · Shake What You've Got · Registered in New Zealand
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, color: "#c4622d", textDecoration: "none" }}>che-af.vercel.app</a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, color: "#2563eb", textDecoration: "none" }}>mix-r.vercel.app</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
