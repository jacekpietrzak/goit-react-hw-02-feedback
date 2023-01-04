import { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Section;
