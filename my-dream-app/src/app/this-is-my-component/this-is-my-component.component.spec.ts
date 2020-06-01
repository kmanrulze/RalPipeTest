import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsMyComponentComponent } from './this-is-my-component.component';

describe('ThisIsMyComponentComponent', () => {
  let component: ThisIsMyComponentComponent;
  let fixture: ComponentFixture<ThisIsMyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisIsMyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisIsMyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
