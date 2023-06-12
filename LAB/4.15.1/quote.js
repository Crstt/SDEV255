window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

    // Get values from drop-downs
    const topicDropdown = document.querySelector("#topicSelection");
    const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
    const countDropdown = document.querySelector("#countSelection");
    const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

    // Get and display quotes
    fetchQuotes(selectedTopic, selectedCount);
  });
});

// Modify to use Fetch API and display quotes
function fetchQuotes(topic, count) {
   const apiUrl = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
 
   fetch(apiUrl)
     .then((response) => {
       if (!response.ok) {
         throw new Error(`Error: ${response.status} - ${response.statusText}`);
       }
       return response.json();
     })
     .then((data) => {
       if (data.error) {
         throw new Error(data.error);
       }
       let quotesList = "<ol>";
       data.forEach((quote) => {
         quotesList += `<li>${quote.quote} - ${quote.source}</li>`;
       });
       quotesList += "</ol>";
       document.querySelector("#quotes").innerHTML = quotesList;
     })
     .catch((error) => {
       document.querySelector("#quotes").innerHTML = `${error.message}`;
     });
 }
 
