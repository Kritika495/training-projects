import React from 'react';
import { useState } from 'react';
import AppCounter from './AppCounter';
export const CounterHomeHooks = ()=>{
const [showHide, updateShowHide] = useState(true);
const [name, setName] = useState("");
const [emp,setEmp] = useState({ecode:101, ename:'Kriti'})
let output= null;
if(showHide)
{
output = <AppCounter title="Hooks"/>
}
}