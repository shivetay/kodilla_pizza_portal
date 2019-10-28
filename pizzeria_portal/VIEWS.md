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
    - widok tygodnia w kalendarzu
- 'tables/booking/:id'
- 'tables/booking/:new'
- 'tables/events/:id'
- 'tables/events/:new'

# widok kelnera
- '/waiter'
- '/waiter/order/new'
- '/waiter/order/:id'

# widok kuchni
- '/kitchen'

# logoanie
- '/login'
  * login oraz hasło
  * login button (link do dashboardu)