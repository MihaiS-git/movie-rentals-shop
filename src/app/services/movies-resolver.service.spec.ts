import { TestBed } from '@angular/core/testing';

import { MoviesResolverService } from './movies-resolver.service';

describe('MoviesResolverService', () => {
  let service: MoviesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
