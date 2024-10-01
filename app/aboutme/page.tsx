import styles from "@/app/page.module.css"
import { Header, Footer } from "@/components/components"

export default function AboutMe() {
    return(
        <main className={styles.main}>
			<Header title={"About Me"}/>

			<Footer />
        </main>
    );
}