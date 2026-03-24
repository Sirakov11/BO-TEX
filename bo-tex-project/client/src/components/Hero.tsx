import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_background_industrial_warehouse_7ae84d22.png";
import logoImage from "@assets/image_1774358507121.png";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "1800+", label: "Изградени сондажи" },
    { number: "700+", label: "Продукта" },
    { number: "15+", label: "Години опит" },
    { number: "24/7", label: "Поддръжка" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 text-left">
            <div className="w-20 h-1 bg-primary mb-8 transform -rotate-2" />
            <p className="text-primary text-xl md:text-2xl mb-6 font-semibold tracking-wide">
              Вашият надежден партньор от 2009
            </p>
            <div className="mb-8 inline-block bg-white rounded-xl px-6 py-3 shadow-lg">
              <img
                src={logoImage}
                alt="BO-TEX"
                className="h-20 md:h-28 w-auto object-contain"
              />
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12 leading-tight max-w-2xl">
              Професионални решения за водоснабдяване и обработка на вода
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="text-lg font-semibold px-10 py-6 rounded-xl"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-hero-contact"
              >
                Свържете се с нас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold px-10 py-6 rounded-xl border-2"
                onClick={() => scrollToSection("#services")}
                data-testid="button-hero-services"
              >
                Разгледайте услуги
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <div
              className="relative overflow-hidden rounded-lg shadow-2xl transform rotate-2"
              style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}
            >
              <img
                src={heroImage}
                alt="BO-TEX Industrial"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-primary/10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 bg-card/80 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-card-border shadow-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
