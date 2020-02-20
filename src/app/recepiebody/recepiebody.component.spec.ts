import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiebodyComponent } from './recepiebody.component';

describe('RecepiebodyComponent', () => {
  let component: RecepiebodyComponent;
  let fixture: ComponentFixture<RecepiebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepiebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
