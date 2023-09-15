# Ejemplo de Module Federation

Este proyecto contiene a su vez 3 proyectos de angular que tienen la siguiente misión:

* moduleFederationOne: simula una aplicación de angular independiente
* moduleFederationTwo: simula una aplicación de angular independiente
* moduleFederationShell: es el host donde deberán aparecer las dos aplicaciones independientes

## Cómo levantar los proyectos

### Levantar la app 1

`cd moduleFederationOne`

`npm run mf`

Esto abrirá de manera standalone la app en el `http://localhost:4201/` , pero también expondrá el siguiente js con la app para ser consumida desde el host:`http://localhost:4201/modFedOne.js`


### Levantar la app 2

`cd moduleFederationTwo`

`npm run mf`

Esto abrirá de manera standalone la app en el `http://localhost:4202/` , pero también expondrá el siguiente js con la app para ser consumida desde el host: `http://localhost:4202/modFedTwo.js`


### Levantar la aplicación Shell (host)

`cd moduleFederationShell`

`npm run mf`

Esto abrirá la app en el `http://localhost:4200/`

En ella veremos enlaces que nos dirigen a rutas que cargan (a través del app-routing.module y el module federation) las dos aplciaciones anteriores
