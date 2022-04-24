import { CooldownView } from "./couldown.view"

interface Props {
	date: string
}

export const CooldownContainer = ({ date }: Props) => {
	return <CooldownView date={date} />
}
