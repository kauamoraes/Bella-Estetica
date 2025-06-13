
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Sparkles, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Design de Sobrancelhas",
      description: "Modelagem perfeita com técnicas de micropigmentação e design personalizado para seu rosto.",
      price: "A partir de R$ 80",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Sparkles,
      title: "Extensão de Cílios",
      description: "Cílios volumosos e naturais com técnicas 2D, 3D e volume russo para um olhar marcante.",
      price: "A partir de R$ 120",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Heart,
      title: "Limpeza de Pele",
      description: "Tratamento facial completo com extração, hidratação e revitalização da pele.",
      price: "A partir de R$ 100",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos tratamentos especializados para realçar sua beleza natural com técnicas modernas e produtos de qualidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <button className="text-pink-600 hover:text-pink-700 font-semibold hover:underline transition-colors">
                    Saiba mais →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
