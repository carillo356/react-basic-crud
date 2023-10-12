import React from 'react'
import RouterButton from '../components/ui/RouterButton'
import ClientTable from '../components/ClientTable'

const Home = () => {
  return (
    <>
      <div className='container my-5'>
        <h2>List of Clients</h2>
        <RouterButton name="New Client" navigate='/create/client' />
        <br/><br/>
        <ClientTable />
      </div>
    </>
  )
}

export default Home