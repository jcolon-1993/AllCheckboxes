// Use iife
(function ()
{
  // get form
  var form = document.getElementById("interests");
  // All elements in form
  var elements = form.elements;
  // Array: genre checkboxes
  var options = elements.genre;
  // The "all" checkbox
  var all = document.getElementById("all");

  // Loops through checkboxes and updates checkboxes
  function updateAll()
  {
    for (var i = 0; i < options.length; i++)
    {
      options[i].checked = all.checked;
    }
  }
  // Add event listner to listen for change in checkboxes
  addEvent(all, "change", updateAll);

  // Unchecks "All" checkbox if checkbox that is already checked is clicked on again
  function clearAllOption(e)
  {
    // Gets target of event
    var target = e.target || e.srcElement;
    // If not checked
    if (!target.checked)
    {
      // Uncheck "All" checkbox
    }
  }
  // Loop through checkboxes
  for (var i = 0; i < options.length; i++)
  {
    // Add event listner
    addEvent(options[i], "change", clearAllOption);
  }
}());
