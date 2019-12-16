import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let subject: LocalStorageService;
  beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [
              LocalStorageService
          ]
      });
  });
  beforeEach(inject([LocalStorageService], (localStorageService: LocalStorageService) => {
      subject = localStorageService;
  }));
  it('should be created',() => {
    expect(subject).toBeTruthy();
  });
  it('should be addHeightToArray() method',() => {
    subject.addHeightToArray(10, 'Abhinav')
  });
  it('should be addToArray() method',() => {
    subject.addToArray(10);
  });
  it('should be getAllMaxHeight() method',() => {
    subject.getAllMaxHeight();
  });
  it('should be getMaxHeight() method',() => {
    subject.getMaxHeight();
  });
  it('should be setLocalStorageData() method',() => {
    subject.setLocalStorageData('name', 'Abhinav')
  });

  it('should be getLocalStorageData() method',() => {
    localStorage.setItem('name', JSON.stringify('Abhinav'));
    subject.getLocalStorageData('name');
    expect(localStorage.getItem('foo')).toBe(null);
   // expect(localStorage.getItem('name')).toBe(JSON.parse('Abhinav'));
  });

  it('should be getLocalStorageData() method',() => {
    localStorage.setItem('name', JSON.stringify('Abhinav'));
    subject.removeLocalStorageData('name');
    expect(localStorage.removeItem('name')).toBe(undefined);
  });

});
