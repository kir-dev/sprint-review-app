'use client';
import { useState } from 'react';

import { Footer } from './footer';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(null);

    if (
      !formData.lastname ||
      !formData.firstname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrorMessage('Kérlek töltsd ki az összes mezőt.');
      setIsSubmitting(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`A regisztráció nem sikerült. hibakód: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      setErrorMessage((error as any).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-bg-color2 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-left w-full text-xl px-20 font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
            Regisztráció
          </h1>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6' action='#'>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Vezeték név</label>
              <input
                type='text'
                name='lastname'
                id='lastname'
                value={formData.lastname}
                onChange={handleChange}
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Kereszt név</label>
              <input
                type='text'
                name='firstname'
                id='firstname'
                value={formData.firstname}
                onChange={handleChange}
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Email cím</label>
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Jelszó</label>
              <input
                type='password'
                name='password'
                id='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='••••••••'
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Jelszó újra</label>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='••••••••'
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <button
              type='submit'
              className='border font-semibold w-full text-text-color rounded-lg text-sm px-5 py-2.5 text-center border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Regisztráció...' : 'Regisztráció'}
            </button>
          </form>
        </div>
      </div>
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer'>
        <Footer />
      </a>
    </div>
  );
}
