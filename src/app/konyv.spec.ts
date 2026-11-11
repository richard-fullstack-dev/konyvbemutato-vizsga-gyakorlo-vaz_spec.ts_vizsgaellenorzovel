// 5. feladat a): Konyv osztály  (a ./konyv fájl még nem létezik: neked kell létrehoznod)
import { Konyv } from './konyv';

describe('5. feladat: Konyv osztály', () => {
  it('érvényes adatokkal létrejön, a toString Cím (ISBN) formátumú', () => {
    const k = new Konyv('A Gyűrűk Ura', '9780618640157');
    expect(k.toString()).toBe('A Gyűrűk Ura (9780618640157)');
  });

  it('a 10 számjegyű ISBN is elfogadott', () => {
    expect(() => new Konyv('Valami', '0618640150')).not.toThrow();
  });

  it('üres cím kivételt dob', () => {
    expect(() => new Konyv('', '9780618640157')).toThrow();
    expect(() => new Konyv('   ', '9780618640157')).toThrow();
  });

  it('az ISBN csak pontosan 10 vagy 13 karakter lehet', () => {
    expect(() => new Konyv('Valami', '123456789')).toThrow();
    expect(() => new Konyv('Valami', '12345678901')).toThrow();
    expect(() => new Konyv('Valami', '123456789012')).toThrow();
    expect(() => new Konyv('Valami', '12345678901234')).toThrow();
  });

  it('az ISBN csak számjegyekből állhat', () => {
    expect(() => new Konyv('Valami', '97806186401a7')).toThrow();
  });

  it('a mezők privátok: kívülről nincs nyilvános adatmező', () => {
    const k = new Konyv('A Gyűrűk Ura', '9780618640157');
    expect(Object.keys(k).length).toBe(0);
  });
});
