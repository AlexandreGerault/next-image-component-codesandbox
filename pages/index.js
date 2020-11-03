import Head from 'next/head'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className={"text-red-400"}>Some title</h1>
      </div>
      <Image
        src={"/demo-desktop.png"}
        alt={"Ordinateur"}
        width={1103}
        height={628}
      />
    </div>
  )
}
