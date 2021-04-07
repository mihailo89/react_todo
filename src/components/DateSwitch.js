import React from 'react';

import { FaRegCalendar } from "react-icons/fa";


const toogle_mode = () => {
    let checkbox = document.querySelector('#toogleMode');
    if(checkbox.checked){
        document.querySelector('html').classList.add('dark');
        document.getElementById('themeMode').innerText = 'Dark';
    }
    else {
        document.querySelector('html').classList.remove('dark');
        document.getElementById('themeMode').innerText = 'Light';
    }
}

const SetDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth())
    let month = [
     'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
    ]
    let yyyy = today.getFullYear();

    today = `${dd} ${month[mm]} ${yyyy}`

    return today;
}


const DateSwitch = () => {
    return(
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-300">
            <div className="flex items-center">
                <FaRegCalendar className="text-lg"/>
                <span className="text-lg font-semibold ml-2 "><SetDate/></span>
            </div>
            <div className="flex items-center">
                <div className="mr-2 text-sm"><span id="themeMode">Light</span> mode</div>
                <label htmlFor="toogleMode" className="flex items-center cursor-pointer">
                    <div className="relative">
                    <input onClick={toogle_mode} id="toogleMode" type="checkbox" className="hidden" />
                    <div className="toggle__line w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                    </div>
                </label>
                
            </div>
        </div>
    )
}


export default DateSwitch;