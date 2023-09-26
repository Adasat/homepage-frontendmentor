import React from 'react'

function Attribution() {
  return (
    <div>
      <div className="flex flex-row mt-10 text-center xs:text-sm">
        Challenge by
        <a
          className="text-SoftRed italic ml-1"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by
        <div className="text-SoftRed italic font-400 animate-bounce ml-2">
        <a
          href="https://github.com/Adasat"
        >
          Pedro Bonilla
        </a>

        </div>
        
      </div>
    </div>
  );
}

export default Attribution