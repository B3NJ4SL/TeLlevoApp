import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscrutaPage } from './buscruta.page';

describe('BuscrutaPage', () => {
  let component: BuscrutaPage;
  let fixture: ComponentFixture<BuscrutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
