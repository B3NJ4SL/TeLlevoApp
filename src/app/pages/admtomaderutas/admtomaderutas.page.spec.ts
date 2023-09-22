import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmtomaderutasPage } from './admtomaderutas.page';

describe('AdmtomaderutasPage', () => {
  let component: AdmtomaderutasPage;
  let fixture: ComponentFixture<AdmtomaderutasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmtomaderutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
