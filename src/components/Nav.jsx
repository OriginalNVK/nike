import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
      <header className='padding-x py-8 absolute z-10 w-full'>
          <nav className='flex justify-between items-center max-container'>
              <a href="/">
                  <img src={headerLogo} alt="logo" width={130} height={30} />
              </a>

              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((link) => (
                      <li key={link.label}>
                          <a href={link.href} alt={link.label} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'>{link.label}</a>
                      </li>
                  ))}
              </ul>
              <div>
                  <img src={hamburger} alt='hamburger' className='hidden max-lg:block' width={25} height={25}/>
              </div>
          </nav>
    </header>    
  )
}

export default Nav