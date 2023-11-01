import { TestBed } from '@angular/core/testing';

import { EventEmitterServiceService } from './event-emitter-service.service';

describe('EventEmitterServiceService', () => {
  let service: EventEmitterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
