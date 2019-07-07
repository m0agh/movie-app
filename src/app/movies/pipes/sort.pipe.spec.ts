import { SortPipe } from './sort.pipe';
import { movieOne, movieTwo } from './SampleDataForTest';

describe('SortPipe', () => {
  it('should sort the array descending by id ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([movieOne, movieTwo], 'id'))
      .toEqual([movieTwo, movieOne]);
  });

  it('should sort the array descending by rate ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([movieTwo, movieOne], 'rate'))
      .toEqual([movieOne, movieTwo]);
  });
});
