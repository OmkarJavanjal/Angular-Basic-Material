import { TestBed, inject } from '@angular/core/testing';
import { CarouselserviceService } from './carouselservice.service';

describe('CarouselserviceService', () => {
  let subject: CarouselserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselserviceService]
    });
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
          CarouselserviceService
        ]
    });
});
beforeEach(inject([CarouselserviceService], (carouselserviceService: CarouselserviceService) => {
    subject = carouselserviceService;
}));

  it('should be created',() => {
    expect(subject).toBeTruthy();
  });
  it('should getSliderName call', () => {
    subject.getSliderName();
});
});
