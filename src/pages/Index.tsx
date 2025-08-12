import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('store');
  const [userBalance, setUserBalance] = useState({ robux: 1500, gems: 2300, coins: 850 });

  const featuredGames = [
    { id: 1, title: 'Cyberpunk 2077', price: '₽1,999', platform: 'PC', rating: 4.2, image: '/img/349b4fe1-e682-404b-8f51-d2eb93a0ccf3.jpg' },
    { id: 2, title: 'God of War', price: '₽2,499', platform: 'PS5', rating: 4.8, image: '/img/ce95a5d2-279d-4ca5-ae91-9f083a69abd1.jpg' },
    { id: 3, title: 'Elden Ring', price: '₽2,999', platform: 'PC/Console', rating: 4.9, image: '/placeholder.svg' },
    { id: 4, title: 'FIFA 24', price: '₽3,499', platform: 'All', rating: 4.1, image: '/placeholder.svg' }
  ];

  const myGames = [
    { id: 1, title: 'The Witcher 3', hours: 156, lastPlayed: '2 дня назад' },
    { id: 2, title: 'Counter-Strike 2', hours: 89, lastPlayed: '1 час назад' },
    { id: 3, title: 'Dota 2', hours: 234, lastPlayed: '5 часов назад' }
  ];

  const news = [
    { id: 1, title: 'Новое DLC для Cyberpunk 2077', date: '12 августа 2025', category: 'Обновление' },
    { id: 2, title: 'Steam Sale - скидки до 90%', date: '11 августа 2025', category: 'Акция' },
    { id: 3, title: 'Анонс новой части God of War', date: '10 августа 2025', category: 'Анонс' }
  ];

  const currencies = [
    { name: 'Robux', icon: '🔷', rate: '1 = ₽5', available: true },
    { name: 'Gems', icon: '💎', rate: '1 = ₽3', available: true },
    { name: 'V-Bucks', icon: '🟡', rate: '1 = ₽4', available: true },
    { name: 'Coins', icon: '🪙', rate: '1 = ₽2', available: false }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/img/e9f031d6-299d-4dd1-9135-b010b2ae7ee8.jpg" 
                  alt="Colizeum Logo" 
                  className="w-10 h-10 rounded-full border-2 border-primary"
                />
                <h1 className="text-2xl font-bold text-primary">COLIZEUM</h1>
              </div>
              <nav className="hidden md:flex space-x-4">
                <Button 
                  variant={activeTab === 'store' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('store')}
                  className="text-sm"
                >
                  <Icon name="Store" className="mr-2 h-4 w-4" />
                  Магазин
                </Button>
                <Button 
                  variant={activeTab === 'library' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('library')}
                  className="text-sm"
                >
                  <Icon name="Library" className="mr-2 h-4 w-4" />
                  Библиотека
                </Button>
                <Button 
                  variant={activeTab === 'chat' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('chat')}
                  className="text-sm"
                >
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                  Чат
                </Button>
                <Button 
                  variant={activeTab === 'exchange' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('exchange')}
                  className="text-sm"
                >
                  <Icon name="ArrowLeftRight" className="mr-2 h-4 w-4" />
                  Обмен
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3 text-sm">
                <Badge variant="secondary">🔷 {userBalance.robux}</Badge>
                <Badge variant="secondary">💎 {userBalance.gems}</Badge>
                <Badge variant="secondary">🪙 {userBalance.coins}</Badge>
              </div>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">GM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'store' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Добро пожаловать в COLIZEUM</h2>
              <p className="text-xl text-muted-foreground">Игровая платформа для ПК и консолей</p>
              <div className="flex justify-center space-x-4">
                <Input placeholder="Поиск игр..." className="max-w-md" />
                <Button>
                  <Icon name="Search" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-bold mb-6">Популярные игры</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredGames.map((game) => (
                  <Card key={game.id} className="hover:scale-105 transition-transform cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={game.image} 
                          alt={game.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="h-12 w-12 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm8 7V3.5L19.5 9H14z"/></svg></div>';
                            }
                          }}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">{game.title}</CardTitle>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline">{game.platform}</Badge>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-sm">{game.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold text-primary">{game.price}</span>
                        <Button size="sm">Купить</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6">Игровые новости</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((article) => (
                  <Card key={article.id} className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <Badge className="mb-3">{article.category}</Badge>
                      <h4 className="font-semibold mb-2">{article.title}</h4>
                      <p className="text-sm text-muted-foreground">{article.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'library' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Моя библиотека</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Icon name="Grid3X3" className="mr-2 h-4 w-4" />
                  Сетка
                </Button>
                <Button variant="outline">
                  <Icon name="List" className="mr-2 h-4 w-4" />
                  Список
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {myGames.map((game) => (
                  <Card key={game.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <Icon name="Gamepad2" className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{game.title}</h4>
                          <p className="text-muted-foreground">{game.hours} часов в игре</p>
                          <p className="text-sm text-muted-foreground">Играл: {game.lastPlayed}</p>
                        </div>
                        <Button>
                          <Icon name="Play" className="mr-2 h-4 w-4" />
                          Играть
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Статистика игрока</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Всего игр</p>
                      <p className="text-2xl font-bold text-primary">{myGames.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Всего часов</p>
                      <p className="text-2xl font-bold text-primary">
                        {myGames.reduce((total, game) => total + game.hours, 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Уровень</p>
                      <p className="text-2xl font-bold text-primary">42</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">Чат и сообщество</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="h-96">
                  <CardHeader>
                    <CardTitle>Общий чат</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto space-y-3">
                    <div className="flex space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>GM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">GameMaster</p>
                        <p className="text-sm text-muted-foreground">Добро пожаловать в Colizeum!</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>PR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">ProGamer</p>
                        <p className="text-sm text-muted-foreground">Кто-нибудь играет в CS2?</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>DV</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-primary">Developer_X</p>
                        <p className="text-sm text-muted-foreground">Работаем над новым обновлением!</p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input placeholder="Введите сообщение..." className="flex-1" />
                      <Button>
                        <Icon name="Send" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Типы аккаунтов</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge>Обычный</Badge>
                      <span className="text-sm">Базовые функции</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">Чат</Badge>
                      <span className="text-sm">Расширенный чат</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-primary text-primary-foreground">Разработчик</Badge>
                      <span className="text-sm">Полный доступ</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Онлайн игроки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">12,847</p>
                      <p className="text-muted-foreground">игроков онлайн</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'exchange' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">Обмен игровых валют</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ваш баланс</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🔷</span>
                        <span className="font-medium">Robux</span>
                      </div>
                      <span className="text-xl font-bold text-primary">{userBalance.robux}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">💎</span>
                        <span className="font-medium">Gems</span>
                      </div>
                      <span className="text-xl font-bold text-primary">{userBalance.gems}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🪙</span>
                        <span className="font-medium">Coins</span>
                      </div>
                      <span className="text-xl font-bold text-primary">{userBalance.coins}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Быстрый обмен</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Отдаю</label>
                        <Input type="number" placeholder="Количество" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Получаю</label>
                        <Input type="number" placeholder="Количество" disabled />
                      </div>
                    </div>
                    <Button className="w-full">
                      <Icon name="ArrowLeftRight" className="mr-2 h-4 w-4" />
                      Обменять
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Доступные валюты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currencies.map((currency, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{currency.icon}</span>
                          <div>
                            <p className="font-medium">{currency.name}</p>
                            <p className="text-sm text-muted-foreground">{currency.rate}</p>
                          </div>
                        </div>
                        <Button size="sm" disabled={!currency.available}>
                          {currency.available ? 'Купить' : 'Скоро'}
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>История операций</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span>Покупка Robux</span>
                        <span className="text-primary">+500 🔷</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Обмен Gems → Coins</span>
                        <span className="text-muted-foreground">-100 💎 → +200 🪙</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Покупка игры</span>
                        <span className="text-destructive">-300 🔷</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex">
          <Button 
            variant="ghost" 
            className="flex-1 py-4"
            onClick={() => setActiveTab('store')}
          >
            <Icon name="Store" className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 py-4"
            onClick={() => setActiveTab('library')}
          >
            <Icon name="Library" className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 py-4"
            onClick={() => setActiveTab('chat')}
          >
            <Icon name="MessageCircle" className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 py-4"
            onClick={() => setActiveTab('exchange')}
          >
            <Icon name="ArrowLeftRight" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}