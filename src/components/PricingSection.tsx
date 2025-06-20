
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  const handleWhatsAppClick = (model: string, price: string) => {
    const phoneNumber = "5511999999999";
    const message = `Olá! Gostaria de encomendar o ${model} por ${price}! 💌`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const models = [
    {
      title: "Convite Interativo Curto",
      price: "R$100,00",
      features: [
        "✅ Envelope com Lacre",
        "✅ Página Curta", 
        "✅ 1 Foto do Casal",
        "✅ Botões Clicáveis",
        "✅ Trilha Sonora"
      ]
    },
    {
      title: "Convite Interativo Estendido", 
      price: "R$150,00",
      features: [
        "✅ Envelope com Lacre",
        "✅ Página Estendida",
        "✅ 3 Fotos do Casal", 
        "✅ Botões Clicáveis",
        "✅ Trilha Sonora"
      ]
    },
    {
      title: "Convite Interativo Premium",
      price: "R$190,00", 
      features: [
        "✅ Envelope com Lacre",
        "✅ Clipe Personalizado",
        "✅ Até 10 Fotos do Casal",
        "✅ Botões Clicáveis",
        "✅ Trilha Sonora",
        "✅ Filtro Personalizado"
      ]
    },
    {
      title: "Convite Interativo Gold",
      price: "R$220,00",
      features: [
        "✅ Envelope 3d",
        "✅ Clipe Personalizado", 
        "✅ Até 5 Fotos do Casal",
        "✅ Botões Clicáveis",
        "✅ Trilha Sonora"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-pink-200">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-pink-600 mb-2">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{model.title}</h3>
                <div className="text-2xl font-bold text-rose-600 mb-6">{model.price}</div>
                <div className="space-y-2 mb-8 text-left">
                  {model.features.map((feature, idx) => (
                    <p key={idx} className="text-gray-600">{feature}</p>
                  ))}
                </div>
                <Button
                  onClick={() => handleWhatsAppClick(model.title, model.price)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full"
                >
                  ENCOMENDAR PELO WHATSAPP
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
