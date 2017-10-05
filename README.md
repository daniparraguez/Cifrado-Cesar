# Cifrado César
## Esto es un título un poco menos grande
### Esto es un título menos grande que el anterior
*Esto es cursiva*
**Esto es Bold**
~~Esto está tachado~~

# Cifrado César:
### Función para encriptar y desencriptar un input dado por el usuario de letras mayúsculas y minúsculas 33 espacios a la derecha del alfabeto.

#### Primero creamos una función que mediante un prompt que recoja si el usuario quiere cifrar o descifrar lo que ingresará , usamos 1 para cifrar y 2 para descifrar mediante un if lo guíamos a una u otra función (cifrar o descifrar), con un do while repetiremos la función hasta que sea 1 o 2 lo que se ingrese.

#### Si ingresa (1) lo guiará a la función cifrar que pide mediante un prompt la palabra que quiere cifrar creamos una variable de tipo string vacía , con un for recorremos toda la palabra ingresada, creamos una variable que identifique el carácter a cifrar, comprobamos que sea una letra y buscamos el número Ascci de esa letra, nos guiará a distintas fórmulas si es un texto en mayúscula o minúscula según su código ascci, creamos una nueva cadena y retornamos un alert con el mensaje encriptado.

#### Si ingresa (2) lo guiará a la función descifrar que pide mediante un prompt la palabra que quiere descifrar, creamos una variable de tipo string vacía , con un for recorremos toda la palabra ingresada, creamos una variable que identifique el carácter a cifrar, comprobamos que sea una letra y buscamos el número Ascci de esa letra, nos guiará a distintas fórmulas si es un texto en mayúscula o minúscula según su código ascci, creamos una nueva cadena y retornamos un alert con el mensaje desencriptado.


**Diagrama de flujo**