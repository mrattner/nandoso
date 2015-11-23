# Nandoso
This is an implementation of a website for a fake restaurant. I created it for Phase 2 of the [Microsoft Student Accelerator](http://www.msa.ms/) programme. The website and its database are hosted on Azure at [mrattner2.azurewebsites.net](http://mrattner2.azurewebsites.net/).

## Technologies used
* ASP .NET WebApi backend using Entity Framework ORM and MySQL database
* Modular frontend using RequireJS for loading modules
* [Knockout.js](http://knockoutjs.com/) for data binding and MVVM structure
* [Director.js](http://github.com/flatiron/director) for single-page app with hash-based routing
* SignalR shoutbox
* LESS for writing the site stylesheet

## Bells and whistles
* Animated loading icon from [loading.io](http://loading.io/)
* Chicken logo by [Freepik](http://www.freepik.com) from [flaticon.com](http://www.flaticon.com)
* Favicon from [favicon.cc](http://www.favicon.cc/?action=icon&file_id=838863)
* Logo font from [Google Fonts](http://www.google.com/fonts/specimen/Sigmar+One)
* Responsive site layout that adjusts to many browser viewport sizes. Parts of my stylesheet are based on [Skeleton.css](http://getskeleton.com/).

## Features to add
* User accounts/authentication for restaurant employees
* Store chat messages on the server
* Admin view for adding/removing menu items, choosing the day's specials, and responding to customer comments