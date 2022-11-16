import './styles.css';
import imgIcon from '../../assets/img/notification-icon.svg';

export default function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={imgIcon} alt="Notificar" />
    </div>
  );
}
