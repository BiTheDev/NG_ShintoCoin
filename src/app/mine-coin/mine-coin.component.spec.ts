import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineCoinComponent } from './mine-coin.component';

describe('MineCoinComponent', () => {
  let component: MineCoinComponent;
  let fixture: ComponentFixture<MineCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
