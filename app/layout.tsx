import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/components";
import styles from "@/app/page.module.css"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dominic's Portfolio",
  description: "A portfolio website created by Dominic Camill",
  icons: {
    other: {
      rel: "stylesheet",
      url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header className={styles.header}>
			  	<NavBar />
    	  </header> */}
        {children}
        {/* <footer>
				  <div className="footerPages">
				  	<h3>
				  		Pages
				  	</h3>
				  	<ul className={styles["footerPageList"]}>
				  		<li><Link id={"about"} href="" >About Me</Link></li>
				  		<li><Link id={"interests"} href="" >Interests</Link></li>
				  		<li><Link id={"projects"} href="" >Projects</Link></li>
				  		<li><Link id={"contacts"} href="" >Contact Me</Link></li>
				  	</ul>
				  </div>
    		</footer> */}
      </body>
    </html>
  );
}
