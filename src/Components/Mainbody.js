import React,{useState} from 'react'
import CardExample from './CardExample'
import './Mainbody.css'
import { Dropdown } from 'semantic-ui-react'

function Mainbody(props) {
    const[args,setArg]=useState('')
    const[args1,setArg1]=useState('')
    const[call,setcall]=useState(false)
    const[call1,setcall1]=useState(false)
    const text= `Filter : ${args} ${args1}`
    console.log(args)
    const handleClick=(e,key)=>{
        e.preventDefault()
        setArg(key)
        setcall(true)
    }
    const handleClick1=(e,key)=>{
        e.preventDefault()
        setArg1(key)
        setcall1(true)
    }
    const handleClick2=(e,key)=>{
      e.preventDefault()
      setcall1(false)
      setcall(false)
      setArg("")
      setArg1("")
  }
    const tagOptions = [
        {
          key: 'Ordinary Drink',
          text: 'Ordinary Drink',
          value: 'Ordinary Drink',
          label: { color: 'grey', empty: true, circular: true },
        },
        {
            key: 'Cocktail',
            text: 'Cocktail',
            value: 'Cocktail',
            label: { color: 'grey', empty: true, circular: true },
          },
          {
            key: 'Cocoa',
            text: 'Cocoa',
            value: 'Cocoa',
            label: { color: 'grey', empty: true, circular: true },
          },{
            key: 'Beer',
            text: 'Beer',
            value: 'Beer',
            label: { color: 'grey', empty: true, circular: true },
          },{
            key: 'Punch / Party Drink',
            text: 'Punch / Party Drink',
            value: 'Punch / Party Drink',
            label: { color: 'grey', empty: true, circular: true },
          },
          {
            key: 'Coffee / Tea',
            text: 'Coffee / Tea',
            value: 'Coffee / Tea',
            label: { color: 'grey', empty: true, circular: true },
          }
      ]
      const Options = [
        {
          key: 'Alcoholic',
          text: 'Alcoholic',
          value: 'Alcoholic',
          label: { color: 'grey', empty: true, circular: true },
        },
        {
            key: 'Non alcoholic',
            text: 'Non alcoholic',
            value: 'Non alcoholic',
            label: { color: 'grey', empty: true, circular: true },
          }]
          const Option = [
            {
              key: 'Clear',
              text: 'Clear',
              value: 'Clear',
              label: { color: 'red', empty: true, circular: false },
            }]
    return (
        <div className="sa">
        <div className="dropdown">
  <Dropdown
    text={text}
    icon='filter'
    floating
    labeled
    button
    className='icon'>
    <Dropdown.Menu>
    {Option.map((option) => (
          <Dropdown.Item key={option.value} {...option} onClick={(e)=>handleClick2(e,option.value)}/>
        ))}
      <Dropdown.Header icon='list' content='Category' />
      <Dropdown.Menu scrolling>
        {tagOptions.map((option) => (
          <Dropdown.Item key={option.value} {...option} onClick={(e)=>handleClick(e,option.value)}/>
        ))}
      </Dropdown.Menu>
      <Dropdown.Header icon='list' content='Alcohol' />
      <Dropdown.Menu scrolling>
        {Options.map((option) => (
          <Dropdown.Item key={option.value} {...option} onClick={(e)=>handleClick1(e,option.value)}/>
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
  </div>
           {(props.drink===undefined)?(<div className="sub"><i className="massive beer icon"></i>Search for Drinks...</div>):(<div className="mbody3">{props.drink.map((drink)=>
                        <CardExample
                        key={drink.idDrink}
                        drinkId={drink.idDrink}
                        arg={args}
                        call={call}
                        call1={call1}
                        arg1={args1}
                        />
                     )}</div>)}  
        </div>
                     
    )
}

export default Mainbody