import styles from "./card-thumbnail.module.scss"

interface Props {
	src: string
	alt: string
}

export const CardThumbnail = ({ src, alt }: Props) => {
	return (
		<div className={styles.container}>
			<img className={styles.img} src={src} alt={alt} />
		</div>
	)
}
