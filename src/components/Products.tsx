import ProductTypeProps from '../type/type';

const Products: React.FC<ProductTypeProps>=({title,id})=> {
    const submitHandler = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
       console.log(event);
       ('reza');
    }
  return (
      <div>
          <h2 className="h2main text-5xl bg-red-500">
              {id}: {title}
          </h2>
          <button onClick={submitHandler}>clickied</button>
          <img src={svgre} alt="" />
          <h1 className="btn-blue">hellow wrold</h1>
      </div>
  );
}

export default Products