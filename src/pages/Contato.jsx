import React, {useState} from 'react'

const Contato = () => {
  
  const [form, setForm] = useState({nome: "", email: "", mensagem: ""});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  };

    return (
    <div>
      <h2 className='font-bold bg-cyan-800'>Entre em Contato</h2>

        <label htmlFor="name" className='px-4'>Nome</label>
        <input type="text" name='nome' onChange={handleChange} placeholder='Digite seu nome'/>

        <label htmlFor="name" className='px-4'>Email</label>
        <input type="email" name='email' onChange={handleChange} placeholder='olá@email.com' />

        <label htmlFor="name" className='px-4'>Mensagem</label>
        <input type="text" name='mensagem' onChange={handleChange} placeholder='Digite sua mensagem'/>


      

    </div>
  )
}

export default Contato
