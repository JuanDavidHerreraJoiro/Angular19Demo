import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListOrganismComponent } from './notification-list-organism.component';

describe('NotificationListOrganismComponent', () => {
  let component: NotificationListOrganismComponent;
  let fixture: ComponentFixture<NotificationListOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationListOrganismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationListOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
