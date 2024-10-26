# so_services
# Proyecto con Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para configurar la conexión a la base de datos y el puerto del servidor. A continuación se detallan los pasos para configurar y usar estas variables.

## Requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [MySQL](https://www.mysql.com/).

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto para definir las variables de entorno necesarias. A continuación se describe cada una de estas variables y su propósito.

### Configuración de las Variables

Copia y pega el siguiente contenido en el archivo `.env` y ajusta los valores según tu configuración:

```plaintext
# Configuración de la base de datos
HOST=localhost            # Host donde se encuentra la base de datos, usualmente 'localhost' para desarrollos locales.
USER=root                 # Usuario de la base de datos MySQL.
PASSWORD=                 # Contraseña del usuario de la base de datos (déjalo vacío si no tienes contraseña configurada).
DATABASE=so_db            # Nombre de la base de datos a la cual conectarse.
DATABASE_PORT=3306        # Puerto donde MySQL está escuchando (el puerto por defecto es 3306).

# Configuración del servidor
PORT=3000                 # Puerto donde el servidor Node.js escuchará las peticiones.
