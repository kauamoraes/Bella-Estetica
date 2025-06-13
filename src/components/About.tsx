
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clientes Satisfeitas" },
    { icon: Clock, number: "3+", label: "Anos de Experiência" },
    { icon: Award, number: "15+", label: "Certificações" },
    { icon: Heart, number: "98%", label: "Recomendação" }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Isabella - Esteticista profissional" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">3+</div>
                <div className="text-gray-600 font-medium">Anos de Paixão</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Sobre <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Isabella</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Olá, eu sou a Isabella! Formada em Estética e Cosmética, sou apaixonada por realçar a beleza natural de cada mulher. 
                  Com mais de 3 anos de experiência, especializei-me em design de sobrancelhas, extensão de cílios e tratamentos faciais.
                </p>
                <p>
                  Acredito que cada rosto é único e merece um cuidado personalizado. Por isso, estudo constantemente novas técnicas 
                  e utilizo apenas produtos de alta qualidade para garantir os melhores resultados.
                </p>
                <p>
                  Meu objetivo é fazer você se sentir mais confiante e radiante, destacando sua beleza de forma natural e harmoniosa.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50">
                  <stat.icon className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Conhecer Meu Trabalho
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
