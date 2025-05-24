import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-beauty-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-beauty-purple" size={28} />
            <h1 className="text-xl font-montserrat font-bold text-beauty-dark">
              Belle Studio
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-beauty-dark hover:text-beauty-purple transition-colors font-open"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-beauty-dark hover:text-beauty-purple transition-colors font-open"
            >
              Галерея
            </a>
            <a
              href="#contact"
              className="text-beauty-dark hover:text-beauty-purple transition-colors font-open"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-beauty-dark">
              <Icon name="Phone" size={16} />
              <span className="font-open text-sm">+7 (999) 123-45-67</span>
            </div>
            <Button className="bg-beauty-purple hover:bg-beauty-purple/90">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
