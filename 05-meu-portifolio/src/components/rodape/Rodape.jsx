import styles from './Rodape.module.css';

const Rodape = ({children}) => {
  return (
    <footer>
        <p>
            Feito com 🤍 por <a href='https://www.linkedin.com/in/emanuelly-lima-427800304/'>{children}</a>
        </p>
    </footer>
  )
}

export default Rodape