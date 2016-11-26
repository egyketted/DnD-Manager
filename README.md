# DnD-Manager

An electric character sheet manager app, with DM mode in Angular 1

## Most welcomed Contributions

Currently the following contributions are most needed:
* Build process capeable of:
  * Deploying to a static fileserver
  * Using propety files for build properties
  * Replacing placeholders in configuration files from build properties
  * Watching file changes and running the current source on localhost
  * Creating a build timestamp with the hash of the build properties file in the following format: Build yyyyMMddhhmmss-hash of the contents of build properties file
  
## About DnD-Manager

Dungeons and Dragons is a great game of creativity and immagination, however it is mostly ruined by the tons of administrative tasks, like keeping you character sheet up to date, summing your stats like saves, attack, etc.
This things can be easily automatized, no more searching for descriptions, feats, spells in 3-5 books, no more tearing on your character sheet from the extended eresing and rewriting of your hp, skills, etc.

DnD Manager intends to autoatize what can be automatized and provide an easy-to-use, accessibly form browser electric character sheet, with DM support, allowing DMs to view the character sheets of their players, make secret save throws or award xp and much more.

Currently DnD Manager did not yet reached the MVP state. 

Planned versions:
* MVP V0.1.0-ALPHA:
  * Browser available electric character sheet
  * No data validation, everything is up to the player
  * Little to no CSS
  * FE: Angular 1 with grunt
  * BE: JSON-server
  * Automation of the most simple things (DC, HP, Attack, Saves, etc.)
  * Administrator page, for adding feats, spells, skills, etc.
  * Players can choose their class, race, feats, spells, languages, etc from dropdown menus, with descriptions in tooltips
  * Automated level up based on class and race with drop down menus with available feats, spells.
  * Automated refresh of base attributes on level up, like base saves, spells per day, attack, DC
  * Automated or manual dice throws
  * DM page
    * Showing all player's character sheets
    * DM can award xp
* First release V1.0.0
  * Extensive Data validation
  * Extensive CSS
  * Improved usability
  * FE: Angular 1 with grunt
  * BE: Java 8 restfull webserver with Spring MVC and Spring Data backed by Hibernate over a MYSQL database
  * More info comming
* Second release V2.0.0
  * Extended BE functionality
  * Automation of everithing that can be automated (I know it is quite vague but relese 2 is not planned for at least one or two years)

## Currently planned entities and their relationships

![entityRelations](https://github.com/egyketted/DnD-Manager/blob/master/entityRelationDiagram.jpg)

Contributions are most welcomed, but will be subject to high standards (So that even I (a backend developer) can understand them :) )
