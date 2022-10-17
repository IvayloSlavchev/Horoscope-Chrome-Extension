async function horoscopeAPI(){
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '' , // <- Rapid API KEY
            'X-RapidAPI-Host': '', // <- Rapid API host
        }
    };
    const res = await fetch('', options); // <- Fetch URL
    const data = await res.json();
    console.log(data)
    document.getElementById('compatibility').innerHTML = data.compatibility;
    document.getElementById('date-range').innerHTML = data.date_range;
    document.getElementById('desription').innerHTML = data.description;
}
horoscopeAPI();
//dotenv didn't worked here so I don't want to show my API key :D