  // src/pages/HomePage.jsx
import { useState, useEffect } from "react";

const CHEAF_FEATURES = [
  { icon: "📸", title: "Scan Your Fridge", desc: "Point your camera at your fridge. AI identifies every ingredient and generates recipes instantly." },
  { icon: "🤖", title: "AI Recipe Generation", desc: "Unique recipes matched perfectly to what you have. No wasted food, no missing ingredients." },
  { icon: "📅", title: "Meal Planner", desc: "Plan your whole week in seconds. Auto-generates your shopping list." },
  { icon: "🎤", title: "Voice Navigation", desc: "Full accessibility for blind users. A world-first in recipe apps." },
];

const MIXR_FEATURES = [
  { icon: "📸", title: "Scan Your Shelf", desc: "AI identifies every bottle, mixer and garnish on your bar shelf instantly." },
  { icon: "🤖", title: "AI Cocktail Generation", desc: "Cocktails, mocktails and traditional drinks from every culture worldwide." },
  { icon: "🌍", title: "Global Drinks", desc: "From Cuban mojitos to Māori kawakawa drinks — 50+ cultures covered." },
  { icon: "🍹", title: "Making Mode", desc: "Step-by-step guide with ingredient checklist and garnish reminders." },
];

const TESTIMONIAL_PLACEHOLDER = [
  { name: "Sarah K.", text: "I scan my fridge every Sunday and Che AF plans my whole week. Life changing!", role: "Pioneer #12" },
  { name: "James T.", text: "As a home bartender, Mix-R has introduced me to drinks I never would have found.", role: "Pioneer #34" },
  { name: "Maria L.", text: "The voice navigation is incredible — my vsually impaired sister uses it every day.", role: "Pioneer #67" },
];

export default function HomePage({ navigate }) {
  const [visible, setVisible] = useState(false);
  const [activeApp, setActiveApp] = useState("cheaf");

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 68 }}>

      {/* Hero */}
      <section style={{ background: "#0a0a0a", padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(196,98,45,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,98,45,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(196,98,45,0.15)", border: "1px solid rgba(196,98,45,0.3)", padding: "8px 20px", marginBottom: 40 }}>
            <span style={{ fontSize: 14, fontFamily: sans, color: "#c4622d", fontWeight: 500, letterSpacing: 1 }}>🌟 🔥 Only 8 Che AF + 28 Mix-R Pioneer spots left</span>
          </div>

          <h1 style={{ fontFamily: serif, fontSize: "clamp(48px, 10vw, 100px)", fontWeight: 900, lineHeight: 0.92, color: "#f5f0e8", letterSpacing: -3, marginBottom: 32, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s" }}>
            Cook & drink<br /><em style={{ color: "#c4622d", fontStyle: "italic" }}>like you know.</em>
          </h1>

          <p style={{ fontFamily: sans, fontSize: 20, fontWeight: 300, color: "rgba(245,240,232,0.65)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 48px", opacity: visible ? 1 : 0, transition: "all 0.8s 0.2s" }}>
            Two AI-powered apps that turn what you already have into incredible meals and cocktails. No wasted food. No missing ingredients.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "all 0.8s 0.4s" }}>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "18px 40px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 16, textDecoration: "none", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}>
              🍳 Try Che AF Free
            </a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "18px 40px", background: "#2563eb", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 16, textDecoration: "none", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}>
              🍹 Try Mix-R Free
            </a>
          </div>

          <p style={{ fontFamily: sans, fontSize: 13, color: "rgba(245,240,232,0.3)", marginTop: 24 }}>No credit card · Free forever for first 30 users · Works on any device</p>
        </div>
      </section>

      {/* App switcher */}
      <section style={{ background: "#faf6ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 50, padding: 4, gap: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <button onClick={() => setActiveApp("cheaf")}
                style={{ padding: "12px 32px", borderRadius: 50, border: "none", background: activeApp === "cheaf" ? "#c4622d" : "transparent", color: activeApp === "cheaf" ? "#fff" : "#718096", fontFamily: sans, fontWeight: 600, fontSize: 15, cursor: "pointer", transition: "all 0.2s" }}>
                🍳 Che AF
              </button>
              <button onClick={() => setActiveApp("mixr")}
                style={{ padding: "12px 32px", borderRadius: 50, border: "none", background: activeApp === "mixr" ? "#2563eb" : "transparent", color: activeApp === "mixr" ? "#fff" : "#718096", fontFamily: sans, fontWeight: 600, fontSize: 15, cursor: "pointer", transition: "all 0.2s" }}>
                🍹 Mix-R
              </button>
            </div>
          </div>

          {activeApp === "cheaf" && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Che AF</p>
                <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#1a202c", lineHeight: 1.1 }}>
                  Cook Like <em style={{ color: "#c4622d", fontStyle: "italic" }}>You Know</em>
                </h2>
                <p style={{ fontFamily: sans, fontSize: 17, color: "#718096", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
                  Scan your fridge. AI generates recipes from exactly what you have. No wasted food, no missing ingredients.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
                {CHEAF_FEATURES.map((f, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, borderTop: "3px solid #c4622d" }}>
                    <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>{f.icon}</span>
                    <h3 style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#1a202c" }}>{f.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, color: "#718096", lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
                  style={{ padding: "16px 40px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
                  🍳 Get Che AF Free →
                </a>
              </div>
            </div>
          )}

          {activeApp === "mixr" && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#2563eb", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Mix-R</p>
                <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#1a202c", lineHeight: 1.1 }}>
                  Shake What <em style={{ color: "#2563eb", fontStyle: "italic" }}>You've Got</em>
                </h2>
                <p style={{ fontFamily: sans, fontSize: 17, color: "#718096", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
                  Scan your bar shelf. AI generates cocktails, mocktails and traditional drinks from every culture worldwide.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
                {MIXR_FEATURES.map((f, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, borderTop: "3px solid #2563eb" }}>
                    <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>{f.icon}</span>
                    <h3 style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#1a202c" }}>{f.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, color: "#718096", lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
                  style={{ padding: "16px 40px", background: "#2563eb", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
                  🍹 Get Mix-R Free →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bundle section */}
      <section style={{ background: "#0a0a0a", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Better Together</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#f5f0e8", lineHeight: 1.1, marginBottom: 20 }}>
            Hungry <em style={{ color: "#c4622d", fontStyle: "italic" }}>and</em> thirsty?
          </h2>
          <p style={{ fontFamily: sans, fontSize: 18, color: "rgba(245,240,232,0.6)", lineHeight: 1.7, marginBottom: 48 }}>
            Get Che AF AND Mix-R together for just $4.99 NZD/month. Food and drinks — completely covered.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "rgba(245,240,232,0.06)", marginBottom: 40 }}>
            {[
              { label: "Free", price: "$0", sub: "Forever", features: ["10 AI calls/month", "Basic features"], color: "#718096" },
              { label: "Single App", price: "$2.99", sub: "NZD/month", features: ["Unlimited AI", "All features", "One app"], color: "#c4622d" },
              { label: "Bundle", price: "$4.99", sub: "NZD/month", features: ["Che AF + Mix-R", "Unlimited AI", "Best value 🏆"], color: "#c4622d", highlight: true },
            ].map((p, i) => (
              <div key={i} style={{ padding: "32px 24px", background: p.highlight ? "rgba(196,98,45,0.08)" : "#0a0a0a", border: p.highlight ? "1px solid rgba(196,98,45,0.3)" : "none", position: "relative" }}>
                {p.highlight && <div style={{ position: "absolute", top: -1, right: 16, background: "#c4622d", padding: "3px 10px", fontSize: 10, fontWeight: 700, fontFamily: sans, color: "#fff" }}>BEST VALUE</div>}
                <p style={{ fontFamily: sans, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: p.highlight ? "#c4622d" : "#718096", marginBottom: 8 }}>{p.label}</p>
                <p style={{ fontFamily: serif, fontSize: 36, fontWeight: 900, color: "#f5f0e8", marginBottom: 2 }}>{p.price}</p>
                <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.3)", marginBottom: 20 }}>{p.sub}</p>
                {p.features.map((f, j) => <div key={j} style={{ fontFamily: sans, fontSize: 13, color: p.highlight ? "rgba(245,240,232,0.8)" : "rgba(245,240,232,0.5)", marginBottom: 6 }}>✓ {f}</div>)}
              </div>
            ))}
          </div>
          <button onClick={() => navigate("pricing")}
            style={{ padding: "16px 40px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
            See Full Pricing →
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#faf6ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Pioneer Members</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a202c" }}>What our users say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {TESTIMONIAL_PLACEHOLDER.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28 }}>
                <p style={{ fontFamily: serif, fontSize: 16, fontStyle: "italic", color: "#4a5568", lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#c4622d", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: sans, fontWeight: 700, fontSize: 16 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, margin: 0, color: "#1a202c" }}>{t.name}</p>
                    <p style={{ fontFamily: sans, fontSize: 12, margin: 0, color: "#c4622d" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#c4622d", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, color: "#fff", lineHeight: 0.95, marginBottom: 24 }}>
            Start cooking.<br />Start mixing.<br /><em style={{ fontStyle: "italic", opacity: 0.85 }}>Start today.</em>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 40 }}>
            Only 8 Che AF spots and 28 Mix-R spots left. After that it's $2.99 NZD/month.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "18px 36px", background: "#fff", color: "#c4622d", fontFamily: sans, fontWeight: 700, fontSize: 16, textDecoration: "none", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
              🍳 Get Che AF
            </a>
            <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: "18px 36px", background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: sans, fontWeight: 700, fontSize: 16, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
              🍹 Get Mix-R
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
