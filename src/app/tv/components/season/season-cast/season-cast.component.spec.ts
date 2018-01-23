import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCastComponent } from './season-cast.component';

describe('SeasonCastComponent', () => {
  let component: SeasonCastComponent;
  let fixture: ComponentFixture<SeasonCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
