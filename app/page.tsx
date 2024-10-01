import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import 'material-symbols';
import { Header, Footer, BodyChunk } from "@/components/components";
import Link from "next/link";
import HeaderBackground from "@/public/images/HeaderBackgroundGrid02.png"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button"
// import Icon from "../components/icon";

export default function Home() {
	return(
		<Stack spacing={2} direction="row">
    		<Button variant="text">Text</Button>
    		<Button variant="contained">Contained</Button>
    		<Button variant="outlined">Outlined</Button>
    	</Stack>
	);
    // return (
	// 	<main className={styles["main"]}>
    //        	{/* <header>
	// 			<NavBar />
    //     		<nav className={styles["navBar"]}>
    //        			<a className={styles["navBarElem"]} id="home" href="">
	// 					<Icon newClass={"navBarElemIcon"} iconName={"home"} />
    //        			    <div className={styles["navButton"]}>
    //        	    		    <p>Home</p>
    //             		    <div></div>
    //             		</div>
    //         		</a>
    //         		<a className={styles["navBarElem"]} id="about" href="/aboutme">
	// 					<Icon newClass={"navBarElemIcon"} iconName={"person"} />
    //             		<div className={styles["navButton"]}>
    //             		    <p>About Me</p>
    //             		    <div></div>
    //             		</div>
    //         		</a>
    //         		<a className={styles["navBarElem"]} id="interest" href="/interests">
    //             		<Icon newClass={"navBarElemIcon"} iconName={"interests"} />
    //             		<div className={styles["navButton"]}>
    //             		    <p>Interests</p>
    //             		    <div></div>
    //             		</div>
    //         		</a>
    //         		<a className={styles["navBarElem"]} id="contact" href="/contact">
	// 					<Icon newClass={"navBarElemIcon"} iconName={"alternate_email"} />
    //    	        		<div className={styles["navButton"]}>
    //  		     		    <p>Contact Me</p>
    //    	        		    <div></div>
    //    	        		</div>
    //    	    		</a>
    //    			</nav>
    //    			<div className={styles["headerTitle"]}>
    //         		<Image className={styles["headerImage"]} width={1920} height={1080} src={HeaderBackground} alt="Header Background Image" />
    //         		<h1 className={styles["headerText"]}>
    //         		    Dominic<br />Camill
    //         		</h1>
    //     		</div>
    // 		</header> */}
	// 		<Header title={"Dominic Camill"} imgSrc={HeaderBackground}/>
    // 		<div className={styles["mainSection"]}>
	// 			<BodyChunk
	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
	// 			title={"About Me"}
	// 			variation={"1"}
	// 			imgSrc={"person"}
	// 			redirectLink="/aboutme"
	// 			/>
	// 			<BodyChunk
	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
	// 			title={"Interests"}
	// 			variation={"2"}
	// 			imgSrc={"interests"}
	// 			redirectLink="/interests"
	// 			/>
	// 			<BodyChunk
	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
	// 			title={"Projects"}
	// 			variation={"1"}
	// 			imgSrc={"assignment"}
	// 			redirectLink="/projects"
	// 			/>
	// 			<BodyChunk
	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
	// 			title={"Contact Me"}
	// 			variation={"2"}
	// 			imgSrc={"alternate_email"}
	// 			redirectLink="/contact"
	// 			/>
    // 		</div>
	// 		<Footer />
    // 		{/* <footer>
	// 			<div className={styles.footerPages}>
	// 				<h3>
	// 					Pages
	// 				</h3>
	// 				<div className={styles.footerPageList}>
	// 					<Link id={"Home"} href="/" >Home</Link>
	// 					<Link id={"about"} href="/aboutme" >About Me</Link>
	// 					<Link id={"interests"} href="/interests" >Interests</Link>
	// 					<Link id={"projects"} href="/projects" >Projects</Link>
	// 					<Link id={"contacts"} href="/contact" >Contact Me</Link>
	// 				</div>
	// 			</div>
    // 		</footer> */}
    // 	</main>
    // );
}