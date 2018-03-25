export class Task {
  category: string = '';
  segments: [{
    start: Date;
    end: Date;
    color: string;
    task: string;
  }]

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
