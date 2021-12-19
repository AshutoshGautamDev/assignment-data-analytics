import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { RootReducer } from "./reducers/index";
import { rootSaga } from "./saga/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  persistedStore,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
