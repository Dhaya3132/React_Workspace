export function Components({image, Title, Description}) {
    return (
      <li>
        <img src = {image} />
        <h3>{Title}</h3>
        <p>{Description}</p>
      </li>
    );
  }