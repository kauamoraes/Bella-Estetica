import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vitória e Marco",
      text: "Ficou perfeito, muito obrigada 😊, ameiii. Teu trabalho é incrível, sério.",
      rating: 5,
      image: "/public/lovable-uploads/PRÉ-188-Vitoria Tavares.jpg"
    },
    {
      name: "Ana Costa",
      service: "Extensão de Cílios",
      text: "Estou apaixonada pelo resultado! Os cílios ficaram super naturais e volumosos. Acordo todos os dias me sentindo mais bonita e confiante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Juliana Santos",
      service: "Limpeza de Pele",
      text: "Profissional incrível! Minha pele nunca esteve tão limpa e hidratada. O ambiente é super aconchegante e o atendimento é impecável.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que dizem nossas <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 500 mulheres já transformaram sua beleza conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-pink-600 font-medium">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-pink-200" />
                  <p className="text-gray-600 leading-relaxed italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
