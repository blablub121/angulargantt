import {Task} from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let task = new Task({
      category: 'Room #1'
    });
    expect(task.category).toEqual('Room #1');
  });
});
