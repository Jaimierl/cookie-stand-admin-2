import {useState} from 'react';
import CookieStandAdmin from '../components/CookieStandAdmin.js';

export default function Home(){

    const [storeInfo, lastInputStore] = useState('No Cookie Stands Available');


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

    return(
      <div>
        <CookieStandAdmin/>
      </div>
    )
}