import styles from './Rodape.module.css';

const Rodape = ({children}) => {
  return (
    <footer>
        <p>
            Feito com 🤍 por <a href='https://github.com/EmanuellyLima08'>{children}</a>
        </p>
    </footer>
  )
}

export default Rodape