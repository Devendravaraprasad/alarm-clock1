document.addEventListener('DOMContentLoaded', function () {
    const objectiveSection = document.getElementById('objective');
    const toggleObjectiveButton = document.getElementById('toggleObjective');
  
    // Hide the objective section initially
    objectiveSection.style.display = 'none';
  
    // Function to toggle the visibility of the objective section
    function toggleObjective() {
      if (objectiveSection.style.display === 'none') {
        objectiveSection.style.display = 'block';
      } else {
        objectiveSection.style.display = 'none';
      }
    }
  
    // Add a click event listener to the toggle button
    toggleObjectiveButton.addEventListener('click', toggleObjective);
  });
  