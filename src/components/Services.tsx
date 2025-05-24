import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Маникюр",
      description:
        "Классический и европейский маникюр, гель-лак, дизайн ногтей",
      price: "от 1200 ₽",
      duration: "60-90 мин",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
      features: ["Гель-лак", "Дизайн", "Укрепление"],
      icon: "Hand",
    },
    {
      title: "Педикюр",
      description: "Медицинский и косметический педикюр, уход за стопами",
      price: "от 1500 ₽",
      duration: "90-120 мин",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop",
      features: ["Медицинский", "SPA-уход", "Массаж"],
      icon: "Footprints",
    },
    {
      title: "Наращивание ресниц",
      description: "Классическое и объемное наращивание, ламинирование ресниц",
      price: "от 2000 ₽",
      duration: "120-180 мин",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
      features: ["2D-3D объем", "Классика", "Ламинирование"],
      icon: "Eye",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-beauty-dark mb-4">
            Наши услуги
          </h3>
          <p className="text-gray-600 font-open max-w-2xl mx-auto">
            Профессиональные процедуры красоты с использованием премиальных
            материалов и современных техник
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-beauty-pink/20 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-beauty-purple text-white">
                    {service.duration}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-beauty-light rounded-lg">
                    <Icon
                      name={service.icon as any}
                      className="text-beauty-purple"
                      size={24}
                    />
                  </div>
                  <CardTitle className="font-montserrat text-beauty-dark">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="font-open">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-beauty-pink/20 text-beauty-dark"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-bold text-beauty-purple">
                    {service.price}
                  </span>
                  <Button
                    variant="outline"
                    className="border-beauty-purple text-beauty-purple hover:bg-beauty-purple hover:text-white"
                  >
                    Записаться
                  </Button>
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
