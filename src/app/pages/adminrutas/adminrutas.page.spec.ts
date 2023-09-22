import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminrutasPage } from './adminrutas.page';

describe('AdminrutasPage', () => {
  let component: AdminrutasPage;
  let fixture: ComponentFixture<AdminrutasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminrutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
