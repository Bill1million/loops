// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  const result = []; 

  for (let i = 0; i < array.length; i++) {
    const currentName = array[i].name;

    let containsLetter = false;
    for (let j = 0; j < currentName.length; j++) {
      if (currentName[j].toLowerCase() === letter.toLowerCase()) {
        containsLetter = true;
        break;
      }
    }

    if (containsLetter) {
      result.push(currentName);
    }
  }

  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
