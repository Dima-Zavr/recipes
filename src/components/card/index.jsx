import styles from './styles.module.css'

export function Card({ recipe }) {
    return(
        <div className={styles.card}>
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
