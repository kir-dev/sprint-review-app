import Navbar from './Navbar';

export default function GreetingsPage() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-start justify-start h-screen px-8 py-8 mx-auto lg:py-0'>
        <h1 className='w-full text-center text-xl px-20 font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Kir-Dev Sprint Review
        </h1>
        <p>
          {/*Ide szeretnék valami szöveget, hogy mit hol talál meg a felhasználó az oldalon. Pl a munkák alatt lesz a  */}
        </p>
        <div className='py-5'>
          {/*                       NEM IDE VALÓ, HANEM A WORKSELECTORRA
          <h2 className='w-full text-center text-2xl font-bold leading-tight tracking-tight text-text-color-h1'>
            Beszámolási időszak
          </h2>
          <div className='flex flex-col items-center justify-center py-3'>
            <select className='bg-bg-color2 border-text-color border rounded-lg text-left px-5 py-2 w-full text-text-color hover:bg-[#2c3540] focus:ring-4 text-xl outline outline-bg-colro2 outline-offset-0'>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          */}
          <h2 className='w-full text-left text-2xl font-bold leading-tight tracking-tight text-text-color-h1 py-3'>
            Projektek
          </h2>
          <div className='flex flex-col items-center justify-center'>
            {/*
            <select className='bg-bg-color2 border-text-color border rounded-lg text-left px-5 py-2 w-full text-text-color hover:bg-[#2c3540] focus:ring-4 text-xl outline outline-bg-colro2 outline-offset-0'>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            */}
            <nav>
              <div>
                <ol>Option 1</ol>
                <ol>Option 2</ol>
                <ol>Option 3</ol>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
