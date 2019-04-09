export const logger = store => dispatch => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = dispatch(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};
