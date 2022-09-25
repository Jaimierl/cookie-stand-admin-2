import CreateForm from '../components/CreateForm.js'
import ReportTable from '../components/ReportTable.js'

export default function Main(){

    return (
        <main className="bg-main-bg">
            <div className = "p-8 flex justify-center">
            <div className = "p-4 bg-form-bg  flex rounded-md w-2/3 flex-col">  
                <h1 className ="flex justify-center text-xl font-semibold">Create Cookie Stand</h1>
                <form>
                {/* <form onSubmit={answerHandler}> */}
                <div className = "py-4 w-full">
                <label >Location  </label>
                <input name="location" className = "w-11/12"/>
                </div>
                <div className = "flex items-center">
                <div className ='px-1 py-2 m-2 bg-input-bg'>
                <label>Minimum Customers per Hour</label>
                <input name="minhourly" className = "w-5/6"/>
                </div>
                <div className ='px-1 py-2 m-2 bg-input-bg'>
                <label>Maximum Customers per Hour</label>
                <input name="maxhourly" className = "w-5/6"/>
                </div>
                <div className ='px-1 py-2 m-2 bg-input-bg'>
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

            {/* <p className ="p-4 text-table-text relative flex items-center justify-center">{storeInfo}</p> */}

            </div>
        </main>     
    );
}
