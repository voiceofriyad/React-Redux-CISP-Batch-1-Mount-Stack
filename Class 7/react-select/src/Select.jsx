import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

const SelectField = () => {

  const {control, handleSubmit} = useForm ()
  function submitHandler (data) {
    console.log (data)
  }

  return (
    <form onSubmit = {handleSubmit (submitHandler)}>

      <Controller 
        control = {control}
        name = 'category'
        render={({field}) => {
          return (

            <Select
              {...field}
              isMulti
              defaultValue = {[]}

              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ]}

              onChange = {(selected) => {
                field.onChange (selected)
              }}

            />

          )

        }}

      />

      <input type = 'submit' className = 'bg-red-400 text-white m-2 px-4 py-2 rounded-3xl' />

    </form>
  )
}

export default SelectField
