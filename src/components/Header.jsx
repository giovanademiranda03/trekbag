import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "../assets/logo.svg"

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
     <img src={Logo} alt="Logo" /> 
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
