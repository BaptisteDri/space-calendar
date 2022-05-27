import React from "react"
import styles from "./lazy-loader.module.scss"

interface Props {
	width: string | number
	height: string | number
	className?: string
}

export const LazyLoader = ({ className, height, width }: Props) => {
	const customClassName = `${className ?? ""} ${styles.container}`

	return <div className={customClassName} style={{ height, width }} />
}
