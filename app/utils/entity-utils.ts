import _ from 'lodash';

export const mostFrequent = (arr: number[]) => {
  const freq = _.countBy(arr);
  return Number(_.maxBy(Object.keys(freq), (o) => freq[o]));
};
