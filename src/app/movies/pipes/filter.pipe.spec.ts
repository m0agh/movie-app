import { FilterPipe } from './filter.pipe';
import { movieOne, movieTwo } from './SampleDataForTest';

describe('FilterPipe', () => {
  it('should filter the array by Name: Gridiron Gang', () => {
    const pipe = new FilterPipe();

    expect(pipe.transform([movieOne, movieTwo], 'Gridiron Gang'))
      .toEqual([movieTwo]);
  });
});
