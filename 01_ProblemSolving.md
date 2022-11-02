# How to approach a problem
- Start at the end, and work backwards
- Assertion


# Coding problems

- Create a skeleton, using pseudo code
    //What do I need to do?
    //Array, should I loop through the array with a .map
    //Modify each element
    //Return a modified array
- What is the input/output
    -Inputs
        What information is coming in.
        What is passed in
        The arguments
    -Ouputs
        Result of your code
        What is being printed out or returned


const bartender = (number) => {
    return `Hey, here are your drinks, you ordered ${number} this many drinks`
}
- Edge Cases
    - Happy Path
        No errors and no bugs
        The code works fine and outputs the correct result with the provided arguements

    - Sad Path
        Errors and bugs occur
        "What can break this function?" -> Unbreakable
        Throw in a different type for the arguement

- Test Cases
- Possible Solutions