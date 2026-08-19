# CarWise — specyfikacja produktu

## Obietnica produktu

Użytkownik opisuje, jakiego auta potrzebuje. CarWise zbiera zgodne oferty z podłączonych źródeł, ocenia każdy egzemplarz w tej samej absolutnej skali i pokazuje najlepsze dopasowania bez ukrywania, że cały dostępny zestaw może być słaby.

## Profil kupującego

Profil zapisuje:

- marki i modele dozwolone oraz wykluczone,
- maksymalną cenę, przebieg i wiek,
- typ nadwozia, paliwa, skrzyni i napędu,
- roczny przebieg oraz proporcję miasto/trasa,
- liczbę pasażerów, bagaż i wymagane wyposażenie,
- tolerancję ryzyka i maksymalny budżet na pierwszy serwis,
- priorytety: bezawaryjność, ekonomia, komfort, osiągi, bezpieczeństwo lub odsprzedaż.

Filtry twarde odrzucają ofertę. Preferencje miękkie wpływają wyłącznie na ocenę dopasowania.

Profil jest opcjonalny. Każde pole można pozostawić puste, a brak preferencji nie obniża Fit Score. Użytkownik może mieć kilka profili potrzeb, np. „auto rodzinne”, „do miasta” i „weekendowe”.

### Pełny zestaw filtrów wyszukiwania

#### Oferta

- cena od–do, waluta i możliwość odliczenia VAT,
- lokalizacja, promień wyszukiwania i kraj,
- sprzedawca prywatny/dealer, finansowanie i możliwość zamiany,
- data publikacji oraz tylko oferty ze zdjęciami, VIN-em lub historią serwisową.

#### Samochód

- marka, model, generacja, wersja i typ nadwozia,
- rok produkcji od–do oraz data pierwszej rejestracji,
- przebieg od–do,
- liczba drzwi, miejsc i pojemność bagażnika,
- kolor, kierownica lewa/prawa oraz kraj pochodzenia.

#### Silnik i napęd

- pojemność silnika od–do,
- moc od–do w KM lub kW,
- paliwo: benzyna, diesel, LPG, hybryda, PHEV, elektryczny lub wodór,
- skrzynia manualna/automatyczna i liczba biegów,
- napęd FWD, RWD, AWD/4x4,
- spalanie maksymalne, emisja CO₂ i norma Euro,
- dla EV/PHEV: pojemność baterii, minimalny zasięg, moc ładowania i typ złącza.

#### Stan i historia

- bezwypadkowy, nieuszkodzony i zarejestrowany,
- liczba właścicieli,
- pełna historia serwisowa, ASO i faktury,
- aktualne OC oraz badanie techniczne,
- brak zastawu, kradzieży i rozbieżności przebiegu,
- minimalna pewność danych oraz maksymalny poziom ryzyka.

#### Wyposażenie

- bezpieczeństwo: liczba poduszek, ISOFIX, adaptacyjny tempomat, asystenci pasa/martwego pola,
- komfort: klimatyzacja, ogrzewanie foteli, kamera, czujniki, keyless,
- multimedia: CarPlay/Android Auto, nawigacja i audio,
- wymagane elementy oraz elementy mile widziane.

#### Koszty i oceny CarWise

- minimalny Car Score i Fit Score,
- maksymalny przewidywany wydatek po zakupie,
- maksymalny miesięczny/roczny koszt posiadania,
- maksymalny koszt typowej poważnej naprawy,
- tylko auta z rekomendacją lub również auta wysokiego ryzyka.

Każdy filtr może działać jako „wymagany” albo „preferowany”. Wyjątkiem są warunki bezpieczeństwa, które użytkownik może zaostrzyć, ale aplikacja nie pozwala preferencją ukryć krytycznego ostrzeżenia.

### Personalizowana strona główna

Po uzupełnieniu profilu strona główna pokazuje sekcje:

- „Najlepiej dopasowane” — np. Fit Score 80+,
- „Nowe od ostatniej wizyty”,
- „Ulubione marki” — np. BMW,
- „Spełniają kluczową preferencję” — np. AWD/4x4,
- „Dobre auta poniżej budżetu”,
- „Obniżona cena” i „oferta wkrótce wygasa”, jeśli źródło dostarcza te dane.

Użytkownik ustala próg sekcji rekomendowanej, np. 70+, 80+ lub 90+. Domyślnie wynosi on 70. Car Score nadal jest pokazany obok Fit Score i słabe auto nie trafia do sekcji rekomendowanej tylko dzięki dobremu dopasowaniu. Domyślna bramka jakości to Car Score co najmniej 55 oraz brak krytycznej flagi.

Gdy profil jest pusty, strona główna pokazuje wyszukiwarkę, ostatnio oglądane, popularne bezpieczne wybory i zachętę do uzupełnienia preferencji — bez zgadywania cech użytkownika.

## Dwie niezależne oceny

### Car Score — jakość egzemplarza (0–100)

- historia i spójność danych: 25,
- ryzyko wersji silnik/skrzynia/rocznik: 20,
- stan wynikający z ogłoszenia i dokumentacji: 20,
- cena względem rynku: 15,
- przewidywane wydatki w 12 miesięcy: 15,
- kompletność i wiarygodność oferty: 5.

Ocena jest absolutna. Nie używa pozycji na liście, percentyla wyników ani normalizacji względem znalezionych aut.

Progi:

- 85–100: bardzo dobry kandydat,
- 70–84: dobry, wymaga standardowej weryfikacji,
- 55–69: warunkowo, potrzebna dokładna kontrola,
- 40–54: wysokie ryzyko,
- 0–39: odradzany.

Brak danych nie jest zaletą. Obniża `confidence`, a w krytycznych polach także wynik. Raport pokazuje wynik np. `58/100, pewność 63%`.

### Fit Score — dopasowanie do użytkownika (0–100)

Wyliczane z zastosowania, kosztów, preferencji i wyposażenia. Wysokie dopasowanie nie może zamaskować złego Car Score. Wynik końcowy ma postać `Car Score 46 · Dopasowanie 91`, nie jednej mylącej średniej.

## Wyszukiwanie ofert

Każde źródło implementuje wspólny adapter: wyszukiwanie, pobranie szczegółów, normalizacja, link źródłowy, data pobrania i identyfikator ogłoszenia. Obsługiwane tryby:

1. oficjalne API lub umowa partnerska,
2. import linku wklejonego przez użytkownika,
3. ręczne dodanie oferty,
4. import udostępnionego pliku/raportu.

Nie zakładamy automatycznego scrapingu jako fundamentu działalności. Uruchomienie konektora OLX/OTOMOTO wymaga potwierdzenia dozwolonego dostępu i warunków wykorzystania danych.

## Porównywarka

Widok desktop/tablet pokazuje auta w kolumnach, mobilny jako zsynchronizowane karty. Wiersze obejmują cenę, rok, przebieg, silnik, spalanie, koszty, ryzyko usterek, historię, wyposażenie i przewidywany wkład.

Kolory dotyczą znaczenia, nie samej wielkości liczby:

- zielony — wyraźnie korzystniejsza wartość,
- czerwony — wyraźnie gorsza lub ryzykowna,
- pomarańczowy — remis, niepewność albo różnica nieistotna.

Każdy kolor ma ikonę i opis, aby interfejs był dostępny dla osób nierozróżniających barw.

Użytkownik może dodać ofertę do porównania z listy wyników, raportu lub ulubionych. Zestaw porównawczy jest zapisywany na koncie, może mieć nazwę i obsługuje 2–4 auta. Usunięcie oferty ze źródła nie kasuje zapisanego skrótu danych, ale oznacza ją jako nieaktywną.

## Ulubione i zapisane wyszukiwania

- serce przy każdej ofercie dodaje ją do ulubionych,
- ulubione można grupować w kolekcje i opisywać własną notatką,
- zmiana ceny lub statusu oferty tworzy powiadomienie,
- wyszukiwanie wraz z filtrami można zapisać i nazwać,
- użytkownik wybiera częstotliwość powiadomień o nowych dopasowaniach,
- ten sam pojazd opublikowany w kilku źródłach jest łączony, jeśli pewność dopasowania jest wystarczająca.

### Monitoring cen ulubionych

Dodanie auta do ulubionych może automatycznie włączyć obserwowanie ceny. Użytkownik wybiera osobno dla każdej kolekcji, czy chce otrzymywać powiadomienia.

System zapisuje okresowe migawki i wykrywa:

- obniżkę lub podwyżkę ceny wraz z kwotą i procentem,
- osiągnięcie ceny docelowej ustawionej przez użytkownika,
- zmianę opisu, przebiegu lub innych istotnych parametrów,
- wycofanie, sprzedaż albo wygaśnięcie oferty,
- ponowne wystawienie tego samego auta, także pod innym identyfikatorem,
- pojawienie się podobnej, lepiej ocenionej oferty w niższej cenie.

Karta ulubionego pokazuje wykres historii ceny, pierwszą i najniższą cenę, liczbę dni publikacji oraz dziennik zmian. Alert może być natychmiastowy, dzienny, tygodniowy albo wyłączony. Częstotliwość odpytywania zależy od możliwości i warunków danego źródła.

## Typ rynku pojazdu

CarWise obejmuje dwie rozłączne ścieżki: samochody używane sprawne oraz samochody nowe. Każda używa wspólnego profilu preferencji, ale osobnego modelu oceny i raportu. Aplikacja nie obsługuje ofert samochodów uszkodzonych; takie ogłoszenia są oznaczane i wykluczane z rekomendacji.

### Czytelne rozróżnienie ratingów

Rating nowego auta i używanego auta mierzy inne rzeczy, dlatego wyników nie wolno porównywać bezpośrednio. Interfejs zawsze pokazuje:

- etykietę `NOWE` albo `UŻYWANE`,
- pełną nazwę wyniku zamiast samej liczby,
- krótkie wyjaśnienie „co oceniamy”, dostępne przy wyniku,
- stałą informację w porównywarce, gdy użytkownik próbuje zestawić różne kategorie.

`Car Score używanego` ocenia jakość i ryzyko konkretnego egzemplarza. `Value Score nowego` ocenia atrakcyjność ceny, wersji, gwarancji i kosztów posiadania — nie stan techniczny egzemplarza.

Porównywarka domyślnie przyjmuje wyłącznie auta tego samego typu. Jeśli użytkownik świadomie włączy porównanie nowego z używanym, zamiast jednego zwycięzcy pokazuje analizę scenariuszy i całkowity koszt posiadania. Wyniki obu ratingów pozostają w osobnych sekcjach i nie są oznaczane względem siebie kolorem zielonym/czerwonym.

### Samochody nowe

Raport nowego auta obejmuje:

- cenę katalogową, cenę oferty i dostępny rabat,
- porównanie wersji silnikowych i wyposażenia,
- koszt finansowania, leasingu lub zakupu gotówkowego,
- gwarancję, pakiety serwisowe i przewidywaną utratę wartości,
- spalanie lub zużycie energii oraz całkowity koszt posiadania,
- czas dostawy, rok modelowy i informację, czy auto jest z placu,
- dopasowanie do profilu oraz alternatywy w podobnym budżecie.

Nowe auto otrzymuje `Value Score` i `Fit Score`. Nie dostaje sztucznie wysokiego Car Score tylko dlatego, że nie ma jeszcze historii awarii.

Podstawowe encje: `UserProfile`, `PreferenceProfile`, `SavedSearch`, `Listing`, `Vehicle`, `Favorite`, `ComparisonSet`, `ComparisonItem`, `PriceSnapshot`, `VehicleHistoryReport` i `Analysis`.

## Raport oferty

- uporządkowane dane ogłoszenia i link do źródła,
- Car Score, Fit Score i pewność danych,
- mocne strony, czerwone flagi i braki w ogłoszeniu,
- realne widełki spalania,
- miesięczny i roczny koszt posiadania,
- typowe usterki z zakresem kosztów,
- lista „sprawdź / zrób od razu / zaplanuj”,
- minimalny, typowy i pesymistyczny wydatek po zakupie,
- pytania do sprzedawcy dopasowane do konkretnej oferty,
- checklista oględzin oraz jazdy próbnej.

Koszty mają walutę, region, datę aktualizacji, zakres i źródło. AI nie tworzy samodzielnie wartości liczbowych.

## VIN i historia pojazdu

Formularz przyjmuje VIN, numer rejestracyjny i datę pierwszej rejestracji. Moduł historii przechowuje tylko dane potrzebne do raportu i zgodę użytkownika.

Zakres raportu:

- zgodność VIN i danych technicznych,
- badania, odczyty przebiegu i wykryte anomalie,
- ważność OC i badania,
- liczba właścicieli i typ właściciela,
- status kradzieżowy oraz dostępne ryzyka zagraniczne,
- rozbieżności z treścią ogłoszenia.

Publiczne API CEPiK może zasilać katalog/statystyki i wymaga oznaczenia źródła. Pełny raport konkretnego pojazdu z usługi Historia Pojazdu nie jest traktowany jako publiczne API aplikacyjne. Do czasu uzyskania formalnego dostępu aplikacja prowadzi użytkownika do usługi państwowej i pozwala zaimportować pobrany przez niego PDF do analizy.

## Zasady bezpieczeństwa wyniku

- krytyczna flaga kradzieżowa lub niezgodny VIN blokuje rekomendację,
- brak potwierdzenia kluczowych danych wyświetla „niezweryfikowane”,
- ceny rynkowe i naprawy zawsze są widełkami,
- raport nigdy nie zastępuje kontroli w niezależnym warsztacie,
- sponsorowanie oferty nie wpływa na Car Score ani Fit Score.
