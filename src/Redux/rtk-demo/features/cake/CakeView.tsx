import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export default function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(ordered())}>order cake</button>
        <button onClick={()=> dispatch(restocked(22))}>restock cakes</button>
    </div>
  )
}
