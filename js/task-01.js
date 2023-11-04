const categoriesList = document.querySelectorAll('#categories .item');
    // liczenie kategorii
    console.log(`Number of categories: ${categoriesList.length}`);
    // Dla każdej kategorii zrob:
    categoriesList.forEach(category => {
      // Znajdź nagłówek h2 w  kategorii
      const categoryName = category.querySelector('h2').textContent;
      // Znajdź wszystkie elementy li w kategorii
      const elementsList = category.querySelectorAll('ul li');
      // licz i wypisz liczbę elementów w kategorii
      console.log(`Category: ${categoryName}`);
      console.log(`Elements: ${elementsList.length}`);
    });
    