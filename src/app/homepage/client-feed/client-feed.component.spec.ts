import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeedComponent } from './client-feed.component';

describe('ClientFeedComponent', () => {
  let component: ClientFeedComponent;
  let fixture: ComponentFixture<ClientFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ClientFeedComponent]
});
    fixture = TestBed.createComponent(ClientFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
