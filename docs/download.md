---
title: Download and Installation
---

The Energy Policy Simulator (EPS) can be used in via its powerful [web interface](online-model-tutorial) in your browser, without the need to download or install any software.  However, if you wish to view or edit the model's input data or source code, you will need to download the model.

The EPS is developed in [Vensim](http://vensim.com/), a program produced by Ventana Systems for the creation and simulation of System Dynamics models.  While Vensim is sold commercially in several tiers, Ventana Systems produces a free Vensim Model Reader that can read and simulate (but not edit) models.  These instructions will walk you through the process of installing Vensim Model Reader and the Energy Policy Simulator.

Vensim Model Reader is available for Windows and Mac operating systems.  The directions below are based on Windows, but the process should be similar on a Mac.

## How to Obtain Vensim Model Reader

Before downloading the EPS, you should install a copy of Vensim Model Reader.  You may download this software on the [Vensim Free Downloads page](http://vensim.com/free-download/).  Check the "Anti-spam" box on that web page.  **Be sure to change the radio button in the "Product" section from "Vensim PLE" to "Model Reader."**  The EPS will not function under Vensim PLE (personal learning edition).  Select your operating system, enter your name and email address, and click the "Download software" button.  You will receive an email with a link to download Vensim Model Reader.  Download and run this installer, following all prompts.  After installing Vensim Model Reader, open the program to ensure it runs successfully.

Note that the EPS Vensim version 8 or later (64-bit).  If you already have Vensim installed, but your copy is too old, you can follow the steps above to get an up-to-date version of Vensim Model Reader.

## How to Obtain the EPS

Once Vensim Model Reader is installed, visit the documentation page in the Model Regions section of this documentation for the model you want, and download the EPS by clicking the download link.

A compressed archive (.zip file) will be downloaded named "eps-" followed by the model region and the model's current version number.

### Uncompress the .zip Archive

It is necessary to extract the files from the .zip archive before running the model.  On Windows, .zip archives look similar to folders, and you can double-click them to open them and even open the files inside them.  **This does not mean you have extracted the files from the archive.**  (Vensim cannot write files into a .zip archive, so Vensim will not be able to run the model properly, as this process generates an output file containing the run results.)  To extract the files, right-click on the .zip archive and select "Extract All..." then click "Extract" in the dialogue box that appears.  This will generate an uncompressed folder containing the model files.  You should now delete the .zip archive, so that there is no possibility of accidentally running the copy of the model that is still located inside the .zip archive.

### Show File Extensions

It is easiest to use the EPS if your operating system is not configured to hide file extensions, which is the default behavior.  If you do not see file extensions such as .vpmx, .mdl, .py, .lst, .vgd, .cin, and .xlsx in the files in the model distribution, it is recommended that you change your OS settings to display file extensions.  On Windows 7 and Windows 10, go to the Control Panel/Settings, type "file extensions" in the search field, and click "Show or hide file extensions."  In the "Folder Options" dialogue box that appears, the "View" tab should be active.  Clear the box for "Hide extensions for known file types" and click "OK".

## Running the EPS

Double-click the `EPS.vpmx` model file to open the model in Vensim Model Reader.  (If the .vpm file extension is not associated to Vensim, you may need to browse for Vensim Model Reader (`venread.exe`) and select it in order to associate the .vpmx extension to this program.)  You may now examine and run the model.  For guidance, please see the [How to Conduct Analysis in Vensim Model Reader](how-to-conduct-analysis) page (and its sub-pages on the [documentation index](index)) and/or refer to [Vensim's help documentation](http://www.vensim.com/documentation/index.html).

## Model Folder Contents

The model folder will contain the following files and folders:

### Folders

* `docs`, a copy of the documentation viewable [on this website](index)

* `InputData`, a folder that contains all of the input data files (in .csv format) read by the model at runtime, as well as the Excel files used to generate those data files.  The Excel files contain bibliographic source information, so model users know the origin of every piece of data used in the model.  Data are sorted into folders by model section and then by acronyms for variable names.  A key to the meaning of all acronyms is provided in the `InputData` folder, in the file `acronym-key.xlsx`.  For more details, see the [input data documentation page](input-data).

* `web_assets`, a small number of files used in that EPS distribution's online home page, documentation pages, and social media sharing features, not of interest to most users

### Files

* `.gitignore`, a file assisting in management of the Git repository containing the model's code

* Four scripts in the Python programming language (with `.py` extension), used to allow for batch runs and other automated behavior.  For instructions, see the [documentation pages on using the Python scripts](automated-analysis).

* `EPS.mdl`, the model source code, suitable for use in Vensim Pro or Vensim DSS (and viewable in a text editor)

* `EPS.vpmx`, the model in compiled form, suitable for use in Vensim Model Reader

* `GraphDefinitions.vgd`, a text file defining properties of graphs that appear when the model is opened in Vensim

* `License.txt`, a copy of the GNU General Public License version 3 (GPLv3), under which the EPS is licensed.  See the [Software License page](software-license) for more details.

* Two variable lists: `OutputVarsForCarbonCapToTaxScript.lst` and `OutputVarsToExport.lst`, text files listing the names of output variables, used by the Python scripts

* `ReadMe.docx`, a file containing some introductory information and a link to the documentation on this website

* Policy packages or scenarios (with `.cin` extension), which can be loaded by Vensim.  These scenarios are also featured in the EPS's web interface.

* `WebAppData.xlsx`, a spreadsheet that contains information used by the online web application that runs the model

* `BAU_Lever_Settings.txt`, a file that contains control settings for the business-as-usual (BAU) scenario

* Any region specific notes or documentation. In the U.S. EPS, this includes "NDC policy settings and calculations.xlsx" (documenting policy settings in one of the default scenarios), as well as a file providing a comparison of EPS results to external calibration data, and a PDF explaining various U.S. specific policy assumptions

If you are using Vensim Model Reader, the only files you will need are the compiled version of the model (with .vpmx extension) and the InputData folder.  The .mdl file and .vgd file are only useful if you have Vensim Pro or Vensim DSS.  (A copy of GraphDefinitions.vgd is bundled into the compiled .vpmx file, so you do not need the graph definitions text file to view graphs when using the compiled version of the model.)  The .py and .lst files are only useful if you have Vensim DSS (because this is the only version of Vensim that supports scripts).  To use these scripts, you will also need to have [Python 3](https://www.python.org/downloads/) installed.  For more information, see the [Automated Analysis with Python Scripts](automated-analysis) page.

## Archived Releases

Past releases of the U.S. Energy Policy Simulator can be downloaded from the [releases section](https://github.com/EnergyInnovation/eps-us/releases) of Energy Innovation's U.S. EPS GitHub repository.  The compressed "Source code" file below each release is the complete model package, including the Vensim model files, input data, and Python scripts.  (Note that to run the model, you will need to install Vensim Model Reader.  For help, see the instructions on the [Download](download) page.)

For non-U.S. versions of the Energy Policy Simulator, go to the list of [Energy Innovation's GitHub repositories](https://github.com/orgs/EnergyInnovation/repositories), select the repository for the region of interest, and navigate to its "releases" section (on the "code" tab).

Many changes, including bug fixes, have been made with each model version.  See the Version History section of the model documentation page for details.  We recommend using only the most recent version of the EPS for analysis purposes.  However, older versions of the EPS may be useful for comparing the performance of different EPS releases or replicating results obtained via an older EPS release.

---
*This page was last updated in version 4.0.4.*
