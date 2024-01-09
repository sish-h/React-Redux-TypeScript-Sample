import * as actionTypes from "./actionTypes";

export function editItem(Item: IItem) {
  const action: ItemAction = {
    type: actionTypes.EDIT_ITEM,
    Item,
  };

  return simulateHttpRequest(action);
}

export function removeItem(Item: IItem) {
  const action: ItemAction = {
    type: actionTypes.REMOVE_ITEM,
    Item,
  };
  return simulateHttpRequest(action);
}

export function initItem() {
  const action: InitAction = {
    type: actionTypes.INIT_ITEM,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ItemAction | InitAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
