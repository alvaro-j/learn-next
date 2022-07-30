import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

const yourmom = () => {
	return (
		<>
			<Head>
				<title>your mom</title>
			</Head>
			<h1>First Post</h1>
			<Image src={"/images/img.jpg"} width={300} height={200} alt="rickroll" />
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</>
	);
};

export default yourmom;
