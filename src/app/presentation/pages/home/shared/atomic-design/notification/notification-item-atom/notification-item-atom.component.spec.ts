import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationItemAtomComponent } from './notification-item-atom.component';

describe('NotificationItemAtomComponent', () => {
  let component: NotificationItemAtomComponent;
  let fixture: ComponentFixture<NotificationItemAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationItemAtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationItemAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
