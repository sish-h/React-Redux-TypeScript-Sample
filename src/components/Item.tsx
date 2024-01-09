import * as React from "react";
import { Link } from 'react-router-dom';

type Props = {
  item: IItem;
  removeItem: (Item: IItem | any) => void;
};

export const Item: React.FC<Props> = ({ item, removeItem }) => {
  return (
    <div className="item">
      <div>
        <h1>{item.type}</h1>
        <p>{item.description}</p>
        <h4>{item.group}</h4>
      </div>
      <div className="flex">
        <Link to={`edit/${item.id}`}>Edit</Link>
        <button onClick={() => removeItem(item)} >
          Remove
        </button>
      </div>

    </div>
  );
};
