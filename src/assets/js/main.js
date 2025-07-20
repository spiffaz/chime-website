// Form submission handler for Loops integration
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    const email = document.getElementById('email').value;
    const userGroup = document.getElementById('platform').value;
    
    if (!email || !userGroup) {
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
    
    // Create form data for Loops
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('userGroup', userGroup);
    
    // Submit to Loops using fetch
    fetch('https://app.loops.so/api/newsletter-form/cmdaurtvm0soo0i0jjzoj0snt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully', data);
        
        // Check if Loops returned success
        if (data.success === true) {
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
        } else {
            // Handle Loops error response
            throw new Error(data.message || 'Submission failed');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
        
        // Show error state
        button.innerHTML = `
            <div class="flex items-center justify-center space-x-2">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Please try again</span>
            </div>
        `;
        button.style.background = 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)';
        
        setTimeout(() => {
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