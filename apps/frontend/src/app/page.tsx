import { SprintLogin, WorkSelector } from '@/components/hello-world';

export default function Home() {
  return (
    <main className='flex items-center justify-center bg-page-bg-color'>
      <SprintLogin />
      <WorkSelector />
    </main>
  );
}
