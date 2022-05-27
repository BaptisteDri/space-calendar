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
			<Title>Upcoming launches {count ? `(${count})` : ``}</Title>
			<div className={styles.wrapper}>
				<div className={styles.list}>
					{launches.length > 0
						? launches.map((launch) => (
								<LaunchCardContainer
									launch={launch}
									key={launch.id}
								/>
						  ))
						: [...Array(10)].map((u, i) => (
								<LaunchCardContainer key={i} />
						  ))}
				</div>
				<AnimatedIllustration />
			</div>
		</div>
	)
}
