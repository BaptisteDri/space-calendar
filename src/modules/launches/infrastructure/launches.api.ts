import { api } from "@/config/axios-instance"
import { LaunchesOutput } from "@/modules/launches/domain/launches.output"
import { mapToDomainModel } from "@/modules/launches/domain/launches.mapper"

export class LaunchesApi implements LaunchesOutput {
	getLaunches() {
		return api
			.get("/launch?limit=5")
			.then(({ data }) => mapToDomainModel(data))
	}
}
