import Article from "./Article";

function ArticleList(props) {
  return (
    <main>
      {props.posts.map(item => (
        <Article key={item.id} title={item.title} date={item.date} preview={item.preview} />
      ))}
    </main>
  );
}
export default ArticleList;
