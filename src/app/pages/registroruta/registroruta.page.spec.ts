import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrorutaPage } from './registroruta.page';

describe('RegistrorutaPage', () => {
  let component: RegistrorutaPage;
  let fixture: ComponentFixture<RegistrorutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrorutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
