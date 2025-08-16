export default function ImageGrid({ images = [] }) {
  if (!images.length) {
    return <p className="hint">Escribe algo y pulsa Buscar ✨</p>
  }

  return (
    <div className="grid">
      {images.map((img) => (
        <a
          key={img.id}
          className="card"
          href={img.links?.html}
          target="_blank"
          rel="noreferrer"
          title={img.alt_description || 'Ver en Unsplash'}
        >
          <img src={img.urls?.small} alt={img.alt_description || 'Imagen'} />
          <div className="meta">
            <span>{img.user?.name}</span>
            <span>❤ {img.likes}</span>
          </div>
        </a>
      ))}
    </div>
  )
}