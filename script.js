function login() {
    // Dummy authentication logic (replace with actual authentication code)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'demo' && password === 'demo') {
        alert('Login successful! Redirecting to dashboard.');
        window.location.href = 'simple.html';
        // In a real application, you would redirect to the actual dashboard page.
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
function login_as_admin() {
    window.location.href = 'adminlogin.html';
}
function admin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        alert('Login successful! Redirecting to dashboard.');
        window.location.href = 'simple.html';
        // In a real application, you would redirect to the actual dashboard page.
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
function signin(){
    // var username = document.getElementById('username').value;
    // var password = document.getElementById('password').value;
    // if (username === 'signin' && password === 'signin') {
        alert('Login successful! Redirecting to dashboard.');
        window.location.href = 'simple.html';
        // In a real application, you would redirect to the actual dashboard page.
    // } else {
    //     alert('Invalid username or password. Please try again.');
    // }
}

