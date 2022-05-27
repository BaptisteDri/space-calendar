import {
	format as dateFnsFormat,
	formatDistanceToNowStrict as dateFnsFormatDistanceToNow,
	intervalToDuration,
} from "date-fns"

export const formatDateString = ({
	date,
	format,
}: {
	date: string
	format?: string
}): string => {
	const dateFormat: string = format || "PPPP"
	return isAValidDate(date)
		? dateFnsFormat(new Date(date), dateFormat)
		: "N/A"
}

const isAValidDate = (date: string): boolean =>
	new Date(date) instanceof Date && !isNaN(new Date(date).getDate())

export const formatDistanceToNow = ({
	date,
	unit,
}: {
	date: string
	unit?: "second" | "minute" | "hour" | "day" | "month" | "year"
}): number => {
	const verboseDistance: string = unit
		? dateFnsFormatDistanceToNow(new Date(date), { unit })
		: dateFnsFormatDistanceToNow(new Date(date))

	return parseInt(verboseDistance.split(" ")[0])
}

export const getDateIntervalToNow = (date: string) => {
	return intervalToDuration({ start: new Date(), end: new Date(date) })
}
