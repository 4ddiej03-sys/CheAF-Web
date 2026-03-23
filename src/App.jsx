// src/App.jsx
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { FeaturesPage, PricingPage, AboutPage, ContactPage } from "./pages/OtherPages";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");
  const [blogSlug, setBlogSlug] = useState(null);

  // Simple hash-based routing
  useEffect(() => {
    function handleHash() {
      const hash = window.location.hash.replace("#", "") || "home";
      if (hash.startsWith("blog/")) {
        setPage("blog-post");
        setBlogSlug(hash.replace("blog/", ""));
      } else {
        setPage(hash);
        setBlogSlug(null);
      }
    }
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  function navigate(p) {
    window.location.hash = p;
  }

  const PAGES = {
    home:      <HomePage navigate={navigate} />,
    features:  <FeaturesPage navigate={navigate} />,
    pricing:   <PricingPage navigate={navigate} />,
    about:     <AboutPage navigate={navigate} />,
    blog:      <BlogPage navigate={navigate} />,
    contact:   <ContactPage navigate={navigate} />,
    "blog-post": <BlogPostPage slug={blogSlug} navigate={navigate} />,
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#faf6ef", minHeight: "100vh", color: "#1a202c" }}>
      <Nav page={page} navigate={navigate} />
      <main>
        {PAGES[page] || <HomePage navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
