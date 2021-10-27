import { Launches } from "./launches"
export interface LaunchesOutput {
	getLaunches(): Promise<Launches>
}
