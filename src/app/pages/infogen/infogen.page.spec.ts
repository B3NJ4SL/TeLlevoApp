import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfogenPage } from './infogen.page';

describe('InfogenPage', () => {
  let component: InfogenPage;
  let fixture: ComponentFixture<InfogenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfogenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
