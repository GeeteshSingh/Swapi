export function Person({ name, hairColor, eyeColor, birthYear }) {
    return (
      <li>
        {name}
        <ul>
          <li>hair: {hairColor}</li>
          <li>eyes: {eyeColor}</li>
          <li>Birth year: {birthYear}</li>
        </ul>
      </li>
    );
  }