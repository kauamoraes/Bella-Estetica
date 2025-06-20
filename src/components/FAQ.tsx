
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo é de até 5 dias úteis após o envio do formulário com todas as informações."
    },
    {
      question: "Posso usar a identidade visual do meu casamento?",
      answer: "Sim! Trabalhamos de forma 100% personalizada, usando sua paleta de cores, monograma, referências e identidade visual. Tudo isso será solicitado no formulário que você recebe logo após a encomenda."
    },
    {
      question: "Como faço para pedir o Convite Digital + Save The Date?",
      answer: "Basta escolher o modelo de convite e, ao finalizar a encomenda no WhatsApp, informar que também quer o Save The Date."
    },
    {
      question: "Posso enviar um envelope como referência?",
      answer: "Claro! Podemos reproduzir o estilo de um envelope físico ou digital que você viu e amou, seja do seu casamento ou uma inspiração da internet."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Você pode pagar via Pix ou cartão de crédito."
    },
    {
      question: "E se eu não gostar de algum detalhe depois de receber?",
      answer: "Sem problemas! Após o envio, você poderá solicitar ajustes para que fique exatamente como imaginou."
    },
    {
      question: "Posso fazer o convite sem foto?",
      answer: "Sim! As fotos são opcionais, o convite continua encantador mesmo sem imagens do casal."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Dúvidas Frequentes
          </h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
