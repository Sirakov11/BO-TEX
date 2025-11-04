import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 md:p-12 border">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-lg mb-2">Готови да започнем?</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Свържете се с нас за безплатна консултация
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Нашите специалисти са на разположение да отговорят на всичките ви въпроси и да предложат най-доброто решение
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Button
              size="lg"
              className="h-auto py-6 flex flex-col items-center gap-2 text-lg"
              onClick={() => console.log("Call clicked")}
              data-testid="button-call"
            >
              <Phone className="h-6 w-6" />
              <span>Обадете се сега</span>
              <span className="text-sm opacity-90">+359 2 XXX XXXX</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 text-lg"
              onClick={() => console.log("Email clicked")}
              data-testid="button-email"
            >
              <Mail className="h-6 w-6" />
              <span>Или изпратете запитване</span>
              <span className="text-sm opacity-90">Формуляр за контакт</span>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <p className="text-sm md:text-base">
              Работно време: Понеделник - Петък, 8:30 - 17:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
