'use client';

import { useEffect, useState } from 'react';

import api from '../lib/axiosConfig';
import { Task } from './tasks-dto';

export default function CurrentJobs() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onGetData = () => {
    api.get('/tasks').then((res) => {
      setTasks(res.data);
    });
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div className='flex flex-col min-h-screen w-1/2'>
      <div className='text-center pt-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Munkák
        </h1>
      </div>
      <div className='flex pt-32 items-center justify-center'>
        <div className='text-text-color items-center justify-center w-full'>
          <table className='min-w-full max-w-lg text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 font-medium dark:border-white/10 text-2xl'>
              <tr>
                <th className='px-6 py-4'>Jelenleg zajló munkák</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'
                >
                  <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                    {task.description}
                  </td>
                  <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
