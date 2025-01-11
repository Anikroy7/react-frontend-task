

# BLOG APPLICATION  
This Blog Application contains a dynamic blog list and details pages with a consistent navigation bar. It fetches blog data using the provided API endpoint.

## Features

- Logo on the left, "Sign In" & "Register" buttons on the right.
- Notification bell counter updates on blog card details clicks.
- Fullscreen mode
- Full appliation responsive.
- Displays title, image, excerpt, category, publication date, and a "Read More" button  dynamically.
- Search blogs by title or keywords.
- Automatically loads more blogs as users scroll.
- dynamically rendered blogdetails page with newsletter and user review section.
## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility


## Tech Stack

**Client:** React, Tanstack query, TailwindCSS, DaisyUi



## Run Locally

Clone the project

```bash
  git clone  https://github.com/Anikroy7/react-frontend-task.git
```

Go to the project directory

```bash
  cd react-frontend-task
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```




## Challenges & Insights
One of the key challenges I faced was implementing infinite scrolling, as the backend API did not support query parameters like limit or page for paginated data retrieval. Instead, the API returned all the data at once. To address this, I devised a custom solution by dynamically managing data slicing and rendering on the frontend, ensuring a seamless user experience.

## Feedback

Completing this task was a great learning experience. It enhanced my problem-solving skills and allowed me to develop creative solutions while learning new techniques.







## Authors

- [@Anikroy7](https://github.com/Anikroy7)

