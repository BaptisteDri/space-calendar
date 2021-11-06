import styles from "./launches-list.module.scss"
import { Launch } from "@/modules/launches/domain/launches"
import { Title } from "@/components/title/title"
import { LaunchCardContainer } from "../launch-card/launch-card.container"
import { AnimatedIllustration } from "../animated-illustration/animated-illustration"

interface Props {
	count: number
	launches: Launch[]
}

export const LaunchesListView = ({ count, launches }: Props) => {
	return (
		<div className={styles.container}>
			<Title>Upcomings ({count})</Title>
			<div className={styles.wrapper}>
				<div />
				<div className={styles.list}>
					{launches.map((launch) => (
						<LaunchCardContainer launch={launch} />
					))}
				</div>
				<AnimatedIllustration />
			</div>
		</div>
	)
}
