# Könyvbemutató (vizsgaszimulációs váz)

Ez a projekt egy **vizsgai váz**: a tesztek még nem fordulnak le, ez így van rendjén.

## Indulás (ahogy a vizsgán: verziókövetőn kapod)

```bash
git clone <ennek-a-repónak-a-címe>
cd konyvbemutato
npm install
ng test --watch=false --browsers=ChromeHeadless     # most hibát ad: "Cannot find module './konyv'" stb.
```

1. Olvasd el a **FELADAT.md**-t és a `*.spec.ts` teszteket (a pontos nevek a tesztekből jönnek).
2. Hozd létre a hiányzó fájlokat és osztályokat (pl. `ng g c konyvajanlo --skip-tests`, `src/app/konyv.ts`), hogy a teszt forduljon (ekkor már piros, de lefut).
3. Implementáld a hiányzó részeket, amíg mind zöld nem lesz.
4. `ng build` hiba nélkül.
5. `git add .` / `git commit -m "..."` / `git push` (a beadás).

Futtatás böngészőben: `ng serve`.
