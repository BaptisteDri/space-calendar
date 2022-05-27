import { useState, useEffect } from "react"
import {
	formatDateString,
	formatDistanceToNow,
	getDateIntervalToNow,
} from "@/utils/dates"
import { CooldownView } from "./couldown.view"

interface Props {
	net?: string
}

export const CooldownContainer = ({ net }: Props) => {
	if (!net) return <CooldownView />

	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [mins, setMins] = useState(0)
	const [secs, setSecs] = useState(0)

	const updateTimer = () => {
		const x = setInterval(() => {
			const secs = formatDistanceToNow({ date: net, unit: "second" })

			if (secs > 0) {
				setDays(getDateIntervalToNow(net).days ?? 0)
				setHours(getDateIntervalToNow(net).hours ?? 0)
				setMins(getDateIntervalToNow(net).minutes ?? 0)
				setSecs(getDateIntervalToNow(net).seconds ?? 0)
			} else {
				clearInterval(x)
			}
		}, 1000)
	}

	useEffect(() => {
		updateTimer()
	})

	return (
		<CooldownView
			date={formatDateString({ date: net })}
			days={days}
			hours={hours}
			mins={mins}
			secs={secs}
		/>
	)
}
