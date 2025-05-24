import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-beauty-light via-white to-beauty-pink/10 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-montserrat font-bold text-beauty-dark mb-6">
              Красота в <span className="text-beauty-purple">каждой</span>{" "}
              детали
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-open max-w-lg">
              Профессиональный маникюр, педикюр и наращивание ресниц. Создаем
              красоту с любовью к деталям уже более 5 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-beauty-purple hover:bg-beauty-purple/90 text-white"
              >
                <Icon name="Calendar" size={18} />
                Записаться онлайн
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-beauty-purple text-beauty-purple hover:bg-beauty-purple/5"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=600&fit=crop"
                alt="Салон красоты"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Star"
                    className="text-yellow-500 fill-current"
                    size={20}
                  />
                  <span className="font-montserrat font-semibold">4.9</span>
                  <span className="text-gray-500 text-sm font-open">
                    500+ отзывов
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
