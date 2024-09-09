'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from './Footer';

export default function SprintLogin() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  async function IsUserRegistrated(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailElement = document.getElementById('email') as HTMLInputElement;
    const passwordElement = document.getElementById('password') as HTMLInputElement;

    if (emailElement && passwordElement && emailElement.value && passwordElement.value) {
      const email = emailElement.value;
      const password = passwordElement.value;

      try {
        const response = await fetch('http://localhost:3001/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(`Login failed, error code: ${response.status}`);
        }

        const data = await response.json();

        if (data.isRegistered) {
          const navigate = useNavigate();
          navigate('/afterlogin');
          console.log('User is registered');
        } else {
          setErrorMessage('User is not registered');
        }
      } catch (error) {
        setErrorMessage((error as any).message); //valami hibakezelés kell ide
      }
    } else {
      setErrorMessage('Email and password are required');
    }
  }

  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-bg-color2 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
            Sprint Review bejelentkezés
          </h1>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          <form className='space-y-4 md:space-y-6' onClick={IsUserRegistrated}>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Email cím</label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='example@gmail.com'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Jelszó</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    aria-describedby='remember'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-bg-color1 focus:ring-3 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800'
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label className='text-text-color dark:text-gray-300'>Emlékezz rám</label>
                </div>
              </div>
              <a href='#' className='text-text-color text-sm font-medium hover:underline dark:text'>
                Elfelejetted a jelszavad?
              </a>
            </div>
            <button
              type='submit'
              className='border font-semibold w-full text-text-color rounded-lg text-sm px-5 py-2.5 text-center border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4'
            >
              Bejelentkezés
            </button>
            <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>
              Bejelentkezés másképp:
            </label>
            <div className='px-6 sm:px-0 max-w-sm'>
              <button
                type='button'
                className='text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2'
              >
                <svg
                  className='mr-2 -ml-1 w-4 h-4'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='google'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 488 512'
                >
                  <path
                    fill='currentColor'
                    d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                  />
                </svg>
                Log in with Google
                <div />
              </button>
            </div>
            <button className='w-full text-white bg-[#4285F4] focus:ring-[#4285F4]/50 hover:bg-[#4285F4]/90 focus:outline-none focus:ring font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              AutSch (out of service)
            </button>
            <p className='text-sm font-light text-text-color dark:text-gray-400'>
              Nincs még felhasználód?{' '}
              <a href='/registration' className='text-text-color font-medium text hover:underline dark:text'>
                Regisztráció
              </a>
            </p>
          </form>
        </div>
      </div>
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer'>
        <Footer />
      </a>
    </div>
  );
}
