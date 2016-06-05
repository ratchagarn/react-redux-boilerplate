/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Example
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ExampleAction from './ExampleAction';

// component style
import './Example.scss';

/**
 * --------------------------------------------------------
 * Base component
 * --------------------------------------------------------
 */
class Example extends Component {

  constructor() {
    super();

    // bind context to custom property.
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  /**
   * Component view
   * --------------------------------------------------------
   */
  render() {
    const { exampleList } = this.props._stores;

    return (
      <div className="comp-example">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="input-text" ref="inputText" />
          <button className="button-add">Add</button>
        </form>
        <p>Total list: {exampleList.length}</p>
        <ul className="list">
          {
            exampleList.map((item, i) => {
              const key = `example-list-item-${i}`;
              return <li key={key}
                         onClick={() => {
                           this.handleRemoveItem(item.id);
                         }}>{item.text}</li>;
            })
          }
        </ul>
      </div>
    );
  }

  /**
   * Hanlder when `add` button was clicked.
   * --------------------------------------------------------
   */
  handleSubmit(e) {
    e.preventDefault();
    const text = this.refs.inputText.value.trim();
    this.refs.inputText.value = '';
    if (text !== '') {
      this.props._actions.addList(text.trim());
    }
    else {
      alert('You must fill something');
    }
  }

  /**
   * Hanlder when list item was clicked.
   * --------------------------------------------------------
   * @param {Number}  List `ID` for delete.
   */
  handleRemoveItem(id) {
    this.props._actions.removeList(id);
  }

};

/**
 * --------------------------------------------------------
 * Connect redux things to component
 * --------------------------------------------------------
 */

function mapStateToProps(state) {
  return {
    _stores: {
      exampleList: state.ExampleReducer,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _actions: {
      addList: (text) => {
        dispatch( ExampleAction.add(text) );
      },
      removeList: (id) => {
        dispatch( ExampleAction.remove(id) );
      },
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
