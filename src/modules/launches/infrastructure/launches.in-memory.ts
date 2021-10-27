import { LaunchesOutput } from "@/modules/launches/domain/launches.output"
import { Launches } from "@/modules/launches/domain/launches"
import { Launches as InfraModalLaunches } from "@/modules/launches/infrastructure/launches"
import { mapToDomainModel } from "@/modules/launches/domain/launches.mapper"

export class LaunchesInMemory implements LaunchesOutput {
	private launches: InfraModalLaunches | undefined = {
		count: 0,
		results: [],
	}

	getLaunches(): Promise<Launches> {
		if (!this.launches) {
			throw new Error("An error occured while fetching launches")
		}

		const launches: Launches = mapToDomainModel(this.launches)

		return Promise.resolve(launches)
	}
}
