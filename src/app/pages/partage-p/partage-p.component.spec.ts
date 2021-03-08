import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartagePComponent } from './partage-p.component';

describe('PartagePComponent', () => {
  let component: PartagePComponent;
  let fixture: ComponentFixture<PartagePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartagePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
