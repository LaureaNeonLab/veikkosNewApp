# tutorial-1

## First things First

In this tutorial we have an empty application. That simply wont do!
For the intial setup we need to first get our application downloaded to our own local directory.
To do this we open git cmd line or git bash and type the following command:

    git clone https://github.com/LaureaNeonLab/tutorial-1.git

This means we now have a local copy of the code on our computer. Yay! 
Always check it with 'git status' just incase we have any issues.

Next we need to open it in our lightweight editor, in this case we are using Visual Code 
<<<<<<< HEAD
- [x] Download here: https://code.visualstudio.com/ 
- [x] In Visual studio open the **tutorial-1** folder.
- [x] Review the comments in the index.html js/app.js

After the above steps we can move onto the real coding below.
> http://learn.ionicframework.com/videos/ FInd great videos here for starting out with Ionic!

## Step 1 - Folder structure and extra pages.

Lets begin with what your menu should look like and what that means, see below image.

![alt image](https://github.com/LaureaNeonLab/tutorial-1/blob/master/folder.png)
> This will not be what our folder look like at the end of the course.
 
Clearly we can see that index.html is our only page.
Lets create a folder in the main structure called pages.
Inside this folder we need 5 .html pages I will name mine as follows:
```
pages
- pOne.html
- pTwo.html
- pThree.html
- pFour.html
- pFive.html
```

in each one of these files we will add the following code so that we know if we are on the right page or not:
> The * stands for the page number, write the word not number so you can easily see it in the header.
```
<ion-view title="Page *"> 
  <ion-nav-buttons side="left">
    <button menu-toggle="left"class="button button-icon icon ion-navicon"></button>
  </ion-nav-buttons>
  <ion-content class="has-header">
    <h1>Empty</h1>
  </ion-content>
</ion-view>
```

The **<ion-view>** is a wrapper for this view.
Think of it as a block of code that will be injected into a view area. Like a placeholder for pictures.
Typically a view will be placed in a viewport. Ionic labels these as **<ion-nav-view>**

We now have 5 extra views for us to be able to navigate to with different content. Feel free to add extra to these as you see fit.

## Step 2 - Navigation and routing.

Since Ionic uses AngularJs it means it is very focused on using ui-router.
> More info here: https://github.com/angular-ui/ui-router/wiki
> Videos here: https://egghead.io/lessons/angularjs-introduction-ui-router 

The router works of states and url routes. A state can be a "place" or reference in your application UI/Nav.
This essentially means its the description of what it looks like at that time "in that state". States work a little bit like how folder structure does, 
in the way you can have a parent state (folder) and then multiple child states (views/pages in that folder).

You will understand this more after we add some functionality to our js/app.js file.
Open this file now and add the following to line 33:

```
myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: "/home",
      abstract: true,
      templateUrl: "home.html",
    });
    
  /* 
    The line below is a catch all that returns you to the '/home' state if we dont find any others.
    We only have one state so thats not relevant yet.
  */ 
  $urlRouterProvider.otherwise('/home');
});
```

Lets add some state functionality for the pages we created earlier.
before the *.state* section seen above add this code block:
```
.state('pOne', {
  url: "/p1",
  templateUrl: "pages/pOne.html",
})
```
> This gives pOne a state we can navigate too

Repeat this step in the app.js until you have a .state provider for all the files in pages folder.
