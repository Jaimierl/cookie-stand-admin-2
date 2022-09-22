import Head from 'next/head';
// import {replies} from './data';
// import {useState} from 'react';

export default function Home(){

    // const [reply,setReply] = useState(initialState: 'Ask me anything');

    // function questionAskedHandler(event){
    //     event.preventDefault():
    //     const randomReply = replies[Math.floor(x:Math.random()*replies.length)]
    //     alert(event.target.question.value):
    //     setReply(randomReply):
    // }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <header className = "flex items-center p-4 justify-between bg-header-green text-text-black font-semibold">
                <h1 className = "text-4xl">Cookie Stand Admin</h1>
            </header>
            <main className="bg-main-bg">
              {/* onSubmit{questionAskedHandler} */}
                        {/* <p>{setReply}</p> */}
                <div className = "p-8 flex justify-center">
                  <div className = "p-4 bg-form-bg  flex rounded-md w-2/3 flex-col">  
                    <h1 className ="flex justify-center text-xl font-semibold">Create Cookie Stand</h1>
                    <form>
                    <div className = "py-4 w-full">
                      <label >Location</label>
                      <input name="Location" className = "w-5/6"/>
                      </div>
                      <div className = "flex items-center">
                      <div>
                      <label>Minimum Customers per Hour</label>
                      <input name="minhourly"/>
                      </div>
                      <div>
                      <label>Maximum Customers per Hour</label>
                      <input name="maxhourly"/>
                      </div>
                      <div>
                      <label>Average Cookies per Sale</label>
                      <input name="avgcps"/>
                      </div>
                      <button className="px-20 py-4 bg-button text-text-black font-semibold">Create</button>
                      </div>
                    </form>
                  </div>   
                </div>  

                <div>
                <p className ="p-4 text-table-text relative flex items-center justify-center">Report Table Coming Soon...</p>
                </div>
            </main>
            <footer className = "p-4 bg-footer-green text-gray-50">
                <p className = "text-footer-text">2022</p>
                <a
            href="https://www.linkedin.com/in/jae-loney/">
            <p> Made by Jae - Click to Connect! </p>
          </a>
            </footer>
        </div>
    );
}
