import React from 'react'

const Footer = () => {
    return (
      <footer className="flex flex-col  bg-[#FF577F] p-4 text-white justify-between mt-6 bottom-0">
      <div className="flex flex-col p-4 justify-evenly">
          <div>
              <ul className="flex flex-row p-4 justify-evenly">
                  <li>contuct us: jhsdgfgvcb@gmail.com</li>
              </ul>
          </div>
          <div>
              <div className='flex justify-center mt-2'>
              
                  <p className='text-xs'>Istituto della Enciclopedia Italiana fondata da Giovanni Treccani S.p.A. © Tutti i diritti riservati | Partita Iva 007462411000</p>
              </div>
          </div>
      </div>
  </footer>
      )
}

export default Footer
