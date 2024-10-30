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

'use client'

import * as React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import HomePageArrow from "@/static/vectors/HomePage/LearnMoreArrow.svg";
import { alertService, AlertProps } from '../components/AlertComponent';
import ReactDOM from 'react-dom';

export default function HomePage(){

	const alert = (message: string, props: AlertProps) => {
		alertService.showAlert(message, props);
	};

	return(
		<Box
			sx={{
				backgroundColor: "#0FA958",
				width: "100vw",
				height: "100vh",
				overflowX: "hidden",
				overflowY: "auto",
			}}
		>
    		<Box
    			sx={{
					aspectRatio: "16 / 9",
    				width: "100vw",
    				backgroundColor: "#0FA958",
					backgroundImage: 'url("static/vectors/HomePage/HomePage.png")',
					backgroundSize: "100vw",
					backgroundRepeat: "no-repeat",
					display: "grid",
					gridTemplateRows: "1fr 1fr 1fr",
    			}}
    		>
    			<Box
    		    	sx={{
						gridRow: "2 / 3",
						position: "relative",
						left: "10vw",
						// top: "35vh",
    		    		width: "60vw",
    		    		height: "15vw",
						background: "rgba(0,0,0,0)",
						display: "grid",
						gridTemplateColumns: "6.5vw 47vw 6.5vw",
						gridTemplateRows: "3.75vw 7.5vw 3.75vw",
						justifyContent: "center",
						alignItems: "center",
						justifyItems: "center",
    				}}
    			>
					<Box 
    					sx={{
    		    			width: "53.75vw",
    		    			height: "11.2vw",
    		    			backgroundColor: "black",
							gridColumn: "2 / 3",
							gridRow: "2 / 3",
    		    			position: "relative",
							top: "2.5vw",
							left: "2.5vw"
    					}}
    				/>  
					<Box
    		    		sx={{
							gridColumn: "2 / 3",
							gridRow: "2 / 3",
    						backgroundColor: "white",
							border: "0.35vw black solid",
    		    			width: "53.75vw",
    		    			height: "11.2vw",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
    		    		}}
    		    	>
    		    		<Typography
    						variant='h1'
    		    	    	sx={{
    		    	    		fontFamily: "var(--font-main)",
								fontVariationSettings: '"wght" 1000',
								color: "black",
								fontSize: "7.125vw",
								textWrap: "nowrap"
    		    	    	}}
    		    		>
    		    	    	Dominic Camill
    		    		</Typography>
    		    	</Box> 
					<Box
						sx={{
							border: "0.35vw black solid",
							backgroundColor: "white",
							gridColumn: "1 / 2",
							gridRow: "1 / 2",
							aspectRatio: "1 / 1",
							width: "2vw",
							zIndex: "1"
						}}
					/>
					<Box
						sx={{
							border: "0.35vw black solid",
							backgroundColor: "white",
							gridColumn: "3 / 4",
							gridRow: "1 / 2",
							aspectRatio: "1 / 1",
							width: "2vw",
							zIndex: "1"
						}}
					/>
					<Box
						sx={{
							border: "0.35vw black solid",
							backgroundColor: "white",
							gridColumn: "1 / 2",
							gridRow: "3 / 4",
							aspectRatio: "1 / 1",
							width: "2vw",
							zIndex: "1"
						}}
					/>
					<Box
						sx={{
							border: "0.35vw black solid",
							backgroundColor: "white",
							gridColumn: "3 / 4",
							gridRow: "3 / 4",
							aspectRatio: "1 / 1",
							width: "2vw",
							zIndex: "1"
						}}
					/>
    			</Box>
				<Box
					sx={{
						gridRow: "3 / 4",
						position: "relative",
						left: "60vw",
						width: "20vw",
						height: "10vw",
						display: "grid",
						gridTemplateColumns: "3vw 1fr",
						gridTemplateRows: "3.5vw 1fr",
					}}
				>
					<Box
						sx={{
							width: "5%",
							height: "5%",
							gridColumn: "1 / 2",
							gridRow: "1 / 2",
						}}
					>
						<Image 
							src={HomePageArrow}
							alt="Learn More Arrow"
							style={{
								width: "100%",
								height: "100%"
							}}
						/>
					</Box>
					<Box
						sx={{
							justifySelf: "center",
							alignSelf: "center",
							height: "70%",
							display: "grid",
							justifyContent: "center",
							alignItems: "center",
							border: "0.35vw black solid",
							gridRow: "2 / 3",
							gridColumn: "2 / 3",
							backgroundColor: "#FF8577",
						}}
					>
						<Button
							sx={{
								height: "100%",
								width: "100%",
								margin: "0px",
								fontSize: "100px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginX: "0%",
							}}
							disableRipple
							onClick={() => {
								alert("Button clicked", {severity: "warning"});
							}}
						>
							<Typography
    						variant='h1'
    		    	    	sx={{
    		    	    		fontFamily: "var(--font-main)",
								fontVariationSettings: '"wght" 1000',
								color: "black",
								fontSize: "2.25vw",
								textWrap: "nowrap",
								textTransform: "none",
    		    	    	}}
    		    		>
    		    	    	Learn more
    		    		</Typography>
						</Button>
					</Box>
				</Box>
    		</Box>
		</Box>
	);
}