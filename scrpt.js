document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario
    
    const username = document.getElementById('username').value.trim(); 
    const password = document.getElementById('password').value.trim(); 

    const validCredentials = [
        { username: 'admin', password: '1234' },
        { username: 'usuario2', password: 'contraseña2' }
    ];

    const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
    );

    if (isValid) {
        
        window.location.href = 'MenuPrincipal.html'; 
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('fileInput');

    uploadButton.addEventListener('click', function() {
        const file = fileInput.files[0];

        if (file) {
            // Lógica para manejar la carga del archivo
            const formData = new FormData();
            formData.append('file', file);

            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Archivo subido exitosamente', data);
                alert('Archivo subido exitosamente');
            })
            .catch(error => {
                console.error('Error al subir el archivo', error);
                alert('Error al subir el archivo');
            });
        } else {
            alert('Por favor, selecciona un archivo primero.');
        }
    });

    
});
