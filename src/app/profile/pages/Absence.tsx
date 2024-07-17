import Head from 'next/head';
import RequestSection from './absence/components/RequestSection';
import ViewSection from './absence/components/ViewSection';
import BalanceSection from './absence/components/BalanceSection';
import MyApp from './Appbar'

export default function Home() {
  return (
    <div className="">
      <MyApp title={"Absence"}/>

     
        <RequestSection />
      
 
    </div>
  );
}
