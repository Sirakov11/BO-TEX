import { Droplets, Users, Award, Clock } from "lucide-react";

export default function Statistics() {
  const stats = [
    { icon: Droplets, number: "1800+", label: "Изградени сондажи" },
    { icon: Users, number: "500+", label: "Доволни клиенти" },
    { icon: Award, number: "15+", label: "Години опит" },
    { icon: Clock, number: "24/7", label: "Техническа поддръжка" },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-primary mb-6 mx-auto transform rotate-2" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-secondary-foreground">
            Доказани Резултати
          </h2>
          <p className="text-xl md:text-2xl text-secondary-foreground/80 font-semibold">
            Цифрите говорят сами за себе си
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center relative" data-testid={`statistic-${index}`}>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-px h-24 bg-secondary-foreground/20 transform -translate-y-1/2" />
                )}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 border-2 border-primary/40">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-3 text-primary">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg font-semibold text-secondary-foreground/70">
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
