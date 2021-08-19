# [Brian's - Spotify 🎶](brians-spotify.vercel.app)

## About The Project

This app is dedicated for Generasi Gigih, a training program by YABB x Gojek on various technology paths. This is intended for the final project where students build a Spotify app clone which have been compiled through 6 weeks of training on Frontend Development. The project uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to interact with Spotify.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png" height=100/>

### Built With

The major framework that was used to create this project is [React.js](https://reactjs.org/docs/getting-started.html) and used different libraries such as:
- [axios](https://github.com/axios/axios) for networking with the Spotify Web API.
- [React Router](https://reactrouter.com/) for navigational components in a single page application.
- [Redux](https://redux.js.org/) for state management.
- [Material-UI](https://material-ui.com/) for declaring some components.
- [Typescript](https://www.typescriptlang.org/).
- [Vercel](https://vercel.com/) for deployment.

<!-- GETTING STARTED -->
## Getting Started

To get started in running this app, make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed and create your own client ID:
1. Login into [Spotify Web API](https://developer.spotify.com/dashboard/login)
2. In the [dashboard](https://developer.spotify.com/dashboard/applications), create a new app with the scope as `playlist-modify-private`.
3. You'll retrieve your own client ID.

After getting your own client ID, you can clone this repo:
```sh
git clone https://github.com/briancatraguna/Spotify-Clone.git
```

Then create a new file named `.env` under the main directory `Spotify-Clone` with the following contents where you need to put your client ID:
```
REACT_APP_CLIENT_ID = <YOUR CLIENT ID>
```
Note: Without wrapped by quotations

### How to run in local

After putting the client id in the `.env` file you need to:
1. Install NPM packages
   ```sh
   npm install
   ```
2. Change the following code in `Spotify-Clone/src/components/LoginButton/index.tsx` to match the following:
   ```JS
   const LoginButton = () => {
    const MY_WEBSITE: string = "http://localhost:3000/callback"
    const REDIRECT_URL: string = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${MY_WEBSITE}&scope=playlist-modify-private`

    return (
        <a href={REDIRECT_URL}>
            <Button variant="contained" color="primary" className="myButton">Login</Button>
        </a>
    )
   }
   ```
 3. Run the following command
    ```sh
    npm start
    ```
   
### How to deploy your own app

1. Think of your own subdomain, can be anything. For example `my-spotify`, then change the code in `Spotify-Clone/src/components/LoginButton/index.tsx` with the `const MY_WEBSITE` as:
   ```JS
   const MY_WEBSITE: string = "https://my-spotify.vercel.app/callback
   ```
3. Setup your own remote GitHub repository with the cloned project inside it. 
4. Go to [Vercel](https://vercel.com/) and create a new project.
5. Import your GitHub repository.
6. Setup your project name, use the same you used in step 1. Your project name will be the subdomain continued by `.vercel.app`.
7. Setup the Environment Variables with the name as `REACT_APP_CLIENT_ID` and the value is your Client ID.
8. Click on deploy!



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
