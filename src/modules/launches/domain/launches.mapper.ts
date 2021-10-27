import { Launches as InfraModelLaunches } from "@/modules/launches/infrastructure/launches"
import { Launches } from "./launches"

export const mapToDomainModel = (
	infraLaunches: InfraModelLaunches
): Launches => {
	const { count, results } = infraLaunches

	return {
		count,
		launches: results,
	}
}
