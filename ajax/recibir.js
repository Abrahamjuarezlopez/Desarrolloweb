const lista=document.querySelector('#listado');

fetch('./data.json')
    .then((res) => res.json())
        .then((data)=>{
            data.forEach(element => {
                const li=document.createElement('li')
                li.innerHTML=`
                <p>id:${element.id}</p>
                <p>nombre:${element.name}</p>
                <p>nombre de usuario:${element.username}<p>
                <p>email:${element.email}<p>
                <h4>Domicilio</h4>
                <p>calle:${element.address.street}</p>
                <p>habitacion:${element.address.suite}</p>
                <p>Ciudad:${element.address.city}</p>
                <p>Codigo POstal;${element.address.zipcode}</p>
                <p>latitud:${element.address.geo.lat}</p>
                <p>Longitud:${element.address.geo.lng}</p>
                <p>telefono:${element.phone}</p>
                <p>pagina web:${element.website}</p>
                <h4>Datos de compania</h4>
                <p>Nombre de la compania:${element.company.name}</p>
                <p>Slogan:${element.company.catchPhrase}</p>
                <p>vision:${element.company.bs}</p>



                
                `
                lista.append(li)
            });
        })