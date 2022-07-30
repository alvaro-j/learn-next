import Link from "next/link"; // send to other page
import Image from "next/image"; // set width and height for imgs with no effort
import Head from "next/head"; // to config the <head> for each route/page
import Script from "next/script"; // third-party scripts

import Layout from "../components/Layout";

import styles from "../styles/Home.module.css"

const yourmom = () => {
	return (
		<Layout>
			<Head>
				<title>your mom</title>
			</Head>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
			/>
			<h1 className={styles.title}>First Post</h1>
			<Image src={"/images/img.jpg"} width={300} height={200} alt="rickroll" />
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
};

export default yourmom;
