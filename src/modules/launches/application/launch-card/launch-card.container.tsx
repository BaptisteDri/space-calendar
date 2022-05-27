import { LaunchCardView } from "./launch-card.view"
import { Launch } from "@/modules/launches/domain/launches"

interface Props {
	launch?: Launch
}

export const LaunchCardContainer = ({ launch }: Props) => {
	if (!launch) return <LaunchCardView />

	const { name, launch_service_provider, image, net } = launch

	return (
		<LaunchCardView
			title={name}
			agency={launch_service_provider.name}
			img={image}
			net={net}
		/>
	)
}
