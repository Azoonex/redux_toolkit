import { useSelector,useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
export default function IcecreameView() {

  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();


  return (
      <div>
          <h2>Number of ice creams - {numOfIcecreams}</h2>
          <button onClick={()=> dispatch(ordered())}>order ice creams</button>
          <button onClick={()=> dispatch(restocked(2))}>restock ice creams</button>
      </div>
  )
}
