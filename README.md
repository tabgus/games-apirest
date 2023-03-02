# games-apirest
Apirest construida en node y base de datos en archivo json local
Las tecnologias utilizadas son node con el framework express, y uuid para generar ids únicos 

### Ejecución
Una vez clonado el repositorio se debe ejecutar:
```
npm run dev
```
### Documentación
Las pruebas a los endpoints de la apirest se realizarón con postman y documentación se encuentra en el siguiente enlace:
[Ver documentacion](https://documenter.getpostman.com/view/10697628/2s93CSpr9y)

__Los endpoints que encontrarán en la documentación son los siguientes:__ 

* Para obtener todos los games con el metodo GET:  
Ejemplo:
```http://localhost:3000/api/v1/games```

* Para obtener un solo game con el metodo GET recibe un id como parametro   
Ejemplo:
```http://localhost:3000/api/v1/games/4a3d9aaa-608c-49a7-a004-66305ad4ab50```

* Para crear un nuevo game con el metodo POST, recibe en el body un objeto json  
Ejemplo:
```http://localhost:3000/api/v1/games```

* Para modificar un game ya existente con el metodo PUT, recibe como parametro un id y en el body un objeto json con los datos a modificar  
Ejemplo:
```http://localhost:3000/api/v1/games/17be1686-cec5-4d47-936a-f2cf5701716f```

* Para eliminar un game ya existe con el metodo DELETE, solo recibe un id  
Ejemplo:
```http://localhost:3000/api/v1/games/2e0c959c-c112-4d5a-ba4f-9e2b19d1e896```

