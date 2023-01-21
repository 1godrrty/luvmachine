import Head from "next/head";
import Image from "next/image";
import { Inter, Dancing_Script } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Luv Machine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} bg-secondary pt-36`}>
        <div className="max-w-sm mx-auto">
          <div className="mb-36">
            <div className="flex justify-center mb-24">
              <div className="h-[200px] w-[200px] border-2 border-white-500 rounded-lg text-sm text-white p-8">
                Logo graphic goes here
              </div>
            </div>
            <h1
              className={`text-6xl font-bold text-center mb-6 ${dancingScript.className}`}
            >
              Luv Machine
            </h1>
            <h2 className="text-md text-center mb-20">
              Let Us State Your Message!
            </h2>
            <div className="text-center">
              <button className="text-white bg-primary p-4 rounded-full text-lg w-[200px]">
                Get started
              </button>
            </div>
          </div>
          <div className="p-4">
            <label className="block mb-4">
              <span className="block">To:</span>
              <input className="block border border-black w-full" type="text" />
            </label>
            <label className="block mb-4">
              <span className="block">From:</span>
              <input className="block border border-black w-full" type="text" />
            </label>
            <label className="block mb-4">
              <span className="block">Message:</span>
              <input
                className="block border border-black h-[150px] w-full"
                type="text"
              />
            </label>
          </div>
        </div>
      </main>
    </>
  );
}
