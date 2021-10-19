import React, { useState, useEffect } from 'react'
import DeleteModal from '../components/DeleteModal'
import 'quill/dist/quill.snow.css'
import { useQuill } from 'react-quilljs'
import getData from '../utils/getData'
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

const ClientEdit = (props) => {
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const [name, setName] = useState('')
  const [fetchState, setFetchState] = useState(states.initial)
  const [error, setError] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  useEffect(async () => {
    setFetchState(states.loading)
    try {
      const response = await getData(
        `${config.api}/api/client/${props.match.params.id}`
      )

      console.log(response)
      if (response.data.body.detail && quill) {
        setName(response.data.body.name)
        quill.setContents(JSON.parse(response.data.body.detail))
      }
      setFetchState(states.initial)
    } catch (error) {
      setError(error)
      setFetchState(states.error)
    }
  }, [quill])

  const handleFormChange = (e) => {
    setName(e.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setFetchState(states.loading)
    try {
      await sendData(
        `${config.api}/api/client/${props.match.params.id}`,
        'PUT',
        {
          id: props.match.params.id,
          name: name,
          detail: JSON.stringify({ ...quill.getContents() })
        }
      )
      setFetchState(states.initial)
      props.history.push('/client')
    } catch (error) {
      setError(error)
      setFetchState(states.error)
    }
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleDelete = async () => {
    setFetchState(states.loading)
    try {
      await sendData(
        `${config.api}/api/client/${props.match.params.id}`,
        'DELETE'
      )
      props.history.push('/client')
      setFetchState(states.initial)
    } catch (error) {
      setError(error)
      setFetchState(states.error)
    }
  }

  return (
    <>
      <Header page='Clientes' />
      <section className='add'>
        <h3>EDITAR CONTACTO</h3>
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
              />
            </label>
          </div>
          <div id='editor' ref={quillRef}></div>
          <button type='submit' id='add__button'>
            Editar cliente
          </button>
          <button
            type='button'
            className='delete_button'
            onClick={handleOpenModal}
          >
            Eliminar cliente
          </button>
        </form>
        <DeleteModal
          opened={openModal}
          handleCloseModal={handleOpenModal}
          handleDelete={handleDelete}
        />
        {fetchState === states.loading && <Loading />}
        {fetchState === states.error && <p>{error}</p>}
      </section>
    </>
  )
}

export default ClientEdit
