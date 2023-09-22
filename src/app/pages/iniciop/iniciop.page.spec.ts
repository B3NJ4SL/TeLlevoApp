import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciopPage } from './iniciop.page';

describe('IniciopPage', () => {
  let component: IniciopPage;
  let fixture: ComponentFixture<IniciopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
