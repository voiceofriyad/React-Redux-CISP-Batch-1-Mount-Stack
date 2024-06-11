import React from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import CreatableSelect from 'react-select/creatable'

function SelectReact() {
    const options = [
        {value: 'Faysal', label: 'Faysal', color: '#FF8B00'},
        {value: 'Alam', label: 'Alam', color: '#36B37E'},
        {value: 'Riyad', label: 'Riyad', color: '#0052CC'},
    ]
    
    const handleChange = (selectedOption, actionMeta) => {
      console.log ("handleChange", selectedOption, actionMeta)
    }
      
      const loadOptions = (searchValue, callback) => {
        setTimeout (() => {
          const filteredOption = options.filter (options => 
            options.label.toLowerCase().includes(searchValue.toLowerCase()))
            console.log ('loadOptions', searchValue, filteredOption)
            callback (filteredOption)
    
        }, 2000)
    }
    
      const colorStyles = {
        control: (styles) => ({...styles, backgroundColor: 'White'}),
        option: (styles, {data, isDisable, isFocused, isSelected}) => {
          console.log ('option', data, isDisable, isFocused, isSelected)
          return {...styles, color: data.color}
        },
        multiValue: (styles, {data}) => {
          return {
            ...styles,
            backgroundColor: data.color,
            color: '#fff'
          }
        },
        multiValueLabel: (styles, {data}) => {
          return {
            ...styles,
            color: '#fff'
          }
        },
        multiValueRemove: (styles, {data}) => {
          return {
            ...styles,
            color: '#fff',
            cursor: 'pointer',
            ':hover': {
              color: 'black'
            }
          }
        }
    }
    
      const handleInputChange = (inputValue, actionMeta ) => {
        console.log ('handleInputChange', inputValue, actionMeta)
    }

     return (
        <div>
            <Select options = {options} onChange={handleChange} isMulti 
                styles={colorStyles} />

            <AsyncSelect loadOptions={loadOptions} defaultOptions isMulti 
                onChange={handleChange}  />

            <CreatableSelect options = {options} onChange={handleChange} isMulti
                onInputChange={handleInputChange}
            />
        </div>
  )
}

export default SelectReact


