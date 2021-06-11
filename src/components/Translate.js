import React ,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';



 const options = [
{
     label: "Arabic",
     value:'ar'
 },
 {
    label:'Hindian',
    value:'hi'
},
{
    label: "African",
    value:'af'
}
]

const Translate = () => {
    const [language ,setLanguage] =useState(options[0]);
    const [text,setText]  = useState('');
    return ( <div>
        <div className  ="ui form">     
            <div className = "field">
                <label>Enter Text</label>
                 <input 
                value ={text} 
                onChange ={e =>setText(e.target.value)}>           
                </input>
            </div>
        </div>

    <Dropdown  
    label = "Selct Language"
    options ={options}
    selected={language}
    onSelectedChange ={setLanguage}
    />
    <hr></hr>
    <h3 className ="ui header">output</h3>
    <Convert  text={text} language={language}/>
        </div> );
}
 
export default Translate;