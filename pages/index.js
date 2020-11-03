import Head from 'next/head'
import Image from "next/image";
import {css} from '@emotion/core';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>


      <div className={"h-screen py-0 py-20 text-center bg-green-100 text-dark-blue"}>
        <div
          className={"flex flex-col items-center justify-center h-full md:flex-row app-container md:justify-between"}>
          <div>
            <h1 className={"text-red-400"}>With the Image component</h1>
            <p>It doesn't resize on the size of the viewport</p>
          </div>
          <div className={"relative"}>
            <svg
              className={"absolute right-0 z-50 hidden w-1/2 sm:block"}
              css={css`top: 25px;left: 25px;`}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674 674"
            >
              <circle id="Ellipse_8" cx="337" cy="337" r="337" fill="#e23b58"/>
            </svg>
            <Image
              src={"/image.jpg"}
              alt={"Démonstration de l'application les Frenchies sur ordinateur"}
              width={1103}
              height={628}
            />
          </div>
        </div>
      </div>

      <div className={"h-screen py-0 py-20 text-center bg-blue-100 text-dark-blue"}>
        <div
          className={"flex flex-col items-center justify-center h-full md:flex-row app-container md:justify-between"}>
          <div>
            <h1 className={"text-red-400"}>With the Image component</h1>
            <p>It doesn't resize on the size of the viewport</p>
          </div>
          <div className={"relative"}>
            <svg
              className={"absolute right-0 z-50 hidden w-1/2 sm:block"}
              css={css`top: 25px;left: 25px;`}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674 674"
            >
              <circle id="Ellipse_8" cx="337" cy="337" r="337" fill="#e23b58"/>
            </svg>
            <img
              src={"/image.jpg"}
              alt={"Démonstration de l'application les Frenchies sur ordinateur"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
