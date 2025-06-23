
import { Instagram } from "lucide-react";
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center object-contain mb-6 ">
            <img 
              src="/uploads/LogoTransparent.png" 
              alt="Convitarte Logo" 
              className="h-52 w-48"
            />
          </div>

          <h3 className="text-2xl font-bold mb-8  text-pink-600">
            Tenha um convite de casamento moderno e inesquecível
          </h3>
        </div>

        <div className="text-center space-y-6 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4  text-pink-600">Redes Sociais</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/convitarte.convites" target="_blank"  className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@convitarte.convites</span>
              </a>
              <a href="https://tiktok.com/@convitarte" target="_blank"  className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
               <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                <span>@convitarte</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-600">Contato</h4>
            <a href="mailto:convitartedigital@gmail.com" className="text-gray-400 hover:text-pink-600 transition-colors">
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
