import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pumpsImage from "@assets/generated_images/Industrial_pumps_category_614a9e18.png";
import waterImage from "@assets/generated_images/Water_treatment_category_ee489ff4.png";
import valvesImage from "@assets/generated_images/Valves_and_fittings_category_d9498e2d.png";
import electricalImage from "@assets/generated_images/Electrical_systems_category_1541df5a.png";
import toolsImage from "@assets/generated_images/Tools_and_accessories_category_527868c0.png";
import irrigationImage from "@assets/generated_images/Irrigation_systems_category_ab540c30.png";

export default function Products() {
  const categories = [
    { name: "Потопяеми Помпи", description: "За сондажи и кладенци", image: pumpsImage, count: "120+" },
    { name: "Хидрофорни Системи", description: "Системи за налягане", image: valvesImage, count: "80+" },
    { name: "Филтри за Вода", description: "Обратна осмоза", image: waterImage, count: "150+" },
    { name: "UV Системи", description: "Обеззаразяване", image: electricalImage, count: "60+" },
    { name: "Сондажно Оборудване", description: "Техника и части", image: toolsImage, count: "90+" },
    { name: "Аксесоари", description: "Тръби и фитинги", image: irrigationImage, count: "200+" },
  ];

  return (
    <section id="products" className="py-20 md:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <div className="w-20 h-1 bg-primary mb-6 mx-auto transform -rotate-2" />
          <p className="text-muted-foreground text-xl mb-3 font-semibold">Продуктови Категории</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Разгледайте нашия каталог
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Над 700+ продукта за водоснабдяване и обработка на вода
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden hover-elevate active-elevate-2 shadow-lg border-2 border-transparent hover:border-primary/50 transition-all"
              onClick={() => console.log(`View category: ${category.name}`)}
              data-testid={`category-card-${index}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent" />
              
              <div className="absolute top-3 right-3 w-12 h-12 bg-primary/90 backdrop-blur-sm transform rotate-45" />
              
              <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end text-left">
                <h3 className="text-card-foreground font-display font-bold text-lg md:text-xl mb-1">
                  {category.name}
                </h3>
                <p className="text-card-foreground/70 text-xs md:text-sm mb-2">
                  {category.description}
                </p>
                <p className="text-primary text-sm md:text-base font-bold">{category.count} продукта</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-lg font-semibold px-10 py-6 rounded-xl"
            onClick={() => console.log("View all products")}
            data-testid="button-view-catalog"
          >
            Виж целия каталог
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
