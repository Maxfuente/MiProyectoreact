import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
const NavBar = () => {
    return (
        <nav>
            <h2>ElectroMax</h2>
            <div>
                <button>Discos SSD</button>
                <button>Memorias Ram</button>
                <button>Teclados</button>
            </div>
            <CartWidget/>
            <ItemListContainer/>
        </nav>
    )
}
export default NavBar