/*
class SprintRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      passwrord: '',
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
      const { firstname, lastname, email, password } = this.state;

      fetch('http://localhost:4000/api/users/register' , {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then((result) => result.json())
      .then((info) => { console.log(info); })

    render() {
      const { classes } = this.props;
      const { firstname, lastname, email, password } = this.state;
      */
'use client';
import { useState } from 'react';

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
      setErrorMessage('Please fill in all required fields.');
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
        throw new Error(`Registration failed with status ${response.status}`);
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
    <div className='w-full bg-bg-color2 rounded-lg shadow sm:max-w-md dark:bg-gray-800 dark:border-gray-700 m-auto border text-text-color md:text-m border-gray-700 flex flex-col py-8 mx-auto lg:py-0'>
      <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-bg-color2' />
      <div className='w-full bg-bg-color2 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
            Regisztráció
          </h1>
          <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Vezeték név</label>
          <input
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Gipsz'
            className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Kereszt név</label>
          <input
            type='text'
            name='firstname'
            id='firstname'
            placeholder='Jakab'
            className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Email cím</label>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Jelszó</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Jelszó újra</label>
          <input
            type='password'
            name='password'
            id='confirmPassword'
            placeholder='••••••••'
            className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
      </div>
    </div>
  );
}
