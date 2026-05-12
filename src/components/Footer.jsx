// src/components/Footer.jsx
export default function Footer({ navigate }) {
  const sans = "'DM Sans', system-ui, sans-serif";
  const serif = "'Playfair Display', Georgia, serif";
  const linkStyle = { background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: sans, color: "rgba(245,240,232,0.6)", padding: "4px 0", display: "block", textAlign: "left" };

  return (
    <footer style={{ background: "#0a0a0a", color: "#f5f0e8", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>🍳</span>
              <div>
                <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 900, color: "#f5f0e8" }}>
                  Che <span style={{ color: "#c4622d", fontStyle: "italic" }}>AF</span>
                </div>
                <div style={{ fontSize: 11, color: "#718096" }}>& Mix-R · & Plant Be</div>
              </div>
            </div>
            <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.55)", lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
              AI-powered cooking, cocktail and plant apps by OXALIS Studio. Cook, drink and grow — from exactly what you have.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://www.instagram.com/cheaf_cooklikeyouknow" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: sans, fontSize: 13, textDecoration: "none", color: "rgba(245,240,232,0.5)" }}>
                📸 @cheaf_cooklikeyouknow
              </a>
              <a href="https://www.instagram.com/mixr_shakewhatyouvegot" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: sans, fontSize: 13, textDecoration: "none", color: "rgba(245,240,232,0.5)" }}>
                📸 @mixr_shakewhatyouvegot
              </a>
            </div>
          </div>

          {/* Apps */}
          <div>
            <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: "#c4622d", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Apps</p>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block", marginBottom: 8 }}>🍳 Che AF</a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block", marginBottom: 8 }}>🍹 Mix-R</a>
            <a href="https://plant-be.vercel.app" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "rgba(245,240,232,0.4)", textDecoration: "none", display: "block", marginBottom: 8 }}>🌿 Plant Be <span style={{ fontSize: 10, color: "#7fb069" }}>Beta</span></a>
            <button onClick={() => navigate("pricing")} style={{ ...linkStyle, marginBottom: 8 }}>Bundle Deal</button>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: "#c4622d", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Company</p>
            <button onClick={() => navigate("about")} style={{ ...linkStyle, marginBottom: 8 }}>About</button>
            <button onClick={() => navigate("blog")} style={{ ...linkStyle, marginBottom: 8 }}>Blog</button>
            <button onClick={() => navigate("contact")} style={{ ...linkStyle, marginBottom: 8 }}>Contact</button>
            <a href="mailto:4ddiej03@gmail.com" style={{ ...linkStyle, color: "rgba(245,240,232,0.6)", textDecoration: "none", display: "block" }}>✉️ Email Us</a>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: "#c4622d", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
            <button onClick={() => navigate("terms")} style={{ ...linkStyle, marginBottom: 8 }}>Terms of Service</button>
            <button onClick={() => navigate("privacy")} style={{ ...linkStyle, marginBottom: 8 }}>Privacy Policy</button>
            <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.3)", marginTop: 16, lineHeight: 1.6 }}>
              NZBN Registered<br />New Zealand
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.3)" }}>
            © 2026 OXALIS Studio · Che AF · Mix-R · Plant Be · Registered in New Zealand
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: sans, fontSize: 12, color: "#c4622d", textDecoration: "none" }}>che-af.vercel.app</a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: sans, fontSize: 12, color: "#2563eb", textDecoration: "none" }}>mix-r.vercel.app</a>
            <a href="https://plant-be.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: sans, fontSize: 12, color: "#7fb069", textDecoration: "none" }}>plant-be.vercel.app</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
