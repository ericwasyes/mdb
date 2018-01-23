import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCrewComponent } from './season-crew.component';

describe('SeasonCrewComponent', () => {
  let component: SeasonCrewComponent;
  let fixture: ComponentFixture<SeasonCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
