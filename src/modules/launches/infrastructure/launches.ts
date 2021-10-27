export interface Status {
	id: number
	name: string
}

export interface Launch {
	id: string
	name: string
	net: string
	status: Status
}

export interface Launches {
	count: number
	results: Launch[]
}
