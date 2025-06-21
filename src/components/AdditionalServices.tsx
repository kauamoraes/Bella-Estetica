
import { Card, CardContent } from "@/components/ui/card";

const AdditionalServices = () => {
  const services = [
    {
      title: "Monograma Personalizado",
      price: "R$25",
      description: "Transformamos as iniciais do casal em uma arte exclusiva, feita especialmente para o seu convite.",
      note: "📌 Antes de aplicar no convite, enviamos várias opções de monograma para que você escolha a que mais combina com vocês!"
    },
    {
      title: "Filtro para Instagram", 
      price: "R$35",
      description: "Tenha um filtro personalizado para seus convidados usarem e compartilharem no grande dia!",
      note: "📌 Antes de aplicar no convite, enviamos várias opções de filtros para que você escolha a que mais combina com vocês!"
    },
    {
      title: "Aquarela da Igreja ou do Local",
      price: "R$30",
      description: "Arte personalizada do local da sua cerimônia ou recepção.",
      note: ""
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Serviços Adicionais
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-pink-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.note && (
                  <p className="text-sm text-pink-600 italic">{service.note}</p>
                )}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Fotos Demonstrativas</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Combo Convite dos Padrinhos + Manual dos Padrinhos - R$150,00
            </h3>
            <p className="text-gray-600 mb-4">
              Save The Date + Aquarela do local + Aquarela Croqui da Paleta de Cores + Informações para os Padrinhos
            </p>
            <div className="mb-4 flex flex-col gap-2">
              <a href="/uploads/Convite Padrinhos - Catarina & Renato.pdf" target="_blank" className="text-sm text-pink-600 hover:underline">🔗Clique aqui para ver o convite dos padrinhos</a>

              <a href="/uploads/Manual dos Padrinhos.pdf" target="_blank" className="text-sm text-pink-600 hover:underline">🔗Clique aqui para ver o manual dos padrinhos</a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Esses itens são opcionais e podem ser adicionados ao seu carrinho no momento da finalização da encomenda.
            Escolha seu convite primeiro e, na próxima etapa, selecione os adicionais que desejar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
