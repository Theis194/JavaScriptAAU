
async function test() {

    await fetch('https://api.rema.no/echo/resource?param1=sample', {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',}
        })
        .then(response => {
            console.log(response.status);
            console.log(response.text());
        })
        .catch(err => console.error(err));
}

test();