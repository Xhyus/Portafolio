import React from 'react'
import '../styles.css'

const BotonNavbar = ({ texto, url }) => {
    return (
        <a className='botonNavbar border-bottom' href={url} >{texto}</a>
    )
}

export default BotonNavbar