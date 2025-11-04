import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Drill, Droplets, Wrench, Shield, Settings, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Drill,
      title: "Изграждане на Сондажи",
      description: "Професионално изграждане на сондажни и геотермални сондажи с модерна техника. Достъп до чиста подземна вода за вашия дом или бизнес.",
    },
    {
      icon: Droplets,
      title: "Помпи и Хидрофорни Системи",
      description: "Инсталация на висококачествени помпи и хидрофорни системи. Надеждно водоснабдяване с гаранция за качество.",
    },
    {
      icon: Settings,
      title: "Третиране и Обработване на Водата",
      description: "Системи за омекотяване и пречистване на вода чрез обратна осмоза. Чиста и здравословна вода за всяка нужда.",
    },
    {
      icon: Shield,
      title: "UV-Обеззаразяване",
      description: "Модерни UV системи за обеззаразяване на вода. Ефективна защита от бактерии и микроорганизми.",
    },
    {
      icon: Wrench,
      title: "Сервиз и Поддръжка",
      description: "Професионален сервиз и техническа поддръжка на всички системи. Винаги сме на разположение за нашите клиенти.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 lg:py-32 bg-background relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="w-20 h-1 bg-primary mb-6 mx-auto transform rotate-2" />
          <p className="text-muted-foreground text-xl mb-3 font-semibold">Какво предлагаме</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Нашите Услуги</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Комплексни решения за водоснабдяване - от проектиране до реализация и поддръжка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 cursor-pointer transition-all shadow-lg"
                data-testid={`service-card-${index}`}
              >
                <CardHeader className="pb-6">
                  <div className="w-4 h-20 bg-primary rounded-full mb-6 transform -rotate-2" />
                  <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border-2 border-primary/20">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    {service.description}
                  </p>
                  <button
                    className="text-primary font-bold inline-flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
                    onClick={() => console.log(`Learn more about ${service.title}`)}
                    data-testid={`button-service-learn-${index}`}
                  >
                    Научете повече
                    <ArrowRight className="w-5 h-5" />
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
