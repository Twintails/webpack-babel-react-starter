import React from "react"
import { connect } from "react-redux"

import { removeItem } from "Actions"

const mapDispatchToProps = dispatch => ({removeItem: itemID => dispatch(removeItem(itemID))})
const mapStateToProps = state => ({ items: state.items })

const ConnectedItems = ({ items, removeItem }) => (
  <ul className="list-group list-group-flush col-md-4 offset-md-1">
    {items.map(item => (
      <li className="list-group-item bg-light" key={item.id}>
        {item.title}
        <button
          type="button"
          className="close"
          onClick={() => {removeItem(item.id)}}
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    ))}
  </ul>
);

const Items = connect(mapStateToProps, mapDispatchToProps)(ConnectedItems);
export { Items };
