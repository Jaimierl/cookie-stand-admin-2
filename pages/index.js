import Head from 'next/head';
import {useState} from 'react';
import Link from 'next/link';

export default function Home(){

    const [storeInfo, lastInputStore] = useState('Store Info');


    function answerHandler(event){
        event.preventDefault()
        
        let where = event.target.location.value
        let min = event.target.minhourly.value
        let max = event.target.maxhourly.value
        let avg = event.target.avgcps.value

        let phrase = "".concat("{","\"location\":\"",where,"\",\"minCustomers\":", min,",\"maxCustomers\":", max,",\"avgCookies\":",avg,"}");
        alert(phrase);
        lastInputStore(phrase);
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <header className = "flex items-center p-4 justify-between bg-header-green text-text-black font-semibold">
                <h1 className = "text-4xl">Cookie Stand Admin</h1>
            </header>
            <main className="bg-main-bg">
                <div className = "p-8 flex justify-center">
                  <div className = "p-4 bg-form-bg  flex rounded-md w-2/3 flex-col">  
                    <h1 className ="flex justify-center text-xl font-semibold">Create Cookie Stand</h1>
                    <form onSubmit={answerHandler}>
                    <div className = "py-4 w-full">
                      <label >Location  </label>
                      <input name="location" className = "w-11/12"/>
                      </div>
                      <div className = "flex items-center">
                      <div>
                      <label>Minimum Customers per Hour</label>
                      <input name="minhourly" className = "w-5/6"/>
                      </div>
                      <div>
                      <label>Maximum Customers per Hour</label>
                      <input name="maxhourly" className = "w-5/6"/>
                      </div>
                      <div>
                      <label>Average Cookies per Sale</label>
                      <input name="avgcps" className = "w-5/6"/>
                      </div>
                      <button className="px-20 py-4 bg-button text-text-black font-semibold">Create</button>
                      </div>
                    </form>
                  </div>   
                </div>  

                <div>
                <p className ="p-4 text-table-text relative flex items-center justify-center">Report Table Coming Soon...</p>

                <p className ="p-4 text-table-text relative flex items-center justify-center">{storeInfo}</p>

                </div>
            </main>
            <footer className = "p-4 bg-footer-green text-gray-50">
                <p className = "text-footer-text">2022</p>
                <a
            href="https://www.linkedin.com/in/jae-loney/">
            <p> Made by Jae - Click to Connect! </p>
          </a>
          <h1 className="title">
          <Link href="/start">Click to Read More on Next JS!</Link>
          </h1>
            </footer>
        </div>
    );
}
