import {compose,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';

export default initialState => {
    initialState = JSON.parse(window.localStorage.getItem('state'))|| initialState;
    // console.log(initialState)

    const middleware = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers,composeEnhancers(applyMiddleware(...middleware)))

    // store.subscribe(() => {
    //     const state = store.getState();
    //     const perList = {
    //         list: state.topList.data,
    //     }
    //     window.localStorage.setItem('state',JSON.stringify(perList));
    // }) //没必要设缓存，分页限制请求的数据量，每页十几条实时请求没负担
    return store;
}
