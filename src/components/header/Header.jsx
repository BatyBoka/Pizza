import css from "./Header.module.css"
import logo from '../../assets/logPizzas.jpg'
import Button from "../button/Button"
import star from '../../assets/free-icon-star-1828884.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className={css.wrapper + ' container'}>
        <header>
            <div className={css.upHeader}>
              <div className={css.imageHeader}>
              <Link to='/'/>
               <img width={250}  src={logo} alt="PIZA" />
              <Link/>
                <div className={css.dostavka}>
                  <p>Доставка пиццы Бишкек</p>
                  <p className={css.minutes}>33мин . 4.73 <img height={20} src={star} alt="" /></p>
                </div>
                <div>
                  <p>0(551)550-550</p>
                  <p className={css.phone}>Звонок по телефону</p>
                </div>
              </div>
              <div className={css.coins}>
                <span>D<br/>Додокоины</span>
                <button>Войти</button>
              </div>
            </div>
            <div className={css.bottomHeader}>
              <div>
              <Link to='/'><p>Пиццы</p></Link>
                <p>Комбо</p>
                <p>Закуски</p>
                <p>Десерты</p>
                <p>Напитки</p>
                <p>Другие товары</p>
                <p>Акции</p>
                <Link to='/contacts'><p>Контакты</p></Link>
                <p>О нас</p>
                <p>Прямой эфир</p>
              </div>
              <div>
              <nav>
                   <Button title={'Корзина'}/>
                </nav>
              </div>
            </div>
        </header>
        
    </div>
  )
}

export default Header