// src/components/Nav.jsx
import { useState, useEffect } from "react";

const LINKS = [
  { label: "Home", page: "home" },
  { label: "Features", page: "features" },
  { label: "Pricing", page: "pricing" },
  { label: "Blog", page: "blog" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

export default function Nav({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(250,246,239,0.97)" : "rgba(250,246,239,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(196,98,45,0.15)" : "1px solid transparent",
        transition: "all 0.3s",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button onClick={() => navigate("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28 }}>🍳</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 900, color: "#1a202c", lineHeight: 1 }}>
                Che <span style={{ color: "#c4622d", fontStyle: "italic" }}>AF</span>
              </div>
              <div style={{ fontSize: 10, color: "#a0aec0", letterSpacing: 1 }}>& Mix-R</div>
            </div>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            {LINKS.map(l => (
              <button key={l.page} onClick={() => navigate(l.page)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: page === l.page ? 600 : 400, color: page === l.page ? "#c4622d" : "#4a5568", padding: "4px 0", borderBottom: page === l.page ? "2px solid #c4622d" : "2px solid transparent", transition: "all 0.2s" }}>
                {l.label}
              </button>
            ))}
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "10px 20px", background: "#c4622d", color: "#fff", fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 13, textDecoration: "none", clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}>
              Get Started Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, display: "none" }} className="mobile-menu-btn">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: "#faf6ef", zIndex: 99, padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {LINKS.map(l => (
            <button key={l.page} onClick={() => { navigate(l.page); setMenuOpen(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: page === l.page ? 700 : 400, color: page === l.page ? "#c4622d" : "#1a202c", textAlign: "left", padding: "12px 0", borderBottom: "1px solid rgba(196,98,45,0.1)" }}>
              {l.label}
            </button>
          ))}
          <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{ padding: "16px", background: "#c4622d", color: "#fff", fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", textAlign: "center", marginTop: 8 }}>
            Get Started Free →
          </a>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
