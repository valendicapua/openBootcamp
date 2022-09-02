import React from 'react'

export const ContactCard = ({props}) => {
    console.log(props)

    return (
    <div>
    <h1> Mi nombre es {props.nombre} {props.apellido}</h1>
    <h2>Mi email es {props.email}</h2>
    <h3>{props.conectado ? 'Contacto En Línea':'Contacto No Disponible'}</h3>
    </div>
  )
}
