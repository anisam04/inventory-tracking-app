# π Inventory Tracking Application
View App: [Replit Link](https://replit.com/join/qzkcnighkl-ani0104)

# πΊοΈ About The Project 
Build an inventory tracking web application.
Requirements:
* Basic CRUD Functionality:
   * Create inventory items
   * Edit Them
   * Delete Them
   * View a list of them
* Ability to create warehouses/locations and assign inventory to specific locations
* Run the App on Replit

## π§ Tech Stack

* JavaScript
* Express
* Mongoose
* MongoDB Atlas
* EJS View Engine
* Bootstrap


## βοΈ ERD 

![ERD](/public/images/ERD-inventory-tracking-app.png)

# β Challenges 

* Had used DeleteOne instead of findByIdAndDelete initially. This was leading to delete only the first item in the inventory list instead of the selected one.
* .env file issue with Replit: I have used MongoDB Atlas and enclosed the DATABASE_URL key in a .env file. Github auto ignores the .env file while uploading to repo. However, after importing the Github repo to Replit, I am getting a 'uri parameter should be string' error related to mongoose. I believe it's because replit seems to not have received the .env file at all. So, for the purposes of this project, I have added a secret env file directly in replit.



# π§ Icebox Items

* Add third party API 
* Add Search Function on home/about page
* Add Inventory Dashboards on Home Page
