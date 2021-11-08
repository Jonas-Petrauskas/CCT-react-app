export type ListItemProps = {
  listData: ListData;
  listNumber: number;
  open: boolean;
  setOpen: (val: Function) => void;
};

type Items = {
  text: string;
  email?: string;
}[];

type ListData = {
  title: string;
  items: Items;
};
