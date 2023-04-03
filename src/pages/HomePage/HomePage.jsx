import Slider from "../../components/slider/Slider"  
import css from './HomePage.module.css'
import PizzaCard from "../../components/PizzaCard/PizzaCard"
import { useState, useEffect } from "react"

// const pizzasArr = [
//     {
//         id: '2',
//         name: 'Пеперони',
//         description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
//         price: 580,
//         image: 'https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" '
//     },
//     {
//         id: '2',
//         name: 'Пеперони',
//         description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
//         price: 580,
//         image: 'https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" '
//     },
//     {
//         id: '2',
//         name: 'Пеперони',
//         description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
//         price: 580,
//         image: 'https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" '
//     },
//     {
//         id: '2',
//         name: 'Пеперони',
//         description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
//         price: 580,
//         image: 'https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" '
//     },  
    
// ]





function HomePage() {
    const [pizza, setPizza] = useState([])

    useEffect(() => {
        fetch('https://642a9ff800dfa3b5474a3d94.mockapi.io/foods/pizza')
        .then(response => response.json())
        .then(data => setPizza(data))
        .catch(error => console.error(error));
    }, []);
  return (
    <div>
        <Slider/>
        <br /><br /><br /><br />
        <section className="container">
            <div className="title">Пицца</div>
            <div className={css.pizzasWrapper}>
                {pizza.map((item) =>(
                    <PizzaCard key={item.id} {...item}/>
                ))}
            </div>
        </section>
    </div>
  )
}

export default HomePage