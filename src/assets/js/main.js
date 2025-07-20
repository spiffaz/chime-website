// Form submission handler for Loops integration
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    const email = document.getElementById('email').value;
    const platform = document.getElementById('platform').value;
    
    if (!email || !platform) {
        alert('Please fill in all required fields.');
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
    
    // Submit to Loops using fetch with proper data format
    const formData = new FormData();
    formData.append('email', email);
    
    fetch('https://app.loops.so/api/newsletter-form/cmdaurtvm0soo0i0jjzoj0snt', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('Loops response:', response);
        
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
        
        // Store platform preference separately (since Loops may only accept email)
        localStorage.setItem('chime_platform_' + email, platform);
        
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
        
        // Try fallback submission method
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.name = 'loops-form-target';
        document.body.appendChild(iframe);
        
        form.target = 'loops-form-target';
        
        // Create a simple form with just the email for Loops
        const simpleForm = document.createElement('form');
        simpleForm.action = 'https://app.loops.so/api/newsletter-form/cmdaurtvm0soo0i0jjzoj0snt';
        simpleForm.method = 'POST';
        simpleForm.target = 'loops-form-target';
        simpleForm.style.display = 'none';
        
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'email';
        emailInput.value = email;
        
        simpleForm.appendChild(emailInput);
        document.body.appendChild(simpleForm);
        simpleForm.submit();
        
        // Show success state
        setTimeout(() => {
            button.innerHTML = `
                <div class="flex items-center justify-center space-x-2">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>You're in! 🎉</span>
                </div>
            `;
            button.style.background = 'linear-gradient(135deg, var(--chime-green) 0%, #28A745 100%)';
            
            // Clean up
            document.body.removeChild(iframe);
            document.body.removeChild(simpleForm);
            form.target = '';
            
            // Store platform preference
            localStorage.setItem('chime_platform_' + email, platform);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.background = 'linear-gradient(135deg, var(--chime-blue) 0%, #0056CC 100%)';
            }, 3000);
        }, 1000);
    });
});

// Animation delay handler
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-fadeIn');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});