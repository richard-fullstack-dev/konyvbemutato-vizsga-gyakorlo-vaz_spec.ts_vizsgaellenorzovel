# FELADAT (a verziókövetőn kapott leírás)

Időtartam: 180 perc. A tesztek (`*.spec.ts`) a feladatleírást ellenőrzik: az a cél, hogy mind sikeresen lefusson.
A váz elején a tesztek **nem fordulnak le**: hozd létre a hiányzó fájlokat és osztályokat, hogy forduljon, majd implementáld a hiányzó részeket.

## 3. feladat · Könyvbemutató oldalak (20 pont)

Az antikvárium könyvbemutatót szervez. Készítse el ezen könyveket listázó oldalakat egyetlen alkalmazásban.

a) Készítsen három aloldalt, amelyek között frontend routing segítségével lehet navigálni. Zárójelben találja a URL-t.
 - Főoldal ( / )
 - Sci-Fi ( /scifi )
 - Humor ( /humor )

b) A három aloldal tartalmát a **feladat3-tartalom.txt** fájlban találja. A főoldalt egy bekezdésben, a sci-fi oldalt egy sorszámozás nélküli listában, a humor oldalt egy táblázatban helyezze el (első sor címsor).

c) Készítsen vízszintes navigációs sávot az oldal tetején bootstrap segítségével. A linkek pontos megnevezését az a) feladatrészben találja. A linkeket úgy készítse el, hogy az oldal újratöltése nélkül is lehessen az aloldalak között navigálni!

## 4. feladat · Könyvajánló widget (15 pont)

Szükség van egy bármilyen oldalon elhelyezhető widget-re, amely segítségével egy adott könyvet lehet reklámozni.

a) Készítsen egy új komponenst **konyvajanlo** néven. A komponens kis-nagybetűs használata, fájlneve feleljen meg a keretrendszerben elvártaknak.

b) A komponenshez adja hozzá az alábbi paramétereket. A paraméterek kis-nagybetűs használata feleljen meg a keretrendszerben elvártaknak.
 - nev: string, a könyv neve
 - ar: number, a könyv ára
 - akcio: bool, a könyv jelenleg le van-e értékelve. Opcionális, az alapértéke false.

c) A komponens megjelenítése az alábbi legyen:
 - A név 3-as szintű címsorként jelenjen meg.
 - Az ár bekezdésként, alapértelmezett formázással.
 - Ha az akcio paraméter true, akkor alkalmazza az ár bekezdésére az **akcio** class-t. Az akciós megjelenítés legyen *[a szöveg a fotón elvágott]*

d) Készítsen egy SCSS fájlt, amelyben definiálja a fent említett **akcio** class-t.
 - Félkövér
 - Az alapértelmezettnél nagyobb betűméretű
 - A betűszín a **_colors.scss** fájlban definiált **kiemeles** változó legyen.
 - A definiált class legyen része a kimeneti CSS fájlnak.

e) A fő komponensben, tesztelési célból hozzon létre három példányt az új komponensből, az alábbi *[adatokkal: a szöveg a fotón elvágott]*:
 - A Gyűrű Szövetsége, 2500 Ft, nem akciós
 - A Két Torony, 2000 Ft, nem akciós
 - A Király Visszatér, 999 Ft, akciós

## 5. feladat · Új könyvek felvétele (20 pont)

Az új könyveket létrehozó űrlap már elkészült, azonban még nem funkcionális. Tegye interaktívvá, és *[készítse el a]* hozzá tartozó adatszerkezetet!

a) Készítse el a Konyv osztályt az alábbi leírás alapján:
 - Két privát tagváltozó:
   - #cim: szöveg
   - #isbn: szöveg
 - Konstruktor, amely ellenőrzi:
   - a címnek *(a fotón: "üresnek"; értelme szerint: nem üresnek)* kell lennie
   - a ISBN-nek pontosan 10 vagy 13 számjegy karakterből kell állnia (egyéb ellenőrzést *[nem]* kell végezni)
   - hibás paraméterek esetén kivétellel jelezze a hibát.
 - toString metódus, amely **Cím (ISBN)** formában adja vissza az adatokat.

b) Az oldal fő komponensét egészítse ki, hogy képes legyen a könyvekből álló lista tárolására.
 - A form kitöltésével a lista végéhez a felhasználó képes legyen új adatot hozzáadni
 - Új könyv hozzáadásakor a formot ürítse
 - *(szimulációs kiegészítés a teszthez: a lista elemei az űrlap alatt jelenjenek meg a toString értékével)*
