import { LaunchesApi } from "@/modules/launches/infrastructure/launches.api"

export const outputs = {
	launchesOutput: new LaunchesApi(),
}
