
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-600">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="text-gray-600 ml-2">+500 clientes satisfeitas</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Realce sua
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent block">
                Beleza Natural
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Especialista em design de sobrancelhas, extensão de cílios e tratamentos faciais. 
              Transforme seu olhar e eleve sua autoestima com técnicas profissionais e produtos de alta qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Agendar Atendimento
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg"
              >
                Ver Serviços
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Profissional aplicando extensão de cílios" 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">+3 anos</div>
                  <div className="text-sm text-gray-600">de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
