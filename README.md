# Input
The program takes a list of movies as input, where each movie is represented as an object containing properties such as title, genre, and release year. The movie data is stored in an array within the `MovieList` component. Additionally, user input is accepted through a dropdown menu that allows the selection of movie genres to filter the displayed list.

# Process
The program processes the movie data using state management and event handling. Initially, the list of movies is displayed in its entirety. When the user selects a genre from the dropdown menu, the program filters the list to show only the movies that match the selected genre. This is achieved by updating the component's state using React's `useState` hook. Furthermore, an event handler is implemented to detect when a movie is clicked, displaying an alert with the movie title. The program utilizes JSX to dynamically render the filtered list of movies based on the user's selection.

# Output
The output consists of a visually structured list of movies displayed in a user-friendly format. Each movie is shown as a separate card, containing the title, genre, and release year. When a specific genre is selected, only relevant movies are displayed. If the user clicks on a movie, an alert with the movie's title is triggered, providing additional interaction. The overall UI is styled to enhance readability and usability.

