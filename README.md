# Lista de Tareas (To-Do List)

Una aplicación web simple para gestionar una lista de tareas, desarrollada utilizando **HTML**, **CSS**, y **JavaScript**. Esta aplicación permite a los usuarios agregar, completar, eliminar y almacenar tareas de forma persistente utilizando el navegador.

## Video Presentación



## Características

- **Agregar tareas**: Los usuarios pueden escribir tareas y agregarlas a la lista.
- **Eliminar tareas**: Cada tarea tiene un botón para eliminarla de la lista.
- **Marcar tareas como completadas**: Las tareas pueden ser marcadas como completadas con un clic.
- **Almacenamiento persistente**: Las tareas se almacenan en el navegador utilizando `localStorage`, por lo que permanecen incluso al recargar la página.
- **Diseño responsivo**: La aplicación se adapta a diferentes tamaños de pantalla, ofreciendo una experiencia fluida tanto en dispositivos móviles como en escritorio.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica de la aplicación.
- **CSS3**: Para estilos y diseño visual.
- **JavaScript**: Para la lógica interactiva y el manejo de tareas.
- **NGINX (opcional)**: Para desplegar la aplicación en un servidor web con Docker.

## Estructura del Proyecto
```
/project-directory
  |-- index.html       # Archivo principal del proyecto
  |-- styles.css       # Estilos personalizados
  |-- app.js           # Lógica de la aplicación
  |-- Dockerfile       # Archivo Docker para el contenedor del servidor web
  |-- docker-compose.yml # Configuración opcional de Docker Compose
```

## Cómo Ejecutar la Aplicación

### Opción 1: Abrir Localmente
Clona este repositorio y levanta el contenedor:
   ```bash
   git clone <URL_del_repositorio>
   docker-compose up --build
   ```

# Capturas de Pantalla

![image](https://github.com/user-attachments/assets/1e1ca640-d460-4488-a9e8-55e8e409b3a9)

*Accede al proyecto en http://127.0.0.1:/8080*

