// import * as React from 'react';
// import Image from "next/image";
// import Head from "next/head";
// import styles from "./page.module.css";
// import 'material-symbols';
// import { Header, Footer, BodyChunk } from "@/components/components";
// import Link from "next/link";
// import HeaderBackground from "@/public/images/HeaderBackgroundGrid02.png"
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button"
// // import Icon from "../components/icon";

// export default function Home() {
// 	return(
// 		<Stack spacing={2} direction="row">
//     		<Button className={styles["navButton"]} variant="text">Text</Button>
//     		<Button className={styles["navButton"]} variant="contained">Contained</Button>
//     		<Button className={styles["navButton"]} variant="outlined">Outlined</Button>
//     	</Stack>
// 	);
//     // return (
// 	// 	<main className={styles["main"]}>
//     //        	{/* <header>
// 	// 			<NavBar />
//     //     		<nav className={styles["navBar"]}>
//     //        			<a className={styles["navBarElem"]} id="home" href="">
// 	// 					<Icon newClass={"navBarElemIcon"} iconName={"home"} />
//     //        			    <div className={styles["navButton"]}>
//     //        	    		    <p>Home</p>
//     //             		    <div></div>
//     //             		</div>
//     //         		</a>
//     //         		<a className={styles["navBarElem"]} id="about" href="/aboutme">
// 	// 					<Icon newClass={"navBarElemIcon"} iconName={"person"} />
//     //             		<div className={styles["navButton"]}>
//     //             		    <p>About Me</p>
//     //             		    <div></div>
//     //             		</div>
//     //         		</a>
//     //         		<a className={styles["navBarElem"]} id="interest" href="/interests">
//     //             		<Icon newClass={"navBarElemIcon"} iconName={"interests"} />
//     //             		<div className={styles["navButton"]}>
//     //             		    <p>Interests</p>
//     //             		    <div></div>
//     //             		</div>
//     //         		</a>
//     //         		<a className={styles["navBarElem"]} id="contact" href="/contact">
// 	// 					<Icon newClass={"navBarElemIcon"} iconName={"alternate_email"} />
//     //    	        		<div className={styles["navButton"]}>
//     //  		     		    <p>Contact Me</p>
//     //    	        		    <div></div>
//     //    	        		</div>
//     //    	    		</a>
//     //    			</nav>
//     //    			<div className={styles["headerTitle"]}>
//     //         		<Image className={styles["headerImage"]} width={1920} height={1080} src={HeaderBackground} alt="Header Background Image" />
//     //         		<h1 className={styles["headerText"]}>
//     //         		    Dominic<br />Camill
//     //         		</h1>
//     //     		</div>
//     // 		</header> */}
// 	// 		<Header title={"Dominic Camill"} imgSrc={HeaderBackground}/>
//     // 		<div className={styles["mainSection"]}>
// 	// 			<BodyChunk
// 	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
// 	// 			title={"About Me"}
// 	// 			variation={"1"}
// 	// 			imgSrc={"person"}
// 	// 			redirectLink="/aboutme"
// 	// 			/>
// 	// 			<BodyChunk
// 	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
// 	// 			title={"Interests"}
// 	// 			variation={"2"}
// 	// 			imgSrc={"interests"}
// 	// 			redirectLink="/interests"
// 	// 			/>
// 	// 			<BodyChunk
// 	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
// 	// 			title={"Projects"}
// 	// 			variation={"1"}
// 	// 			imgSrc={"assignment"}
// 	// 			redirectLink="/projects"
// 	// 			/>
// 	// 			<BodyChunk
// 	// 			content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent conubia sociosqu dolor sociosqu; turpis nascetur pellentesque. Nullam quis suspendisse dis dictum inceptos posuere."}
// 	// 			title={"Contact Me"}
// 	// 			variation={"2"}
// 	// 			imgSrc={"alternate_email"}
// 	// 			redirectLink="/contact"
// 	// 			/>
//     // 		</div>
// 	// 		<Footer />
//     // 		{/* <footer>
// 	// 			<div className={styles.footerPages}>
// 	// 				<h3>
// 	// 					Pages
// 	// 				</h3>
// 	// 				<div className={styles.footerPageList}>
// 	// 					<Link id={"Home"} href="/" >Home</Link>
// 	// 					<Link id={"about"} href="/aboutme" >About Me</Link>
// 	// 					<Link id={"interests"} href="/interests" >Interests</Link>
// 	// 					<Link id={"projects"} href="/projects" >Projects</Link>
// 	// 					<Link id={"contacts"} href="/contact" >Contact Me</Link>
// 	// 				</div>
// 	// 			</div>
//     // 		</footer> */}
//     // 	</main>
//     // );
// }
import * as React from 'react';
import { Typography, Box } from '@mui/material';

export default function HomePage(){
  return(
    // <div>
    //   <Image 
    //     className={styles["header"]}
    //     src={HomeBack}
    //     width={1920}
    //     height={1080}
    //     alt="Home Page Background Image"
    //   />
    // </div>
    <Box
    	sx={{
    		width: "100vw",
			height: "100vh",
    		// backgroundColor: "#0FA958"
    	}}
    >
    	
    	<Box
        	sx={{
				position: "relative",
				left: "10vw",
				top: "10vh",
        		width: "60vw",
        		height: "15vw",
				background: "red",
				display: "grid",
				gridTemplateColumns: "1fr",
				gridTemplateRows: "1fr",
				justifyContent: "center",
				alignItems: "center",
				justifyItems: "center",

    		}}
    	>
			<Box
        		component={"svg"}
        		width="943" height="291" viewBox="0 0 943 291" fill="none" xmlns="http://www.w3.org/2000/svg"
        		sx={{
					gridColumn: "1 / 2",
					gridRow: "1 / 2",
        			position: "relative",
        			width: "60vw",
					zIndex: "1"
        		}}
    		>
        		<Box
        			component={"path"}
        			d="M20.5 38.5H45.5V63.5H20.5V38.5ZM863.5 38.5H888.5V63.5H863.5V38.5ZM863.5 212.5H888.5V237.5H863.5V212.5ZM20.5 212.5H45.5V237.5H20.5V212.5Z"
					fill="white"
					stroke="black"
					strokeWidth="5"
        		/>
    		</Box>
        	<Box
        		sx={{
					gridColumn: "1 / 2",
					gridRow: "1 / 2",
    				backgroundColor: "white",
        			width: "53.75vw",
        			height: "11.2vw",
					position: "relative",
					left: "-1.125vw",
					top: "-0.5vw",
					zIndex: "0",
					borderWidth: "5px",
					borderColor: "black",
					outlineColor: "black",
					outlineWidth: "5px"
        		}}
        	>
        		{/* <Typography
    				variant='h1'
        	    	sx={{
        	    		fontFamily: "var(--font-main)",
        	    		paddingY: "1vh",
        	    		paddingX: "7.5vh",
						fontSize: ""
        	    	}}
        		>
        	    	Dominic Camill
        		</Typography> */}
        	</Box> 
    		{/* <Box 
    			sx={{
        			height: "5vh",
        			width: "70vw",
        			backgroundColor: "black",
        			position: "relative",
        			left: "5vh",
        			top: "5vh",
    			}}
    		/>   */}
    	</Box>
    </Box>
  );
}