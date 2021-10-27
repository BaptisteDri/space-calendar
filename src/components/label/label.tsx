import styles from "./label.module.scss"

interface Props {
	children: React.ReactNode
}

export const Label = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>
}
