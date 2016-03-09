CSE 5335 Project 1 - Spring 2016
====================================================================

Name: Sunayana Suresh Gowda

UTA ID: 1001107621

NetID: ssg7621

Webdata Management and Xml project

Website: https://ssg7621-cse5335-project-1.herokuapp.com

--------------------------------------------------------------------

•	 Server side Framework: Node.js

   For the above project, I have used Express.js which is a Node.js framework. Node is compatible with all the browsers. It provides 
Asynchronous APIs. It runs single threaded event based loop which is always ready to accept requests. I personally found Node to be easier to learn and adapt compared to other frameworks. The amount of material you get online to learn node helped a lot with this project. Node is also a widely used framework which makes learning it useful for future projects as well.

•	 Client side Framework: JQuery

  It is easy to integrate with any front end framework without any problem and has many built-in function which are ready-to-use. JQuery is efficient and secure and it has a large library compared to other Javascript libraries. JQuery and Ajax work well together and it requires less lines of code to achieve simple features. It is easy to play around with JSON and DOM in JQuery. It is a framework with is developing as days go by.

•	 Implementation which was easy
   
   It was easy to work with html. I have used bootstrap for styling the sheet and it was easy to use since it has a lot of built in functions. It was easy to understand node.js and it did not consume too much time. There were many tutorials and steps available to create simple node.js applications which helped me with my project.

•	 Implementation which was hard

   Deploying the project on heroku especially on a windows systems is troublesome. Heroku is very compatible with Mac and it did not cause any problems while deploying. I tried deploying my application on windows several times but it failed to work and it was difficult to even understand what the problem was.

•	 Other components installed for the project
   
   I have used express and path dependencies in my node.js and I had to install these by the following commands.
   
         npm install express --save
         npm install path --save
         
   This adds the node_modules folder to my project.


•	Ubuntu commands required to deploy and run the server

  
   Github
   
          git init
          git commit -m "First"
          git remote add origin "https://github.com/sunayana7/ssg7621-cse5355-project-1.git"
          git push -u origin master
          git clone https://github.com/sunayana7/ssg7621-cse5355-project-1.git
  
   Heroku
   
         heroku login
         heroku create ssg7621-cse5335-project-1
         git push heroku master

   
References

1. https://nodejs.org/en/

2. https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

3. https://devcenter.heroku.com/articles/github-integration

4. http://api.jquery.com/jquery.getjson/

