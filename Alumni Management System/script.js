function goToAddAlumniPage() {
    // Redirect to the add aluminum page
    window.location.href = 'add_alumni.html';
}

function submitalumniForm() {
    // Collect form data
    const alumniName = document.getElementById('alumniName').value;
    const alumniDetails = document.getElementById('alumniDetails').value;

    // Validate form data (add more validation as needed)
    if (!alumniName || !alumniDetails) {
        alert('Please fill in all the fields.');
        return;
    }

    // Create a new alumni object
    const newAlumni = {
        name: alumniName,
        details: alumniDetails,
    };

    // Add the new alumni to the inventory
    addAlumniToInventory(newAlumni);

    // Redirect to the login page
    window.location.href = 'login.html';
}

function addAlumniToInventory(alumni) {
    // This is a simple example; you might want to store the data in a database or server
    // For now, we'll just log the new aluminum object to the console
    console.log('New Alumni added to inventory:', alumni);
}

function goToUserInterface() {
    // Redirect to the user interface page
    window.location.href = 'user_interface.html';
}

function submitUserInterfaceForm() {
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const address = document.getElementById('address').value;
    const currentPosition = document.getElementById('currentPosition').value;
    const graduationYear = document.getElementById('graduationYear').value;

    // Validate form data (add more validation as needed)
    if (!name || !email || !contactNo || !address || !currentPosition || !graduationYear) {
        alert('Please fill in all the fields.');
        return;
    }

    // Create a user object
    const user = {
        name: name,
        email: email,
        contactNo: contactNo,
        address: address,
        currentPosition: currentPosition,
        graduationYear: graduationYear,
    };

    // Handle the user data as needed (e.g., store in a database or perform other operations)

    // Redirect to the thank you page
    window.location.href = 'thank_you.html';
}

function goToThankYouPage() {
    // Redirect to the thank you page
    window.location.href = 'thank_you.html';
}