import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wrench, HeadphonesIcon, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Инсталация и Монтаж",
      description: "Професионална инсталация на индустриално оборудване с гаранция за качество. Опитен екип специалисти за всеки проект.",
    },
    {
      icon: Wrench,
      title: "Техническо Обслужване",
      description: "Редовно техническо обслужване и поддръжка на вашето оборудване. Предотвратяваме проблеми преди да се появят.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Поддръжка",
      description: "Денонощна техническа поддръжка и бърза реакция при аварии. Винаги сме на разположение за нашите клиенти.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-muted-foreground text-lg mb-2">Какво предлагаме</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Нашите Услуги</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексни решения за вашия бизнес - от консултация до реализация и поддръжка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 cursor-pointer transition-all"
                data-testid={`service-card-${index}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <button
                    className="text-primary font-medium inline-flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                    onClick={() => console.log(`Learn more about ${service.title}`)}
                    data-testid={`button-service-learn-${index}`}
                  >
                    Научете повече
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
