import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <div className={css.section}>
        <h2 className={css.h2}>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
