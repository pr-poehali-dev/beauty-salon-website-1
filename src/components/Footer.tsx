import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-beauty-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="text-beauty-pink" size={24} />
              <h4 className="text-xl font-montserrat font-bold">
                Belle Studio
              </h4>
            </div>
            <p className="text-gray-300 font-open mb-4">
              Салон красоты с душой. Создаем красоту и уверенность каждый день.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="text-beauty-pink hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Facebook"
                className="text-beauty-pink hover:text-white cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="MessageSquare"
                className="text-beauty-pink hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>

          <div>
            <h5 className="font-montserrat font-semibold mb-4">Услуги</h5>
            <ul className="space-y-2 font-open text-gray-300">
              <li className="hover:text-beauty-pink cursor-pointer transition-colors">
                Маникюр
              </li>
              <li className="hover:text-beauty-pink cursor-pointer transition-colors">
                Педикюр
              </li>
              <li className="hover:text-beauty-pink cursor-pointer transition-colors">
                Наращивание ресниц
              </li>
              <li className="hover:text-beauty-pink cursor-pointer transition-colors">
                Ламинирование ресниц
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-montserrat font-semibold mb-4">Контакты</h5>
            <div className="space-y-3 font-open text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Красоты, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Сб: 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-open">
            © 2024 Belle Studio. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
