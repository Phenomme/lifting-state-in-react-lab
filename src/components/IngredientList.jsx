// `src/components/IngredientList.jsx`
const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li 
            key={index} 
            style={{ backgroundColor: ingredient.color, padding: '10px', margin: '5px' }}
          >
            {ingredient.name}
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  