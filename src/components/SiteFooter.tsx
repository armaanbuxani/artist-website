import { useQuery } from "@tanstack/react-query";
import ContactSection from "@/components/ContactSection";
import { fetchContent } from "@/lib/fetchContent";

const SiteFooter = () => {
  const { data: content } = useQuery({
    queryKey: ["website-content"],
    queryFn: fetchContent,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <footer className="bg-white">
      {content && <ContactSection contact={content.contact} />}

      <div className="border-t border-black/10 px-6 py-8">
        <p className="text-center text-[10px] uppercase tracking-[0.18em] text-black/40">
          © {new Date().getFullYear()} Aarti Buxani · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
