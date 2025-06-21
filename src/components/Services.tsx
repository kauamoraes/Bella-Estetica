
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const features = [
    {
      icon: "💌",
      title: "Envelope com lacre",
      description: "Design realista que simula o papel, com opções de acabamento como lacre em cera e laço"
    },
    {
      icon: "📸",
      title: "Fotos do casal",
      description: "Tenha fotos de vocês integradas ao design do convite"
    },
    {
      icon: "📍",
      title: "Localização clicável",
      description: "Facilidade para os convidados acessarem o local da cerimônia e recepção com apenas um clique."
    },
    {
      icon: "📱",
      title: "Confirmação de presença",
      description: "Sistema integrado para RSVP direto pelo WhatsApp ou formulário personalizado."
    },
    {
      icon: "🎁",
      title: "Lista de presentes / site dos noivos",
      description: "Incluímos o link do seu site de casamento e lista de presentes em qualquer plataforma."
    },
    {
      icon: "🎵",
      title: "Trilha sonora",
      description: "Escolha uma música especial para tornar seu convite ainda mais emocionante."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Todos os modelos incluem:
          </h2>
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=center"
              alt="Exemplo de convite"
              className="mx-auto rounded-2xl shadow-lg max-w-sm w-full"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
