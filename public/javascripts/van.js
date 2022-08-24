
function updateVan(vanId) {
    const form = document.getElementById('form');
    const van = {
        id: vanId,
        brand: form.brand.value,
        model: form.model.value,
        registered: form.registered.value,
        year: form.year.value,
        horsePower: form.horsePower.value,
        payload: form.payload.value
    };

    fetch(`http://localhost:3000/van/${vanId}`, {
        method: 'PUT',
        body: JSON.stringify(van),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        if (data.success) {
            window.location.replace("http://localhost:3000/van");
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

function deleteVan(vanId) {
   
    fetch(`http://localhost:3000/van/${vanId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        
        if (data.success) {
            window.location.replace("http://localhost:3000/van");
        }
    }).catch(function (err) {
        
        console.warn('Something went wrong.', err);
    });
};