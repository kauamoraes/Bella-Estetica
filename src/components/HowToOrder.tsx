
import { Card, CardContent } from "@/components/ui/card";

const HowToOrder = () => {
  const steps = [
    {
      number: "1",
      title: "Escolha o modelo de convite",
      description: "Navegue pelos nossos modelos e selecione o que mais combina com o estilo do casal. Clique no botão e você será direcionada para o WhatsApp.",
      icon: "🎨"
    },
    {
      number: "2", 
      title: "Finalize sua encomenda pelo WhatsApp",
      description: "No WhatsApp, vamos conversar rapidinho e confirmar o modelo escolhido. Você poderá incluir serviços adicionais (como Save The Date, monograma, filtro do Instagram, aquarela, etc.). Depois disso, enviamos o link para pagamento por Pix ou cartão.",
      icon: "💬"
    },
    {
      number: "3",
      title: "Preencha o formulário de personalização", 
      description: "Após o pagamento, você receberá um formulário para nos enviar todas as informações: dados do convite, links (se desejar), referências visuais, paleta de cores, identidade visual, fotos (se desejar)",
      icon: "📝"
    },
    {
      number: "4",
      title: "Receba seu convite!",
      description: "Depois de preencher o formulário, é só relaxar e deixar o resto com a gente 💖 Seu convite será criado com todo cuidado e carinho, e em 5 dias úteis você o receberá prontinho pelo WhatsApp. Tudo personalizado, do jeitinho que você sonhou, pronto para encantar todos os seus convidados! ✨",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Como fazer sua encomenda?
          </h2>
          <p className="text-xl text-gray-600">
            Fizemos tudo de forma simples e prática
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
