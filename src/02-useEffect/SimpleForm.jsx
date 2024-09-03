import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'asierfc@gmail.com'
    });

    const { username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [ name ] : value,
        })
    }

    useEffect(() => {
        console.log('useEffect called')
    },[]) 

    useEffect(() => {
        console.log('formState Changed')
    },[formState]) 
    
    useEffect(() => {
        console.log('email changed')
    },[email])

  return (
    <>
        <h1>Simple Form </h1>
        <input
            type='text'
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
            />
        
        <input
            type='email'
            className='form-control mt-2'
            placeholder='asierfc@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange}
            />

        {
            username === 'strider2' &&       <Message />
        }
    </>
  )
}
