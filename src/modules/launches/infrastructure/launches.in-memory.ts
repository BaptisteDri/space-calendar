import { LaunchesOutput } from "@/modules/launches/domain/launches.output"
import { Launches } from "@/modules/launches/domain/launches"
import { Launches as InfraModalLaunches } from "@/modules/launches/infrastructure/launches"
import { mapToDomainModel } from "@/modules/launches/domain/launches.mapper"
import { launchesFakes } from "./launches.fakes"

export class LaunchesInMemory implements LaunchesOutput {
	private launches: InfraModalLaunches | undefined = launchesFakes

	setLaunches(launches: InfraModalLaunches | undefined): void {
		this.launches = launches ?? undefined
	}

	getLaunches(): Promise<Launches> {
		if (!this.launches) {
			throw new Error("An error occured while fetching launches")
		}

		const launches: Launches = mapToDomainModel(this.launches)

		return Promise.resolve(launches)
	}
}
