function MainContent({ image, alt, title, description }) {
  return (
    <>
      <li>
        <img src={image} alt={alt} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </>
  );
}

export default MainContent;
