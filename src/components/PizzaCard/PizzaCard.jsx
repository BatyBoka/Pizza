import Button from '../button/Button'
import css from './PizzaCard.module.css'

function PizzaCard({ name, img, description, price}) {
  return (
    <div className={css.wrapper}>
        <div>
            <img src={img} alt={name} />
        </div>
        <div className={css.name}>{name}</div>
        <p className={css.description}>{description}</p>
        <div className={css.footer}>
            <div className={css.price}>от {price} сом</div>
            <Button title={'В корзину'}/>
        </div>
    </div>
  )
}

export default PizzaCard












