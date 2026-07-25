import { useQuery } from "@tanstack/react-query";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Paintings from "@/components/Paintings";
import Sculptures from "@/components/Sculptures";
import Workshops from "@/components/Workshops";
import { fetchContent } from "@/lib/fetchContent";

type PageName = "paintings" | "sculptures" | "workshops" | "about";

interface Props {
  page: PageName;
}

const ContentPage = ({ page }: Props) => {
  const { data: content, isPending, isError } = useQuery({
    queryKey: ["website-content"],
    queryFn: fetchContent,
    staleTime: 5 * 60 * 1000,
  });

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div
          className="h-5 w-5 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground"
          role="status"
          aria-label="Loading page"
        />
      </main>
    );
  }

  if (isError || !content) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-center text-sm text-muted-foreground">
          This page could not be loaded. Please try again shortly.
        </p>
      </main>
    );
  }

  if (page === "paintings") {
    return (
      <main>
        <Paintings paintings={content.paintings} />
      </main>
    );
  }

  if (page === "sculptures") {
    return (
      <main className="pt-16">
        <Sculptures sculptures={content.sculptures} />
      </main>
    );
  }

  if (page === "workshops") {
    return (
      <main className="pt-16">
        <Workshops workshops={content.workshops} />
      </main>
    );
  }

  return (
    <main className="pt-16">
      <AboutSection about={content.about} />
      <ContactSection contact={content.contact} />
    </main>
  );
};

export default ContentPage;
