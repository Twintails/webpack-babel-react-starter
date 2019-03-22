import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { items: state.items }
};

const ConnectedItems = ({ items }) => (
  <ul className="list-group list-group-flush col-md-4 offset-md-1">
    {items.map(item => (
      <li className="list-group-item bg-light" key={item.id}>
        {item.title}
      </li>
    ))}
  </ul>
);

const Items = connect(mapStateToProps)(ConnectedItems);
export { Items };
