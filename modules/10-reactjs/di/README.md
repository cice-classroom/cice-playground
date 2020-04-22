# DI

1. Duplicar el directorio de react-parcel y renombrarlo a my-di
2. Crear un contenedor de IoC con Inversify
3. Crear una clase "Greeter". Este devolverá "Hello" cuando se invoque el método "hello"
4. Crear un servicio "PersonalAssistant". Este servicio recibirá por inyección el servicio "Greeter" Este PersonalAssistant devolverá un string con una llamada a Greeter.hell() + "Mr|Ms <Vuestro nombre>"
5. Pintar en un componente de React "Hello Mr|Ms <Vuestro Nombre>" obteniendo del contenedor "PersonalAssistant" con: `container.get<PersonalAssistant>(TYPES.PERSONAL_ASSISTANT).morningRoutine('César')`

```typescript
class Greeter {
    hello(): string {
        return 'Hello'
    }
}

class PersonalAssistant {
    constructor(private readonly greeter: Greeter) {}

    morningRoutine(name: string) {
        return `${this.greeter.hello()} Mr|Ms ${name}`
    }
}
```
