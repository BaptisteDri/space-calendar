import { Label } from "@/components/label/label"
import { Subtitle } from "@/components/subtitle/subtitle"

interface Props {
	title: string
	agency: string
}

export const LaunchCardView = ({ title, agency }: Props) => {
	return (
		<div>
			<Subtitle>{title}</Subtitle>
			<Label>{agency}</Label>
		</div>
	)
}
