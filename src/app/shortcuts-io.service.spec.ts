import { TestBed, inject } from '@angular/core/testing';

import { ShortcutsIOService } from './shortcuts-io.service';

describe('ShortcutsIOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortcutsIOService]
    });
  });

  it('should ...', inject([ShortcutsIOService], (service: ShortcutsIOService) => {
    expect(service).toBeTruthy();
  }));
});
