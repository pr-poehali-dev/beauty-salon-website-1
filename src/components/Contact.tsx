import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-beauty-dark mb-4">
            Свяжитесь с нами
          </h3>
          <p className="text-gray-600 font-open max-w-2xl mx-auto">
            Запишитесь на процедуру или получите консультацию любым удобным
            способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-beauty-pink/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-4 bg-beauty-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Icon name="Phone" className="text-beauty-purple" size={24} />
              </div>
              <CardTitle className="font-montserrat text-beauty-dark">
                Телефон
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open text-gray-600 mb-4">+7 (999) 123-45-67</p>
              <Button
                variant="outline"
                size="sm"
                className="border-beauty-purple text-beauty-purple"
              >
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-beauty-pink/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-4 bg-beauty-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Icon name="MapPin" className="text-beauty-purple" size={24} />
              </div>
              <CardTitle className="font-montserrat text-beauty-dark">
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open text-gray-600 mb-4">ул. Красоты, 123</p>
              <Button
                variant="outline"
                size="sm"
                className="border-beauty-purple text-beauty-purple"
              >
                На карте
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-beauty-pink/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-4 bg-beauty-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Icon name="Clock" className="text-beauty-purple" size={24} />
              </div>
              <CardTitle className="font-montserrat text-beauty-dark">
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open text-gray-600 mb-2">Пн-Сб: 9:00-21:00</p>
              <p className="font-open text-gray-600 mb-4">Вс: 10:00-18:00</p>
            </CardContent>
          </Card>

          <Card className="text-center border-beauty-pink/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto p-4 bg-beauty-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Icon
                  name="MessageSquare"
                  className="text-beauty-purple"
                  size={24}
                />
              </div>
              <CardTitle className="font-montserrat text-beauty-dark">
                Соцсети
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open text-gray-600 mb-4">@belle_studio</p>
              <Button
                variant="outline"
                size="sm"
                className="border-beauty-purple text-beauty-purple"
              >
                Написать
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
