# dashboard
 - '/'
  * statystyki zamówień
  * lista rezerwacji oraz ewentów

# dostępność stolików
- '/tables'
  * wybór daty i godziny
  * tabel z rezerwacjami
    - każda kolumna to 1 stolik
    - każdy wiersz to 30 minut
    - widok tygodnia w kalendarzu jak w google. Kolumna to różne stoliki
    - klikniecie rezerwacji eventy - przenosi do szczegółów
- 'tables/booking/:id'
  * zawiera informacje dotyczące rezerwacji
  * umozliwia edycję i zapisanie zmian
- 'tables/booking/:new'
  * j/w
- 'tables/events/:id'
  * j/w
- 'tables/events/:new'
  * j/w

# widok kelnera
- '/waiter'
  * tabela
    - w kolumnach stoliki
    - rożne informacje
    - dostępne akcje
- '/waiter/order/new'
  * numer stolika (edytowalny)
  * menu produktów
  * opcje wybranego produktu
  * zamówienie
  * kwotę
- '/waiter/order/:id'
  * j/w

# widok kuchni
- '/kitchen'
  * lista zamówień
  * numer stolika
  * mozliwość oznaczenia zamówienia

# logoanie
- '/login'
  * login oraz hasło
  * login button (link do dashboardu)