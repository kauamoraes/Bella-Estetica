
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SaveTheDate = () => {
  const handleSaveTheDateClick = (type: string) => {
    const phoneNumber = "5511999999999";
    const message = `Olá! Gostaria de encomendar o Save The Date ${type}! 💌`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const saveTheDateOptions = [
    {
      title: "Aquarela",
      price: "R$100",
      description: "Vídeo + Aquarela do local + 1 Foto do casal em Aquarela ou Normal",
      buttonText: "QUERO SAVE THE DATE AQUARELA",
      image: "/uploads/c753bdd8-b0fd-4af4-926c-c15bacd14c32.png"
    },
    {
      title: "Line Art",
      price: "R$100", 
      description: "Vídeo + Line Art do local",
      buttonText: "QUERO SAVE THE DATE LINE ART",
      image: "/uploads/novoLineart.png"
    },
    {
      title: "Estendido",
      price: "R$150",
      description: "Site com linha do tempo do casal + Aquarela do local + até 4 fotos do casal",
      buttonText: "QUERO SAVE THE DATE ESTENDIDO",
      image: "/uploads/d9f5b63c-1c72-4bd4-b2dc-0e0f73b9e5c7.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Conheça Nossos Modelos de Save The Date
          </h2>
          <p className="text-xl text-gray-600">
            Antecipe a emoção com um Save The Date que combina com o estilo do seu casamento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {saveTheDateOptions.map((option, index) => (
            <div key={index} className="relative">
              {option.image && (
                <div className="mb-4">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="block w-full h-[20rem] object-contain rounded-lg "
                  />
                </div>
              )}
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-pink-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.title}</h3>
                  <div className="text-2xl font-bold text-pink-600 mb-4">{option.price}</div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="mb-6">
                    <a href="#" className="text-pink-600 text-sm hover:underline">
                      🔗Clique aqui e conheça o modelo
                    </a>
                  </div>
                  <Button
                    onClick={() => handleSaveTheDateClick(option.title)}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full"
                  >
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;
