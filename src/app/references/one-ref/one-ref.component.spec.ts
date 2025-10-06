import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRefComponent } from './one-ref.component';

describe('OneRefComponent', () => {
  let component: OneRefComponent;
  let fixture: ComponentFixture<OneRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneRefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
