import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted" style={{marginLeft:"-10px"}}>
      <div className="grid items-center justify-center space-x-2 mb-1">
        <div
          className="  rounded-sm animate-bounce [animation-delay:-0.3s]"
          style={{ justifySelf: "center" }}
        >
          <Logo />
        </div>
        <div className="text-center">
          <p className="mb-4 text-xl text-muted-foreground">
            Oops! Page not found or is under development
          </p>

          <a href="/">
            <Button
              variant="default"
              size="sm"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Return to Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
