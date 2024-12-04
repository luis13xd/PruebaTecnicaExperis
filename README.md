# Requisitos
-Node.js v18 o superior.
-Npm v10 o superior.
-Git

# Instalacion
-En una terminal de windows o de git pegamos el siguiente comando:
'''git clone https://github.com/luis13xd/PruebaTecnicaExperis.git

-Luego accedemos al repositorio descargado con:
'''cd PruebaTecnicaExperis

-Despues nos cambiamos a la rama develop:
'''git checkout develop

-Luego instalamos todas las dependencias de nuestro proyecto
'''npm install

# Ejecucion
-Estando en la carpeta de nuestro proyecto ponemos en la terminal:
'''npm run dev

-Nos debe arrojar un link similar a este:
http://localhost:5173/

-Ponemos ese link que nos arroje en el navegador de tu preferencia
-Nos mostrara un formulario y una tabla que muestra datos de la api de la prueba tecnica.
-Podemos interactuar con el formulario poniendo tecto en el campo Title y Body, al dar en el boton Submit nos mostrara un modal noptificando que los datos se guardaron. Debajo del formulario tenemos un buscador de datos de la tabla en donde podemos hacer consultas ya sea con el id, userId, title o body, al lado derecho del formulario podemos seleccionar el numero de datos que queremos ver ne la tabla, ya sean 5, 0, 15 o 20 datos. En la tabla a parte de poder vizualizar los datos podemos dar click en el boton de borrar el cual la presionar nos mostrara un modal notificando que el dato se ha eliminado, al presionar el boton con el icono de actualizar nos llevara al formulario con los datos de la fila seleccionada que podemos modificar y guardar o tambien podemos cancelar la edición y al presionar el botón cancelar vaceamos el formulario.

# Pruebas
Para ver los resultados de ls pruebas que hice a cada componente y pagina nos ubicamos en una terminal dentro de la carpeta PruebaTecnicaExperis y ponemos el siguiente comando:
'''npx jest
