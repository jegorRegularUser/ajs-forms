import "../../App.css";

function ShopItem({ el, format }) {
  const item =
    format === "list" ? (
      <div className="card">
        <img src={el.img} alt="." />
        <span className='name'>{el.name}</span>
        <span>{el.color}</span>
        <span className="colored">${el.price}</span>
        <button>add to cart</button>
      </div>
    ) : (
      <div className="card">
        <span className='name'>{el.name}</span>
        <span>{el.color}</span>
        <img src={el.img} alt="." />
        <div className="colored">
          <span>${el.price}</span>
          <button>add to cart</button>
        </div>
      </div>
    );

  return item ;
}

export default ShopItem;
