import './Gallery.css'
import { Link } from "react-router-dom"

const Gallery = () => {
  return (
    <div className="gallery-cmp">
      <Link to='/dashboard/create-image'>
        <button>Create Image</button>
      </Link>
      <div className="gallery">
        <img src="/David.jpg" alt="" />
        <img src="/Alice.jpg" alt="" />
        <img src="/Bob.jpg" alt="" />
        <img src="/David.jpg" alt="" />
        <img src="/Emily.jpg" alt="" />
        <img src="/Emma.jpg" alt="" />
        <img src="/Jane.jpg" alt="" />
      </div>
    </div>
  )
}
export default Gallery