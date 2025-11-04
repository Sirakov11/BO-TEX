import { Phone, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">BO-TEX</h3>
            <p className="text-muted-foreground leading-relaxed">
              Вашият надежден партньор за професионални индустриални решения. 
              Предлагаме качество, надеждност и отлично обслужване.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Бързи Връзки</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-block"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Контакти</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>гр. София, България</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+359 2 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@bo-tex.bg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BO-TEX. Всички права запазени.</p>
          <div className="flex gap-6">
            <button
              onClick={() => console.log("Privacy policy")}
              className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="link-privacy"
            >
              Политика за поверителност
            </button>
            <button
              onClick={() => console.log("Cookie policy")}
              className="hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
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
