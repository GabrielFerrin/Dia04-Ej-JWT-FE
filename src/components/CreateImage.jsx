import './CreateImage.css'

const CreateImage = () => {
  const handleSave = (e) => {
    e.preventDefault()
    const file = e.target.url.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('url', file)
      formData.append('title', e.target.title.value)

      const rawResponse = fetch('http://localhost:3000/api/images', {
        method: 'POST',
        headers:
          { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: formData
      })
      const response = rawResponse.json()
      console.log(response)
    }
  }

  return (
    <div className="create-image-cmp">
      <h1>Agregar imagen</h1>
      <form onSubmit={handleSave}>
        <input type="text" name="title" id="title" placeholder='Nombre de la imagen' />
        <input type="file" name="url" id="url" accept="image/*" />
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}
export default CreateImage