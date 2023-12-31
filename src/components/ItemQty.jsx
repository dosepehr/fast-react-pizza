import { updateQty, deleteItem } from "../redux/reducers/cartSlice";
import Button from "./Button";
import { useDispatch } from "react-redux";

const ItemQty = ({ id, currentQty }) => {
  const dispatch = useDispatch();
  const handleItemChange = (id, changedAmount) => {
    dispatch(updateQty({ id, changedAmount }));
  };
  const handledeleteItem = () => {
    dispatch(deleteItem({ id }));
  };
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => handleItemChange(id, -1)}>
        -
      </Button>
      <span>{currentQty}</span>
      <Button type="round" onClick={() => handleItemChange(id, 1)}>
        +
      </Button>
      <div className="ml-4">
        <Button type="small" onClick={handledeleteItem}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemQty;
