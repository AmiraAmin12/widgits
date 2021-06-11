import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
    //data to be tracked
    const [term ,setTerm] = useState('');
    const[ debouncedTerm,setDeboucedTerm] = useState(term);
    const[results,setResults]  = useState([]);
//useEffect  for term
    useEffect (()=>{
        //update the debounced term when this function executed
        const timerId = setTimeout(() => {
            setDeboucedTerm(term)
        }, 500);
        //cleanup function
       return ()=>{
            clearTimeout(timerId) 
        }
    },[term]);

// 2nd useEffect
useEffect(()=>{
        //fetch data from wiki api
        const searchWiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debouncedTerm,
              },
            });
    
            setResults(data.query.search)
          };
          if(debouncedTerm)
          {searchWiki();}
},[debouncedTerm]);

    // items o be mapped 
    const renderedResults = results.map(item =>{
        return (
            <div key={item.pageid} className= "item">
                <div className = "right floated content">
                    <a
                    href ={`https://en.wikipedia.org?curid=${item.pageid}`}
                     className= "ui button">GO</a>
                </div>
                <div className= "content">
                    <div className="header">{item.title}</div>
                    <span dangerouslySetInnerHTML ={{__html:item.snippet}}></span>
               
                </div>
            </div>
        )
    });

    return (    
    <div>
        <div className=" ui form">

            <div className ="feiled">
                <label>Enter your Search Term </label>
                <input
                value = {term}
                onChange ={e=>setTerm(e.target.value)}
                 className ="input"/>
            </div>

        </div>
        
        <div className= "ui celled list">{renderedResults}</div>

    </div>);
}
 
export default Search;
