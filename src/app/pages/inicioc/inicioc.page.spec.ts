import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciocPage } from './inicioc.page';

describe('IniciocPage', () => {
  let component: IniciocPage;
  let fixture: ComponentFixture<IniciocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
