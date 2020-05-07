# RESUMEN

El proyecto consiste de un CRUD de productos de un negocio ecommerce
donde inicialmente se solicita la autenticación para realizar el inicio
de sesión y luego se accede al panel de productos CRUD.

En el directorio del proyecto correr:

### `npm start`

Corriendo el proyecto satisfactoriamente en http://localhost:3000/
Comunicarse con la mock API mediante:

### json-server --watch mockAPI/db.json --port 3004

Ahora deberiamos tener dispoble los siguientes recursos, donde podemos acceder
al JSON de los datos de autenticacion y los productos.

http://localhost:3004/product_list
http://localhost:3004/users

En la página de login de http://localhost:3000/ acceder con los datos "admin" y
"123", respectivamente.

Una vez en el CRUD, se pueden eliminar, agregar y editar productos. Para la
edición unicamente se podrá modificar los campos de nombre y precio.

Podemos cerrar sesión con el botón rojo de la esquina superior derecha.
