export async function searchPhotos(query) {
  const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('API error')
  const data = await res.json()
  return data.results || []
}