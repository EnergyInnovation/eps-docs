# eps-docs

The EPS documentation website is built using [Docusaurus 2](https://docusaurus-archive-october-2023.netlify.app/docs), a modern static website generator.

## Installing on Windows 11

Installing Docusaurus for live preview of the EPS docs unavoidably involves using a few terminal commands.

Click the Windows Start menu. Start typing "PowerShell" in the search box until you see the PowerShell app. Click "Run as Administrator". Answer Yes when prompted by Windows User Account Control.

Install Node.js LTS (Long Term Support) if you don't already have it.
```
winget install OpenJS.NodeJS.LTS
```

Install the pnpm Node package manager. Answer Y when prompted to agree to terms.
```
winget install -e --id pnpm.pnpm
```

Close the PowerShell window, and then open a new PowerShell window. (You don't need to be administrator now.) Verify that Node and pnpm are installed correctly. This will print their version numbers if all is well.
```
node -v
pnpm -v
```

Using your favorite Git app, clone the `eps-docs` repo from the `https://github.com/EnergyInnovation/eps-docs.git` URL.

Using the command line, change to the `eps-docs` folder. You need to know the folder pathname as it appears on the command line, which is a string that starts with `C:\`. You can get that by navigating to the folder in Windows File Explorer, clicking the three dot dropdown menu, and choosing "Copy path".

Replace the `{eps-docs folder}` placeholder in the command below with the pathname of the folder where you cloned the `eps-docs` repo.
```
cd {eps-docs folder}
```

Install the Docusaurus software we use to build the EPS docs.
```
pnpm install
```

## Authoring docs with live preview

Now you can run Docusaurus live preview. It will instantly render your Markdown edits in your web browser. Open PowerShell and give these commands every time you want to work on the docs.
```
cd {eps-docs folder}
pnpm dev
```

Open the docs in the web browser on your local PC. The last command will print out  a `localhost` URL — it's probably `http://localhost:3000`. Enter that in your browser address bar, and bookmark it for future convenience.

Edit the Markdown pages in the `docs` folder using your text editor. The model-specific region docs are in the `docs/models` folder. Image files go in the `static/img` folder.

Before committing your documentation edits, run the build command, which does more thorough checks on the most recent commit while building the docs. It's pretty common for a documentation file to look OK but then fail to build once you push it.
```
pnpm build
```

When you are finished, close the PowerShell window.

## Which branch to use

If you are making documentation edits that can be published any time, use the `develop` branch. If your work won't be published immediately, please make a new branch and do your work there. I merge the `develop` branch into the `main` branch to actually publish the documentation on the production server.

