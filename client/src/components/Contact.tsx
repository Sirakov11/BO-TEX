import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="bg-card rounded-lg overflow-hidden shadow-2xl border border-card-border">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 bg-primary p-10 md:p-16 lg:p-20 relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              
              <div className="relative z-10">
                <div className="w-20 h-1 bg-primary-foreground mb-6 transform rotate-2" />
                <p className="text-primary-foreground/90 text-xl mb-4 font-semibold">Готови да започнем?</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-primary-foreground leading-tight">
                  Свържете се с нас за безплатна консултация
                </h2>
                <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 leading-relaxed">
                  Нашите специалисти са на разположение да отговорят на всичките ви въпроси
                </p>

                <div className="flex flex-col gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-auto py-6 flex items-center justify-start gap-4 text-lg font-semibold rounded-xl"
                    onClick={() => console.log("Call clicked")}
                    data-testid="button-call"
                  >
                    <Phone className="h-6 w-6" />
                    <div className="text-left">
                      <div>Обадете се сега</div>
                      <div className="text-sm opacity-80">+359 2 XXX XXXX</div>
                    </div>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-auto py-6 flex items-center justify-start gap-4 text-lg font-semibold rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20"
                    onClick={() => console.log("Email clicked")}
                    data-testid="button-email"
                  >
                    <Mail className="h-6 w-6" />
                    <div className="text-left">
                      <div>Изпратете запитване</div>
                      <div className="text-sm opacity-80">info@bo-tex.bg</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-secondary p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-secondary-foreground">Работно време</h3>
                    <p className="text-secondary-foreground/70 text-lg">
                      Понеделник - Петък<br />
                      8:30 - 17:00
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-secondary-foreground/20 my-8" />

                <div className="space-y-4 text-secondary-foreground/70 text-lg">
                  <p className="font-semibold text-secondary-foreground">
                    гр. София, България
                  </p>
                  <p>+359 2 XXX XXXX</p>
                  <p>info@bo-tex.bg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
