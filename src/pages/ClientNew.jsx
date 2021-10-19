import React, { useEffect, useRef, useState } from 'react'
import 'quill/dist/quill.snow.css'
import { useQuill } from 'react-quilljs'
import sendData from '../utils/sendData'
import config from '../config'
import Loading from '../components/Loading'
import Header from '../components/Header'
import toolbar from '../toolbar'
import '../styles/pages/New.scss'
import '../styles/components/EditorComponent.scss'

const states = {
  loading: 0,
  error: -1,
  initial: 1
}

const ClientNew = (props) => {
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const [name, setName] = useState('')
  const [fetchState, setFetchState] = useState(states.initial)
  const [error, setError] = useState(null)

  const handleFormChange = (event) => {
    setName(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setFetchState(states.loading)
    try {
      await sendData(`${config.api}/api/client`, 'POST', {
        name: name,
        detail: JSON.stringify({ ...quill.getContents() })
      })
      setFetchState(states.initial)
      props.history.push('/client')
    } catch (error) {
      setError(error)
      setFetchState(states.error)
    }
  }

  return (
    <>
      <Header page='Clientes' />
      <section className='add'>
        <h3>AGREGAR UN NUEVO CONTACTO</h3>
        <form
          action=''
          id='add__form'
          className='add__form'
          onSubmit={handleFormSubmit}
        >
          <div className='add_form-element-container'>
            <label htmlFor='name'>
              <p>NOMBRE DEL CLIENTE</p>
              <input
                onChange={handleFormChange}
                type='text'
                name='name'
                id='name'
                placeholder='Primer nombre'
                className='add__form-input'
                value={name}
                required
              />
            </label>
          </div>
          <div id='editors' ref={quillRef}></div>
          <button type='submit' id='add__button'>
            Agregar Cliente
          </button>
        </form>
        {fetchState === states.loading && <Loading />}
        {fetchState === states.error && <p>{error}</p>}
        {console.log(fetchState)}
      </section>
    </>
  )
}

export default ClientNew
