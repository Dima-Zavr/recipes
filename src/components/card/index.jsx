import styles from './styles.module.css'
import { useNavigate } from "react-router-dom"

export function Card({ recipe }) {
    const nav = useNavigate()

    const recipePage = () => {
        nav("/recipe/" + recipe.id, { replace: false })
    }

    return(
        <div className={styles.card} onClick={recipePage}>
            <div className={styles.picture}>
                <img className={styles.img} src={recipe.photos[0]} alt={"фото " + recipe.name} />
                <div className={styles.inf}>
                    <p className={styles.time}> {recipe.cooking_time} минут</p>
                    <p className={styles.calor}>{recipe.calories} ккал</p>
                </div>
            </div>
            <p className={styles.title}>{recipe.name}</p>
        </div>
    )
}
