<p align="center">
  <div align="center">
    <a href="https://mstream.pages.dev/">
      <img alt="MSTREAM" src="https://raw.githubusercontent.com/cd-Crypton/mstream/refs/heads/main/mstream/public/img/mstream-new.png" width="220"/>
    </a>
  </div>
    <h3 align="center">MSTREAM - Stream Movies & TV Shows</h3>
    <p align="center">
</p>
</p>
<p align="center">
    <a href="https://mstream.pages.dev/">MSTREAM</a> is an open-source movies and tv shows streaming service that uses <a href="https://www.themoviedb.org/">TheMovieDatabase</a> API, built using ReactJS with javascript and CSS and can be deployed in Cloudflare (as Pages). It lets you easily find any movie with intuitive search, and suggestion feature.
    <img alt="MSTREAM" src="https://raw.githubusercontent.com/cd-Crypton/mstream/refs/heads/main/mstream/public/landingpage.webp"/>
 </p>

<details>
<summary>Current Features</summary>

### General

- Home page with Banner Slide, Trending Movies, TV Shows and Anime
- Mobile responsive and fast page loading
- Movies, TV Shows and Popular page with Advance Filter Option
- With dynamic multi-searching feature

### Watch Page

- Side information panel
- 3 third-party source for video playing
- Available Episodes/Seasons for TV Shows

</details>

## Local Development

### 1. Make sure you have node installed on your device

### 2. Run the following code to clone the repository and install all required dependencies

```bash
git clone https://github.com/cd-Crypton/mstream.git
cd mstream/mstream
npm install
```

### 3. Refer the <a href="https://github.com/cd-Crypton/mstream/blob/main/mstream/.env.example">.env.example</a> to set your own .env file.

## Start the server

```bash
npm run dev
```

## Live Development

### Cloudflare (Pages)

Host your own instance of <a href="https://mstream.pages.dev/">MSTREAM</a> on Cloudflare.
- Fork this repository.
- Go to Cloudflare >> Workers and Pages >> Create application >> Pages >> Import an Existing Git Repository
- Project Name: `mstream or whatever name you want - just make sure to edit wrangler.jsonc`
- Production Branch: `main`
- Framework Preset: `None`
- Build Command: `npm run build`
- Build Output Directory: `dist`
- Root Directory: `mstream`
- After successful deployment, go to Settings >> Variables and Secrets >> Then the following details in <a href="https://github.com/cd-Crypton/mstream/blob/main/mstream/.env.example">.env.example</a>

### Pull Requests

- Pull requests are welcomed that address bug fixes, improvements, or new features.
- Fork the repository and create a new branch for your changes.
- Ensure your code follows our coding standards.
- Include tests if applicable.
- Describe your changes clearly in the pull request, explaining the problem and solution.

 ### Reporting Issues

If you discover any issues or have suggestions for improvement, please open an issue. Provide a clear and concise description of the problem, steps to reproduce it, and any relevant information about your environment.

### Support

If you like the project feel free to drop a star ✨. Your appreciation means a lot.
