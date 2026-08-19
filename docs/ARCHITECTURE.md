# Architektura MVP

## Przepływ analizy

1. Użytkownik wkleja opis ogłoszenia i opcjonalnie cenę, przebieg, rocznik i dane auta.
2. Mobile waliduje podstawowe pola i wysyła `POST /v1/analyses`.
3. API normalizuje tekst, wydobywa sygnały ostrzegawcze i uruchamia silnik reguł.
4. Silnik wylicza ryzyko, przedział cenowy, listę usterek, pytań i checklistę.
5. Jeśli skonfigurowano OpenAI, adapter może wzbogacić uzasadnienia, ale nie zmienia twardych reguł bezpieczeństwa.
6. Raport zapisuje się w bazie i wraca do aplikacji.

## Granice odpowiedzialności

- Aplikacja mobilna nie zawiera sekretów i nie łączy się bezpośrednio z dostawcą AI.
- API egzekwuje limit darmowych analiz i jest jedynym miejscem zapisu danych.
- `packages/shared` nie ma zależności platformowych, dlatego scoring jest łatwy do testowania.
- Płatności są weryfikowane po stronie backendu; sam stan przycisku w aplikacji nie przyznaje dostępu Pro.

## Model monetyzacji

- Free: 3 pełne analizy miesięcznie, zapis ostatnich raportów.
- Pro Monthly / Annual: nielimitowane analizy, eksport PDF i porównanie aut (kolejne wydanie).
- Jednorazowy pakiet: 5 analiz dla osób kupujących auto sporadycznie.

## Kolejne etapy po MVP

- parser URL i legalne integracje partnerskie z portalami ogłoszeniowymi,
- dekoder VIN i rejestry historii pojazdu zależne od kraju,
- porównanie cen z licencjonowanym źródłem danych rynkowych,
- zdjęcia z wykrywaniem śladów napraw jako wskazówki, nigdy diagnoza,
- eksport raportu oraz współdzielenie z mechanikiem.

Szczegółowe zasady personalizacji, absolutnego ratingu, porównywarki i historii VIN opisuje `PRODUCT_SPEC.md`.
