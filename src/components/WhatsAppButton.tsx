
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de saber mais sobre os convites digitais e fazer minha encomenda! 💌✨";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl z-50 animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-110"
      size="lg"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
