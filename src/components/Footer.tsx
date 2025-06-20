
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Convitarte
            </span>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-pink-400">
            Tenha um convite de casamento moderno e inesquecível
          </h3>
        </div>

        <div className="text-center space-y-6 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Redes Sociais</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/convitarte.convites" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@convitarte.convites</span>
              </a>
              <a href="https://tiktok.com/@convitarte" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                TikTok @convitarte
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contato</h4>
            <a href="mailto:convitartedigital@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
              convitartedigital@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 | Convitarte | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
