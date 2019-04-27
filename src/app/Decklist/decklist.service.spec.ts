import { TestBed } from '@angular/core/testing';

import { DecklistService } from './decklist.service';

describe('DecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecklistService = TestBed.get(DecklistService);
    expect(service).toBeTruthy();
  });
});
