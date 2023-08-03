import React from "react";
import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillBellFill, BsGridFill, BsMoonFill } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AuthContext } from "../../Auth/AuthProvider";
import { Avatar } from "flowbite-react";
const NavbarComp = () => {
  const { setOpen, openMenu } = useContext(AuthContext);
  // const [isOpen, setOpenMenu] = useState(false);
  return (
    <nav className='bg-[#130451] min-w-[100vw] md:px-5  '>
      <div className=' text-white py-3 w-full flex justify-between gap-4 '>
        <div className='flex items-center '>
          <div className='ml-5'>
            {openMenu ? (
              <HiOutlineMenuAlt2
                className='w-8 h-8 cursor-pointer'
                onClick={() => setOpen(!openMenu)}
              />
            ) : (
              <AiOutlineMenu
                className='w-8 h-8 cursor-pointer'
                onClick={() => setOpen(!openMenu)}
              />
            )}
          </div>
          <div className='ml-5'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block w-full px-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search '
                required
              />
            </div>
          </div>
        </div>
        <div className='md:flex  items-center  justify-between hidden '>
          <BsGridFill className='mx-4 w-7 h-8' />
          <BsMoonFill className='mx-4 w-7 h-8' />
          <BsFillBellFill className='mx-4 w-7 h-8' />
          <div className='flex  items-center gap-4 px-5 '>
            <Avatar
              img={"https://i.ibb.co/cYDsgQt/team-mem.png"}
              rounded
              bordered
            />
            <div>
              <p> Name </p>
              <p> Admin </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
