import type { ContactContent } from "@/lib/types";

type Props = {
  contact: ContactContent;
};

export default function Contact({ contact }: Props) {
  return (
    <>
      <p className="text-neutral-700">{contact.blurb}</p>

      <div className="space-y-3 text-sm">
        {/* Email */}
        <div>
          <span className="font-medium">Email: </span>
          <a className="underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-80 hover:opacity-100 transition"
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              className="h-8 w-8"
            />
          </a>

          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="opacity-80 hover:opacity-100 transition"
          >
            <img
              src="/facebook.png"
              alt="Facebook"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </>
  );
}