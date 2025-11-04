import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Начало", href: "#hero" },
    { name: "Услуги", href: "#services" },
    { name: "Продукти", href: "#products" },
    { name: "За Нас", href: "#about" },
    { name: "Контакти", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl md:text-3xl font-display font-bold text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="logo-link"
          >
            BO-TEX
          </button>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-semibold text-secondary-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="font-semibold"
              data-testid="button-contact-header"
            >
              Свържете се
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-secondary-foreground hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10">
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-base font-semibold text-secondary-foreground hover-elevate active-elevate-2 rounded-md"
                data-testid={`mobile-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
            <Button
              className="w-full mt-4 font-semibold"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact-mobile"
            >
              Свържете се
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
