/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    // Set up event handlers for the encrypt and reset buttons
    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);
    document.getElementById("reset").addEventListener("click", handleReset);
    
    // Log message to confirm JS is loaded and running
    console.log("Window loaded!");
    
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

    /**
   * Handles the encrypt button click event.
   * Gets the text from the input textarea, encrypts it using the shift cipher,
   * and outputs the result to the result paragraph.
   */
  function handleEncrypt() {
    console.log("Button clicked!");
    
    // Get text from the textarea
    const inputText = document.getElementById("input-text").value;
    
    // Encrypt the text using shift cipher
    const encryptedText = shiftCipher(inputText);
    
    // Output the encrypted text to the result paragraph
    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * Handles the reset button click event.
   * Clears the content of the input textarea and result paragraph.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   * 
   * @param {string} text - The text to be encrypted
   * @return {string} - The encrypted text
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'a' && text[i] <= 'z') {
        // Handle letters - apply the shift cipher
        let letter = text.charCodeAt(i);
        let resultLetter;
        
        if (text[i] === 'z') {
          // Special case: 'z' wraps around to 'a'
          resultLetter = 'a';
        } else {
          // Shift letter forward by 1 in the alphabet
          resultLetter = String.fromCharCode(letter + 1);
        }
        
        result += resultLetter;
      } else {
        // Keep non-letter characters unchanged
        result += text[i];
      }
    }
    
    return result;
  }
})();



 

