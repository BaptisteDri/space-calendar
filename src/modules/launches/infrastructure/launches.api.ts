import { api } from "@/config/axios-instance"
import { LaunchesOutput } from "@/modules/launches/domain/launches.output"

export class LaunchesApi implements LaunchesOutput {
	getLaunches() {
		return api.get("")
	}
}
