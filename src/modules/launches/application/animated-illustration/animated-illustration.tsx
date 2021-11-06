import styles from "./animated-illustration.module.scss"
import { Player } from "@lottiefiles/react-lottie-player"

export const AnimatedIllustration = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Player
					autoplay
					loop
					speed={0.5}
					src={"/animation/astronaut_lottie_animation.json"}
				/>
			</div>
		</div>
	)
}
