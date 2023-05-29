import { useShop } from "@/app/context/ShoppingCart";

const Boton_comprar = ({ item }) => {
  const { addToCart } = useShop();
  class producto_c {
    constructor(id, producto, unidades) {
      this.id = id;
      this.producto = producto;
      this.unidades = unidades;
    }
  }
  var producto = new producto_c(item.id, item, 1);
  return (
    <button
      className="btn btn-ghost h-10 px-6 font-semibold rounded-md border border-slate-200  text-slate-50"
      type="button"
      onClick={() => {
        addToCart(producto);
      }}
    >
      Add to bag
    </button>
  );
};

export default Boton_comprar;
