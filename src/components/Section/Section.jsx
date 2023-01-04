import { Component } from 'react';

class Section extends Component {
  render() {
    console.log('props from section: ', this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Section;
