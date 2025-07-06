import styles from "./styles.module.css"

export default function Card({ title, poster }) {
  return (
    <div className={styles.container}>
      <img src={poster} alt={title} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}></p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}