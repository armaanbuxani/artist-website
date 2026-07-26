import { useQuery } from "@tanstack/react-query";
import AboutSection from "@/components/AboutSection";
import Paintings from "@/components/Paintings";
import Sculptures from "@/components/Sculptures";
import Workshops from "@/components/Workshops";
import Pyrography from "@/components/Pyrography";
import ArtForCause from "@/components/ArtForCause";
import { fetchContent } from "@/lib/fetchContent";

type PageName =
  | "paintings"
  | "sculptures"
  | "pyrography"
  | "artForCause"
  | "workshops"
  | "about";

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
      <main>
        <Sculptures sculptures={content.sculptures} />
      </main>
    );
  }

  if (page === "workshops") {
    return (
      <main>
        <Workshops workshops={content.workshops} />
      </main>
    );
  }

  if (page === "pyrography") {
    return (
      <main>
        <Pyrography pyrography={content.pyrography} />
      </main>
    );
  }

  if (page === "artForCause") {
    return (
      <main>
        <ArtForCause projects={content.artForCause} />
      </main>
    );
  }

  return (
    <main>
      <AboutSection about={content.about} />
    </main>
  );
};

export default ContentPage;
