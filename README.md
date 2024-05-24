<!--
Rövid projekt leírás

Megadom a város nevét egy inputba,  gombnyomásra hívok egy API-t. 
A szerver visszaad egy listát, amiben kártyák vannak. Minden kártyán szerepel a keresett város, és más adatok, pl latitude, longitude.
Ki kell választani egy kártyát, és annak a lat és long-ját kell betenni elküldeni egy másik gombnyomásra egy másik szervernek
a másik api  visszaadja a választott kártyán szereplő városhoz tartozó időjárási adatot 

Pl. Beírom a keresőbe, hogy Sydney, akkor több kártyát ad ki, mert Sydney van Ausztráliában és Kanadában is. 
Rákattintok a szimpatikus kártyára (pl Sydney-Australia) és akkor értelemszerűen ahhoz a Sydney-hez rendeli a másik API
az időjárási adatokat.  

Felépítés

Home komponens: a smart komponens, ahova befutnak a szálak; ő tartja a kapcsolatot a service-ekkel.
City komponens: egy text input van, itt kell beírni a város nevét. A város nevét elküldöm a smart komponensnek, ő küldi tovább a stata service-nek
State service: itt történik meg a subscription; (lejön a lista, amelyek tartalmazzák a lon, lat paramétereket).
Data service: itt történik meg az API hívás.
A listát elküldöm a Home-nak, ami elküldi a City-nek, ahol kirajzolom a kártyákat.
Ha megtörténik az API hívás, akkor megjelennek a kártyák a City komponensben. Itt kell rákattintani a választott kártyára, és az adott kártyából ki kell nyerni a lon, lat paramétereket.

-----

Az adott kártyán lévő "Ezt keresem" gombra kattintva a City-ből elküldöm a long és lat paramétereket a Home-ba. 
data service: a Home-ból kapott lat és long paraméter alapján itt hívom meg a timezone API-t
state service: subscrition
Visszaküldöm a Home-ba az API hívásból kapott választ, ami elküldi a Weather-nek, ami kirajzolja a választott városhoz kapcsolódó időjárási jellemzőket.
Weather komponens: itt fog megjelenni a konkrét adat.




https://api-ninjas.com/api/geocoding


-->
