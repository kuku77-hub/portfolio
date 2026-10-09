"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

type Theme = "dark" | "light";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (document.documentElement.dataset.theme === "light") setTheme("light");
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the theme still applies for this visit */
    }
  }

  return (
    <header className="header">
      <nav className="nav container" aria-label="Main">
        <a className="logo" href="#home">
          BD<span>.</span>
        </a>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <div className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
        <button className="theme-btn" aria-label="Toggle theme" onClick={toggleTheme}>
          {theme === "dark" ? "☾" : "☀"}
        </button>
      </nav>
    </header>
  );
}
