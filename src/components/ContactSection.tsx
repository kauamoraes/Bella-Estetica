
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "553798144960";
    const message = "Olá! Preciso de ajuda para escolher o modelo ideal de convite! 💌";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Ficou com alguma dúvida?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Se precisar de ajuda para escolher o modelo ideal, tiver dúvidas ou quiser um atendimento individual, é só me chamar 💌
        </p>
        
        <Button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          FALAR NO WHATSAPP
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
