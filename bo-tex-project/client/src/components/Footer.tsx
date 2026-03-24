import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
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
    }
  };

  return (
    <footer className="bg-secondary border-t border-secondary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div className="relative">
            <div className="w-1 h-full absolute -left-6 md:-left-8 bg-primary/30" />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">BO-TEX</h3>
            <p className="text-secondary-foreground/70 leading-relaxed text-lg">
              Вашият надежден партньор за професионални индустриални решения. 
              Предлагаме качество, надеждност и отлично обслужване от 2009 година.
            </p>
          </div>

          <div className="relative">
            <div className="w-1 h-full absolute -left-6 md:-left-8 bg-primary/30" />
            <h4 className="font-display font-bold text-xl mb-6 text-secondary-foreground">Бързи Връзки</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/70 hover:text-primary hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block transition-colors font-semibold"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="w-1 h-full absolute -left-6 md:-left-8 bg-primary/30" />
            <h4 className="font-display font-bold text-xl mb-6 text-secondary-foreground">Контакти</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-secondary-foreground/70">
                <MapPin className="h-6 w-6 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-lg">гр. София, България</span>
              </li>
              <li className="flex items-center gap-4 text-secondary-foreground/70">
                <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="text-lg">+359 889 881 511</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-base text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} BO-TEX. Всички права запазени.</p>
          <div className="flex gap-8">
            <button
              onClick={() => console.log("Privacy policy")}
              className="hover:text-primary hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors font-semibold"
              data-testid="link-privacy"
            >
              Политика за поверителност
            </button>
            <button
              onClick={() => console.log("Cookie policy")}
              className="hover:text-primary hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors font-semibold"
              data-testid="link-cookies"
            >
              Политика за бисквитки
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
