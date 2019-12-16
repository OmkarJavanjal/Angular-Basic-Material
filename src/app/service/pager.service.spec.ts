import { TestBed, inject } from '@angular/core/testing';

import { PagerService } from './pager.service';

describe('PagerService', () => {
    let subject: PagerService;
    let startPage: number, endPage: number;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PagerService]
        });
    });
    beforeEach(inject([PagerService], (pagerService: PagerService) => {
        subject = pagerService;
    }));
    it('should be created', () => {
        expect(subject).toBeTruthy();
    });
    it('should return it\'s horsepower', () => {
        expect(subject.getHorsepower()).toEqual(150);
    });
    it('should return it\'s name', () => {
        expect(subject.getName()).toEqual('Basic engine');
    });
    it('should call getPager method with total pages less than 10', () => {
        let totalItems = 110;
        let currentPage = 1;
        let pageSize = 55;

        let returnObj = subject.getPager(totalItems, currentPage, pageSize);

        expect(returnObj.totalPages).toEqual(2);
    });
    it('should call getPager method with total pages greater than 10', () => {
        let totalItems = 120;
        let currentPage = 1;
        let pageSize = 10;
        
        let returnObj = subject.getPager(totalItems, currentPage, pageSize);
        expect(returnObj.totalPages).toEqual(12);
    });
    it('should call getPager with current page as 9', () => {
        let totalItems = 120;
        let currentPage = 9;
        let pageSize = 10;
        
        let returnObj = subject.getPager(totalItems, currentPage, pageSize);
        expect(returnObj.startPage).toEqual(3);
    });
    it('should call getPager with current page as 7', () => {
        let totalItems = 120;
        let currentPage = 7;
        let pageSize = 10;
        
        let returnObj = subject.getPager(totalItems, currentPage, pageSize);
        expect(returnObj.startPage).toEqual(2);
    });
});