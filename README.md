# wp-forced-login-bloqued

Es plugin bloquea el ataque forzado hacia el login de wordpress, agregando un captcha personalizado y bloqueando las peticiones POST hacia wp-login.php,
otros plugins lo que hacen es cambiar el nombre de wp-login.php para que los bot's no encuentren la url, pero esta solo es una solución temporal porque es cuestión de tiempo para que los bot's encuentren la nueva url por lo tanto no es una solución a largo plazo.

wp-forced-login-bloqued, elimina toda posibilidad de ataque forzado al login de wordpress y ademas utiliza un lienzo para verificar que el formulario del login sea un humano el que esta tratando de loguearse al WordPress, y ademas utilizar un token de session para verificar que si se  esta ingresando por el formualario oficil del CMS


## Comenzando 🚀

[click para descargar plugin](https://github.com/hhklik/wp-forced-login-bloqued/archive/master.zip)

### Pre-requisitos 📋



### Instalación 🔧

- Se descargara el comprimido con el nombre: **wp-forced-login-bloqued-master.zip**
- Ingresas **dashboard panel** de tu WordPress haces lo siguiente:
  - **Plugins > add New > Upload Plugin > select file > Install Now > Activate Plugin**

## Ejecutando las pruebas ⚙️

 Para probar que si esta bloqueando el acceso a POST hacia https://tusitio.com/wp-login.php, si no es del formulario de login de wordpress
 
 ### Primera comprobación 
 - Descargar **postman** 
 - Hacer solicitud POST a la url https://tusitio.com/wp-login.php con las siguientes variables
   - **log** corresponde al nombre de usuario  
   - **pwd** corresponde a la contraseña
   
Va mostrar el siguiente mensaje:

Esta opcion esta inactiva | This option is inactive

con esto estamos comprobando que esta bloqueda lo peticion POST, si no es desde el formulario de login oficial

### Segunda comprobación 

- Instalar el plugin [simple history](https://simple-history.com/) para wordpress
- Verificar que no se tenga mas de 30 intentos fallidos de conexion pueden llegar a 500 o mas intentos forzados

Ejemplo
- 498 intentos de logueo
- IP 35.204.93.0
- incorrect password entered

Este es un ataque forzado de intentos de login

26/07/2020 16:02	SimpleUserLogger	warning	web_user	user_login_failed			Anonymous user from 35.204.93.0 July 26, 2020 - 4:02 pm (Jul 26, 2020 at 16:02)	Failed to login with username "admin" (incorrect password entered)	498

con simple history, pueden exportar todo el historial de logueos.

Cuando miren que ya no tiene eso estas protegrido de ataque forzado de login en wordpress


## Construido con 🛠️

* [WordPress](https://es.wordpress.com/) - CMS utilizado
* [wordpress-plugin-creator](https://ensuredomains.com/wordpress-plugin-creator) - Creador de plugins de wordpress
* [jcanvas](https://projects.calebevans.me/jcanvas/) - Para la creacion de lienzos
* [jquery](https://jquery.com/)

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autores ✒️


* **Humberto Herrador** - *Trabajo Inicial* - [villanuevand](https://github.com/hhklik)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Gracias al equipo de [poschapin](https://poschapin.com)


