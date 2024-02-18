import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import  logo  from '../../assets/logo.svg'
import styled from 'styled-components'

const MyLink = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
    text-align:center;
    color:#000000;
    padding:10px;
    &:hover{
        color:#82bd69;
    }
`

export const PageHeader = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <img className={styles.img} src={logo} alt="website logo" />
            <div className={styles.links}>
                <Link to=""><MyLink>Все рецепты</MyLink></Link>
                <Link to="myRecipes"><MyLink>Мои рецепты</MyLink></Link>
                <Link to="favouriteRecipes"><MyLink>Избранные рецепты</MyLink></Link>
            </div>
            <img className={styles.img} src={logo} alt="website logo"/>
        </div>
    </header>
  );
}

