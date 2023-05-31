import './card.css';

function Card({ link, id, handleDeleteImg }) {
  return (
    <div className="card">
      <div className="image">
        <img src={link} alt="gallery-img" />
        <button
          type="button"
          className="remove"
          onClick={() => handleDeleteImg(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
