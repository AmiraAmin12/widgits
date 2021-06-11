import React, { Component, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Headers';
import index from './index.css'

const items =[
  {
    title: 'What is react ?',
    content :'it is a javascript library'
  },
   {
    title: 'Why use it  ?',
    content :'its easy and awsome way to render elements'
  },
  {
    title: 'How to use  react ?',
    content :' follow documentation instruction its easy'
  }
]

const options =[{
  label:'The color Red',
  value:'red'
},
{
  label:'The color Green',
  value:'green'
},
{
  label:'The color Blue',
  value:'blue'
}]

export default () =>{
 const [selected ,setSelected]=  useState(options[0])
return  (<div>
  <Header />
 <Route path="/" >
<Accordion items={items} />
 </Route>
 <Route path="/list" >
<Search />
 </Route>
 <Route path="/translate" >
<Translate />
 </Route>
 <Route path="/dropdown" >
<Dropdown 
selected ={selected}
onSelectedChange={setSelected} 
label="select color"
options={options}/>
 </Route>
</div>)
};

