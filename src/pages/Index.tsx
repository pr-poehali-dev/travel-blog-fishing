import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const fishingStories = [
    {
      title: 'Первая щука сезона',
      description: 'Рассказ о том, как холодным утром на озере удалось поймать трофейную щуку весом 8 кг',
      date: 'Октябрь 2024',
      icon: 'Fish'
    },
    {
      title: 'Ночная рыбалка на налима',
      description: 'Ночь в тайге, костер и ожидание поклевки налима в ледяной воде осенней реки',
      date: 'Сентябрь 2024',
      icon: 'Moon'
    },
    {
      title: 'Хариус на перекатах',
      description: 'Летняя рыбалка на горных реках, где хариус берет практически на любую приманку',
      date: 'Июль 2024',
      icon: 'Waves'
    }
  ];

  const fishingTips = [
    {
      title: 'Снасти для тайги',
      description: 'Какие удилища и приманки брать с собой в таёжные походы',
      icon: 'Settings'
    },
    {
      title: 'Лучшее время клёва',
      description: 'Утренние и вечерние часы, когда рыба наиболее активна',
      icon: 'Clock'
    },
    {
      title: 'Безопасность на воде',
      description: 'Правила безопасности при рыбалке на таёжных реках и озёрах',
      icon: 'Shield'
    }
  ];

  const galleryImages = [
    {
      title: 'Туманное утро',
      description: 'Река в утренней дымке',
      color: 'from-slate-500 to-slate-700'
    },
    {
      title: 'Сосновый бор',
      description: 'Вековые сосны тайги',
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      title: 'Закат на озере',
      description: 'Золотой час у воды',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Таёжная тропа',
      description: 'Путь через лес',
      color: 'from-amber-600 to-amber-800'
    },
    {
      title: 'Горная река',
      description: 'Хрустальная вода',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Ночной костёр',
      description: 'Тепло в холодной тайге',
      color: 'from-red-500 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-foreground flex items-center gap-2">
              <Icon name="Trees" size={28} />
              Тайга
            </h1>
            <div className="flex gap-2">
              <Button
                variant={activeSection === 'main' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('main')}
                className="text-primary-foreground hover:bg-secondary/80"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'fishing' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('fishing')}
                className="text-primary-foreground hover:bg-secondary/80"
              >
                <Icon name="Fish" size={18} className="mr-2" />
                Рыбалка
              </Button>
              <Button
                variant={activeSection === 'gallery' ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection('gallery')}
                className="text-primary-foreground hover:bg-secondary/80"
              >
                <Icon name="Image" size={18} className="mr-2" />
                Галерея
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'main' && (
        <section className="animate-fade-in">
          <div className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            <div className="relative z-10 text-center px-4 animate-scale-in">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
                Дневник путешествий
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Истории о рыбалке, природе и приключениях в сибирской тайге
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setActiveSection('fishing')}
                className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
              >
                <Icon name="BookOpen" size={24} className="mr-2" />
                Читать истории
              </Button>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-center mb-4">О блоге</h3>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Здесь я делюсь своим опытом рыбалки и путешествий по таёжным местам Сибири
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                      <Icon name="Fish" size={24} className="text-accent-foreground" />
                    </div>
                    <CardTitle>Рыбалка</CardTitle>
                    <CardDescription>
                      Секреты успешной ловли на таёжных реках и озёрах
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                      <Icon name="Mountain" size={24} className="text-secondary-foreground" />
                    </div>
                    <CardTitle>Природа</CardTitle>
                    <CardDescription>
                      Красота и величие сибирской тайги в любое время года
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Icon name="Compass" size={24} className="text-primary-foreground" />
                    </div>
                    <CardTitle>Походы</CardTitle>
                    <CardDescription>
                      Маршруты и советы для путешествий по дикой природе
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'fishing' && (
        <section className="animate-fade-in">
          <div className="bg-gradient-to-br from-accent/20 to-secondary/20 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-4">Рыбалка в тайге</h2>
              <p className="text-xl text-center text-muted-foreground mb-12">
                Истории, советы и секреты успешной рыбалки
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <Tabs defaultValue="stories" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="stories" className="text-lg">
                  <Icon name="BookText" size={20} className="mr-2" />
                  Истории
                </TabsTrigger>
                <TabsTrigger value="tips" className="text-lg">
                  <Icon name="Lightbulb" size={20} className="mr-2" />
                  Советы
                </TabsTrigger>
              </TabsList>

              <TabsContent value="stories" className="space-y-6">
                {fishingStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={story.icon as any} size={32} className="text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-2xl">{story.title}</CardTitle>
                            <span className="text-sm text-muted-foreground">{story.date}</span>
                          </div>
                          <CardDescription className="text-base">
                            {story.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <Icon name="Eye" size={18} className="mr-2" />
                        Читать полностью
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="tips" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fishingTips.map((tip, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4">
                          <Icon name={tip.icon as any} size={28} className="text-secondary-foreground" />
                        </div>
                        <CardTitle className="text-xl">{tip.title}</CardTitle>
                        <CardDescription className="text-base">
                          {tip.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section className="animate-fade-in">
          <div className="bg-gradient-to-br from-muted to-background py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-4">Галерея</h2>
              <p className="text-xl text-center text-muted-foreground mb-12">
                Моменты, запечатлённые во время путешествий
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${image.color}`}></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <Icon name="Image" size={48} className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-bold mb-2 text-center">{image.title}</h3>
                    <p className="text-sm opacity-80 text-center">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Trees" size={24} />
              <span className="font-bold text-xl">Тайга</span>
            </div>
            <p className="text-primary-foreground/80">
              Блог о путешествиях и рыбалке в сибирской тайге
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-secondary/20">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-secondary/20">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-secondary/20">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
