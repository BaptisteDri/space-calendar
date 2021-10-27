import styles from "./launch-card.module.scss"
import { Label } from "@/components/label/label"
import { Subtitle } from "@/components/subtitle/subtitle"
import { CooldownContainer } from "../cooldown/cooldown.container"
import { CardThumbnail } from "../card-thumbnail/card-thumbnail"

interface Props {
	title: string
	agency: string
}

export const LaunchCardView = ({ title, agency }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Subtitle>{title}</Subtitle>
				<Label>{agency}</Label>
			</div>
			<CardThumbnail />
			<CooldownContainer />
		</div>
	)
}