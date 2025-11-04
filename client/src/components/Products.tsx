import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pumpsImage from "@assets/generated_images/Industrial_pumps_category_614a9e18.png";
import hvacImage from "@assets/generated_images/HVAC_systems_category_6b2aab0e.png";
import waterImage from "@assets/generated_images/Water_treatment_category_ee489ff4.png";
import valvesImage from "@assets/generated_images/Valves_and_fittings_category_d9498e2d.png";
import electricalImage from "@assets/generated_images/Electrical_systems_category_1541df5a.png";
import heatingImage from "@assets/generated_images/Heating_systems_category_1380043d.png";
import irrigationImage from "@assets/generated_images/Irrigation_systems_category_ab540c30.png";
import toolsImage from "@assets/generated_images/Tools_and_accessories_category_527868c0.png";

export default function Products() {
  const categories = [
    {
      name: "Помпи",
      description: "Индустриални помпи за всякакви приложения",
      image: pumpsImage,
      count: "150+ продукта",
    },
    {
      name: "HVAC Системи",
      description: "Климатични и вентилационни системи",
      image: hvacImage,
      count: "80+ продукта",
    },
    {
      name: "Водообработка",
      description: "Системи за пречистване на вода",
      image: waterImage,
      count: "120+ продукта",
    },
    {
      name: "Клапани и Фитинги",
      description: "Широка гама от свързващи елементи",
      image: valvesImage,
      count: "200+ продукта",
    },
    {
      name: "Електрооборудване",
      description: "Табла и защитни системи",
      image: electricalImage,
      count: "90+ продукта",
    },
    {
      name: "Отоплителни Системи",
      description: "Котли и топлообменници",
      image: heatingImage,
      count: "70+ продукта",
    },
    {
      name: "Поливни Системи",
      description: "Професионално напояване",
      image: irrigationImage,
      count: "60+ продукта",
    },
    {
      name: "Инструменти",
      description: "Аксесоари и резервни части",
      image: toolsImage,
      count: "180+ продукта",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-muted-foreground text-lg mb-2">Продуктови Категории</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Разгледайте нашия каталог
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Над 950+ продукта от водещи производители за всички ваши нужди
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden hover-elevate active-elevate-2"
              onClick={() => console.log(`View category: ${category.name}`)}
              data-testid={`category-card-${index}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-left">
                <h3 className="text-primary-foreground font-bold text-lg md:text-xl mb-1">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/80 text-xs md:text-sm mb-2">
                  {category.description}
                </p>
                <p className="text-primary-foreground/70 text-xs">{category.count}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => console.log("View all products")}
            data-testid="button-view-catalog"
          >
            Виж целия каталог
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
