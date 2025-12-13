import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Methodology from "./pages/Methodology";
import Results from "./pages/Results";
import Teachers from "./pages/Teachers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory"
import ForSchools from "./pages/ForSchools"
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/for-schools" element={<ForSchools />} />
          <Route path="/results" element={<Results />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
