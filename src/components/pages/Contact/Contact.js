import React, { useState } from 'react';

import { TextField, dividerClasses } from '@mui/material';

import { Button, MenuItem } from '@mui/material';

import Stack from '@mui/material/Stack';

import './Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateName = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setName(value);
        if (name === 'name') {
            if (value === '') {
            setName('');
            setErrorMessage(`Field required. Please enter name into field.`);
            }
        }
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };

    const validateEmail = (e) => {
        e.preventDefault();
        console.log(e);
        const { name, value } = e.target;
        setEmail(value);
        if (name  === 'email') {
            if (value === '') {
                setEmail('');
                setErrorMessage(`Email invalid, please enter a valid email into the field.`);
            };
        }
            // pattern to valid a proper email address entry
            const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            console.log(!pattern.test(value));
            if (!pattern.test(value)) {
                setErrorMessage(`Email invalid. Please Try Again.`);
            } else {
                setErrorMessage(``);
            }
        }
    };

    // message validation

    const validateMessage = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setMessage(value);
        if (name === 'message') {
            if (value === '') {
                setMessage('');
                setErrorMessage(`Please enter a message into the space provided`);
            }
        }
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };

    // contact form redner for the page

    return (
        <>
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                Contact
            </h1>
        </div>
        <form style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2}>
                <MenuItem>
                    <TextField
                        defaultValue={name}
                        noBlur={validateName}
                        id='contact-contents'
                        fullWidth
                        label='Name'
                        name='name'
                        type='text'
                        variant='outlined'
                        style={{ backgroundColor: 'lightblue' }}
                    />
                </MenuItem>
                <MenuItem>
                    {' '}
                    <TextField
                    defaultValue={email}
                    onBlur={validateEmail}
                    id='contact-contents'
                    fullWidth
                    label='Email Address'
                    name='email'
                    type='email'
                    variant='outlined'
                    style={{ backgroundColor: 'lightblue' }}
                    />
                </MenuItem>
                <MenuItem>
                    <textarea
                        defaultValue={message}
                        onBlur={validateMessage}
                        rows={20}
                        cols={50}
                        id='contact-content'
                        label='Message'
                        name='message'
                        type='text'
                        variant='outlined'
                        style={{ backgroundColor: 'lightblue' }}
                        placeholder='Enter message here.'
                        />
                </MenuItem>
                {errorMessage && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <MenuItem style={{ justifyContent: 'center' }}>
                    <Button
                        id='contact-button'
                        className='on-hover'
                        xs={{ width: '100%' }}
                        variant='contained'
                    >
                        Submit
                    </Button>
                </MenuItem>
            </Stack>
        </form>
            
        </>
    );

