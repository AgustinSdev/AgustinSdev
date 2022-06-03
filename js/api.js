const cargarPJs = async() => {

    try {
        const answ = await fetch("https://rickandmortyapi.com/api/character");


        if (answ.status === 200) {
            const datos = await answ.json();
            let pjs = '';



            datos.results.forEach(item => {

                pjs += `<div class="card">
                <figure><img class="char-img" src=${item.image}></figure>
                <div class="char-name">${item.name}</div>
                <div class="char-species">${item.species} - ${item.state} ${item.origin.name}</div>
              </div>
                <br>
				`;

            });

            document.getElementById('item').innerHTML = pjs;


        } else {
            console.log("Error");
        }

    } catch (error) {
        console.log(error);
    }
}



cargarPJs()



const next = document.querySelector("#next");
next.addEventListener("click", () => {

    const cargarPJs2 = async() => {
        try {
            const answ = await fetch("https://rickandmortyapi.com/api/character?page=2");

            if (answ.status === 200) {
                const datos = await answ.json();
                let pjs2 = '';
                datos.results.forEach(item => {
                    pjs2 += `<div class="card">
                    <figure><img class="char-img" src=${item.image}></figure>
                    <div class="char-name">${item.name}</div>
                    <div class="char-species">${item.species} - ${item.state} ${item.origin.name}</div>
                  </div>
                    <br>
                    `;
                });
                document.getElementById('item2').innerHTML = pjs2;

            } else {
                console.log("Error");
            }

        } catch (error) {
            console.log(error);
        }
    }

    cargarPJs2()
});