export default function Partners() {
  // todo: remove mock functionality - replace with real partner logos
  const partners = [
    { name: "Grundfos", color: "#003A70" },
    { name: "Wilo", color: "#006937" },
    { name: "Siemens", color: "#009999" },
    { name: "ABB", color: "#FF000F" },
    { name: "Schneider", color: "#3DCD58" },
    { name: "Danfoss", color: "#E30613" },
    { name: "Honeywell", color: "#ED1C24" },
    { name: "Ebara", color: "#0066CC" },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg mb-2">Нашите партньори</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Работим с водещи производители
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-20 w-40 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                data-testid={`partner-logo-${index}`}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
