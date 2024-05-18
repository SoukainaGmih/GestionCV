import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVisiteurComponent } from './main-visiteur.component';

describe('MainVisiteurComponent', () => {
  let component: MainVisiteurComponent;
  let fixture: ComponentFixture<MainVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainVisiteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
