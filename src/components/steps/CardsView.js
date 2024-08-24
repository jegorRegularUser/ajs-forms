import "../../App.css";
import ShopItem from "./ShopItem";

function CardsView({ items, format }) {
  const list = items.map((el, index) => (
    <ShopItem el={el} format={format} key={index} />
  ));
  return (
    <div className={format === "list" ? "cards-list" : "cards-modules"}>
      {list}
    </div>
  );
}

export default CardsView;
