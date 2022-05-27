import { LazyLoader } from "@/components/lazy-loader/lazy-loader"
import styles from "./card-thumbnail.module.scss"

interface Props {
	src?: string
	alt?: string
}

export const CardThumbnail = ({ src, alt }: Props) => {
	return (
		<div className={styles.container}>
			{src ? (
				<img className={styles.img} src={src} alt={alt} />
			) : (
				<LazyLoader height={"100%"} width={"100%"} />
			)}
		</div>
	)
}
