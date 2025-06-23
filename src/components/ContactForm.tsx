import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  service: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const services = [
    "Design de Sobrancelhas",
    "Extensão de Cílios",
    "Limpeza de Pele",
    "Micropigmentação",
    "Tratamento Facial",
    "Outros"
  ];

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Telefone deve ter pelo menos 10 dígitos";
    }

    if (!formData.service) {
      newErrors.service = "Por favor, selecione um serviço";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    
    const message = `Olá! Gostaria de agendar um atendimento.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Serviço desejado:* ${formData.service}

Aguardo retorno para agendarmos! 💄✨`;

    const phoneNumber = "553798144960"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando para WhatsApp...",
      description: "Você será direcionada para finalizar o agendamento!",
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Agende seu <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Atendimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e será direcionada para o WhatsApp para finalizar seu agendamento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Formulário de Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Nome Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`mt-2 h-12 ${errors.name ? 'border-red-500' : 'border-pink-200 focus:border-pink-400'} rounded-xl`}
                    placeholder="Digite seu nome completo"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`mt-2 h-12 ${errors.phone ? 'border-red-500' : 'border-pink-200 focus:border-pink-400'} rounded-xl`}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label className="text-gray-700 font-medium">Serviço Desejado *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className={`mt-2 h-12 ${errors.service ? 'border-red-500' : 'border-pink-200 focus:border-pink-400'} rounded-xl`}>
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Agendar pelo WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="opacity-90">(37)98144960</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="opacity-90">São Paulo, SP</p>
                      <p className="opacity-75 text-sm">Atendimento em domicílio e estúdio</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Horários de Atendimento</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Segunda à Sexta</span>
                    <span className="font-medium">9h às 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium">9h às 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">✨ Primeira vez?</h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                Ganhe 10% de desconto no seu primeiro atendimento!
                Mencione este cupom ao agendar pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
