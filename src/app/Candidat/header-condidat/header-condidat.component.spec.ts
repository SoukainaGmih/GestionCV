import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCondidatComponent } from './header-condidat.component';

describe('HeaderCondidatComponent', () => {
  let component: HeaderCondidatComponent;
  let fixture: ComponentFixture<HeaderCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderCondidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
