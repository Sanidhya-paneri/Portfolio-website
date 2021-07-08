import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
      options={{
        strings: [
          "Web Developer",
          "MCA Student",
          "Python/Django Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    )
}

export default Type
