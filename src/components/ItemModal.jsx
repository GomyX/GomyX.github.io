import Modal from 'react-modal';
import './ItemModal.css';

// Set app element for accessibility
if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

function ItemModal({ isOpen, onClose, item }) {
  if (!item) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={200}
    >
      <div className="modal-header">
        <h2 className="modal-title">{item.title}</h2>
        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="modal-date">{item.date}</div>
        <div className="modal-category">
          <span className={`category-badge ${item.category}`}>
            {item.category.replace('-', ' ')}
          </span>
        </div>
        <p className="modal-short-description">{item.shortDescription}</p>
        <div className="modal-details">
          <h3>Details</h3>
          <p>{item.details}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ItemModal;
