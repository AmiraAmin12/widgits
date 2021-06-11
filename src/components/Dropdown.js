import React, { useState ,useEffect,useRef} from 'react';
const Dropdown = ({ label,options,selected ,onSelectedChange}) => {

const [open ,setOpen] = useState(false);
const ref = useRef()
  


useEffect(() => {
    const onBodyClicked = (e) => {
        if(ref.current.contains(e.target)){
            return
        }     
        setOpen(0);}
//manual event 
    document.body.addEventListener("click",onBodyClicked, { capture: true });
//cleanup function 
return ()=>{
    document.body.removeEventListener('click',onBodyClicked, { capture: true })
}
  }, []);


  const renderedOptions = options.map(option =>{
    if (option.value ===selected.value){
    return null;
    } 
return(
<div  key= {Option.value}
    className="item"
    onClick={()=>onSelectedChange(option)}>{option.label}</div>)
});

return ( <div   ref={ref} className=" ui form">
<div className="field">
<label className="label"> {label}</label>
<div onClick ={()=>setOpen(!open)}

className = {`ui selection dropdown  ${open ?'visible active':''}`}>
    <i className= "dropdown icon"></i>
    <div className="text">{selected.label}</div>
    <div className={`menu  ${open ?'transition visible':''}`}>
        {renderedOptions}
    </div>

</div>
</div>
</div> );
}

export default Dropdown;