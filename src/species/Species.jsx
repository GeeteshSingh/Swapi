export function Species({ name, language, averageLifespan, classification }) {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
        <li>classification: {classification}</li>
      </ul>
    </li>
  );
}
