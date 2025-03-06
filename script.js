document.addEventListener('DOMContentLoaded', function() {
    const copyIcon = document.querySelector('.fa-copy');
    const emailSpan = document.querySelector('.give-online-mail');

    copyIcon.addEventListener('click', function() {
        const email = emailSpan.textContent;
        navigator.clipboard.writeText(email).then(function() {
            const alertBox = document.createElement('div');
            alertBox.textContent = 'Email copied to clipboard';
            alertBox.style.position = 'fixed';
            alertBox.style.bottom = '20px';
            alertBox.style.right = '20px';
            alertBox.style.padding = '10px';
            alertBox.style.backgroundColor = '#26253b';
            alertBox.style.color = 'white';
            document.body.appendChild(alertBox);

            setTimeout(function() {
                document.body.removeChild(alertBox);
            }, 3000); // Alert will disappear after 3 seconds
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    });
});



function ty(){
    document.getElementById('first').classList.toggle('trans');
    document.getElementById('last').classList.toggle('trans-t');
    document.getElementById('none').classList.toggle('dispp');
    document.getElementById('navs').classList.toggle('new');
}