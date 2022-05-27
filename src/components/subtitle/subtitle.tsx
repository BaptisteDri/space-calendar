import { LazyLoader } from "../lazy-loader/lazy-loader"
import styles from "./subtitle.module.scss"

interface Props {
	children: React.ReactNode
}

export const Subtitle = ({ children }: Props) => {
	return children ? (
		<div className={styles.container}>{children}</div>
	) : (
		<LazyLoader height={22} width={"50%"} />
	)
}
