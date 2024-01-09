import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { initItem } from "../store/actionCreators";

import "../styles.css";

import { Item } from "../components/Item";
import { removeItem } from "../store/actionCreators";

const List: React.FC = () => {
  const items: readonly IItem[] = useSelector(
    (state: ItemState) => state.Items,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const remove = React.useCallback(
    (Item: IItem) => dispatch(removeItem(Item)),
    [dispatch]
  );

  useEffect(() => {
    // Initialize the Items data from localStorage. If the localStorage data doesn't exist, the default data will be filled.
    dispatch(initItem())
  }, [dispatch]);

  return (
    <main>
      <h1><Link to="/">My Dashboard</Link></h1>
      {items.map((item: IItem) => (
        <Item
          key={item.id}
          item={item}
          removeItem={remove}
        />
      ))}
    </main>
  );
};

export default List;
