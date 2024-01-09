import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "../styles.css";

import { EditItem } from "../components/EditItem";
import { editItem } from "../store/actionCreators";
import { Dispatch } from "redux";
import { Link } from 'react-router-dom';

const Edit: React.FC = () => {
  const items: readonly IItem[] = useSelector(
    (state: ItemState) => state.Items,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const { id } = useParams();

  const edit = React.useCallback(
    (Item: IItem) => dispatch(editItem(Item)),
    [dispatch]
  );

  const getItem = (id: string) => {
    // Get the item from Redux Items data with id param.
    let ret: IItem = items[0];
    items.map((item: IItem) => {
      if (item.id === id) {
        ret = item;
      }
      return true;
    })
    return ret;
  }

  return (
    <main>
      <h1><Link to="/">My Dashboard</Link></h1>
      <EditItem item={getItem(id === undefined ? "" : id)} editItem={edit} />
    </main>
  );
};

export default Edit;
