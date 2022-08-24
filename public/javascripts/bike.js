
function updateBike(bikeId) {
    const form = document.getElementById('form');
    const bike = {
        id: bikeId,
        brand: form.brand.value,
        model: form.model.value,
        registered: form.registered.value,
        year: form.year.value,
        cc: form.cc.value
    };

    fetch(`http://localhost:3000/bike/${bikeId}`, {
        method: 'PUT',
        body: JSON.stringify(bike),
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
            window.location.replace("http://localhost:3000/bike");
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

function deleteBike(bikeId) {
   
    fetch(`http://localhost:3000/bike/${bikeId}`, {
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
            window.location.replace("http://localhost:3000/bike");
        }
    }).catch(function (err) {
        
        console.warn('Something went wrong.', err);
    });
};