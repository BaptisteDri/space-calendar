import { Launches } from "@/modules/launches/domain/launches"
import { LaunchesInMemory } from "@/modules/launches/infrastructure/launches.in-memory"
import { launchesFakes } from "@/modules/launches/infrastructure/launches.fakes"
import { getLaunches } from "./launches.action"
import { mapToDomainModel } from "./launches.mapper"

describe("[launches] unit tests", () => {
	const launchesOutput = new LaunchesInMemory()

	describe("when i want to get upcoming launches", () => {
		it("i should get it without error", async () => {
			launchesOutput.setLaunches(launchesFakes)

			const launches: Launches = await getLaunches({ launchesOutput })

			const expectedLaunches: Launches = mapToDomainModel(launchesFakes)

			expect(launches).toEqual(expectedLaunches)
		})

		it("i shouldn't get it and throw error", async () => {
			launchesOutput.setLaunches(undefined)

			await expect(getLaunches({ launchesOutput })).rejects.toThrowError()
		})
	})
})
