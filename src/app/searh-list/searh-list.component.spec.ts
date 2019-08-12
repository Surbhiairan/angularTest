import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhListComponent } from './searh-list.component';

describe('SearhListComponent', () => {
  let component: SearhListComponent;
  let fixture: ComponentFixture<SearhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
