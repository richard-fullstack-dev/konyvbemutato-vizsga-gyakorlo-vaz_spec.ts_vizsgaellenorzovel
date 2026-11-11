// 4. feladat: konyvajanlo komponens  (a komponenst neked kell létrehoznod: ng g c konyvajanlo)
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvajanloComponent } from './konyvajanlo.component';

describe('4. feladat: KonyvajanloComponent', () => {
  let fixture: ComponentFixture<KonyvajanloComponent>;
  let component: KonyvajanloComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ declarations: [KonyvajanloComponent] }).compileComponents();
    fixture = TestBed.createComponent(KonyvajanloComponent);
    component = fixture.componentInstance;
  });

  it('az akcio paraméter alapértéke false (opcionális)', () => {
    expect(component.akcio).toBeFalse();
  });

  it('a név 3-as szintű címsorként jelenik meg', () => {
    component.nev = 'A Két Torony';
    component.ar = 2000;
    fixture.detectChanges();
    const h3 = (fixture.nativeElement as HTMLElement).querySelector('h3');
    expect(h3).not.toBeNull();
    expect(h3!.textContent).toContain('A Két Torony');
  });

  it('az ár bekezdésként jelenik meg', () => {
    component.nev = 'A Két Torony';
    component.ar = 2000;
    fixture.detectChanges();
    const p = (fixture.nativeElement as HTMLElement).querySelector('p');
    expect(p).not.toBeNull();
    expect(p!.textContent).toContain('2000');
  });

  it('az akcio class csak akció esetén kerül az ár bekezdésére', () => {
    component.nev = 'A Két Torony';
    component.ar = 2000;
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('p.akcio')).toBeNull();

    component.akcio = true;
    fixture.detectChanges();
    expect(el.querySelector('p.akcio')).not.toBeNull();
  });

  it('az akciós ár félkövér, nagyobb betűméretű és a kiemeles színű (#b5651d)', () => {
    component.nev = 'A Király Visszatér';
    component.ar = 999;
    fixture.detectChanges();
    const p = (fixture.nativeElement as HTMLElement).querySelector('p') as HTMLElement;
    const normalSize = parseFloat(getComputedStyle(p).fontSize);

    component.akcio = true;
    fixture.detectChanges();
    const stilus = getComputedStyle(p);
    expect(stilus.fontWeight === 'bold' || parseInt(stilus.fontWeight, 10) >= 600).toBeTrue();
    expect(parseFloat(stilus.fontSize)).toBeGreaterThan(normalSize);
    expect(stilus.color).toBe('rgb(181, 101, 29)');
  });
});
