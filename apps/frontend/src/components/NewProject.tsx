'use client';
import { FormEvent, useState } from 'react';

import api from '../lib/axiosConfig';

export default function NewProject() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const projectFormState = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    if (!formData.name || !formData.description) {
      setErrorMessage('Incomplete Row(s)');
      return;
    }

    try {
      await api('/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(formData),
      });
    } catch (error) {
      setErrorMessage((error as any).message);
    }
  };

  return (
    <div className='w-3/5 flex px-8 py-8 mx-auto lg:py-0'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-full'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2 w-full text-center'>
          Új Projekt Létrehozása
        </h1>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <form onSubmit={projectFormState}>
          <div className='mb-6'>
            <label className='block mb-2 text-m font-medium text-text-color dark:text-bg-color2'>Projekt név</label>
            <input
              onChange={handleChange}
              type='text'
              id='name'
              name='name'
              className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <div className='mb-10'>
            <label className='block mb-2 text-m font-medium text-text-color dark:text-bg-color2'>Leírás</label>
            <textarea
              onChange={handleChange}
              name='description'
              id='description'
              className='w-full h-60 bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>

          <div className='justify-center flex'>
            <button
              type='submit'
              className='w-1/2 border font-semibold text-text-color rounded-lg text-sm px-5 py-2.5 text-center border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4 transition duration-300'
            >
              Létrehozás
            </button>
          </div>
        </form>
      </div>
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer' />
    </div>
  );
}
