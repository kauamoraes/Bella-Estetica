
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
          src="/uploads/Fotos.png" 
          alt="fotos" 
          className=" w-60 rounded-full object-contain"
          />
        </div>

        <Button
          onClick={scrollToModels}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Ver Modelos
        </Button>
      </div>
    </header>
  );
};

export default Header;
