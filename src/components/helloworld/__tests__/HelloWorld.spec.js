import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from '../HelloWorld';

test('it works', () => {
  const tree = renderer.create(<HelloWorld />).toJSON();
  expect(tree).toMatchSnapshot();
});
