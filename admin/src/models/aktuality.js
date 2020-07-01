var api_url = process.env.REACT_APP_API_URL;

export const getAktuality = (callback) => {
    fetch(api_url + '/api/aktuality')
        .then(res => res.json())
        .then((data) => {
            callback(data);
        })
        .catch(console.log)
}

export const getOneAktuality = (id, callback) => {
    fetch(api_url + '/api/aktuality/' + id)
        .then(res => res.json())
        .then((data) => {
            callback(data);
        })
        .catch(console.log)
}

export const createAktuality = (data, callback) => {
    fetch(api_url + '/api/aktuality', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }}).then(response => {
            if (response.status >= 200 && response.status < 300) {
                callback(true);
            }
            else {
                console.log('Somthing happened wrong');
                callback(false);
            }
        });
}

export const updateAktuality = (id, data, callback) => {
    fetch(api_url + '/api/aktuality/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }}).then(response => {
            if (response.status >= 200 && response.status < 300) {
                callback(true);
            }
            else {
                console.log('Somthing happened wrong');
                callback(false);
            }
        });
}

export const deleteAktuality = (id, callback) => {
    fetch(api_url + '/api/aktuality/' + id, {
        method: 'DELETE'
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            callback(true);
        }
        else {
            console.log('Somthing happened wrong');
            callback(false);
        }
    });
}
