import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
    return (
        <div className="flex items-center justify-between">
            <h1 className='text-3xl font-black'>Augusto Webp <span className='text-blue-400'>Timer</span></h1>
            <nav className='flex gap-4 h-full'>
                <NavLink to="/" className={({ isActive }) =>
                    `border-t-2 border-t-transparent border-b-2 h-full flex justify-center items-center p-2 hover:border-b-blue-400 ${
                isActive
                    ? ' text-blue-400'
                    : 'border-b-transparent'}`
                    } title='timer'><Timer size={24}/>
                </NavLink>
                <NavLink to="/history" end className={({ isActive }) =>
                    `border-t-2 border-t-transparent border-b-2 h-full flex justify-center items-center p-2 hover:border-b-blue-400 ${
                isActive
                    ? ' text-blue-400'
                    : 'border-b-transparent'}`} title='history'>
                        <Scroll size={24} />
                </NavLink>
            </nav>
        </div>
    )
}