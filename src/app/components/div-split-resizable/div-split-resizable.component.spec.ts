import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSplitResizableComponent } from './div-split-resizable.component';

describe('DivSplitResizableComponent', () => {
  let component: DivSplitResizableComponent;
  let fixture: ComponentFixture<DivSplitResizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivSplitResizableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivSplitResizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
