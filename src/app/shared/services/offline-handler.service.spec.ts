import { TestBed } from '@angular/core/testing';

import { OfflineHandlerService } from './offline-handler.service';

describe('OfflineHandlerService', () => {
  let service: OfflineHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should track online status', (done) => {
    service.getOnlineStatus().subscribe(isOnline => {
      expect(typeof isOnline).toBe('boolean');
      done();
    });
  });

  it('should provide current online status', () => {
    const status = service.isOnline();
    expect(typeof status).toBe('boolean');
  });
});
