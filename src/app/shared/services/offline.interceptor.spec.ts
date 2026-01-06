import { TestBed } from '@angular/core/testing';

import { OfflineInterceptor } from './offline.interceptor';
import { OfflineHandlerService } from './offline-handler.service';

describe('OfflineInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OfflineInterceptor,
        OfflineHandlerService
      ]
    });
  });

  it('should be created', () => {
    const interceptor: OfflineInterceptor = TestBed.inject(OfflineInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
