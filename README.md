# Customizable_Portfolio

## Table of Contents

* [About the Project](#about-the-project-heart)
  * [Tech Stack](#tech-stack-star)
* [Project Structure](#project-structure-blue_book)
* [Getting Started](#getting-started-zap)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing-tada)
* [Design](#design-performing_arts)
* [Future Plans](#future-plans)
* [Contact](#contact-email)
* [License](#license)


## About The Project :heart:

![Customizable Portfolio Screenshot](https://github.com/Vidit-jindal/hello-world/blob/master/CustomizablePortfolio.png)

Customizable Portfolio is a website that aims to help people make a fully functional static website in a short amount of time without relying on web developers and that too with very little prior programming experience.

This project is part of **PSoC** (Program Summer of Code) organized by UIET Chandigarh. It is a 2 month long open source competition to help people get started with open source with the help of experienced mentors.


### Tech Stack :star:

* [React Js](https://reactjs.org/)
* [Node Js](https://nodejs.org/en/)
* [Materia-UI](https://material-ui.com/)


## Project Structure :blue_book:

    .
    ├── client                  # All Dev files
    |      └── src              # Source files                
    └── ...

## Src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── components             # Code for the website
    |   |         └── element
    |   |         └── layout
    |   |                └── Navbar.js     # Website Navbar
    |   |                └── Footer.js     # Website Footer
    |   |                └── ...
    |   |         └── pages      
    |   |                └── Element.js
    |   |                └── Home.js
    |   |                └── Team.js
    |   |         └── ...
    |   ├── App.js            # starting point
    │   └── ...
    └── ...


## Getting Started :zap:

To get a local copy up and running follow these simple steps.


### Installation
 
1. Clone the repo
```sh
git clone https://github.com/github_username/Customizable_Portfolio.git
```
2. Install NPM packages
```sh
npm install
```
3. Setup ENV variables <br>
  (i) Make a `.env` file in the root directory. <br>
  (ii) Create the following environment variables: `MONGO_URI`, `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. <br>
  (iii) Generate the environment variables by going to the respective websites.
4. Start the development server.
```sh
npm run dev
```
## Usage

### How to search for elements according to properties?

1. Click on `Elements in Navbar` 
2. Click on `search bar`.
3. Enter the properties.

### How to view and download code for elements?

1. Click on `Elements in Navbar` .
2. Select the element .
3. Click on `View Code / Download Code` .

* On clicking View code you will be provided with HTML, CSS and JS code.
* On clicking download , the files will be downloaded.

![View Code](https://media.giphy.com/media/f8mpLT6Un0zRf78Pah/giphy.gif)

### How to know/connect to the Team members?

1. Click on `Elements in Navbar` .
2. Click on the `image`.
3. Click on `Social media links` .

## Contributing :tada:

Being a project of an open source competition, we believe in the power of PRs as that's what makes any project awesome and inspires us to create and learn. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Design :performing_arts:
Refer to this Adobe XD high fidelity prototype for the UI.
- Home Page : [XD-design](https://xd.adobe.com/view/eb226106-0db5-4634-90f5-75cd939550a6-be71/)

## Future Plans
1. Add a website preview mode.
2. Dynamically feature the latest element contributor on the teams page.
3. Add like feature for elements.
4. Show most liked elements on home page.

## Contact :email:
For any query or build issues feel free to reach out the maintainers:<br>
[Aastha](https://github.com/AasthaGithub/) at aasthamehta2704@gmail.com<br>
[Sarthak](https://github.com/sarthakkundra/) at sarthakkundra21@gmail.com 
 
## License

Distributed under the MIT License. See `LICENSE` for more information.

