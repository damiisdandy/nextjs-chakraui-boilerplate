import { initialState } from './index';

type Reducer = (state: Store, action: Action) => Store;

const reducer: Reducer = (state, action) => {
  const rawLocalData = localStorage.getItem("contextPersist");
  const localData = JSON.parse(
    rawLocalData ? rawLocalData : JSON.stringify(state)
  );
  let returnValue: Store = { ...localData };
  switch (action.type) {
    case "LOGIN":
      returnValue = { ...returnValue, ...action.payload };
      break;
    case "LOGOUT":
      returnValue = {
        ...initialState,
      };
      break;
    default:
      returnValue = { ...returnValue };
      break;
  }
  localStorage.setItem("contextPersist", JSON.stringify(returnValue));
  return returnValue;
};

export default reducer;
