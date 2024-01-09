import * as React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

type Props = {
  item: IItem,
  editItem: (Item: IItem | any) => void;
};

export const EditItem: React.FC<Props> = ({ item, editItem }) => {
  const [Item, setItem] = React.useState<IItem>(item);
  const [changed, setChanged] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleItemData = (e: React.FormEvent<HTMLInputElement>) => {
    // Update Item state variable from the every input components
    if (e.currentTarget.id === "enabled") {
      setItem({
        ...Item,
        [e.currentTarget.id]: e.currentTarget.checked
      });
    } else {
      setItem({
        ...Item,
        [e.currentTarget.id]: e.currentTarget.value
      });
    }
    setChanged(true)
  };

  const EditItem = (e: React.FormEvent) => {
    // Execute the editItem actiona and redirect to "/".
    e.preventDefault();
    if (changed) {
      editItem(Item);
      alert("Successfully updated!")
      navigate('/')
    }
  };

  return (
    <div className="edit-item">
      <div className="flex">
        <label>Id: </label>
        <input
          type="text"
          id="id"
          placeholder="Id"
          value={Item.id}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Enabled</label>
        <input type="checkbox" id="enabled" name="Enabled" className="checkbox" onChange={handleItemData} checked={Item.enabled} />
      </div>
      <div className="flex">
        <label>Type: </label>
        <input
          type="text"
          id="type"
          placeholder="type"
          value={Item.type}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Width: </label>
        <input
          type="number"
          id="width"
          placeholder="width"
          value={Item.width}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Height: </label>
        <input
          type="number"
          id="height"
          placeholder="height"
          value={Item.height}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Unit: </label>
        <select id="unit" name="unit" value={Item.unit} onChange={(e) => {
          setItem({
            ...Item,
            [e.target.id]: parseInt(e.target.value)
          });
        }}>
          <option value="0">None</option>
          <option value="1">Each</option>
          <option value="2">M2</option>
          <option value="4">WxD</option>
          <option value="8">DxH</option>
          <option value="16">WxH</option>
        </select>
      </div>
      <div className="flex">
        <label>Rate: </label>
        <input
          type="number"
          id="rate"
          placeholder="rate"
          value={Item.rate}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>MatchSize</label>
        <input type="checkbox" id="matchSize" className="checkbox" name="matchSize" onChange={handleItemData} checked={Item.matchSize} />
      </div>
      <div className="flex">
        <label>Group: </label>
        <input
          type="text"
          id="group"
          placeholder="group"
          value={Item.group}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Description: </label>
        <input
          type="text"
          id="description"
          placeholder="description"
          value={Item.description}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Summary: </label>
        <input
          type="text"
          id="summary"
          placeholder="summary"
          value={Item.summary}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <label>Order: </label>
        <input
          type="number"
          id="order"
          placeholder="order"
          value={Item.order}
          onChange={handleItemData}
        />
      </div>
      <div className="flex">
        <button onClick={EditItem} disabled={!changed}>
          Edit Item
        </button>
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};
