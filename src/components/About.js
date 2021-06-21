function About(props) {
  const imgLink = props.image ? props.image : "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imgLink} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
