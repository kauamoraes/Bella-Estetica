
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-amber-400 fill-current flex flex-row" />
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          O Convite dos Seus Sonhos <br />
          <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Está Aqui!
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
          Interativo, personalizado e com a essência do seu grande dia.
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Convites digitais com design personalizado que encantam à primeira vista!
        </p>

        <div className="mb-10">
          <img
            src="/uploads/Seção 1.png"
            alt="Convite digital elegante"
            className="mx-auto rounded-2xl max-w-md w-80"
          />
        </div>

        <Button
          onClick={scrollToModels}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          VER MODELOS
        </Button>
      </div>
    </section>
  );
};

export default Hero;
