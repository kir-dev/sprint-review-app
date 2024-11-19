'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import api from '../lib/axiosConfig';

export default function SinglePeriod() {
  const search = useSearchParams();
  const start = search.get('start');
  const end = search.get('end');
  const numberOfTheWeek = search.get('numberOfTheWeek');
  //------------------------------------
  interface Task {
    projectId: string;
  }
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaValue, setTextareaValue] = useState<string>('');

  useEffect(() => {
    api.get('/tasks').then((res) => {
      setTasks(res.data);
    });
  }, []);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleTaskClick = (tasks: Task) => {
    setSelected(tasks.projectId);
    setIsOpen(false);
    setShowTextarea(true);
    setTextareaValue('');
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div className='w-3/5 flex px-8 py-8 mx-auto lg:py-0'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-full'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2 w-full text-center'>
          {numberOfTheWeek}. hét ({start} - {end})
        </h1>
        <div>
          {!selected && (
            <button
              className='text-text-color border mb-5 rounded-lg p-2 font-semibold text-sm border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4 transition duration-300'
              onClick={handleDropdown}
            >
              + feladat hozzáadása
            </button>
          )}

          {isOpen && (
            <div className=''>
              {tasks.map((task) => (
                <div
                  key={task.projectId}
                  onClick={() => handleTaskClick(task)}
                  className='w-6 text-text-color border mb-2 rounded-lg p-2 font-semibold text-sm border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4'
                >
                  {task.projectId}
                </div>
              ))}
            </div>
          )}
          {showTextarea && (
            <div className='mb-10'>
              <p className='text-text-color text-l mb-2'>{selected ? `${selected} :` : 'Nincs kiválasztott projekt'}</p>
              <label htmlFor='textarea' />
              <textarea
                id='textarea'
                value={textareaValue}
                onChange={handleTextareaChange}
                className='w-full h-60 bg-bg-color2 border border-[#8b97a4] text-white sm:text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Írd le mit dolgoztál a héten'
              />
              <button
                type='submit'
                className='mt-5 border font-semibold text-text-color rounded-lg text-sm px-5 py-2.5 text-center border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4 transition duration-300'
              >
                Mentés
              </button>
              <button
                type='submit'
                className='float-right mt-5 border font-semibold text-text-color rounded-lg text-sm px-5 py-2.5 text-center border-[#8b97a4] hover:border-text-color hover:bg-red-500 hover:text-white focus:ring-4 transition duration-300'
              >
                Törlés
              </button>
              <hr className='mt-5 border border-y-0.5' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
