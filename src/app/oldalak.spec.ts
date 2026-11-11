// 3. feladat: aloldalak, routing, navigációs sáv
// A teszt az AppModule-on keresztül dolgozik, ezért a komponenseid nevei szabadon megválaszthatók.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('3. feladat: aloldalak és routing', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    el = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // megnyitja az URL-t, és az oldal (router-outlet) tartalmát adja vissza
  async function megnyit(url: string): Promise<Element> {
    await fixture.ngZone!.run(() => router.navigateByUrl(url));
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const oldal = el.querySelector('router-outlet')!.nextElementSibling;
    expect(oldal).not.toBeNull();
    return oldal!;
  }

  it('mindhárom útvonal létezik: (üres), scifi, humor', () => {
    const utak = router.config.map(r => r.path);
    expect(utak).toContain('');
    expect(utak).toContain('scifi');
    expect(utak).toContain('humor');
  });

  it('a főoldal tartalma bekezdés', async () => {
    const oldal = await megnyit('/');
    expect(oldal.querySelector('p')).not.toBeNull();
    expect(oldal.querySelector('ul')).toBeNull();
    expect(oldal.querySelector('table')).toBeNull();
  });

  it('a sci-fi oldal sorszámozás nélküli lista', async () => {
    const oldal = await megnyit('/scifi');
    expect(oldal.querySelectorAll('ul li').length).toBeGreaterThan(0);
    expect(oldal.querySelector('ol')).toBeNull();
  });

  it('a humor oldal táblázat, az első sor címsor (th)', async () => {
    const oldal = await megnyit('/humor');
    const tabla = oldal.querySelector('table');
    expect(tabla).not.toBeNull();
    const elsoSor = tabla!.querySelector('tr');
    expect(elsoSor!.querySelectorAll('th').length).toBeGreaterThan(0);
  });

  it('van vízszintes navigációs sáv (Bootstrap navbar)', () => {
    expect(el.querySelector('nav.navbar')).not.toBeNull();
  });

  it('a linkek felirata pontosan: Főoldal, Sci-Fi, Humor', () => {
    const feliratok = Array.from(el.querySelectorAll('nav a')).map(a => (a.textContent || '').trim());
    expect(feliratok).toContain('Főoldal');
    expect(feliratok).toContain('Sci-Fi');
    expect(feliratok).toContain('Humor');
  });

  it('a linkek routerLink-ek (nincs oldal-újratöltés): href az útvonalra mutat', () => {
    expect(el.querySelector('a[href="/scifi"]')).not.toBeNull();
    expect(el.querySelector('a[href="/humor"]')).not.toBeNull();
  });

  it('a linkre kattintva az oldal váltása működik', async () => {
    (el.querySelector('a[href="/humor"]') as HTMLElement).click();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(el.querySelector('table')).not.toBeNull();
  });
});
