
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    
    if (searchQuery) {
      // Trigger a search operation or redirect to search results page
      alert(`You searched for: ${searchQuery}`);
      // In a real app, you could replace this with an AJAX request or a page redirect
      // Example: window.location.href = `/search?query=${searchQuery}`;
    } else {
      alert('Please enter a search term.');
    }
  });
  
  // Mock Data for User Information
  const userInfo = {
    username: 'SahilAgrawal',
    mine: 'Lingaraj Coal Mine',
    state: 'Odisha'
  };
  
  // Load User Information Dynamically
  function loadUserInfo() {
    document.querySelector('.user-details').innerHTML = `
      <p>USERNAME: ${userInfo.username}</p>
      <p>MINE: ${userInfo.mine}</p>
      <p>STATE: ${userInfo.state}</p>
    `;
  }
  
  // Highlight current active menu in the sidebar
  function highlightActivePage() {
    const currentPage = window.location.pathname; // Get current page URL (you can replace this with manual logic if needed)
    
    // Simple logic to highlight 'Dashboard' for this example
    const dashboardMenuItem = document.querySelector("a[href='#']");
    
    // Apply active class to the dashboard if user is on the dashboard page
    if (currentPage.includes('dashboard') || currentPage === "/") {
      dashboardMenuItem.classList.add('active');
    }
  }
  
  // Call the functions to load user info and highlight the active menu item on page load
  window.onload = function() {
    loadUserInfo();
    highlightActivePage();
  };