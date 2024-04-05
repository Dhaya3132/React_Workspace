import reactvite from '../assets/react.svg';

const description = ['Crucial', 'Core', 'Fundamentals'];

function genrandom(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  return (
    <header>
      <img src={reactvite} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description[genrandom(3)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
