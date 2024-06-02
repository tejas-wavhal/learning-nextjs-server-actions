"use client"
import { serverAction } from '@/actions/serverAction'
import React from 'react'
import { useTransition } from 'react'

const AddUserButton = () => {

    const [isPending, startTransition] = useTransition()

    const formData = new FormData();
    formData.append('name', 'Tejas');
    formData.append('number', '696969696969');

    return (
        <>
            <h1>Add User Client Button</h1>
            <button
                onClick={() => {startTransition(() => serverAction(formData))}}
                className='bg-lime-300 p-4 mx-auto w-fit'>
                {isPending ? 'Adding User...' : 'Add User'}
            </button>
        </>
    )
}

export default AddUserButton