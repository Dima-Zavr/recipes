export const RecipeSteps = ({ steps }) => {
  return (
    <ol>
      {steps.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ol>
  )
}
