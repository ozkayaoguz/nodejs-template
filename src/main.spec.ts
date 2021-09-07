import { Main } from './main';

describe('main', () => {
  let main: Main;

  beforeAll(() => {
    main = new Main();
  });

  it('can add two numbers', () => {
    const result = main.add(3, 5);
    expect(result).toEqual(8);
  });
});
