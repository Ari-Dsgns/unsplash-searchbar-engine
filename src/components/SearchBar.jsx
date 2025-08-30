import { useState } from 'react'


export default function SearchBar({ onSearch, defaultValue = '' }) {
  const [value, setValue] = useState(defaultValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(value.trim())
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué estás buscando?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  )
}