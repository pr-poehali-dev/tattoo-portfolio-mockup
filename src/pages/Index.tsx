import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const piercingData = [
  {
    id: 1,
    type: 'lip',
    title: 'Пирсинг губы',
    image: '/img/ca8d771b-443a-4735-bd3f-7712cc85c65d.jpg',
    price: '2500₽',
    description: 'Классический пирсинг губы с качественным титановым украшением'
  },
  {
    id: 2,
    type: 'ear',
    title: 'Пирсинг уха',
    image: '/img/c2a67cbf-2738-4d3d-bc09-a16ab293164a.jpg',
    price: '2000₽',
    description: 'Множественный пирсинг ушей с серебряными кольцами'
  },
  {
    id: 3,
    type: 'navel',
    title: 'Пирсинг пупка',
    image: '/img/35d2c958-e358-4df1-aa96-a1965aa3ad39.jpg',
    price: '3000₽',
    description: 'Стильный пирсинг пупка с декоративными камнями'
  },
  {
    id: 4,
    type: 'tongue',
    title: 'Пирсинг языка',
    image: '/img/ca8d771b-443a-4735-bd3f-7712cc85c65d.jpg',
    price: '2800₽',
    description: 'Профессиональный пирсинг языка с медицинской сталью'
  },
  {
    id: 5,
    type: 'eyebrow',
    title: 'Пирсинг брови',
    image: '/img/c2a67cbf-2738-4d3d-bc09-a16ab293164a.jpg',
    price: '2200₽',
    description: 'Аккуратный пирсинг брови с минималистичным украшением'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Анна К.',
    text: 'Анастасия настоящий профессионал! Пирсинг пупка зажил идеально, все стерильно и аккуратно.',
    rating: 5
  },
  {
    id: 2,
    name: 'Максим Р.',
    text: 'Делал пирсинг языка у Анастасии. Быстро, качественно, без боли. Рекомендую!',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена В.',
    text: 'Лучший мастер в городе! Уже третий пирсинг делаю только у неё.',
    rating: 5
  }
];

const services = [
  { name: 'Пирсинг ушей', price: '1500-3000₽' },
  { name: 'Пирсинг носа', price: '2000₽' },
  { name: 'Пирсинг губы', price: '2500₽' },
  { name: 'Пирсинг языка', price: '2800₽' },
  { name: 'Пирсинг брови', price: '2200₽' },
  { name: 'Пирсинг пупка', price: '3000₽' },
  { name: 'Интимный пирсинг', price: '4000₽' },
  { name: 'Смена украшения', price: '500₽' }
];

const careInstructions = [
  'Промывайте пирсинг 2 раза в день физраствором',
  'Не трогайте украшение грязными руками',
  'Избегайте алкоголя и курения первые 2 недели',
  'Не снимайте украшение до полного заживления',
  'При воспалении сразу обращайтесь к мастеру',
  'Используйте только рекомендованные средства для ухода'
];

function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Scattered Stickers */}
      <div className="absolute top-20 left-10 sticker z-10">
        <div className="text-xl">💀</div>
      </div>
      <div className="absolute top-40 right-16 sticker z-10" style={{transform: 'rotate(25deg)'}}>
        <div className="text-xl">💎</div>
      </div>
      <div className="absolute top-60 left-1/4 sticker z-10" style={{transform: 'rotate(-30deg)'}}>
        <div className="text-xl">🖤</div>
      </div>
      
      {/* Tape Elements */}
      <div className="absolute top-32 right-20 tape-element w-16 h-6 transform rotate-12 z-10"></div>
      <div className="absolute top-80 left-8 tape-element w-20 h-6 transform -rotate-6 z-10"></div>
      
      {/* Header with Magazine Letter Style Title */}
      <header className="relative py-12 px-4 text-center">
        <div className="relative z-20">
          <div className="flex justify-center items-center gap-1 mb-4 flex-wrap">
            {/* Magazine cut-out letter style - more chaotic */}
            <span className="magazine-letter text-4xl md:text-7xl font-black bg-red-600 text-white px-4 py-2 transform -rotate-3 shadow-lg" style={{fontFamily: 'Impact'}}>П</span>
            <span className="magazine-letter text-3xl md:text-6xl font-bold bg-yellow-400 text-black px-3 py-1 transform rotate-2 shadow-lg" style={{fontFamily: 'Times'}}>И</span>
            <span className="magazine-letter text-5xl md:text-8xl font-black bg-blue-600 text-white px-4 py-2 transform -rotate-1 shadow-lg" style={{fontFamily: 'Arial Black'}}>Р</span>
            <span className="magazine-letter text-4xl md:text-6xl font-bold bg-green-500 text-white px-3 py-1 transform rotate-3 shadow-lg" style={{fontFamily: 'Georgia'}}>С</span>
            <span className="magazine-letter text-3xl md:text-7xl font-black bg-purple-600 text-white px-4 py-2 transform -rotate-2 shadow-lg" style={{fontFamily: 'Verdana'}}>И</span>
            <span className="magazine-letter text-4xl md:text-6xl font-bold bg-orange-500 text-black px-3 py-1 transform rotate-1 shadow-lg" style={{fontFamily: 'Comic Sans MS'}}>Н</span>
            <span className="magazine-letter text-5xl md:text-8xl font-black bg-pink-500 text-white px-4 py-2 transform -rotate-3 shadow-lg" style={{fontFamily: 'Impact'}}>Г</span>
          </div>
          <div className="flex justify-center items-center gap-1 mb-6 flex-wrap">
            <span className="magazine-letter text-3xl md:text-6xl font-bold bg-cyan-400 text-black px-3 py-1 transform rotate-2 shadow-lg" style={{fontFamily: 'Helvetica'}}>А</span>
            <span className="magazine-letter text-4xl md:text-7xl font-black bg-red-700 text-white px-4 py-2 transform -rotate-1 shadow-lg" style={{fontFamily: 'Times'}}>Р</span>
            <span className="magazine-letter text-3xl md:text-5xl font-bold bg-gray-200 text-black px-3 py-1 transform rotate-3 shadow-lg" style={{fontFamily: 'Arial'}}>Т</span>
            <span className="magazine-letter text-5xl md:text-8xl font-black bg-indigo-600 text-white px-4 py-2 transform -rotate-2 shadow-lg" style={{fontFamily: 'Impact'}}>И</span>
            <span className="magazine-letter text-4xl md:text-6xl font-bold bg-yellow-300 text-black px-3 py-1 transform rotate-1 shadow-lg" style={{fontFamily: 'Georgia'}}>С</span>
            <span className="magazine-letter text-3xl md:text-7xl font-black bg-teal-600 text-white px-4 py-2 transform -rotate-3 shadow-lg" style={{fontFamily: 'Verdana'}}>Т</span>
          </div>
          <div className="relative inline-block bg-black text-white px-8 py-4 transform rotate-1 shadow-xl border-4 border-white">
            <span className="text-3xl md:text-4xl font-bold" style={{fontFamily: 'Impact'}}>АНАСТАСИЯ</span>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 mb-8 relative z-10">
        {/* Polaroid Photo Gallery */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white p-6 transform -rotate-1 shadow-2xl border-2 border-gray-300" style={{background: 'linear-gradient(45deg, #f9f9f9 25%, transparent 25%), linear-gradient(-45deg, #f9f9f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f9f9f9 75%), linear-gradient(-45deg, transparent 75%, #f9f9f9 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'}}>
            <h2 className="text-2xl font-bold text-center mb-6 handwriting text-blue-600">~ Мои работы ~</h2>
            
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {piercingData.map((piercing, index) => (
                  <CarouselItem key={piercing.id}>
                    <div className="polaroid-photo mx-auto max-w-sm" style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (2 + Math.random() * 3)}deg)`}}>
                      <img 
                        src={piercing.image}
                        alt={piercing.title}
                        className="w-full h-64 object-cover cursor-pointer"
                        onClick={() => setSelectedImage(piercing.image)}
                      />
                      <div className="mt-2 handwriting text-center text-lg font-bold text-gray-700">
                        {piercing.title} - {piercing.price}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white border-2 border-black shadow-lg" />
              <CarouselNext className="bg-white border-2 border-black shadow-lg" />
            </Carousel>
          </div>
        </div>

        {/* Price List - Notebook Style */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="paper-tear bg-white p-8 transform rotate-1 shadow-xl border-l-4 border-red-500" style={{backgroundImage: 'repeating-linear-gradient(white 0px, white 24px, #ccc 25px)'}}>
            <div className="relative">
              <h2 className="text-3xl font-bold text-center mb-8 handwriting text-red-600" style={{textDecoration: 'underline'}}>Прайс-лист</h2>
              
              {/* Tape on corner */}
              <div className="absolute -top-4 -right-4 tape-element w-16 h-8 transform rotate-45"></div>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-300 border-dashed">
                    <span className="handwriting text-lg text-gray-800">{service.name}</span>
                    <span className="handwriting text-lg font-bold text-red-600">{service.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 transform -rotate-1">
                <p className="handwriting text-sm text-gray-700">
                  * Цены указаны за работу мастера. Украшения оплачиваются отдельно.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Care Instructions - Torn Paper Style */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white p-6 transform -rotate-1 shadow-xl" style={{clipPath: 'polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%)'}}>
            <h2 className="text-2xl font-bold text-center mb-6 handwriting text-purple-600">Как ухаживать за пирсингом</h2>
            <div className="space-y-3">
              {careInstructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="handwriting text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews - Sticky Notes Style */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 handwriting text-green-600">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={review.id} className="relative bg-yellow-200 p-4 shadow-lg transform" style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (1 + Math.random() * 2)}deg)`}}>
                <div className="handwriting">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-gray-800">{review.name}</span>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-600">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">"{review.text}"</p>
                </div>
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact - Comic Speech Bubble */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="comic-bubble p-8 mx-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-black">Свяжись со мной!</h2>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" className="text-red-600" size={24} />
                <span className="text-lg font-bold">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Instagram" className="text-red-600" size={24} />
                <span className="text-lg font-bold">@anastasia_piercing</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" className="text-red-600" size={24} />
                <span className="text-lg font-bold">ул. Арт-Квартал, 15</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Clock" className="text-red-600" size={24} />
                <span className="text-lg font-bold">Ежедневно 12:00 - 21:00</span>
              </div>
              
              <div className="mt-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-transform">
                  Записаться на консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Scattered Elements */}
        <div className="absolute bottom-20 right-10 sticker z-10" style={{transform: 'rotate(45deg)'}}>
          <div className="text-xl">⚡</div>
        </div>
        <div className="absolute bottom-40 left-20 tape-element w-24 h-6 transform rotate-12 z-10"></div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain"
            />
            <Button 
              variant="destructive"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;