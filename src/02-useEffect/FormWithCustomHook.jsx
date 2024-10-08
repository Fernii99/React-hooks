import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {


    const { formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password } = formState;

    

  return (
    <>
        <h1>FORM WITH CUSTOM HOOK </h1>
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

        <input
            type='password'
            className='form-control mt-2'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onInputChange}
            />

        <button className='btn btn-primary mt-2' onClick={onResetForm}> Reset </button>
    </>
  )
}
