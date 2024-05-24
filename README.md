<!--
Rövid projekt leírás

Megadom a város nevét, az visszaad egy listát, amiben van latitude és longitude
Ki kell választani egy listát, és annak lat és long-ját kell betenni egy másik API-ba
a másik api meg visszaadja a time zone-t a long és lat paraméterek segítségével 

Felépítés

Home komponens: a smart komponens, ahova befutnak a szálak; ő tartja a kapcsolatot a service-ekkel
City komponens: egy text input van, itt kell beírni a város nevét  a város nevét elküldöm a smart komponensnek, ő küldi tovább a service-nek
cityData service: itt történik meg az API hívás
cityState service: itt történik meg a subscription; lejön a lista, amelyek tartalmazzák a lon, lat paramétereket  
a listát elküldöm a Home-nak, aki elküldi a City-nek, ahol kirajzolom a kártyákat
ha megtörténik az API hívás, akkor megjelennek a kártyák a City komponensben. Itt kell rákattintani a választott kártyára, és az adott kártyából ki kell nyerni a lon, lat paramétereket, és az adja vissza a time zone-t

-----

A City-ből elküldöm a long és lat paramétereket a Home-ba
TimeZone komponens: itt fog megjelenni a time zone. 
timeZoneData service: a Home-ból kapott lat és long paraméter alapján itt hívom meg a timezone API-t
timeZoneState service: subscrition
visszaküldöm a Home-ba, ami elküldi a TimeZonenak, ami kirajzolja a választott város time zone-ját 


https://api-ninjas.com/api/timezone

https://api-ninjas.com/api/geocoding


-->
