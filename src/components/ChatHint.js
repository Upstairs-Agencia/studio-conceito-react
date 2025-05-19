import "../styles/chatHint.css";

export default function ChatHint({ visible, onClose }) {
    return (
        <div
            className={`chat-hint ${visible ? 'visible' : ''}`}
            onClick={onClose}
        >
            <span>Fale com a gente!</span>
        </div>
    );
}
