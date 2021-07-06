import * as React from 'react';
import * as ReactDOM from 'react-dom';

class List extends React.Component<{greeting: string}, {count:number}> {
  state = {count: 0};
  render() {
      return (
          <div>
              <h2>{this.props.greeting}</h2>     
          </div>);
  }
}
ReactDOM.render(
  <List greeting="This is a list!"/>,
  document.getElementById('list')
);