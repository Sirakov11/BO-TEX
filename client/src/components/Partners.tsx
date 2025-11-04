export default function Partners() {
  // todo: remove mock functionality - replace with real partner logos
  const partners = [
    { name: "Grundfos", color: "#D97706" },
    { name: "Wilo", color: "#1E3A5F" },
    { name: "Siemens", color: "#D97706" },
    { name: "ABB", color: "#374151" },
    { name: "Schneider", color: "#D97706" },
    { name: "Danfoss", color: "#1E3A5F" },
    { name: "Honeywell", color: "#D97706" },
    { name: "Ebara", color: "#374151" },
  ];

  return (
    <section className="py-20 md:py-24 bg-background relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-primary mb-6 mx-auto transform -rotate-2" />
          <p className="text-muted-foreground text-xl mb-3 font-semibold">Нашите партньори</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Работим с водещи производители
          </h2>
        </div>

        <div className="relative overflow-hidden bg-card/50 rounded-lg p-8 border border-card-border">
          <div className="flex gap-12 md:gap-16 animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-24 w-48 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-pointer"
                data-testid={`partner-logo-${index}`}
              >
                <div
                  className="text-3xl font-display font-bold"
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
