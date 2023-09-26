import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header';
import MainBlock from '@/components/MainBlock/MainBlock';
import NewsFooter from '@/components/NewsFooter/NewsFooter';
import Attribution from '@/components/Attribution/Attribution';


export default function Home() {


  return (
    <main
      className={'flex flex-col  xs:items-center xs:p-4 justify-center xs:pt-4 md:pt-12 xs:px-2 md:px-28 bg-backgroundWhite'}
    >
      <Header />
      <MainBlock />
      <NewsFooter/>
       <Attribution/>
 
      
      
     
      
    </main>
  );
}
