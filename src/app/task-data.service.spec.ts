/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {Task} from './task';
import {TaskDataService} from './task-data.service';

describe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDataService]
    });
  });

  it('should ...', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTasks()', () => {

    it('should return an empty array by default', inject([TaskDataService], (service: TaskDataService) => {
      expect(service.getAllTasks()).toEqual([]);
    }));

  });

});
