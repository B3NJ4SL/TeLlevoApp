import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GananciaPage } from './ganancia.page';

describe('GananciaPage', () => {
  let component: GananciaPage;
  let fixture: ComponentFixture<GananciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GananciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
