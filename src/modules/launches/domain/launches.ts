export interface Status {
	id: number
	name: string
}

export interface Launch {
	id: string
	name: string
	net: string
	status: string
}

export interface Launches {
	count: number
	launches: Launch[]
}
