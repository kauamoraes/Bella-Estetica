
import { Card, CardContent } from "@/components/ui/card";

const WhyChoose = () => {
  const reasons = [
    "Design exclusivo e personalizado na paleta de cores e identidade visual do seu casamento.",
    "Envio pelo Whatsapp ou e-mail de forma fácil e rápida, com a mesma elegância de um convite tradicional.",
    "Envelopes ultra realistas que encantam à primeira vista, a aparência simula o toque do papel.",
    "Todas as informações essenciais (local, data, dress code, cronograma, etc.) reunidas de forma clara e acessível, tudo na palma da mão!",
    "Reduza custos com impressão",
    "Flexibilidade de atualização. Mudou algo? Sem problema! Atualizamos as informações em segundos, sem precisar reimprimir nada."
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Por Que Escolher a Convitarte?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="text-green-500 text-xl font-bold">✔️</div>
                <p className="text-gray-600 leading-relaxed">{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
