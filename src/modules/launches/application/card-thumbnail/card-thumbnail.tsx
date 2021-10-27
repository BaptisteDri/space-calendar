import styles from "./card-thumbnail.module.scss"

export const CardThumbnail = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.img}
				src="https://picsum.photos/800"
				alt=""
			/>
		</div>
	)
}
