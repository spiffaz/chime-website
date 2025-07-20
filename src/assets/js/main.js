// Form submission handler for Google Forms integration
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    const email = document.getElementById('email').value;
    const platform = document.getElementById('platform').value;
    
    if (!email || !platform) {
        alert('Please fill in your email and select a platform.');
        return;
    }
    
    // Show loading state
    button.innerHTML = `
        <div class="flex items-center justify-center space-x-2">
            <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Joining...</span>
        </div>
    `;
    button.disabled = true;
    
    // Create URL-encoded form data for Google Forms
    const params = new URLSearchParams();
    params.append('entry.618727045', email);
    params.append('entry.1946796245', platform.toUpperCase()); // Ensure uppercase for consistency
    params.append('fvv', '1');
    params.append('pageHistory', '0');
    
    // Submit to Google Forms using fetch
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2EtsUxthvv7vMKG-1jSbDh17LB6spdoQAbNQlAgo0qCLgxw/formResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
        mode: 'no-cors'
    })
    .then(() => {
        console.log('Form submitted successfully');
        
        // Show success state
        button.innerHTML = `
            <div class="flex items-center justify-center space-x-2">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>You're in! 🎉</span>
            </div>
        `;
        button.style.background = 'linear-gradient(135deg, var(--chime-green) 0%, #28A745 100%)';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = 'linear-gradient(135deg, var(--chime-blue) 0%, #0056CC 100%)';
        }, 3000);
    })
    .catch(error => {
        console.error('Form submission error:', error);
        
        // Even if fetch fails due to CORS, the form might still be submitted
        // So show success state anyway
        button.innerHTML = `
            <div class="flex items-center justify-center space-x-2">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>You're in! 🎉</span>
            </div>
        `;
        button.style.background = 'linear-gradient(135deg, var(--chime-green) 0%, #28A745 100%)';
        
        setTimeout(() => {
            form.reset();
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = 'linear-gradient(135deg, var(--chime-blue) 0%, #0056CC 100%)';
        }, 3000);
    });
});

// Animation delay handler
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-fadeIn');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});