import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutDetailsComponent } from './shortcut-details.component';

describe('ShortcutDetailsComponent', () => {
  let component: ShortcutDetailsComponent;
  let fixture: ComponentFixture<ShortcutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
