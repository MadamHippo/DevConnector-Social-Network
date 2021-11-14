import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} Dev Connector
  </footer>
  )
}

// function based component, one function and it returns html, easy and simple.