import { TestBed } from '@angular/core/testing';

import { EstabelecimentoService } from './estabelecimento.service';

describe('EstabelecimentoServiceService', () => {
  let service: EstabelecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstabelecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
