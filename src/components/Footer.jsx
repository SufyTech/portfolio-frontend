import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Sufiyan Khan. All rights reserved.
        </p>

        {/* Right: Back to Top */}
        <a
          href="#hero"
          title="Back to Top"
          className="p-3 rounded-full bg-primary/10 text-primary transition-all transform hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:shadow-purple-500/50"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
