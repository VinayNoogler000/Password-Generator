# Password Generator App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/VinayNoogler000/Password-Generator/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/VinayNoogler000/Password-Generator)](https://github.com/VinayNoogler000/Password-Generator/issues)
[![GitHub stars](https://img.shields.io/github/stars/VinayNoogler000/Password-Generator)](https://github.com/VinayNoogler000/Password-Generator/stargazers)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/VinayNoogler000/Password-Generator/blob/main/src/index.html)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/VinayNoogler000/Password-Generator/blob/main/src/style.css)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://github.com/VinayNoogler000/Password-Generator/blob/main/src/app.js)


## 📖 Overview

A secure and customizable password generator web application that allows users to create strong passwords with various options including uppercase letters, numbers, and special characters. The app features an intuitive interface with real-time password generation.


## 🎥 Preview

[![Password Generator App](https://github.com/VinayNoogler000/Password-Generator/blob/main/assets/Preview.png?raw=true)](https://password-generator-vt.vercel.app/)


## 🛠 Technologies Used

- **HTML5**: Provides the structure and content of the web page.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **JavaScript**: Adds interactivity and functionality to the web application.


## 🚀 Features

- Generate secure passwords with customizable length (3-15 characters)
- Include/exclude uppercase letters, numbers, and special characters
- Copy generated passwords to clipboard with one click
- Responsive design that works on mobile and desktop devices


## 📅 Planned Features

- Password strength meter
- Save password history (with local storage)
- Dark/light theme toggle
- Implement user authentication to enable multiple users to securely store and retrieve passwords using a unique identifier (e.g., username or email).
- Password auto-generation on page load - ✅Completed


## 📚 Learnings

Throughout the development of Password-Generator, several key learnings and insights were gained:

1. In Tailwind-CSS, to reference CSS variables we can use this shorthand `bg-(--my-bg-color)`, instead of using `by-[var(--my-bg-color)]`, as Tailwind does the work of adding `var()` to the utility class.
2. When using Tailwind-CSS, it's always recommended to use `@layers` directive to maintain the correct specificity.
3. In Tailwind-CSS, we should use `@apply` directive mostly in `@layer components`, and only when styling for those elements which are: small & reusable components, selected using parent-child or descendent selectors, pseudo classes/elements, and elements which consists of dynamic/generated content.
4. Changing the appearance (color, shape, and size) of the `input[type="range"]` element, by using Pseudo Elements and modern-CSS properties (Tailwind's Utility Classes).
5. Using Pseudo-class and Pseudo-element together to style the `slider-thumb` of the `input[type="range"]` element.
6. In Tailwind-CSS V4, use `@utility` directive for reusable, single-purpose utilities, instead of defining them `@layer utilities`.
7. Keep base styles minimal (even without `@layer base`) since `Preflight` handles most styling resets, in Tailwind-CSS V4.
8. Modifying the appearance (size, shape and color) of the `input [type="checkbox"]` element, by using CSS properties.
9. The `inset` CSS property which, in modern-css, is used as a shorthand for `top`, `bottom`, `left` and `right` CSS properties. For eg: `inset: 10px` will be equivalent to `top, bottom, left, right: 10px` CSS properties.
10. Using "DRY" approach in JS logic, which is "DON'T REPEAT YOURSELF" approach to not only increase the readability and maintainability of the code, but also to increase the performance, by performing less number of redundant/repetitive operations.

These learnings contributed significantly to the robustness and user experience of the Password-Generator application, as well as to my Software Development concepts.

## 📝 Prerequisites

Before cloning and running this project locally, ensure you have the following installed:

- **Code Editor**: An editor like VSCode to efficiently view the code and for making any modifications.
- **Git**: Version control system to clone the repository.
- **Node.js**: Required for efficiently installing project-dependencies.
- **Web Browser**: A modern web browser like Chrome, Firefox, or Edge for locally running the web-app.
- **Basic Understanding**: Knowledge of HTML, CSS, and JavaScript to make changes.

## ⚙️ Setup Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/VinayNoogler000/Password-Generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Password-Generator
   ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Open `index.html` in your preferred web browser.


## 🤝 Contributing

To contribute to this project, follow these steps:

1. Fork and clone the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.


## 📂 Project Structure

The project structure is organized as follows:

```
Password Generator/
├── assets/        # Contains images and other assets used in the application.
├── dist/          # Contains distribution/build files for production.
├── src/           # Contains the main source files for the application.
│   ├── index.html # The HTML file for the application.
│   ├── style.css  # The CSS file for styling the application.
│   ├── app.js     # The JavaScript file for the application logic.
├── .gitignore     # Specifies files and directories to be ignored by Git.
├── LICENSE.txt    # Contains the license information for the project.
├── package.json   # Contains metadata about the project and its dependencies.
└── README.md      # The file you are currently reading, consisting of documentation.
```

## 🐛 Found a Bug? Have a Feature Suggestion?

If you find a bug, please open an issue [here](https://github.com/VinayNoogler000/Password-Generator/issues) with a clear description and steps to reproduce.   
I would love to hear your feedback on this project! If you have suggestions for performance improvements or ideas for new features, please feel free to open an issue [here](https://github.com/VinayNoogler000/Password-Generator/issues) or [Contact me](#-contact-developer--owner), via my socials.
Your feedback means a lot to me, as it helps me grow and become a more powerful Software Developer Engineer.


## 🙏 Acknowledgments

I would like to thank the following resources and tools that made this project possible:

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework used for styling the application.
- [Git](https://git-scm.com/) for version control.
- [Node.js](https://nodejs.org/) for efficiently maintaining project's metadata, and managin project's dependencies, efficiently.
- [VSCode](https://code.visualstudio.com/) for being an excellent code editor.
- [DoSomeCoding YT Channel](https://www.youtube.com/watch?v=fKhjFGBt4lc), one of the most important one, as [He](https://github.com/anshuopinion) gave me and other beginners not only the idea of building this Password-Generator web app, but also it's basic design and tutorial (if I get stuck). So, Thank you so much to, [Anshu bhaiya](https://www.linkedin.com/in/anshuopinion) again for giving me the idea and designs of multiple frontend project, to strengthen my fundamentals.


## 💼 Careers

I am currently open to the following roles: 

* 💻 Looking for Internships in Web Development Roles (Frontend/Backend/Full-Stack).
* 👨‍💻 Seeking Full-time Software Developer Engineer (SDE) Positions
* 📍 Specialization: Web Development (Frontend, Backend and Full-Stack)

If you are interested in working with me or have any opportunities, please reach out to me via [LinkedIn](https://www.linkedin.com/in/vinay-tambey/), [Email](mailto:vinaytambey000@gmail.com), or [Other Socials](#-contact-developer--owner) mentioned below.


## 🗓️ What My Daily Life Looks Like?
As of now (latest version of this README file), I'm building Projects using Web Devlopement technologies to strengthen my fundamentals, in both Frontend & Backend, thriving to become a Full-Stack Web Developer, while learning about Databases, and AI Tech-Trends. 

This project/website is my 9th self-made Frontend project (previous one was [FinTrack App](https://github.com/VinayNoogler000/FinTrack)), made to strengthen my Frontend Web Development Skills. Also, I'm thinking to make this a Full-Stack Web App, by implementing the [Planned features](#-planned-features).

In Frontend Web Development, as of now, one more project is left -Mobile Navigation Menu, means, total 10 projects- from the [YT Playlists](https://youtube.com/playlist?list=PLPppPPmk0i3gRIXCO2e1nEYyU-WMA_MDJ&si=24cw-XJYjPOhlIR-), to become really good in JavaScript.

After, that I will be building atleast 3-5 major Projects using React.js framework with Redux.js library, while specializing in Backend Web Development, and learning other demanding and valuable technolgies (like AI-Agents using MCP Servers).

At last, after Completing Frontend Development Projects, and Learning Backend Development, I'll be making atleast 3 Major Full-Stack Projects, using MERN tech-stack.

*You can Checkout My Planned Career Roadmap in Software Engineering profession, [here](https://www.notion.so/vinay-tambey/Career-Roadmap-1540de180657805d87dee74657f45d4e?pvs=4).*


## 📜 License

This project is licensed under the [MIT](https://github.com/VinayNoogler000/Password-Generator/blob/main/LICENSE) License. If in future, you'll be using any part of my project, like idea, styling or logic-implementation, then plesae, at least don't forget to give the credits. Just like how I did in [Acknowledgements](#-acknowledgments) section.


## 📞 Contact Developer & Owner

**Vinay Tambey**
- LinkedIn: [Vinay Tambey](https://www.linkedin.com/in/vinaytambey)
- Email: [Send Email to Vinay](mailto:vinaytambey000@gmail.com)
- Twitter/X: [@VinayNoogler000](https://x.com/VinayNoogler000)
- GitHub: [@VinayNoogler000](https://github.com/VinayNoogler000)

For any queries or suggestions, feel free to reach out through above mentioned links.   


## 📊 Project Status

This project is, currently, not in development by the Owner, but we're always looking to add new features and improvements!


## 💼 Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Vinay Tambey](https://github.com/VinayNoogler000)