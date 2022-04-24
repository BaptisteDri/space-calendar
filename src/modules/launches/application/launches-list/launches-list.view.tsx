import styles from "./launches-list.module.scss"
import { Launch } from "@/modules/launches/domain/launches"
import { Title } from "@/components/title/title"
import { LaunchCardContainer } from "@/modules/launches/application/launch-card/launch-card.container"
import { AnimatedIllustration } from "@/modules/launches/application/animated-illustration/animated-illustration"

interface Props {
	count: number
	launches: Launch[]
}

export const LaunchesListView = ({ count, launches }: Props) => {
	return (
		<div className={styles.container}>
			<Title>Upcoming launches ({count})</Title>
			<div className={styles.wrapper}>
				<div />
				<div className={styles.list}>
					{launches.map((launch) => (
						<LaunchCardContainer launch={launch} key={launch.id} />
					))}
				</div>
				<AnimatedIllustration />
			</div>
		</div>
	)
}
