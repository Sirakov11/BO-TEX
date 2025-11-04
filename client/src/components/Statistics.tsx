import { Package, Users, Award, Clock } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: Package,
      number: "950+",
      label: "Продукта в каталога",
    },
    {
      icon: Users,
      number: "500+",
      label: "Доволни клиенти",
    },
    {
      icon: Award,
      number: "15+",
      label: "Години опит",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Техническа поддръжка",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Доказани Резултати
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Цифрите говорят сами за себе си
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center" data-testid={`statistic-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-base md:text-lg text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
