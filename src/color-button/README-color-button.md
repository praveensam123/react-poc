# Creating components using TDD

The component should be created using Test Driven Development technique.

## Create a simple component with a button

1. Create a button with name "Change to red".
2. Choose the default color of the button as "blue".
3. On click, 
   1. change the button color to "red".
   2. change the button text to "Change to blue".
4. On clicking again,
   1. change the button color back to "blue".
   2. change the button text to "Change to red".

## Create a checkbox to disable the button

1. Create a checkbox with name "Disable Button".
2. Leave the checkbox unchecked by default.
3. On checking the checkbox,
   1. disable the button.
4. On unchecking the checkbox,
    1. enable the button.

# Exercise:- 

## Turn the button color to gray when the button is disabled

### Hints
1. Identify the test scenarios involved.
2. Write down the test cases.
3. Solve them one by one.

# Learnings:-
1. Test Driven Development
2. Using Jest React Testing Library
3. Rendering the components
4. Accessing the elements using different methods - byRole, ByTestId, etc.
5. Triggering events using fireEvent
6. Expecting the behaviors using various methods
 