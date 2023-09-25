import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header';
import MainBlock from '@/components/MainBlock/MainBlock';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={'flex  flex-col items-center justify-between pt-20 px-48 bg-backgroundWhite'}
    >
      <Header/>
      <MainBlock/>

      
      
      01 Reviving Retro PCs What happens when old PCs are given
      modern upgrades? 
      02 Top 10 Laptops of 2022 Our best picks for various
      needs and budgets. 
      03 The Growth of Gaming How the pandemic has sparked
      fresh opportunities.
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  );
}
