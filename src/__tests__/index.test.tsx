import Animate from '..';

describe('react-smooth-animations', () => {
  afterAll(() => {});

  it('exports module correctly', () => {
    expect(Object.keys(Animate)).toMatchSnapshot();
  });
});
