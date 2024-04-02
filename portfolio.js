function toggleProjectLinks() {
    var projectLinks = document.querySelector('.project-links');
    if (projectLinks.style.display === 'none') {
        projectLinks.style.display = 'block';
    } else {
        projectLinks.style.display = 'none';
    }
}
function showMessage(event) {
    event.preventDefault(); 
    alert("Message sent!");
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false; 
}


