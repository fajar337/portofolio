"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLanguage, type Language } from "@/components/language/language-provider";

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const options: Language[] = ["en", "id"];

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border bg-white/[0.03] p-0.5",
        compact ? "w-fit" : "ml-2"
      )}
      aria-label="Language selector"
    >
      {options.map((option) => {
        const active = language === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase transition-colors",
              active
                ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white"
                : "text-muted hover:text-foreground"
            )}
            aria-pressed={active}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    setScrolled(window.scrollY > 20);
  });

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group relative text-lg font-bold tracking-tight"
        >
          <span className="gradient-text">{siteConfig.shortName}</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-sm transition-colors duration-200",
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {t(link.labelKey)}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-1/2 h-px w-4 -translate-x-1/2 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageToggle />
        </div>

        <div className="relative z-50 flex items-center gap-3 md:hidden">
          <LanguageToggle compact />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-t border-white/5 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                        isActive
                          ? "bg-white/5 text-foreground"
                          : "text-muted hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      {t(link.labelKey)}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
