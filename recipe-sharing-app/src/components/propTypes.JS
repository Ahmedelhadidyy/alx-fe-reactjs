const PropTypes = (recipeId) =>
RecipeDetails.propTypes = {
    recipeId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };
export default PropTypes  