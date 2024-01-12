# GMI WEATHER APP (nie dokumentacja)

## Opis

### gmi-back-weather

Jest to backend aplikacji napisany w Nest.js.

Nawjażnieszje informacje:

- Jest 1 endpoint który pobiera dane z api od OpeanWeatherApp. `GET /weathers`
- Jest zabezpieczony guardem `ApiKeyGuard`, jest to bardzo proste podejscie po jest tylko jeden klucz. W implementacji dużej aplikacji były by one zapisywane w bazie danych. Lecz ten prosty przykład pokazuje jak by to działało.
- `HttpErrorFilter` prosty przykładowy customowy error handler
- `WeatherResponseSchema` możny było by to zrobić jak typ lub interfjes ale chciałem zrobić to bardziej jakby było pod bazę danych stworzone oraz by łatwiej było wygenerować swaggera.
- `FilterWeatherDto` zwykłe DTO, nie wiem co mogę dodać.
- Cache zrobiłem wykorzystująć proste @nestjs/cache-manager. Gdyby była to komercyjna aplikacja skorzystał bym raczej z Redis lub przynajmnniej z bazy danych. Cieżko tutaj określić najlepszy czas po, którym ma nastąpić reset cache. Ustawienie 90 sekund nie jest najlepszym rozwiązanie ale do developerskiego podejścia jest okej. W produkcji moze na 10min.

Zrobiłem ten backend bez fajerwerków. Skupiłem się na tym by spełniał wszystkie wymogi zadania oraz pokazać, że coś potrafię z Nest.js

### gmi-frontend

Jest to frontend aplikacji napisany w React Native z Expo

#### Funkcjonalności

Wykorzystał tutaj TypeScript (nie było to wymuszone w zadaniu).

Aplikacja ma główny widok gdzie pokazują się dane pogody miejsca, które się wybrało. Domyślnie Warszawa. Inne miejsca mozna wybrać na dwa sposoby :

1. Wpisać nazwę miasta
2. Wybrać z mapy (dodatkowe)

W modalu settings można ustawić język. Aplikacja posiada trzy języki: niemiecki; angielski; polski. Wykorzystałem tutaj wbudowany w expo expo-localization oraz i18n-js który zarządza tłumaczeniami.

Context, stworzyłem 1 context bo nie było potrzeby więcej czy jakoś to działać. W sytuacji bardziej skomplikowanej aplikacji stworzył bym kilka context lub wykorzystał Redux. Postarałem się napisać Context maksymalnie czysto i zachować równowagę między rozdzielaniem to na pliki a ilością plików. W samym context jest przechowywana informacja o pogodzie, filtrach oraz errorach. Wykorzystał informację, że API jest filtrowane po jęzku co dało mi możliwość aby nie tworzyć dodatkowego stanu dla aktualne języka.

Motyw jest automatycznie dostosowywane do motywu wybranego w systemie. Mam stałe kolory w `constans/Colors` gdzie jest taki szkic dwóch motywów

Napisałem kilka testów dla komponentów by pokazać, że potrafię. Należałoby oczywiście dopisać testy dla screenów aplikacji ale myślę, że mogę sobie je odpuścić w sytuacji, że zrobiłem już testy a to nie jest aplikacja produkcyjna.

Jeśli wpisze się nie prawdziwą nazwę miasta to wyskoczy informacja, że miasta nie znaleziono

#### Co jeszcze można dodać

- Docker, można wykorzystać docker to postawienia backendu i frontendu. Raz stworzyłem React Native i Nest.js na kontenerach i się łączyły. Zawsze mogę pokazać lecz nie konfigurowałem tego pod ten projekt.  - Zmiana jednostek. Przygotowałem i utils oraz w context ale nie zaimplementowałem tego. Zrobiłbym to podobnie jak zmianę języka.

Jeśli, któreś może to zaważyć na tym czy dostanę pracę to mogę dorobić

#### Uwagi od siebie

Chciałbym tutaj skupić się na tym iż nie wykorzystuję React.FC, z którym  jest kilka problemów z typowanie propsów.

Wykorzystałem koncept nazewnictwa commitów.

Dodałem dwa nagrania z używania aplikacji.
