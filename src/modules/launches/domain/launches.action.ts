import { Launches } from "./launches"
import { LaunchesOutput } from "./launches.output"

export const getLaunches = async ({
	launchesOutput,
}: {
	launchesOutput: LaunchesOutput
}): Promise<Launches> => {
	try {
		return await launchesOutput.getLaunches()
	} catch (error: any) {
		throw new Error(error)
	}
}
