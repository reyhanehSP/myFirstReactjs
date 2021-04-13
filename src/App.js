import React from 'react';
import data from './data.json';
import { SocialIcon } from 'react-social-icons';
import fullPage from './components/fullPage'

 class App extends React.Component{
   render(){
       return (
           <div className="App">
               <div className="navigation" />
            <fullPage className="">
                <h1 className="title"> Hello , {data.title} </h1>
                <h2 className="subtitle"> {data.subtitle} </h2>
                <div className="social-media">
                    {
                        Object.keys(data.links).map(key =>{
                            return(
                                <SocialIcon url={data.links[key]} />
                            )
                        })
                    }
                </div>
            </fullPage>
               <div className="fullPage">
                   <h3>{data.sections[0].title}</h3>
                   <p>{data.sections[0].items[0].content}</p>
               </div>
               <div className="fullPage">
               </div>
           </div>
       );
   }
}
export default App;
