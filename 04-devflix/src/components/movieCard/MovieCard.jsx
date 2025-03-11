import styles from "./MovieCard.module.css";

const MovieCard = (props) => { //propriedades ou argumentos que eu não sei a quantidade correta
  return (
    <div className={styles.Movie}>
      <div>
        <p>{props.Year}</p>
      </div>

      <img src={props.Poster} alt="" />
      <h4>{props.Type}</h4>
      <h3>{props.Title}</h3>
    </div>
  );
};

export default MovieCard;
