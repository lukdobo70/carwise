# CarWise — Used Car Copilot

CarWise analizuje ogłoszenia używanych samochodów i zamienia chaotyczny opis w praktyczny raport: ocenę ryzyka, ocenę ceny, typowe usterki, pytania do sprzedającego oraz checklistę oględzin.

## Aktualne MVP webowe

Pierwsza wersja to responsywna aplikacja React/Vite. Zawiera działające filtry, oddzielne ratingi nowych i używanych aut, raport oferty, ulubione z monitoringiem ceny oraz porównywarkę 2–4 ofert. Dane w tym wydaniu są demonstracyjne; integracje źródłowe i konta użytkowników są kolejnym etapem.

## Szybki start

Wymagany jest Node.js 20+ i pnpm 9+.

```bash
npm install
npm run dev
```

Testy: `npm test`. Build produkcyjny: `npm run build`.

## Funkcje MVP

- analiza tekstu ogłoszenia lub ręcznie wprowadzonych danych,
- scoring ryzyka 0–100 z czytelnymi czynnikami,
- estymacja uczciwego przedziału cenowego,
- katalog typowych usterek dla popularnych układów napędowych,
- pytania do sprzedającego i checklista oględzin,
- konto gościa, zapis i usuwanie analiz,
- darmowy limit oraz gotowe punkty integracji RevenueCat,
- opcjonalne wzbogacanie raportów przez API OpenAI,
- testy jednostkowe i endpointów, konfiguracja EAS Build.

## Ważne ograniczenie

Raport jest wsparciem decyzyjnym, nie ekspertyzą techniczną ani wyceną rzeczoznawcy. Zakup należy poprzedzić oględzinami i diagnostyką w niezależnym warsztacie.
