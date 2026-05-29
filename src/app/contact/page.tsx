import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for collaboration, opportunities, or just to say hi.",
};

export default function ContactPage() {
  return <ContactContent accessKey={process.env.WEB3FORMS_ACCESS_KEY} />;
}
