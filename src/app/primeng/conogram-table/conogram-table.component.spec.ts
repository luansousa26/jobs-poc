import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConogramTableComponent } from './conogram-table.component';

describe('ConogramTableComponent', () => {
  let component: ConogramTableComponent;
  let fixture: ComponentFixture<ConogramTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConogramTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConogramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
