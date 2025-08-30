import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ImageGrid from '../components/ImageGrid'
import { searchPhotos } from '../services/unsplash'


export default function App() {
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSearch = async (q) => {
    if (!q) return
    setQuery(q)
    setLoading(true)
    setError('')
    try {
      const results = await searchPhotos(q)
      setImages(results)
    } catch (e) {
      setError('Hubo un problema buscando imágenes 😞')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>IMAGE SEARCHBAR ENGINE</h1>
      

      <SearchBar onSearch={onSearch} defaultValue={query} />

      {loading && <p className="status">Cargando…</p>}
      {error && <p className="status error">{error}</p>}

      <ImageGrid images={images} />
    </div>
  )
}