import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_background_industrial_warehouse_7ae84d22.png";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "500+", label: "Доволни клиенти" },
    { number: "1000+", label: "Реализирани проекти" },
    { number: "15+", label: "Години опит" },
    { number: "24/7", label: "Поддръжка" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32 text-center">
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-4 font-medium">
          Вашият надежден партньор
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
          BO-TEX
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Професионални индустриални решения за вашия бизнес
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button
            size="lg"
            className="bg-primary/90 backdrop-blur-md hover:bg-primary text-lg px-8"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-hero-contact"
          >
            Свържете се с нас
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-lg px-8"
            onClick={() => scrollToSection("#services")}
            data-testid="button-hero-services"
          >
            Разгледайте услуги
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-background/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-primary-foreground/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
