import styles from "./subtitle.module.scss"

interface Props {
	children: React.ReactNode
}

export const Subtitle = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>
}
