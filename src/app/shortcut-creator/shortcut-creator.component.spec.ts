import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutCreatorComponent } from './shortcut-creator.component';

describe('ShortcutCreatorComponent', () => {
  let component: ShortcutCreatorComponent;
  let fixture: ComponentFixture<ShortcutCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
