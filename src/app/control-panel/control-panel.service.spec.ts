import { TestBed, inject } from '@angular/core/testing';

import { ControlPanelService } from './control-panel.service';

describe('ControlPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlPanelService]
    });
  });

  it('should ...', inject([ControlPanelService], (service: ControlPanelService) => {
    expect(service).toBeTruthy();
  }));
});
