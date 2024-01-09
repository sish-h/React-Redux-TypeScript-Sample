enum Unit {
  None = 0,
  Each = 1,
  M2 = 2,
  WxD = 4,
  DxH = 8,
  WxH = 16,
}

interface IItem {
  id: string;
  enabled: boolean;
  type: string;
  width: number;
  height: number;
  unit: Unit;
  rate: number;
  matchSize: boolean;
  group: string;
  description: string;
  summary: string;
  order: number;
}

type ItemState = {
  Items: IItem[];
};

type ItemAction = {
  type: string;
  Item: IItem;
};

type InitAction = {
  type: string;
};

type DispatchType = (args: ItemAction | InitAction) => ItemAction | InitAction;
