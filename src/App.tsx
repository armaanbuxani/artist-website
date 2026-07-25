import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import BlankPage from "./pages/BlankPage";
import ContentPage from "./pages/ContentPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/paintings" element={<ContentPage page="paintings" />} />
            <Route path="/sculptures" element={<ContentPage page="sculptures" />} />
            <Route path="/pyrography" element={<BlankPage label="Pyrography" />} />
            <Route path="/workshops" element={<ContentPage page="workshops" />} />
            <Route
              path="/art-for-a-cause"
              element={<BlankPage label="Art for a Cause" />}
            />
            <Route path="/about" element={<ContentPage page="about" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
