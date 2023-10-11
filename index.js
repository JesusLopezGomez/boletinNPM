//Ejercicio 2: Instalando y Usando un Paquete

//a. Utiliza el comando npm install para instalar un paquete de tu elección, por ejemplo, lodash. Asegúrate de que se guarde en tu package.json.

//b. En tu archivo index.js, importa el paquete instalado y realiza una operación simple utilizando sus funciones. 
//Por ejemplo, puedes utilizar lodash para calcular la suma de un array de números.
const lodash = require("lodash");

let numeros = [1,2,3,4,5];

console.log(lodash.sum(numeros));

//Ejercicio 3: Ignorando la Carpeta node_modules

//a. Crea un archivo .gitignore en la raíz de tu proyecto.

//b. Agrega la línea node_modules al archivo .gitignore. Esto evitará que la carpeta node_modules se incluya en tu repositorio Git.

//Ejercicio 4: Paquetes Globales vs. Locales

//a. Investiga y elige un paquete de npm que se pueda instalar globalmente. Utiliza el comando npm install -g para instalarlo globalmente en tu sistema.
//npm install -g nodemon
//b. Crea un nuevo proyecto de Node en un directorio diferente y utiliza npm install para instalar el mismo paquete de forma local en ese proyecto.

//c. Compara cómo se manejan las dependencias en el archivo package.json de cada proyecto y qué ocurre con la carpeta node_modules en ambos casos.
//En el que está instalado globalmente las dependecias aparecen como dependecies y en el que está local aparece como devDependencies y en el node module no veo nigún cambio de uno sobre otro