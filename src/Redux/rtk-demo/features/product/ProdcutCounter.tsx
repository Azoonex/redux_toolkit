import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProdcut, incrementPorduct, productRemove } from "./productSlice";
import { useEffect } from "react";

export default function ProdcutCounter() {
    const products = useSelector((state) => state.prodcuts.initialValue);
    const dispatch = useDispatch();



    return (
        <div>
            {products}
            <Button onClick={()=> dispatch(addProdcut())}>
                decrementProduct
            </Button>
            <Button
            disabled={products === 0}
            onClick={()=> dispatch(incrementPorduct())}>
                incrementProdcut
            </Button>
        </div>
    )
}
