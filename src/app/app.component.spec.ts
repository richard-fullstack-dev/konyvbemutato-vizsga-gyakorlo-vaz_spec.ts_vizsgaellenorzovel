// 4. e) és 5. b) feladat: a fő komponens
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('4. és 5. feladat: a fő komponens', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  // --- 4. e) három példány a megadott adatokkal ---
  it('három konyvajanlo példány van a fő komponensben', () => {
    expect(el.querySelectorAll('app-konyvajanlo').length).toBe(3);
  });

  it('a példányok adatai: A Gyűrű Szövetsége 2500, A Két Torony 2000, A Király Visszatér 999', () => {
    const peldanyok = Array.from(el.querySelectorAll('app-konyvajanlo'));
    expect(peldanyok[0].textContent).toContain('A Gyűrű Szövetsége');
    expect(peldanyok[0].textContent).toContain('2500');
    expect(peldanyok[1].textContent).toContain('A Két Torony');
    expect(peldanyok[1].textContent).toContain('2000');
    expect(peldanyok[2].textContent).toContain('A Király Visszatér');
    expect(peldanyok[2].textContent).toContain('999');
  });

  it('csak a harmadik példány akciós', () => {
    const peldanyok = Array.from(el.querySelectorAll('app-konyvajanlo'));
    expect(peldanyok[0].querySelector('.akcio')).toBeNull();
    expect(peldanyok[1].querySelector('.akcio')).toBeNull();
    expect(peldanyok[2].querySelector('.akcio')).not.toBeNull();
  });

  // --- 5. b) az űrlap interaktívvá tétele ---
  // SZIMULÁCIÓS KIEGÉSZÍTÉS: a lista elemei az űrlap alatt jelenjenek meg a Konyv toString() értékével.
  function beir(id: string, ertek: string): void {
    const input = el.querySelector('#' + id) as HTMLInputElement;
    input.value = ertek;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }

  async function hozzaad(): Promise<void> {
    (el.querySelector('#hozzaad') as HTMLButtonElement).click();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  it('érvényes adat a lista végére kerül, és az űrlap kiürül', async () => {
    beir('cim', 'A Gyűrűk Ura');
    beir('isbn', '9780618640157');
    await hozzaad();
    expect(el.textContent).toContain('A Gyűrűk Ura (9780618640157)');
    expect((el.querySelector('#cim') as HTMLInputElement).value).toBe('');
    expect((el.querySelector('#isbn') as HTMLInputElement).value).toBe('');
  });

  it('a második könyv az elsőt követi (a lista végére kerül)', async () => {
    beir('cim', 'Első');
    beir('isbn', '1234567890');
    await hozzaad();
    beir('cim', 'Második');
    beir('isbn', '1234567890123');
    await hozzaad();
    const szoveg = el.textContent || '';
    expect(szoveg.indexOf('Első (1234567890)')).toBeGreaterThan(-1);
    expect(szoveg.indexOf('Második (1234567890123)')).toBeGreaterThan(szoveg.indexOf('Első (1234567890)'));
  });

  it('hibás adat (üres cím, rossz ISBN) nem kerül a listába', async () => {
    beir('cim', '');
    beir('isbn', '1234567890');
    await hozzaad();
    beir('cim', 'Rossz');
    beir('isbn', '123');
    await hozzaad();
    expect(el.textContent).not.toContain('(1234567890)');
    expect(el.textContent).not.toContain('Rossz (123)');
  });
});
