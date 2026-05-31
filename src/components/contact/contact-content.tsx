"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, socialLinks } from "@/lib/constants";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "@/components/language/language-provider";

const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type ContactResponse = {
  error?: string;
  detail?: string;
};

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, instagram: InstagramIcon, mail: Mail };
const contactEmail =
  socialLinks.find((link) => link.icon === "mail")?.href.replace("mailto:", "") ??
  "mustofafajar733@gmail.com";

type ContactContentProps = {
  accessKey?: string;
};

export function ContactContent({ accessKey }: ContactContentProps) {
  const { t } = useLanguage();
  const schema = z.object({
    name: z.string().min(2, t("contact.validationName")),
    email: z.string().email(t("contact.validationEmail")),
    subject: z.string().min(2, t("contact.validationSubject")),
    message: z.string().min(10, t("contact.validationMessage")),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      if (!accessKey) {
        const mailtoUrl = new URL(`mailto:${contactEmail}`);
        mailtoUrl.searchParams.set("subject", data.subject);
        mailtoUrl.searchParams.set(
          "body",
          `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
        );
        window.open(mailtoUrl.toString(), "_self");
        toast(t("contact.fallback"));
        return;
      }

      const res = await fetch(WEB3FORMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          subject: `Portfolio Contact: ${data.subject}`,
          message: data.message,
          from_name: "Portfolio Contact Form",
          botcheck: "",
        }),
      });

      if (!res.ok) {
        const result = (await res.json().catch(() => ({}))) as ContactResponse;
        throw new Error(result.detail ?? result.error ?? "Failed to send message.");
      }
      toast.success(t("contact.success"));
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("contact.failure"));
    }
  };

  return (
    <div className="px-6 py-24">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#ededed",
            border: "1px solid #222",
          },
        }}
      />
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid gap-12 md:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  {...register("name")}
                  suppressHydrationWarning
                  autoComplete="name"
                  placeholder={t("contact.name")}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  suppressHydrationWarning
                  type="email"
                  autoComplete="email"
                  placeholder={t("contact.email")}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <input
                {...register("subject")}
                suppressHydrationWarning
                autoComplete="off"
                placeholder={t("contact.subject")}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
              )}
            </div>
            <div>
              <textarea
                {...register("message")}
                suppressHydrationWarning
                autoComplete="off"
                rows={5}
                placeholder={t("contact.message")}
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:col-span-2"
          >
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                {t("common.connect")}
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label === "GitHub"
                        ? siteConfig.githubUsername
                        : link.label === "LinkedIn"
                          ? "fajarmustofa"
                          : link.label === "Instagram"
                            ? "@fjr.muustafa"
                            : link.href.replace("mailto:", "")}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                {t("common.location")}
              </h3>
              <p className="text-sm text-muted">Bekasi, Indonesia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
