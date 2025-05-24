const Gallery = () => {
  const works = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop",
  ];

  return (
    <section id="gallery" className="py-20 bg-beauty-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-beauty-dark mb-4">
            Наши работы
          </h3>
          <p className="text-gray-600 font-open max-w-2xl mx-auto">
            Каждая работа — это произведение искусства, созданное с любовью и
            профессионализмом
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={image}
                alt={`Работа ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-beauty-purple/0 group-hover:bg-beauty-purple/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
