import styles from "./cooldown.module.scss"

export const CooldownView = () => {
	return (
		<div className={styles.container}>
			<div className={styles.date}>28 OCT 2021, TUESDAY</div>
			<div className={styles.timer}>
				<div className={styles.item}>
					<span className={styles.value}>00</span>
					<span className={styles.label}>d</span>
				</div>
				<div className={styles.item}>
					<span className={styles.value}>00</span>
					<span className={styles.label}>h</span>
				</div>
				<div className={styles.item}>
					<span className={styles.value}>20</span>
					<span className={styles.label}>m</span>
				</div>
				<div className={styles.item}>
					<span className={styles.value}>12</span>
					<span className={styles.label}>s</span>
				</div>
			</div>
		</div>
	)
}