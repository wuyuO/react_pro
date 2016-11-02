import React from 'react';
import Count from './count';

function Welcome(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-focus.md
    <h1 aria-hidden onClick={handleClick}>
      <Count />
      Click me, {props.name}
    </h1>
  );
}

Welcome.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Welcome;
