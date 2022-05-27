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

	const { launchesOutput } = outputs

	const _getLaunches = async () => {
		try {
			const launches: Launches = await getLaunches({
				launchesOutput,
			})
			console.log(launches)
			setLaunches(launches)
		} catch (error: any) {
			if (error.message.split(" ").includes("429")) {
				console.error("too many requests! please, try again later")
			} else {
				console.log(error)
			}
		}
	}

	return (
		<LaunchesListView count={launches.count} launches={launches.launches} />
	)
}
