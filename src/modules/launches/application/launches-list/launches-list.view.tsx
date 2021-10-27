import styles from "./launches-list.module.scss"
import { Launch } from "@/modules/launches/domain/launches"
import { Title } from "@/components/title/title"

interface Props {
	count: number
	launches: Launch[]
}

export const LaunchesListView = ({ count, launches }: Props) => {
	return (
		<div className={styles.container}>
			<Title>Upcomings</Title>
			<div></div>
		</div>
	)
}
