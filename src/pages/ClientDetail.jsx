import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { FaPen } from 'react-icons/fa'
import Loading from '../components/Loading'
import getData from '../utils/getData'
import config from '../config'
import Header from '../components/Header'
import '../styles/pages/ClientDetail.scss'

const states = {
  loading: 0,
  error: -1,
  initial: 1
}

const ClientDetail = (props) => {
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: { toolbar: false }
  })
  const [name, setName] = useState('')
  const [fetchState, setFetchState] = useState(states.initial)
  const [error, setError] = useState(null)

  useEffect(async () => {
    setFetchState(states.loading)
    try {
      const client = await getData(
        `${config.api}/api/client/${props.match.params.id}`
      )
      if (client.data.body.detail && quill) {
        quill.setContents(JSON.parse(client.data.body.detail))
        setName(client.data.body.name)
        setFetchState(states.initial)
      }
    } catch (error) {
      setError(error)
      setFetchState(states.error)
    }
  }, [quill])

  return (
    <>
      <Header page='Clientes' />
      <section className='clientDetail'>
        <div className='clientDetail__title'>
          <h3>INFORMACIÓN DEL CLIENTE</h3>
        </div>
        <div className='clientDetail__client-container'>
          <p>{name}</p>
          <Link to={`/client/detail/${props.match.params.id}/edit`}>
            <FaPen />
            <span>Editar cliente</span>
          </Link>
        </div>
        <div ref={quillRef} className='clientDetail__item'></div>
      </section>
      {fetchState === states.loading && <Loading />}
      {fetchState === states.error && <p>{error}</p>}
    </>
  )
}

export default ClientDetail
