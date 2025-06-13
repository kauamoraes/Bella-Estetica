
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Bella Estética
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialista em realçar sua beleza natural com técnicas modernas e cuidado personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-400">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Design de Sobrancelhas</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Extensão de Cílios</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Limpeza de Pele</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Micropigmentação</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Tratamentos Faciais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-400">Links Úteis</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-400">Contato</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>contato@bellaestetica.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                <div>
                  <p>São Paulo, SP</p>
                  <p className="text-sm">Atendimento domiciliar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Bella Estética. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
