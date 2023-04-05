import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography App</title>
      </Head>
      <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}