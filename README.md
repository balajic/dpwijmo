# Quick Tips on what I leard from this Exercise

### Trying this app
```
# Install http-server if you haven't
npm install -g http-server

#Clone the repo
git clone https://github.com/balajic/dpwijmo.git

#Go inside the dpwijmo directory and start the http server 
$http-server

.. That's it. Now open up browser and type in http://localhost:8080

```  

### Ver 1.0
  Deleted local Angular repo with CDN
  router.min.js has a bug, however router.dev.js works 

### Ver 1.1 
  Added main.js and moved bootstap fn call to it
  
### Ver 1.2 
   Added Data Prep App Home page and deleted .js files for the .ts files
   
### Ver 1.3
   ** Implemented first HTTP Serrvice inside a Child Component ** 
   Added QueryKDB Service and DPAppCmp, DPAppFilterCmp components
   Populates the State Filter from KDB 
   
### Ver 1.4
  ** Added DPAppGridCmp -> Data Grid Component inside the App Component.
  Now App Component has two child Components Filter & Grid
  Both USes the QueryKDB Service

### Ver 1.5
** Integrated the flex grid

### Ver 1.5.1
** Integrated local KDB database. Added favicon.ico + home page icons

  
#Quick Reference
=======================================================================================================================================
### Creating Service that connects to KDB
=======================================================================================================================================
Create a Service class(QueryKDB) and import Http, Injectable as well as RxJs map
  Add the member function which access the Web service and return http.get.map() in it. Let the Component subscribe to it

Go back to main.ts/bootstrap.ts Import HTTP_PROVIDERS, ServiceClass and pass it to the bootstarp function

In the Component class, just import the Service Class and inject it to the constructor.
  Subscribe to the Service class memeber function which retunrs the Observable and assign the output to a Data Model in the Component Class
  Just use the data model in the Component HTML template

=======================================================================================================================================
### Creating Child Component inside a Parent Component
=======================================================================================================================================
  ** First create the Child Component as a regular Componet (Lets Call it as "NGGridCmp").
     Should have "selector"(lets say &lt;NGGRID&gt;) and "Template" which contains HTML code for this Component.
     It can import & implement the Services class if required.
     Go back to the Parent Class
     Import "NGGridCmp" and  add it to the "directives" section in the @Component decorator
     Also add the &lt;NGGRID&gt; tag to the parent HTML "template"
     
=======================================================================================================================================
### KDB Commands
=======================================================================================================================================

q)h:hopen `:localhost:5001
q)GNRL:h "select from GNRL where i<5000"
q)save `:GNRL
-- Loading the table
q)GNRL: get `:GNRL
q)state:`state xasc select distinct state:Recipient_State from GNRL
q)\p 80
q)\l q-util.q