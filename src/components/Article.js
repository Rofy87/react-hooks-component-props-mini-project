function Article(props) {
  const newDate = props.date ? props.date : "January 1, 1970";
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{newDate}</small>
      <p>{props.preview}</p>
    </article>
  );
}
export default Article;
