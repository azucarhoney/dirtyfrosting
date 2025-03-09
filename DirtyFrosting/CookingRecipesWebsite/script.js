function searchRecipes() {
    var input, filter, recipes, recipeItems, title, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    recipes = document.getElementById("recipes");
    recipeItems = recipes.getElementsByClassName('recipe');
  
    for (i = 0; i < recipeItems.length; i++) {
      title = recipeItems[i].getElementsByTagName("h3")[0];
      if (title) {
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          recipeItems[i].style.display = "";
        } else {
          recipeItems[i].style.display = "none";
        }
      }
    }
  }
