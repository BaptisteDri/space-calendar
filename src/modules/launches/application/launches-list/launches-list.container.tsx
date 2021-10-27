import React, { useEffect, useState } from "react"
import { LaunchesListView } from "./launches-list.view"
import { getLaunches } from "@/modules/launches/domain/launches.action"
import { outputs } from "@/config/outputs"
import { Launches } from "@/modules/launches/domain/launches"

export const LaunchesListContainer = () => {
	const [launches, setLaunches] = useState<Launches>({
		count: 0,
		launches: [],
	})

	useEffect(() => {
		_getLaunches()
	}, [])

	const _getLaunches = async () => {
		try {
			const launches: Launches = await getLaunches({
				launchesOutput: outputs.launchesOutput,
			})
			setLaunches(launches)
		} catch (error: any) {
			console.error(error)
		}
	}

	return (
		<LaunchesListView count={launches.count} launches={launches.launches} />
	)
}
