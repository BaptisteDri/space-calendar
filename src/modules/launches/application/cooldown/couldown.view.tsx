import { LazyLoader } from "@/components/lazy-loader/lazy-loader"
import styles from "./cooldown.module.scss"

interface Props {
	date?: string
	days?: number
	hours?: number
	mins?: number
	secs?: number
}

export const CooldownView = ({ date, days, hours, mins, secs }: Props) => (
	<div className={styles.container}>
		{date ? (
			<>
				<div className={styles.date}>{date}</div>
				<div className={styles.timer}>
					<div className={styles.item}>
						<span className={styles.value}>{days}</span>
						<span className={styles.label}>d</span>
					</div>
					<div className={styles.item}>
						<span className={styles.value}>{hours}</span>
						<span className={styles.label}>h</span>
					</div>
					<div className={styles.item}>
						<span className={styles.value}>{mins}</span>
						<span className={styles.label}>m</span>
					</div>
					<div className={styles.item}>
						<span className={styles.value}>{secs}</span>
						<span className={styles.label}>s</span>
					</div>
				</div>
			</>
		) : (
			<>
				<LazyLoader width={236} height={24} />
				<LazyLoader width={180} height={44} />
			</>
		)}
	</div>
)
