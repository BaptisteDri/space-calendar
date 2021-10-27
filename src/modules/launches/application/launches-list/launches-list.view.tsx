import React from "react"
import { Launch } from "@/modules/launches/domain/launches"

interface Props {
	count: number
	launches: Launch[]
}

export const LaunchesListView = ({ count, launches }: Props) => {
	return <div>{count}</div>
}
