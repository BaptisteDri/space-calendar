// import { LaunchesApi } from "@/modules/launches/infrastructure/launches.api"
import { LaunchesInMemory } from "@/modules/launches/infrastructure/launches.in-memory"

export const outputs = {
	launchesOutput: new LaunchesInMemory(),
}
