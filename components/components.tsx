import styles from "../app/page.module.css"
import Link from "next/link"
import Image from "next/image"
import { url } from "inspector"

export function NavBar() {
    return(
        <nav className={styles["navBar"]}>
           	<Link className={styles["navBarElem"]} id="home" href="/">
				<Icon newClass={"navBarElemIcon"} iconName={"home"} />
        	    <div className={styles["navButton"]}>
   	    		    <p>Home</p>
                    <div></div>
            	</div>
            </Link>
            <Link className={styles["navBarElem"]} id="about" href="/aboutme">
				<Icon newClass={"navBarElemIcon"} iconName={"person"} />
            	<div className={styles["navButton"]}>
            	    <p>About Me</p>
            	    <div></div>
            	</div>
            </Link>
            <Link className={styles["navBarElem"]} id="interest" href="/interests">
            	<Icon newClass={"navBarElemIcon"} iconName={"interests"} />
            	<div className={styles["navButton"]}>
            	    <p>Interests</p>
            	    <div></div>
            	</div>
            </Link>
            <Link className={styles["navBarElem"]} id="contact" href="/contact">
				<Icon newClass={"navBarElemIcon"} iconName={"alternate_email"} />
        		<div className={styles["navButton"]}>
         		    <p>Contact Me</p>
        		    <div></div>
        		</div>
    		</Link>
    	</nav>
    )
}

export function Icon({newClass, iconName}) {
    return(
        <span className={["material-symbols-rounded", styles[`${newClass}`]].join(" ")}>{iconName}</span>
    )
}

export function BodyChunk({content, title, imgSrc, variation, redirectLink}) {
    return(
        <div className={styles[`bodyChunk`]} id={styles[`${variation}`]}>
            <Icon newClass={"bodyChunkIcon"} iconName={imgSrc}/>
            {/* <Image width={undefined} height={undefined} src={imgSrc} alt={'image'} /> */}
            <div className={styles["bodyChunkDiv"]}>
                <h2 className={styles["bodyChunkTitle"]}>
                    {title}
                </h2>
                <p className={styles["bodyChunkText"]}>
                    {content}
                </p>
                <Link className={styles["bodyChunkButton"]} href={redirectLink}>
                {/* {title} */}
                More...
                </Link>
            </div>
        </div>
    );
}

export function Header({title, imgSrc}) {
    return(
        <header>
			<NavBar />
       		<div className={styles["headerTitle"]}>
               <Image className={styles["headerImage"]} width={1920} height={1080} src={imgSrc} alt="Header Background Image" />
        		<h1 className={styles["headerText"]}>
            	    {title}
            	</h1>
        	</div>
    	</header>
    )
}

export function Footer() {
    return(
        <footer>
			<div className={styles.footerPages}>
				<h3>
					Pages
				</h3>
				<div className={styles.footerPageList}>
					<Link id={"Home"} href="/" >Home</Link>
					<Link id={"about"} href="/aboutme" >About Me</Link>
					<Link id={"interests"} href="/interests" >Interests</Link>
					<Link id={"projects"} href="/projects" >Projects</Link>
					<Link id={"contacts"} href="/contact" >Contact Me</Link>
				</div>
			</div>
    	</footer>
    );
}