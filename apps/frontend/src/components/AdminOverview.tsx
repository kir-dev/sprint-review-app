'use client';

import { useEffect, useState } from 'react';

import api from '../lib/axiosConfig';

export default function AdminOverview() {
  interface Task {
    id: number;
    description: string;
    createdAt: string;
    projectId: number;
    userId: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [sort, setSort] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [selectedUserId, setSelectedUserId] = useState<string>('');

  console.log(sort);

  useEffect(() => {
    api.get('/tasks').then((res) => {
      setTasks(res.data);
      setSort(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    let filteredTasks = [...tasks];

    if (filter === 'name') {
      setSort([...tasks].sort((a, b) => a.userId.localeCompare(b.userId)));
    } else if (filter === 'date') {
      setSort([...tasks].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()));
    } else if (filter === 'project') {
      setSort([...tasks].sort((a, b) => a.projectId - b.projectId));
    } else {
      setSort(tasks);
    }

    if (selectedUserId) {
      filteredTasks = filteredTasks.filter((task) => task.userId === selectedUserId);
    }
    setSort(filteredTasks);
  }, [filter, tasks, selectedUserId]);

  const uniqueUserIds = Array.from(new Set(tasks.map((task) => task.userId)));
  return (
    <div className='w-3/5 flex px-8 py-8 mx-auto lg:py-0'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-full'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2 w-full text-center'>
          Áttekintés
        </h1>
        <div>
          <select
            id='filter'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='rounded bg-page-bg-color text-text-color dark:bg-bg-color2'
          >
            <option value='' className='text-text-color  hover:bg-bg-color2 hover:text-text-color'>
              Rendezés
            </option>
            <option value='name' className='text-text-color hover:bg-bg-color2 hover:text-text-color'>
              Tagok szerint
            </option>
            <option value='tasks' className='text-text-color hover:bg-bg-color2 hover:text-text-color'>
              Projekt szerint
            </option>
            <option value='date' className='text-text-color hover:bg-bg-color2 hover:text-text-color'>
              Időszak szerint
            </option>
          </select>
          <select
            id='filter'
            value={filter}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className='rounded ml-4 bg-page-bg-color text-text-color dark:bg-bg-color2'
          >
            {uniqueUserIds.map((userId) => (
              <option key={userId} value={userId}>
                {userId}
              </option>
            ))}
          </select>
        </div>
        <div>
          <table className='min-w-full max-w-lg text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 font-medium dark:border-white/10 text-2xl'>
              <tr>
                <th className='text-text-color'>Név</th>
                <th className='text-text-color'>Projekt</th>
                <th className='text-text-color'>Időszak</th>
                <th className='text-text-color'>Leírás</th>
              </tr>
            </thead>
            <tbody>
              {sort.map((task) => (
                <tr key={task.id}>
                  <td className='text-text-color font-semibold'>{task.userId}</td>
                  <td className='text-text-color font-semibold'>{task.projectId}</td>
                  <td className='text-text-color font-semibold'>{task.createdAt}</td>
                  <td className='text-text-color font-semibold'>{task.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
