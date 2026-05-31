"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { siteConfig, navLinks, socialLinks } from "@/lib/constants";
import { useLanguage } from "@/components/language/language-provider";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold">
              <span className="gradient-text">{siteConfig.shortName}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {t("common.pages")}
            </h3>
            <ul className="space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {t("common.connect")}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/[0.02] text-muted transition-all hover:border-white/10 hover:bg-white/[0.05] hover:text-foreground"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-between border-t border-border pt-6"
        >
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-xs text-muted/40">
            {t("footer.builtWith")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
