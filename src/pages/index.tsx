import type { NextPage } from "next"
import Head from "next/head"
import { LaunchesListContainer } from "@/modules/launches/application/launches-list/launches-list.container"
import { Layout } from "@/components/layout/layout"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Space Calendar</title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="Space Calendar using Clean Architecture"
				/>
				<meta name="author" content="Baptiste Drillien" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<LaunchesListContainer />
			</Layout>
		</>
	)
}

export default Home
