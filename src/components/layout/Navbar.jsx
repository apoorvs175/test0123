// import { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa'
// import Logo from '../common/Logo'

// function Navbar({ scrolled }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMobileMenuOpen(false)
//       }
//     }
    
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }
    
//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [mobileMenuOpen])
  
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//   }

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false)
//   }

//   const handleWhatsApp = () => {
//     window.open('https://wa.me/1234567890', '_blank')
//   }

//   const handleCall = () => {
//     window.location.href = 'tel:+1234567890'
//   }
  
//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white shadow-nav py-4' 
//           : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container-custom">
//         <nav className="flex items-center justify-between">
//           <Link to="/" className="z-10">
//             <Logo color={scrolled || mobileMenuOpen ? 'dark' : 'light'} />
//           </Link>
          
//           <ul className="hidden md:flex md:items-center md:space-x-8">
//             <li>
//               <NavLink 
//                 to="/" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/rooms" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Rooms
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/gallery" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Gallery
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/contact" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/location" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Location
//               </NavLink>
//             </li>
//           </ul>
          
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             <button 
//               onClick={handleWhatsApp}
//               className="btn bg-green-500 hover:bg-green-600 text-white flex items-center"
//             >
//               <FaWhatsapp className="mr-2" />
//               WhatsApp
//             </button>
//             <button 
//               onClick={handleCall}
//               className="btn btn-primary flex items-center"
//             >
//               <FaPhone className="mr-2" />
//               Call Now
//             </button>
//           </div>
          
//           <button
//             type="button"
//             className="md:hidden z-10 text-2xl focus:outline-none"
//             onClick={toggleMobileMenu}
//             aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//           >
//             {mobileMenuOpen ? (
//               <FaTimes className="text-neutral-800" />
//             ) : (
//               <FaBars className={`${scrolled ? 'text-neutral-800' : 'text-white'}`} />
//             )}
//           </button>
          
//           <div 
//             className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
//               mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//             } md:hidden`}
//           >
//             <ul className="flex flex-col items-center space-y-6">
//               <li>
//                 <NavLink 
//                   to="/" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/rooms" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Rooms
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/gallery" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Gallery
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/contact" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/location" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Location
//                 </NavLink>
//               </li>
//               <li className="flex flex-col space-y-4 pt-4">
//                 <button 
//                   onClick={handleWhatsApp}
//                   className="btn bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
//                 >
//                   <FaWhatsapp className="mr-2" />
//                   WhatsApp
//                 </button>
//                 <button 
//                   onClick={handleCall}
//                   className="btn btn-primary flex items-center justify-center"
//                 >
//                   <FaPhone className="mr-2" />
//                   Call Now
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar


































// import { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa'
// import Logo from '../common/Logo'

// function Navbar({ scrolled }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMobileMenuOpen(false)
//       }
//     }
    
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }
    
//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [mobileMenuOpen])
  
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//   }

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false)
//   }

//   const handleWhatsApp = () => {
//     const message = "Hello, Clanza In, I want to know about you";
//     const phoneNumber = "9810549852"; // Your WhatsApp number
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   }

//   const handleCall = () => {
//     window.location.href = 'tel:+9810549852'; // Your phone number
//   }
  
//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white shadow-nav py-4' 
//           : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container-custom">
//         <nav className="flex items-center justify-between">
//           <Link to="/" className="z-10">
//             <Logo color={scrolled || mobileMenuOpen ? 'dark' : 'light'} />
//           </Link>
          
//           <ul className="hidden md:flex md:items-center md:space-x-8">
//             <li>
//               <NavLink 
//                 to="/" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/rooms" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Rooms
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/gallery" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Gallery
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/contact" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/location" 
//                 className={({ isActive }) => 
//                   `text-lg font-medium transition-colors duration-200 ${
//                     isActive 
//                       ? 'text-primary' 
//                       : scrolled 
//                         ? 'text-neutral-800 hover:text-primary' 
//                         : 'text-white hover:text-primary-light'
//                   }`
//                 }
//               >
//                 Location
//               </NavLink>
//             </li>
//           </ul>
          
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             <button 
//               onClick={handleWhatsApp}
//               className="btn bg-green-500 hover:bg-green-600 text-white flex items-center"
//             >
//               <FaWhatsapp className="mr-2" />
//               WhatsApp
//             </button>
//             <button 
//               onClick={handleCall}
//               className="btn btn-primary flex items-center"
//             >
//               <FaPhone className="mr-2" />
//               Call Now
//             </button>
//           </div>
          
//           <button
//             type="button"
//             className="md:hidden z-10 text-2xl focus:outline-none"
//             onClick={toggleMobileMenu}
//             aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//           >
//             {mobileMenuOpen ? (
//               <FaTimes className="text-neutral-800" />
//             ) : (
//               <FaBars className={`${scrolled ? 'text-neutral-800' : 'text-white'}`} />
//             )}
//           </button>
          
//           <div 
//             className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
//               mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//             } md:hidden`}
//           >
//             <ul className="flex flex-col items-center space-y-6">
//               <li>
//                 <NavLink 
//                   to="/" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/rooms" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Rooms
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/gallery" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Gallery
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/contact" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/location" 
//                   className={({ isActive }) => 
//                     `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Location
//                 </NavLink>
//               </li>
//               <li className="flex flex-col space-y-4 pt-4">
//                 <button 
//                   onClick={handleWhatsApp}
//                   className="btn bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
//                 >
//                   <FaWhatsapp className="mr-2" />
//                   WhatsApp
//                 </button>
//                 <button 
//                   onClick={handleCall}
//                   className="btn btn-primary flex items-center justify-center"
//                 >
//                   <FaPhone className="mr-2" />
//                   Call Now
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar





















import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Logo from '../common/Logo'

function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleWhatsApp = () => {
    const message = "hello clanzaa In"; // Default message
    const phoneNumber = "9810549852"; // Your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  const handleCall = () => {
    window.location.href = 'tel:+9810549852'; // Your phone number
  }
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-nav py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <Logo color={scrolled || mobileMenuOpen ? 'dark' : 'light'} />
          </Link>
          
          <ul className="hidden md:flex md:items-center md:space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary' 
                      : scrolled 
                        ? 'text-neutral-800 hover:text-primary' 
                        : 'text-white hover:text-primary-light'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/rooms" 
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary' 
                      : scrolled 
                        ? 'text-neutral-800 hover:text-primary' 
                        : 'text-white hover:text-primary-light'
                  }`
                }
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary' 
                      : scrolled 
                        ? 'text-neutral-800 hover:text-primary' 
                        : 'text-white hover:text-primary-light'
                  }`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary' 
                      : scrolled 
                        ? 'text-neutral-800 hover:text-primary' 
                        : 'text-white hover:text-primary-light'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/location" 
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary' 
                      : scrolled 
                        ? 'text-neutral-800 hover:text-primary' 
                        : 'text-white hover:text-primary-light'
                  }`
                }
              >
                Location
              </NavLink>
            </li>
          </ul>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button 
              onClick={handleWhatsApp}
              className="btn bg-green-500 hover:bg-green-600 text-white flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </button>
            <button 
              onClick={handleCall}
              className="btn btn-primary flex items-center"
            >
              <FaPhone className="mr-2" />
              Call Now
            </button>
          </div>
          
          <button
            type="button"
            className="md:hidden z-10 text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-neutral-800" />
            ) : (
              <FaBars className={`${scrolled ? 'text-neutral-800' : 'text-white'}`} />
            )}
          </button>
          
          <div 
            className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/rooms" 
                  className={({ isActive }) => 
                    `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
                  }
                  onClick={closeMobileMenu}
                >
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className={({ isActive }) => 
                    `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
                  }
                  onClick={closeMobileMenu}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/location" 
                  className={({ isActive }) => 
                    `text-xl font-medium ${isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'}`
                  }
                  onClick={closeMobileMenu}
                >
                  Location
                </NavLink>
              </li>
              <li className="flex flex-col space-y-4 pt-4">
                <button 
                  onClick={handleWhatsApp}
                  className="btn bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </button>
                <button 
                  onClick={handleCall}
                  className="btn btn-primary flex items-center justify-center"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
