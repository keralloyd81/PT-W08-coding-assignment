/*
Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
--Use at least one array.
--Use at least two classes.
--Your menu should have the options to create, view, and delete elements.
--------------------------------------------
*/

// Cat class to store breed, gender, and age of a cat
class Cat {
    constructor(breed, gender, age) {
        this.breed = breed;
        this.gender = gender;
        this.age = age;
    }
}

// Menu class to manage the cat inventory
class Menu {
    constructor() {
        this.cats = []; // Initialize an empty array to store cats
    }

    // Method to add a new cat
    addCat() {
        let catBreed = prompt('Enter Cat Breed:');
        let catGender = prompt('Enter Cat Gender:');
        let catAge = prompt('Enter Cat Age:');
        
        // Create a new Cat object and add it to the array
        this.cats.push(new Cat(catBreed, catGender, catAge));
        alert('Cat added successfully!');
    }

    // Method to delete a cat from the list
    deleteCat() {
        let catIndex = parseInt(prompt('Enter cat index to DELETE')) - 1; // Convert to number & adjust for 1-based display

        // Validate input to avoid errors
        if (isNaN(catIndex) || catIndex < 0 || catIndex >= this.cats.length) {
            alert("Invalid index. Please enter a valid number.");
            return;
        }

        // Remove the selected cat from the array
        this.cats.splice(catIndex, 1);
        alert("Cat deleted successfully.");
    }

    // Method to view all cats in the inventory
    viewCats() {
        if (this.cats.length === 0) {
            alert("No cats available in inventory.");
            return;
        }

        // Format cat information for display
        let displayCats = this.cats
            .map((cat, i) => `${i + 1}) ${cat.breed}, ${cat.gender}, ${cat.age} years old`)
            .join("\n");

        alert(`Cat Inventory:\n\n${displayCats}`);
    }

    // Method to display the main menu and get user input
    showMainMenu() {
        let selection = prompt(`
            Please make a selection:
            -------------------------
            1) Exit Menu
            2) Add Cat
            3) Delete Cat
            4) View all Cats
        `);

        return selection === null ? "1" : selection.trim(); // Exit if user cancels
    }

    // Method to start the menu and process user input
    start() {
        let selection = this.showMainMenu(); 

        while (selection !== "1") {  // "1" is the exit option
            switch (selection) {
                case "2": 
                    this.addCat();
                    break;
                case "3": 
                    this.deleteCat();
                    break;
                case "4": 
                    this.viewCats();
                    break;
                default: 
                    alert("Invalid selection. Please try again.");
            }

            selection = this.showMainMenu(); // Show menu again after an action
        }

        alert("Thank you for your time... goodbye!");
    }
}

// Instantiate the menu and start the application
let menu = new Menu();
menu.start();
