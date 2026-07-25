import { Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { Contact } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  contact: Contact;
}

const CONTACT_LINK_CLASS =
  "group flex flex-col items-center gap-3 text-black/50 transition-colors duration-300 hover:text-black";

const CONTACT_ICON_CLASS =
  "flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-colors duration-300 group-hover:border-black";

const ContactSection = ({ contact }: Props) => (
  <section
    id={SECTION_IDS.contact}
    className="border-t border-black/10 bg-white px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16"
  >
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-black/45">
          Get in Touch
        </p>
        <h2 className="font-playfair mb-8 text-4xl tracking-wide text-black md:text-5xl">
          Contact
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-[15px] leading-[1.9] text-black/55">
          {contact.blurb}
        </p>

        <div className="flex items-center justify-center gap-9 sm:gap-12">
          <a
            href={`mailto:${contact.email}`}
            className={CONTACT_LINK_CLASS}
            aria-label="Email"
          >
            <span className={CONTACT_ICON_CLASS}>
              <Mail size={18} strokeWidth={1.5} />
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:block">
              Email
            </span>
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={CONTACT_LINK_CLASS}
            aria-label="WhatsApp"
          >
            <span className={CONTACT_ICON_CLASS}>
              <MessageCircle size={19} strokeWidth={1.5} />
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:block">
              WhatsApp
            </span>
          </a>

          <a
            href={`https://instagram.com/${contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={CONTACT_LINK_CLASS}
            aria-label="Instagram"
          >
            <span className={CONTACT_ICON_CLASS}>
              <Instagram size={18} strokeWidth={1.5} />
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:block">
              Instagram
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
