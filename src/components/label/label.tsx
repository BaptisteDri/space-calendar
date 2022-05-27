import { LazyLoader } from "../lazy-loader/lazy-loader"
import styles from "./label.module.scss"

interface Props {
	children: React.ReactNode
}

export const Label = ({ children }: Props) => {
	return children ? (
		<div className={styles.container}>{children}</div>
	) : (
		<LazyLoader height={12} width={"30%"} />
	)
}
