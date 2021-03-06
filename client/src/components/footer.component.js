import React, { Component } from 'react';


const Footers  = () => {
    return(
        <footer className='text-center' color='white' bgColor='dark'>
            
            <h2 className='mb-3'>Contributors</h2>
            
             <div className='d-inline-block col-md-4 col-sm-12 col-xs-12'>
               <h5 className=''>Kameron Scott</h5>
               <ul className='list-unstyled mb-0'>
                 <li>
                   <a href='https://www.linkedin.com/in/kameron-scott-148a73202' className='text-white' style={{textDecoration: 'none'}}>
                     Linkedin
                   </a>
                 </li>
                 <li>
                   <a href='https://jiffteam.github.io/portfolio/' className='text-white' style={{textDecoration: 'none'}}>
                     Portfolio
                   </a>
                 </li>
                 <li>
                   <a href='http://www.github.com/jiffteam' className='text-white' style={{textDecoration: 'none'}}>
                     Github
                   </a>
                 </li>
               </ul>
             </div>

             <div className='d-inline-block col-md-4 col-sm-12 col-xs-12'>
               <h5 className=''>Lashawn Wood</h5>
               <ul className='list-unstyled mb-0'>
                 <li>
                   <a href='https://www.linkedin.com/in/lashawn-wood/' className='text-white' style={{textDecoration: 'none'}}>
                     Linkedin
                   </a>
                 </li>
                 <li>
                   <a href='https://lashawn24.github.io/My-Portfolio/' className='text-white' style={{textDecoration: 'none'}}>
                     Portfolio
                   </a>
                </li>
                 <li>
                   <a href='https://github.com/Lashawn24?tab=repositories' className='text-white' style={{textDecoration: 'none'}}>
                     Github
                   </a>
                 </li>
               </ul>
             </div>

             <div className='d-inline-block col-md-4 col-sm-12 col-xs-12'>
               <h5 className=''>Robby Bush</h5>
               <ul className='list-unstyled mb-0'>
                 <li>
                  <a href='https://www.linkedin.com/in/robby-bush-50622b236/' className='text-white' style={{textDecoration: 'none'}}>
                     Linkedin
                   </a>
                 </li>
                 <li>
                   <a href='https://crobertbush.github.io/portfolio/' className='text-white' style={{textDecoration: 'none'}}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href='https://github.com/crobertbush?tab=repositories' className='text-white' style={{textDecoration: 'none'}}>
                     Github
                   </a>
                 </li>
              </ul>
             </div>
          
         
            </footer>

    )
} 





export default class Footer extends Component {
    render(){
        return (
    <footer>
    <div className=" p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="row mb-0">
                <div className="p-2"><Footers/></div>
        </div>
    </div>

    <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        ?? 2022 Copyright:
    </div>
    </footer>
        )}}