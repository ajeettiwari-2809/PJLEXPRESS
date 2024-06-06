import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayvedioComponent } from './playvedio.component';

describe('PlayvedioComponent', () => {
  let component: PlayvedioComponent;
  let fixture: ComponentFixture<PlayvedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayvedioComponent]
    });
    fixture = TestBed.createComponent(PlayvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
