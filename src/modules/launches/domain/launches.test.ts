import { Launches } from "@/modules/launches/domain/launches"
import { LaunchesInMemory } from "@/modules/launches/infrastructure/launches.in-memory"
import { launchesFakes } from "@/modules/launches/infrastructure/launches.fakes"
import { getLaunches } from "./launches.action"
import { mapToDomainModel } from "./launches.mapper"

describe("[launches] unit tests", () => {
	const launchesOutput = new LaunchesInMemory()

	beforeEach(() => {
		launchesOutput.setLaunches({
			count: 0,
			results: [],
		})
	})

	describe("when i want to get upcoming launches", () => {
		it("it should get it without error", async () => {
			launchesOutput.setLaunches(launchesFakes)

			const launches: Launches = await getLaunches({ launchesOutput })

			const expectedLaunches: Launches = mapToDomainModel(launchesFakes)

			expect(launches).toEqual(expectedLaunches)
		})
	})
})
