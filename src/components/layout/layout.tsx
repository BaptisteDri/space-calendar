import styles from "./layout.module.scss"

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	return <div className={styles.layout}>{children}</div>
}
