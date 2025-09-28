import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
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
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredPiercings = activeFilter === 'all' 
    ? piercingData 
    : piercingData.filter(item => item.type === activeFilter);

  const filterTypes = [
    { key: 'all', label: 'Все' },
    { key: 'ear', label: 'Уши' },
    { key: 'lip', label: 'Губы' },
    { key: 'tongue', label: 'Язык' },
    { key: 'navel', label: 'Пупок' },
    { key: 'eyebrow', label: 'Брови' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Magazine Letter Style Title */}
      <header className="relative py-8 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-red-900/20 to-background"></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            {/* Magazine cut-out letter style */}
            <span className="text-4xl md:text-6xl font-bold bg-red-600 text-white px-3 py-1 transform -rotate-2 shadow-lg">П</span>
            <span className="text-4xl md:text-6xl font-bold bg-gray-200 text-black px-3 py-1 transform rotate-1 shadow-lg">И</span>
            <span className="text-4xl md:text-6xl font-bold bg-red-600 text-white px-3 py-1 transform -rotate-1 shadow-lg">Р</span>
            <span className="text-4xl md:text-6xl font-bold bg-gray-300 text-black px-3 py-1 transform rotate-2 shadow-lg">С</span>
            <span className="text-4xl md:text-6xl font-bold bg-red-700 text-white px-3 py-1 transform -rotate-1 shadow-lg">И</span>
            <span className="text-4xl md:text-6xl font-bold bg-gray-200 text-black px-3 py-1 transform rotate-1 shadow-lg">Н</span>
            <span className="text-4xl md:text-6xl font-bold bg-red-600 text-white px-3 py-1 transform -rotate-2 shadow-lg">Г</span>
          </div>
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-3xl md:text-5xl font-bold bg-gray-300 text-black px-3 py-1 transform rotate-1 shadow-lg">А</span>
            <span className="text-3xl md:text-5xl font-bold bg-red-600 text-white px-3 py-1 transform -rotate-1 shadow-lg">Р</span>
            <span className="text-3xl md:text-5xl font-bold bg-gray-200 text-black px-3 py-1 transform rotate-2 shadow-lg">Т</span>
            <span className="text-3xl md:text-5xl font-bold bg-red-700 text-white px-3 py-1 transform -rotate-1 shadow-lg">И</span>
            <span className="text-3xl md:text-5xl font-bold bg-gray-300 text-black px-3 py-1 transform rotate-1 shadow-lg">С</span>
            <span className="text-3xl md:text-5xl font-bold bg-red-600 text-white px-3 py-1 transform -rotate-2 shadow-lg">Т</span>
          </div>
          <div className="relative inline-block bg-red-600 text-white px-6 py-3 transform rotate-1 shadow-xl">
            <span className="text-2xl md:text-3xl font-bold">АНАСТАСИЯ</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="px-4 mb-8">
        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="prices">Прайс</TabsTrigger>
            <TabsTrigger value="care">Уход</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="max-w-6xl mx-auto">
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {filterTypes.map(filter => (
                  <Badge 
                    key={filter.key}
                    variant={activeFilter === filter.key ? "default" : "secondary"}
                    className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    {filter.label}
                  </Badge>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPiercings.map(piercing => (
                  <Card key={piercing.id} className="overflow-hidden hover:scale-105 transition-transform duration-300 border-2">
                    <div className="relative">
                      <img 
                        src={piercing.image}
                        alt={piercing.title}
                        className="w-full h-64 object-cover cursor-pointer"
                        onClick={() => setSelectedImage(piercing.image)}
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-red-600 text-white">
                          {piercing.price}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{piercing.title}</h3>
                      <p className="text-muted-foreground text-sm">{piercing.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-red-600">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6 text-red-400">Наши Услуги</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border border-muted rounded">
                        <span className="font-medium">{service.name}</span>
                        <Badge variant="outline" className="border-red-600 text-red-400">
                          {service.price}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Prices Tab */}
          <TabsContent value="prices">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-red-600">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6 text-red-400">Прайс-лист</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 font-bold border-b pb-2">
                      <span>Услуга</span>
                      <span className="text-right">Цена</span>
                    </div>
                    {services.map((service, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b border-muted">
                        <span>{service.name}</span>
                        <span className="text-right font-bold text-red-400">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded">
                    <p className="text-sm text-muted-foreground">
                      * Цены указаны за работу мастера. Стоимость украшения оплачивается отдельно.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Care Tab */}
          <TabsContent value="care">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-red-600">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6 text-red-400">Уход за пирсингом</h2>
                  <div className="space-y-4">
                    {careInstructions.map((instruction, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-muted rounded">
                        <Icon name="Check" className="text-red-400 mt-1 flex-shrink-0" size={20} />
                        <span>{instruction}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-red-900/20 rounded border border-red-600">
                    <h3 className="font-bold text-red-400 mb-2">Важно помнить:</h3>
                    <p className="text-sm">
                      Время заживления зависит от типа пирсинга и индивидуальных особенностей организма. 
                      При любых вопросах или проблемах обращайтесь к мастеру!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-center text-red-400">Отзывы клиентов</h2>
              {reviews.map(review => (
                <Card key={review.id} className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold">{review.name}</span>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-current" size={16} />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <div className="max-w-4xl mx-auto">
              {/* Comic Speech Bubble */}
              <div className="relative bg-white text-black p-8 rounded-3xl border-4 border-black mx-4 mb-8">
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-black"></div>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                </div>
                
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
                </div>
                
                <Separator className="my-6 bg-black" />
                
                <div className="text-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-lg">
                    Записаться на консультацию
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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