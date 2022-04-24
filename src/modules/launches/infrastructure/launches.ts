export interface Status {
	id: number
	name: string
}

export interface LaunchServiceProvider {
	id: number
	name: string
}

export interface Launch {
	id: string
	name: string
	net: string
	status: Status
	image: string
	launch_service_provider: LaunchServiceProvider
}

export interface Launches {
	count: number
	results: Launch[]
}
