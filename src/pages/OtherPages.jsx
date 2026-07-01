// src/pages/FeaturesPage.jsx
import React, { useState } from "react";

export function FeaturesPage({ navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const CHEAF = [
    { icon: "📸", title: "Fridge & Pantry Scan", desc: "Point your camera at your fridge or pantry. Claude AI identifies every ingredient — vegetables, proteins, condiments, even partial packages — and generates recipes around them instantly." },
    { icon: "🤖", title: "AI Recipe Generation", desc: "Generate 3 unique recipes from your ingredients in seconds. Not generic recipes from a database — recipes designed around your exact ingredients, skill level and preferences." },
    { icon: "📅", title: "Weekly Meal Planner", desc: "Plan 1-7 days with custom meal slots (breakfast, lunch, dinner, snacks). Auto-fill uses AI to assign recipes, then generates a complete shopping list with only what you're missing." },
    { icon: "📐", title: "Serving Size Scaler", desc: "Tap + or - on any recipe card and every ingredient scales automatically. Fractions, mixed numbers and all units handled correctly." },
    { icon: "🎤", title: "Voice Navigation", desc: "Complete voice control for all app functions. Designed specifically for blind and visually impaired users — a world first in recipe apps." },
    { icon: "🔗", title: "Import Any Recipe", desc: "Paste any URL from any recipe website. The AI extracts the full recipe and saves it to your collection, scaled to your serving size." },
    { icon: "🌐", title: "Online Recipe Search", desc: "Search across 16 cuisines. AI finds real recipes and matches them against your pantry to show what you can make right now." },
    { icon: "🔍", title: "Find Similar Recipes", desc: "Tap Similar on any recipe to get AI-powered alternatives — healthier versions, easier variations, different cuisines." },
    { icon: "☁️", title: "Cloud Sync", desc: "Recipes, pantry, shopping list and favorites sync instantly across all your devices. Never lose your collection." },
    { icon: "🛒", title: "Smart Shopping List", desc: "Missing ingredients are added automatically when you cook or plan. Check off items as you shop." },
    { icon: "🌍", title: "13 Languages", desc: "Full UI translation in English, French, Spanish, Malay, Filipino, Indonesian and 7 more. AI content generated in your chosen language." },
    { icon: "🌙", title: "Dark Mode + Accessibility", desc: "Dark mode, large text and high contrast modes. Full screen reader support with VoiceOver and TalkBack." },
  ];

  const MIXR = [
    { icon: "📸", title: "Bar Shelf Scanner", desc: "Scan your bar shelf and AI identifies every bottle, mixer, garnish and bitters. Perfect for home bartenders who lose track of what they have." },
    { icon: "🤖", title: "AI Drink Generation", desc: "Generate cocktails, mocktails, traditional drinks and shots from exactly what's on your shelf. Alcoholic or non-alcoholic — your choice." },
    { icon: "🌍", title: "Global Drinks Library", desc: "50+ cultures covered. Māori kawakawa, Malaysian teh tarik, Filipino lambanog, Japanese sake cocktails — authentic traditional drinks from every corner of the world." },
    { icon: "🍹", title: "Step-by-Step Making Mode", desc: "Ingredient checklist, step-by-step instructions, timing cues and garnish reminders. Never forget a step." },
    { icon: "🔗", title: "Import Cocktail Recipes", desc: "Import from Difford's Guide, Liquor.com, TailsOnline or any cocktail website. One URL, instant save." },
    { icon: "➕", title: "Create Your Own Recipes", desc: "Bartenders and home mixologists can create and save their own signature recipes with full ingredient and step management." },
  ];

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "#0a0a0a", padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Features</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "#f5f0e8", lineHeight: 0.95 }}>
            Everything you<br /><em style={{ color: "#c4622d", fontStyle: "italic" }}>need to cook.</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#faf6ef" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <span style={{ fontSize: 40 }}>🍳</span>
              <div>
                <h2 style={{ fontFamily: serif, fontSize: 36, fontWeight: 900, color: "#1a202c", margin: 0 }}>Che AF Features</h2>
                <p style={{ fontFamily: sans, fontSize: 14, color: "#718096", margin: "4px 0 0" }}>Cook Like You Know</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {CHEAF.map((f, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24, borderLeft: "4px solid #c4622d" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
                  <h3 style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: "#1a202c", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, color: "#718096", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <span style={{ fontSize: 40 }}>🍹</span>
              <div>
                <h2 style={{ fontFamily: serif, fontSize: 36, fontWeight: 900, color: "#1a202c", margin: 0 }}>Mix-R Features</h2>
                <p style={{ fontFamily: sans, fontSize: 14, color: "#718096", margin: "4px 0 0" }}>Shake What You've Got</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {MIXR.map((f, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24, borderLeft: "4px solid #2563eb" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
                  <h3 style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: "#1a202c", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, color: "#718096", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/pages/PricingPage.jsx
export function PricingPage({ navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const PLANS = [
    {
      name: "Free", price: "$0", sub: "Forever",
      color: "#718096", highlight: false,
      features: ["10 AI calls/month", "Recipe management", "Pantry tracking", "Shopping list", "Basic meal planner"],
      cta: "Get Started", ctaUrl: "https://che-af.vercel.app",
    },
    {
      name: "Che AF Pro", price: "$2.99", sub: "NZD/month",
      color: "#c4622d", highlight: false,
      features: ["Unlimited AI recipes", "Fridge photo scan", "Full meal planner", "Import any recipe", "Voice navigation", "13 languages", "Cloud sync", "Priority support"],
      cta: "Get Che AF", ctaUrl: "https://che-af.vercel.app",
    },
    {
      name: "Mix-R Pro", price: "$2.99", sub: "NZD/month",
      color: "#2563eb", highlight: false,
      features: ["Unlimited AI drinks", "Bar shelf scanner", "Global drinks library", "Making mode", "Import cocktail recipes", "Create your own recipes", "Cloud sync"],
      cta: "Get Mix-R", ctaUrl: "https://mix-r.vercel.app",
    },
    {
      name: "Bundle", price: "$4.99", sub: "NZD/month",
      color: "#c4622d", highlight: true,
      badge: "BEST VALUE",
      features: ["Everything in Che AF Pro", "Everything in Mix-R Pro", "One login for both apps", "Save $0.98/month vs separate", "Future apps included"],
      cta: "Get Bundle", ctaUrl: "https://che-af.vercel.app",
    },
  ];

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "#0a0a0a", padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Pricing</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "#f5f0e8", lineHeight: 0.95, marginBottom: 20 }}>
            Start free.<br /><em style={{ color: "#c4622d", fontStyle: "italic" }}>Enjoy the free</em> if you're ready.
          </h1>
          <p style={{ fontFamily: sans, fontSize: 17, color: "rgba(245,240,232,0.6)", lineHeight: 1.7 }}>
            Or join our plans start at $2.99 NZD/month.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#faf6ef" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {PLANS.map((plan, i) => (
              <div key={i} style={{ background: "#fff", border: `2px solid ${plan.highlight ? plan.color : "#e2e8f0"}`, borderRadius: 20, padding: 32, position: "relative" }}>
                {plan.badge && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: plan.color, color: "#fff", padding: "4px 16px", fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: 2, whiteSpace: "nowrap" }}>{plan.badge}</div>}
                <p style={{ fontFamily: sans, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: plan.color, marginBottom: 8 }}>{plan.name}</p>
                <p style={{ fontFamily: serif, fontSize: 44, fontWeight: 900, color: "#1a202c", marginBottom: 4, lineHeight: 1 }}>{plan.price}</p>
                <p style={{ fontFamily: sans, fontSize: 13, color: "#718096", marginBottom: 24 }}>{plan.sub}</p>
                <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 20, marginBottom: 24 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ fontFamily: sans, fontSize: 14, color: "#4a5568", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: plan.color, fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href={plan.ctaUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", padding: "14px", background: plan.highlight ? plan.color : "transparent", border: `2px solid ${plan.color}`, color: plan.highlight ? "#fff" : plan.color, fontFamily: sans, fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center", boxSizing: "border-box" }}>
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60, background: "#0a0a0a", borderRadius: 20, padding: "48px 40px", textAlign: "center" }}>
            <h2 style={{ fontFamily: serif, fontSize: 32, fontWeight: 900, color: "#f5f0e8", marginBottom: 16 }}>🌟 Pioneer Member Offer</h2>
            <p style={{ fontFamily: sans, fontSize: 16, color: "rgba(245,240,232,0.6)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 32px" }}>
              The first 200 users to sign up on either app get full Pro access free forever. This includes both apps if you sign up on each. No credit card required.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://che-af.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ padding: "14px 32px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
                🍳 Get Che AF Pioneer
              </a>
              <a href="https://mix-r.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ padding: "14px 32px", background: "#2563eb", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
                🍹 Get Mix-R Pioneer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/pages/AboutPage.jsx
export function AboutPage({ navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: "#0a0a0a", padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>About</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "#f5f0e8", lineHeight: 0.95 }}>
            Built for real<br /><em style={{ color: "#c4622d", fontStyle: "italic" }}>kitchens and bars.</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#faf6ef" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {[
            {
              title: "The Problem We Solve",
              text: "Every week, households throw away food they forgot they had. Every night, people stare at their fridge wondering what to make. Every weekend, home bartenders look at their bar shelf not knowing what to mix. The knowledge exists — it just needs a bridge between what you have and what you can make.",
            },
            {
              title: "Why We Built This",
              text: "Che AF started as a personal frustration. Too much food going to waste, too little inspiration, too many recipe apps that assumed you'd go shopping before cooking. We wanted an app that started with what you already have — not what you need to buy.",
            },
            {
              title: "The Accessibility Mission",
              text: "From the beginning, Che AF was designed with blind and visually impaired users as a core audience. Voice navigation, screen reader support, and fridge scanning for independent cooking — these aren't afterthoughts. They're foundational. Mix-R carries the same commitment to accessibility.",
            },
            {
              title: "Mix-R and Global Drinks",
              text: "Mix-R grew from a simple observation: cocktail apps only cover Western drinks. There's an entire world of traditional beverages — Malaysian teh tarik, Māori kawakawa drinks, Filipino lambanog, Korean makgeolli — that deserve to be discovered and celebrated. Mix-R covers 50+ cultures and counting.",
            },
            {
              title: "Our Commitment",
              text: "We're a solo founder operation registered in New Zealand. No venture capital, no advertising, no selling user data. Just two apps trying to make cooking and mixing more joyful, more accessible and less wasteful. The first 200 users of each app get Pro free forever — because early supporters deserve to be rewarded.",
            },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < 4 ? "1px solid #e2e8f0" : "none" }}>
              <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 900, color: "#1a202c", marginBottom: 16 }}>{s.title}</h2>
              <p style={{ fontFamily: sans, fontSize: 16, color: "#4a5568", lineHeight: 1.8 }}>{s.text}</p>
            </div>
          ))}

          <div style={{ background: "#0a0a0a", borderRadius: 20, padding: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: serif, fontSize: 28, color: "#f5f0e8", marginBottom: 16 }}>Registered in New Zealand</h3>
            <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", lineHeight: 1.7, marginBottom: 24 }}>
              Che AF and Mix-R are products of a New Zealand sole trader business.<br />
              NZBN registered · Stripe payments · Supabase data storage
            </p>
            <button onClick={() => navigate("contact")}
              style={{ padding: "14px 32px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}>
              Get in Touch →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/pages/ContactPage.jsx
// Replace your ContactPage function in OtherPages.jsx with this one
// Uses Formspree — submissions go straight to 4ddiej03@gmail.com

export function ContactPage({ navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const CONTACTS = [
    { icon: "✉️", label: "Email", value: "4ddiej03@gmail.com", href: "mailto:4ddiej03@gmail.com?subject=Enquiry — OXALIS Studio", desc: "Best way to reach us — we respond within 2 business days" },
    { icon: "📸", label: "Instagram — Che AF", value: "@cheaf_cooklikeyouknow", href: "https://www.instagram.com/cheaf_cooklikeyouknow", desc: "Recipes, tips and app updates" },
    { icon: "📸", label: "Instagram — Mix-R", value: "@mixr_shakewhatyouvegot", href: "https://www.instagram.com/mixr_shakewhatyouvegot", desc: "Cocktails, global drinks and app updates" },
    { icon: "🍳", label: "Che AF App", value: "che-af.vercel.app", href: "https://che-af.vercel.app", desc: "AI recipe app — Cook Like You Know" },
    { icon: "🍹", label: "Mix-R App", value: "mix-r.vercel.app", href: "https://mix-r.vercel.app", desc: "AI cocktail app — Shake What You've Got" },
    { icon: "🌿", label: "Plant Be", value: "plant-be.vercel.app", href: "https://plant-be.vercel.app", desc: "AI plant scanner — Beta" },
  ];

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ padding: "80px 24px", background: "#faf6ef", minHeight: "80vh" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Header */}
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "#1a202c", lineHeight: 0.95, marginBottom: 24 }}>
            Let's create<br /><em style={{ color: "#c4622d", fontStyle: "italic" }}>something.</em>
          </h1>
          <div style={{ width: 60, height: 4, background: "#c4622d", marginBottom: 40 }} />
          <p style={{ fontFamily: sans, fontSize: 17, color: "#718096", lineHeight: 1.9, marginBottom: 64, maxWidth: 560 }}>
            Whether you have a question, feedback or want to collaborate — we'd love to hear from you. Every great project starts with a conversation.
          </p>
          <div style={{ width: 60, height: 4, background: "#c4622d", marginBottom: 40 }} />
         <p style={{ fontFamily: sans, fontSize: 18, fontWeight: 900, color: "#1a202c", lineHeight: 0.95, marginBottom: 36 }}>
            Email us to 4ddiej03@gmail.com and let's create something amazing!
          </p>


        </div>
      </section>
    </div>
  );
}

// ─── TERMS PAGE ───────────────────────────────────────────────────────────────
export function TermsPage({ navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ padding: "80px 24px", background: "#faf6ef", minHeight: "80vh" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#1a202c", lineHeight: 1, marginBottom: 16 }}>Terms of Service</h1>
          <p style={{ fontFamily: sans, fontSize: 13, color: "#a0aec0", marginBottom: 48 }}>Last updated: June 2026 · OXALIS Studio · New Zealand</p>

          {[
            { title: "1. Acceptance of Terms", body: "By accessing or using Che AF, Mix-R or Plant Be (collectively 'the Apps'), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Apps." },
            { title: "2. Description of Service", body: "The Apps provide AI-powered recipe generation, cocktail creation and plant identification services. They are provided by OXALIS Studio, a New Zealand registered sole trader business." },
            { title: "3. User Accounts", body: "You must provide accurate information when creating an account. You are responsible for maintaining the security of your account and password. We reserve the right to terminate accounts that violate these terms." },
            { title: "4. AI-Generated Content", body: "Content generated by our AI is provided for informational and entertainment purposes only. We do not guarantee the accuracy of AI-generated recipes, cocktail suggestions or plant identifications. Always use your own judgment and consult professionals for health and medical matters." },
            { title: "5. Health & Safety", body: "Plant Be provides general plant information only. Do not consume any plant based solely on information provided by the app. Always consult a qualified professional before using any plant for medicinal purposes. Some plants are toxic — always check toxicity warnings carefully." },
            { title: "6. Subscriptions & Payments", body: "Paid subscriptions are processed through Stripe. Pioneer members receive free Pro access as described at signup. Subscription fees are in NZD and are non-refundable unless required by New Zealand consumer law." },
            { title: "7. Intellectual Property", body: "The Apps, their design, code and branding are the property of OXALIS Studio. User-generated content remains your property. You grant us a licence to use content you submit to improve our services." },
            { title: "8. Limitation of Liability", body: "To the maximum extent permitted by law, OXALIS Studio shall not be liable for any indirect, incidental or consequential damages arising from your use of the Apps." },
            { title: "9. Changes to Terms", body: "We may update these terms at any time. Continued use of the Apps after changes constitutes acceptance of the new terms." },
            { title: "10. Contact", body: "For questions about these terms, contact us at 4ddiej03@gmail.com" },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < 9 ? "1px solid #e2e8f0" : "none" }}>
              <h2 style={{ fontFamily: serif, fontSize: 22, fontWeight: 900, color: "#1a202c", marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontFamily: sans, fontSize: 15, color: "#718096", lineHeight: 1.8 }}>{s.body}</p>
            </div>
          ))}

          <button onClick={() => navigate("home")}
            style={{ padding: "14px 28px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", borderRadius: 10, marginTop: 16 }}>
            ← Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── PRIVACY PAGE ───────────────────────────────────────────────────────────────
export function PrivacyPage({ navigate }) {
  const serif = "'Playfair Display', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ padding: "80px 24px", background: "#faf6ef", minHeight: "80vh" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "#c4622d", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#1a202c", lineHeight: 1, marginBottom: 16 }}>Privacy Policy</h1>
          <p style={{ fontFamily: sans, fontSize: 13, color: "#a0aec0", marginBottom: 48 }}>Last updated: June 2026 · OXALIS Studio · New Zealand</p>

          {[
            { title: "1. Information We Collect", body: "We collect your email address and password when you create an account. We also store the recipes, drinks and plants you save within the Apps. Photos you take are stored on your own device only — they are never uploaded to our servers." },
            { title: "2. How We Use Your Information", body: "Your information is used to provide and improve the Apps, process payments, and communicate with you about your account. We do not sell your personal information to third parties." },
            { title: "3. AI Processing", body: "When you use AI features, your inputs (text descriptions or photos) are sent to Anthropic's Claude API for processing. Please review Anthropic's privacy policy at anthropic.com for details on how they handle data." },
            { title: "4. Data Storage", body: "Your account data is stored securely using Supabase, a trusted cloud database provider. Payment information is handled by Stripe and is never stored on our servers." },
            { title: "5. Photos & Device Storage", body: "Photos you take within Plant Be are stored locally on your device using IndexedDB. These photos never leave your device and are not accessible to OXALIS Studio." },
            { title: "6. Cookies", body: "The Apps use minimal session cookies required for authentication only. We do not use advertising or tracking cookies." },
            { title: "7. Your Rights", body: "Under New Zealand privacy law you have the right to access, correct or delete your personal information. To exercise these rights, contact us at 4ddiej03@gmail.com and we will respond within 20 working days." },
            { title: "8. Data Retention", body: "We retain your data for as long as your account is active. You may request deletion of your account and all associated data at any time by emailing us." },
            { title: "9. Security", body: "We take reasonable steps to protect your information using industry-standard encryption and security practices. However no internet transmission is 100% secure." },
            { title: "10. Contact", body: "For privacy enquiries contact us at 4ddiej03@gmail.com" },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: i < 9 ? "1px solid #e2e8f0" : "none" }}>
              <h2 style={{ fontFamily: serif, fontSize: 22, fontWeight: 900, color: "#1a202c", marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontFamily: sans, fontSize: 15, color: "#718096", lineHeight: 1.8 }}>{s.body}</p>
            </div>
          ))}

          <button onClick={() => navigate("home")}
            style={{ padding: "14px 28px", background: "#c4622d", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", borderRadius: 10, marginTop: 16 }}>
            ← Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

