import test from 'tape';
import React from 'react/addons';
import Index from '../../src/components/Index';

const TestUtils = React.addons.TestUtils;

const createComponent = (component, props, ...children) => {
  const shallowRenderer = TestUtils.createRenderer();
  const reactElement = React.createElement(
    component,
    props,
    children.length > 1 ? children : children[0]
  );

  shallowRenderer.render(reactElement);
  return shallowRenderer.getRenderOutput();
};
test('index component type', t => {
  t.equal(createComponent(Index).type, 'div');
  t.end();
});
// test('hello component type', t => {
//   t.equal(createComponent(Hello).type, 'h1');
//   t.end();
// });

// test('hello component text', t => {
//   t.equal(createComponent(Hello).props.children, 'Hello World');
//   t.end();
// });

// test('promise error', () => {
//   return Promise.resolve().then(() => {
//     throw new Error('Promise failing intentionally!');
//   });
// });
