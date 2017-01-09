# activity

Log date, time, username, and filename (including path) in `activity.txt` file (path: `c:/inetpub/wwwroot/claimweb/logs`)

## Features

- Javascript async script loaded in `includes/footer.html`

## Requirements

- easy import to csv
    *  text fields must be comma delimited
    *  entries separated by a line feed
    *  copy txt to csv via powershell: `cp \\ahcsdev\inetpub\wwwroot\claimweb\logs\activity.txt c:\Users\ibx4746\Desktop\activity.csv`

## Development

- node mssql backend api
- gulp
- browserify
- for development using browserify
    *  cd to claimweb and cli: `gulp watch --module activity`
    *  writes to `./modules/<module>/src` folder
- for production build
    *  cli: `gulp --module activity`
    *  build css and js into `./js` folder

## Installation

give **write** permission on `logs/activity.txt` file to `IIS AppPool\api`