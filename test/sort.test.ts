import prioritySort from '../src';
import actorsDataset from './datasets/small-actors.json';

const testArr = [
  {firstName: 'Darnley', lastName: 'Costa', country: 'Brazil'},
  {firstName: 'Thais', lastName: 'Amancio', country: 'Italy'},
  {firstName: 'Maria', lastName: 'Santana', country: 'USA'},
  {firstName: 'Thais', lastName: 'Quiele', country: 'Italy'},
];

describe('prioritySort', () => {
  it('should return an sorted array by passed priority', () => {
    expect(testArr.sort(prioritySort('firstName lastName'))).toStrictEqual([
      {firstName: 'Darnley', lastName: 'Costa', country: 'Brazil'},
      {firstName: 'Maria', lastName: 'Santana', country: 'USA'},
      {firstName: 'Thais', lastName: 'Amancio', country: 'Italy'},
      {firstName: 'Thais', lastName: 'Quiele', country: 'Italy'},
    ]);
  });

  it('should return an sorted array in descendent priority', () => {
    expect(
      testArr.sort(prioritySort('firstName lastName', 'desc'))
    ).toStrictEqual([
      {firstName: 'Thais', lastName: 'Quiele', country: 'Italy'},
      {firstName: 'Thais', lastName: 'Amancio', country: 'Italy'},
      {firstName: 'Maria', lastName: 'Santana', country: 'USA'},
      {firstName: 'Darnley', lastName: 'Costa', country: 'Brazil'},
    ]);
  });

  it('should not spent more than 500ms in a small dataset', async done => {
    expect(actorsDataset.sort(prioritySort('name rating', 'asc'))).toBeTruthy();
    done();
  }, 500);
});
