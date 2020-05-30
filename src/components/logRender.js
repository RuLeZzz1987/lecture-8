import React from 'react';

export default (Component) => (props) => {
  console.log(`@render: ${Component.name}`);
  return (<Component {...props} />)
}