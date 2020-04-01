# Exercises

1. Pintar una lista del 1 al 50.
2. Crear un componente botón que al hacer click en él aumente en 1 el valor de un contador. El valor del contador empieza en 0.
3. Crear un componente input que solamente te deje escribir consonantes.
4. Crear un componente que al pulsar en un botón actualice el título de la página con la fecha de hoy. Hacer uso de useEffect.
5. Crear un componente que tenga un contador que empieza en 10. Cuando pulsas en un botón va restando. Si llega a 0 sale la palabra ¡Boom! y aparece un botón que permite resetear el contador a 10. Si se resetea, la palabra ¡Boom! desaparece.
6. Crear un componente que al escribir en un input vaya guardando en [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) lo que escribes. Cuando el componente carga debe cargar lo que haya en local storage y rellenar el input con ese contenido.
7. Crear un componente que al cargarse haga una petición a este [API](https://pokeapi.co/api/v2/pokemon) y pinte todos los Pokémon usando fetch.
8. Crear un componente que pinte una gráfica de donut usando [conic gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient). El componente se le pasará el porcentaje a pintar.
9. Crear un custom hook que te devuelva la altura y el ancho del navegador. Usarlo en un componente que pinte dichos valores. Si la pantalla se hace más grande o más pequeña esos valores deberían cambiar.
10. Crear un custom hook que te diga todas las teclas que se han pulsado desde que carga la página aunque no haya ningún input. En un componente pintar todas las teclas pulsadas.
11. Crear un custom hook de temporizador. Hacer uso del custom hook en un componente temporizador, este se puede configurar con el tiempo restante. Cuando el temporizador llega a 0 cambia el color de fondo de la página y te permite resetearlo. Además vibra usando este [API del navagador](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate). También se puede detener el temporizador y continuar. Se puede cancelar el temporizador lo que volvería a su valor inicial. Hacer uso de useReducer.
12. Crear un componente de valoración de estrellas. Permite recibir una valoración con valores decimales. Se deben mostrar estrellas enteras o medias estrellas dependiendo de si la valoración.

