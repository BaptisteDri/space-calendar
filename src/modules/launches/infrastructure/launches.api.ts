import { api } from "@/config/axios-instance"
import { LaunchesOutput } from "@/modules/launches/domain/launches.output"
import { mapToDomainModel } from "@/modules/launches/domain/launches.mapper"

export class LaunchesApi implements LaunchesOutput {
	getLaunches() {
		const params = {
			limit: 50,
		}

		return api
			.get("/launch/upcoming", { params })
			.then(({ data }) => mapToDomainModel(data))
	}
}
