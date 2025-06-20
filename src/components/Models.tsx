
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Models = () => {
  const scrollToFinalSection = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const models = [
    {
      number: "01",
      title: "Convite Interativo Curto",
      price: "R$100",
      features: ["📄 Página curta + 1 foto do casal"],
      link: "https://convitarte.com.br/cristinaehugo",
      buttonText: "QUERO O MODELO CURTO",
      image: null
    },
    {
      number: "02", 
      title: "Convite Interativo Estendido",
      price: "R$150",
      features: ["📄 Página estendida + 3 fotos do casal"],
      link: "https://convitarte.com.br/robertaediego",
      buttonText: "QUERO O MODELO ESTENDIDO",
      image: "/lovable-uploads/56caab5f-c9db-44e6-b2cf-339a1c71ba4c.png"
    },
    {
      number: "03",
      title: "Convite Interativo Premium", 
      price: "R$190",
      features: ["🎥 Clipe com até 10 fotos do casal"],
      link: "https://convitarte.com.br/kauaneedavi",
      buttonText: "QUERO O MODELO PREMIUM",
      image: null
    },
    {
      number: "04",
      title: "Convite Interativo Gold",
      price: "R$220", 
      features: ["🎥 Design 3D + até 5 fotos do casal"],
      link: "https://convitarte.com.br/nicoleebruno",
      buttonText: "QUERO O MODELO GOLD",
      image: null
    }
  ];

  return (
    <section id="models" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Conheça Nossos Modelos de Convite Interativo
          </h2>
          <p className="text-xl text-gray-600">
            Temos 4 opções lindas de convite
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-pink-100">
              <CardContent className="p-6 text-center">
                {model.image && (
                  <div className="mb-4">
                    <img 
                      src={model.image} 
                      alt={model.title}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                )}
                <div className="text-3xl font-bold text-pink-600 mb-2">{model.number}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{model.title}</h3>
                <div className="text-2xl font-bold text-rose-600 mb-4">{model.price}</div>
                <div className="mb-4">
                  {model.features.map((feature, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{feature}</p>
                  ))}
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">🎬 [Inserir vídeo demonstrativo]</p>
                  <a href={model.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 text-sm hover:underline">
                    🔗 Ver exemplo
                  </a>
                </div>
                <Button
                  onClick={scrollToFinalSection}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full"
                >
                  {model.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
