function getCats() {
    const result = document.querySelector('.get__cats--result');
    axios.get('/cats')
        .then(res => {
            result.innerHTML = res.data.map(cat => {
                return `
                    <h2>${cat.name} ${cat.id}</h2>
                `
            }).join(' ')
        })
}

function searchCatByName() {
    const result = document.querySelector('.search__cat--result');
    const name = document.querySelector('#search__cat--input').value;
    axios.get(`/cats/${name}`)
        .then(res => {
            result.innerHTML = `<h2>${res.data.name}</h2>`;
        })
}

function addCat() {
    const name = document.querySelector('#add__cat--input').value;

    axios.post(`/cats`, { name })
        .then(res => {
            console.log(res)
        })
};

function editCat() {
    const name = document.querySelector('#edit__cat--name').value;
    const newName = document.querySelector('#edit__cat--newName').value;

    axios.put(`/cats/${name}`, { name, newName })
        .then(res => {
            console.log(res);
        });
}

function deleteCat() {
    const name = document.querySelector('#delete__cat--name').value;
    axios.delete(`/cats/${name}`, { params: name })
        .then(res => {
            console.log(res);
        });
}
