# [Brian's - Spotify 🎶](https://brians-spotify.vercel.app)

## About The Project
This is an Frontend Web App to search your own favorite songs and create your own playlists with Spotify! You can also find recommendations of songs from different genres. The project uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to interact with Spotify.

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
## Features 🚀

### Login Page
This is where you can login to your own Spotify Account!
<img src="https://user-images.githubusercontent.com/32363208/130087326-d513bd4e-e5f5-4954-a611-977a8f2ba1ec.jpeg" height=500/>

### Create Playlist Page
In create playlist page, you can search your own favorite tracks and add it to your playlist! You can search any song you want and select them, then name your playlist and its description, you can submit!
<img src="https://user-images.githubusercontent.com/32363208/130087550-811e8b06-9236-4689-bdfd-db7ba524ac64.jpeg" height=500/>

### Recommendations Page
We can also recommend you songs for you to listen if you are confused what to listen! We give you any possible genres!
<img src="https://user-images.githubusercontent.com/32363208/130087724-549d46a1-f083-4c44-af5a-5883a418a2ff.jpeg"/>
and browse away!
<img src="https://user-images.githubusercontent.com/32363208/130087989-06bb618d-c1bb-429b-803b-b769727c91c9.jpeg"/>
