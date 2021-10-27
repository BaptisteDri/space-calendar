import { Launches } from "@/modules/launches/infrastructure/launches"

export const launchesFakes: Launches = {
	count: 4,
	results: [
		{
			id: "aaa-aaa-aaa",
			name: "Sputnik 8K74PS | Sputnik 1",
			net: "1957-10-04T19:28:34Z",
			status: {
				id: 3,
				name: "Launch Successful",
			},
		},
		{
			id: "aaa-aaa-aab",
			name: "Sputnik 8K74PS | Sputnik 2",
			net: "1957-11-03T02:30:00Z",
			status: {
				id: 3,
				name: "Launch Successful",
			},
		},
		{
			id: "aaa-aaa-aac",
			name: "Vanguard | Vanguard",
			net: "1957-12-06T16:44:35Z",
			status: {
				id: 4,
				name: "Launch Failure",
			},
		},
		{
			id: "aaa-aaa-aad",
			name: "Juno-I | Explorer 1",
			net: "1958-02-01T03:47:56Z",
			status: {
				id: 3,
				name: "Launch Successful",
			},
		},
	],
}
