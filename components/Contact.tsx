import type { ContactContent } from "@/lib/types";

type Props = {
  contact: ContactContent;
};

export default function Contact({ contact }: Props) {
  return (
    <>
      <p className="text-neutral-700">{contact.blurb}</p>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium">Email: </span>
          <a className="underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
        <div>
          <span className="font-medium">WhatsApp: </span>
          <a
            className="underline"
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
          >
            {contact.whatsapp}
          </a>
        </div>
        <div>
          <span className="font-medium">Instagram: </span>
          <a
            className="underline"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            {contact.instagram}
          </a>
        </div>
      </div>
    </>
  );
}
