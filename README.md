# eps-docs

The EPS documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installing on Windows

Installing Docusaurus for live preview of the EPS docs site unavoidably involves a few command line commands. However, you only have to do the setup once, and it will be worth it!

Click the Windows Start menu, scroll down to the Windows PowerShell folder, open it, and then right-click Windows PowerShell. Choose "Run as Administrator". Answer Yes when prompted by Windows User Account Control.

Enter the following command (cut and paste recommended).
```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

Install Node.js LTS (Long Term Support).
```
pnpm env use --global lts
```

When it finishes, you can continue using PowerShell, or close the PowerShell window and switch to Terminal, if you prefer.

Verify that Node is installed correctly. This will print the Node version number if all is well.
```
node -v
```

Using your favorite Git app, clone the` eps-docs` repo from the `https://github.com/EnergyInnovation/eps-docs.git` URL.

Using the command line, change to the `eps-docs` folder. You need to know the folder pathname as it appears on the command line, which is a string that starts with `C:\`. You can find that by navigating to the folder in Windows File Explorer, and then clicking in the address bar. It will change to the folder pathname. Copy and paste it in the next command.

Replace the `{eps-docs folder}` placeholder in the command below with the pathname of the folder where you cloned the `eps-docs` repo.
```
cd {eps-docs folder}
```

Install the Docusaurus software we use to build the EPS docs from Markdown files.
```
pnpm install
```

## Authoring docs with live preview

Now you can run Docusaurus live preview that will instantly render your Markdown edits. Open Terminal or PowerShell and give these commands every time you want to work on the docs.
```
cd {eps-docs folder}
pnpm dev
```

Open the docs in the web browser on your local PC. The last command will print out  a `localhost` URL — it's probably `http://localhost:3000`. Enter that in your browser address bar, and bookmark it for future convenience.

Edit the Markdown pages in the `docs` folder using your text editor. The model-specific region docs are in the `docs/models` folder. Image files go in the `static/img` folder.

When you are finished, close the PowerShell or Terminal window.
