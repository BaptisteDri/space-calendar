import { LaunchCardView } from "./launch-card.view"
import { Launch } from "@/modules/launches/domain/launches"

interface Props {
	launch: Launch
}

export const LaunchCardContainer = ({ launch }: Props) => {
	const { id, name } = launch

	return (
		<div key={id}>
			<LaunchCardView title={"Falcon Heavy"} agency={"spacex"} />
		</div>
	)
}
