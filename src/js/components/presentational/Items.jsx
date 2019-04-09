import React from "react"
import { connect } from "react-redux"

import { removeItemRequest, removeItemResolve } from "Actions";
import { waitASecond } from "App/utils";

const mapDispatchToProps = dispatch => ({
    removeItemRequest: itemID => dispatch(removeItemRequest(itemID)),
    removeItemResolve: itemID => dispatch(removeItemResolve(itemID)),
});
const mapStateToProps = state => ({ items: state.items, loading: state.loading })

const ConnectedItems = ({ loading, items, removeItemRequest, removeItemResolve }) => {
    const onClickHandler = (item) => {
        removeItemRequest(item.id);
        waitASecond(item.id).then(response => removeItemResolve(response));
    };
    return <ul className="list-group list-group-flush col-md-4 offset-md-1">
        {items.map(item => (
            <li className="list-group-item bg-light" key={item.id}>
                {item.title}
                <button
                    type="button"
                    className="close"
                    onClick={onClickHandler.bind(null, item)}
                    aria-label="Close"
                    disabled={loading}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        ))}
    </ul>
};

const Items = connect(mapStateToProps, mapDispatchToProps)(ConnectedItems);
export { Items };
