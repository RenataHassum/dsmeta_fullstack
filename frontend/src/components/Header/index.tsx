import './styles.css';
import imgLogo from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={imgLogo} alt="Logo DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por Renata Hassum
            <a href="https://www.linkedin.com/in/renataviottohassumdev"></a>
          </p>
        </div>
      </header>
    </>
  );
}
