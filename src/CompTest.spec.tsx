// CompTest.spec.tsx
import React from 'react';
import renderer from 'react-test-renderer';

interface TestProps {
  title: string;
}

function Test(props: TestProps) {
    return (
        <div>
          <p>{props.title}</p>
        </div>
    )
}

it('renders correctly', () => {
  const tree = renderer
    .create(<Test title="Hello"></Test>)
    .toJSON();

  expect(tree).toMatchSnapshot();

});


it('renders correctly', () => {
  const tree = renderer
    .create(<Test title="React"></Test>)
    .toJSON();

  expect(tree).toMatchSnapshot();
  
});