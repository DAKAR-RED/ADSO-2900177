# Markdown: Manual Completo

## Índice

1. [Introducción](#introducción)
2. [Encabezados](#encabezados)
3. [Texto](#texto)
4. [Listas](#listas)
5. [Enlaces](#enlaces)
6. [Imágenes](#imágenes)
7. [Formato de Texto](#formato-de-texto)
   - [Negrita y Cursiva](#negrita-y-cursiva)
   - [Tachado](#tachado)
   - [Subrayado](#subrayado)
8. [Citas](#citas)
9. [Código](#código)
   - [Bloques de Código](#bloques-de-código)
   - [Resaltado de Sintaxis](#resaltado-de-sintaxis)
10. [Líneas Horizontales](#líneas-horizontales)
11. [Tablas](#tablas)
12. [Escapar Caracteres](#escapar-caracteres)

 
---

## Introducción

Markdown es un lenguaje de marcado ligero que permite formatear el texto de una manera sencilla y fácil de leer. A diferencia de los lenguajes de marcado más complejos, como HTML, Markdown fue diseñado para ser simple y legible incluso en su forma no formateada. Fue creado por John Gruber y Aaron Swartz con el objetivo de proporcionar una sintaxis fácil de usar que pudiera convertirse fácilmente a HTML.

La principal ventaja de Markdown es que permite a las personas escribir utilizando un formato de texto plano, mientras aún tienen la capacidad de agregar elementos de formato, como encabezados, listas, enlaces e imágenes, sin necesidad de conocer o escribir HTML directamente.

## Encabezados

Parece que hubo un pequeño error tipográfico en tu pregunta. Supongo que quisiste preguntar acerca de "encabezados" en Markdown. Los encabezados en Markdown se utilizan para estructurar y organizar el contenido del documento. Puedes crear encabezados usando uno o más signos de almohadilla (#) seguido de un espacio y luego el texto del encabezado. La cantidad de almohadillas determina el nivel del encabezado.

```markdown
# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6
```
En este ejemplo, # representa el encabezado de nivel 1, ## el de nivel 2, y así sucesivamente hasta ###### para el encabezado de nivel 6. Puedes utilizar estos encabezados para organizar tu documento y darle una jerarquía visual.

## Texto

En Markdown, puedes dar formato a tu texto de varias maneras. Aquí hay algunos ejemplos básicos:

### Texto en Negrita y Cursiva
Para texto en **negrita**, puedes usar doble asterisco (`**`) o doble guion bajo (`__`):

```markdown
**Este texto está en negrita**
__Este texto también está en negrita__
```

Para texto en *cursiva*, puedes usar un solo asterisco (`*`) o un solo guion bajo (`_`):

```markdown
*Este texto está en cursiva*
_Este texto también está en cursiva_
```

### Combinar Negrita y Cursiva
Puedes combinar negrita y cursiva al utilizar una combinación de asteriscos y guiones bajos:

```markdown
**Texto en negrita y _cursiva_**
__Texto en negrita y *cursiva*__
```

### Tachado
Para agregar un efecto de tachado al texto, puedes usar doble virgulilla (`~~`):

```markdown
~~Este texto está tachado~~
```

### Subrayado
Markdown por sí mismo no tiene una sintaxis estándar para subrayar texto, pero algunos editores o plataformas pueden admitir la sintaxis HTML para subrayar:

```markdown
<ins>Este texto está subrayado</ins>
```



## Listas

En Markdown, puedes crear listas ordenadas y no ordenadas de una manera fácil y legible. Aquí tienes ejemplos de ambas:

Listas No rdenadas

Las listas no ordenadas se crean utilizando asteriscos (*), signos de más (+) o guiones (-) seguidos de un espacio. Puedes anidar las listas agregando espacios antes de los asteriscos, signos de más o guiones:

```markdown
  
  * Elemento 1
* Elemento 2
  * Subelemento 2.1
  * Subelemento 2.2
* Elemento 3
```

Listas Ordenadas

Las listas ordenadas se crean utilizando números seguidos de un punto y un espacio. Al igual que con las listas no ordenadas, puedes anidar listas ordenadas mediante la indentación:

```markdown
  
1. Primer elemento
2. Segundo elemento
   1. Subelemento 2.1
   2. Subelemento 2.2
3. Tercer elemento
```


Lista de Tareas (Checkbox)

Markdown también permite crear listas de tareas con casillas de verificación:

```markdown
  
- [x] Tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente
```



## Enlaces

En Markdown, puedes crear enlaces de una manera sencilla y legible. Aquí tienes ejemplos de cómo puedes insertar enlaces:

Enlace Básico
Puedes crear un enlace básico utilizando la siguiente sintaxis:

```markdown
  
[Texto del enlace](URL del enlace)
```
Por ejemplo:

```markdown
  
[Google](https://www.google.com)
```
Este enlace se mostrará como "Google".

Enlace con Título
Puedes agregar un título al enlace utilizando la siguiente sintaxis:
```markdown
  
[Texto del enlace](URL del enlace "Título del enlace")

```
Enlace Automático

Si solo deseas mostrar la URL como el texto del enlace, puedes usar la siguiente sintaxis:

```markdown
  
<URL del enlace>

```
Por ejemplo:

```markdown

<https://www.example.com>

```
Este enlace se mostrará como "https://www.example.com".

Enlace de Referencia

Puedes utilizar enlaces de referencia para hacer el Markdown más limpio. Define el enlace al final del documento y luego úsalo a lo largo del texto:

```markdown
[Texto del enlace][referencia]

[referencia]: URL del enlace "Título del enlace"
```
Por ejemplo:

```markdowm
[Google][google-link]

[google-link]: https://www.google.com "Motor de búsqueda"
```

Este enlace se mostrará como "Google".


## Imágenes

En Markdown, puedes insertar imágenes de manera bastante sencilla utilizando la siguiente sintaxis:

```markdown
![Texto alternativo](URL de la imagen)
```

- **Texto alternativo:** Es una descripción de la imagen que se muestra si la imagen no puede cargarse o para ayudar a los usuarios con discapacidades visuales.

- **URL de la imagen:** La dirección URL de la imagen que quieres mostrar.

Aquí tienes un ejemplo:

```markdown
![Logo de Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png)
```


Además, al igual que con los enlaces, también puedes utilizar la sintaxis de referencia para las imágenes. Aquí tienes un ejemplo:

```markdown
![Logo de Markdown][logo-markdown]

[logo-markdown]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png "Logo de Markdown"
```





## Formato de Texto

### Negrita y Cursiva

```markdown
**Negrita** o __Negrita__
*Cursiva* o _Cursiva_
```

### Tachado

```markdown
~~Texto Tachado~~
```

### Subrayado

```markdown
<u>Texto Subrayado</u>
```
En Markdown, puedes utilizar diferentes estilos de texto para dar formato y énfasis a tus palabras. Aquí te presento algunos de los tipos de texto comunes que puedes utilizar:






## Citas

```markdown
> Esto es una cita.
```
En Markdown, puedes crear citas utilizando el símbolo mayor que (`>`). Aquí tienes ejemplos de cómo puedes utilizar citas en tu documento:

### Citas Simples
Para una cita simple, simplemente precede el texto con el símbolo mayor que (`>`):

```markdown
> Esto es una cita.
```

Este código se mostrará como:

> Esto es una cita.

### Citas Multilínea
Puedes utilizar el símbolo mayor que (`>`) en cada línea de tu cita para crear un bloque de citas multilínea:

```markdown
> Esto es una cita.
> Puede abarcar varias líneas.
> Incluso se pueden incluir párrafos separados.
```

Esto se verá así:

> Esto es una cita.
> Puede abarcar varias líneas.
> Incluso se pueden incluir párrafos separados.

### Citas Anidadas
Puedes anidar citas usando múltiples símbolos mayores que (`>`) en cada nivel:

```markdown
> Nivel 1 de cita
>> Nivel 2 de cita
>>> Nivel 3 de cita
```

Esto se mostrará de la siguiente manera:

> Nivel 1 de cita
>> Nivel 2 de cita
>>> Nivel 3 de cita


## Código

### Bloques de Código

Usa tres comillas invertidas para crear bloques de código.

\```python
print("Hola, mundo!")
\```

### Resaltado de Sintaxis
En Markdown, puedes formatear bloques de código de varias maneras, dependiendo de si es una sola línea o un bloque de código multilineal. Aquí te dejo algunos ejemplos:

### Código en una sola línea
Utiliza comillas simples (`'`) o comillas invertidas (`` ` ``) para resaltar código en una sola línea:

```markdown
Este es un `código en una sola línea`.
```

Este código se verá así:
> Este es un `código en una sola línea`.

### Bloque de código multilineal
Para bloques de código más extensos, puedes utilizar triple comillas invertidas (`` ``` ```). Puedes especificar el lenguaje opcionalmente para que se realice el resaltado de sintaxis adecuado:

\```python
def hola_mundo():
    print("Hola, mundo!")
\```

Este código se verá así:
```python
def hola_mundo():
    print("Hola, mundo!")
```

### Resaltado de sintaxis
Al especificar el lenguaje después de las triple comillas invertidas, puedes obtener resaltado de sintaxis. Aquí hay un ejemplo con Python:

\```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
\```

Este código se verá así:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```




## Líneas Horizontales

Puedes agregar líneas horizontales en Markdown para separar secciones o elementos de manera visualmente clara. Para crear una línea horizontal, puedes utilizar tres guiones (`---`), tres asteriscos (`***`), o tres guiones bajos (`___`) en una línea separada. Aquí tienes ejemplos:

```markdown
Texto antes de la línea horizontal

---

Texto después de la línea horizontal
```

Otra variante:

```markdown
Texto antes de la línea horizontal

***

Texto después de la línea horizontal
```

O también:

```markdown
Texto antes de la línea horizontal

___

Texto después de la línea horizontal
```

Todas estas opciones producirán una línea horizontal que se verá así:

Texto antes de la línea horizontal

---

Texto después de la línea horizontal


## Tablas

```markdown
| Encabezado 1 | Encabezado 2 |
| ------------ | ------------ |
| Celda 1,1    | Celda 1,2    |
| Celda 2,1    | Celda 2,2    |
```
En Markdown, puedes crear tablas utilizando barras verticales (`|`) y guiones (`-`). Aquí hay un ejemplo básico de cómo crear una tabla:

```markdown
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
| ------------ | ------------ | ------------ |
| Celda 1,1    | Celda 1,2    | Celda 1,3    |
| Celda 2,1    | Celda 2,2    | Celda 2,3    |
| Celda 3,1    | Celda 3,2    | Celda 3,3    |
```

Esto se verá como una tabla:

| Encabezado 1 | Encabezado 2 | Encabezado 3 |
| ------------ | ------------ | ------------ |
| Celda 1,1    | Celda 1,2    | Celda 1,3    |
| Celda 2,1    | Celda 2,2    | Celda 2,3    |
| Celda 3,1    | Celda 3,2    | Celda 3,3    |

Puedes ajustar la alineación del texto en las celdas utilizando los dos puntos (`:`) dentro de las líneas divisorias. Por ejemplo, `:---` alineará el texto a la izquierda, `---:` alineará el texto a la derecha, y `:---:` lo centrará.

```markdown
| Izquierda | Centro | Derecha |
| :---      | :---:  | ---:    |
| Celda 1   | Celda 2 | Celda 3 |
```

Esto se verá así:

| Izquierda | Centro | Derecha |
| :---      | :---:  | ---:    |
| Celda 1   | Celda 2 | Celda 3 |



## Escapar Caracteres

En Markdown, puedes escapar caracteres utilizando la barra invertida (`\`). Esto se conoce como "escapar" un carácter y le indica al intérprete de Markdown que debe tratar el siguiente carácter de forma literal, en lugar de interpretarlo como parte de la sintaxis Markdown. Aquí tienes algunos ejemplos de cómo escapar caracteres comunes:

1. **Barra Invertida `\`:**
   Para escapar la barra invertida, simplemente agrégala antes del carácter. Por ejemplo:

   ```markdown
   Esto es un backslash: \\
   ```

   Esto se mostrará como: "Esto es un backslash: \\".

2. **Asterisco `*`, Guion Bajo `_` y Guion Medio `-`:**
   Para escapar estos caracteres, agrégales una barra invertida. Por ejemplo:

   ```markdown
   \* Esto no será un elemento de lista.
   ```

   Esto se mostrará como: "\* Esto no será un elemento de lista."

   ```markdown
   Esto\_no\_será\_cursiva.
   ```

   Esto se mostrará como: "Esto\_no\_será\_cursiva."

   ```markdown
   Esto \- no será un elemento de lista.
   ```

   Esto se mostrará como: "Esto - no será un elemento de lista."

3. **Símbolo Mayor Que `>` en Citas:**
   Si estás utilizando el símbolo mayor que en una cita y deseas mostrarlo literalmente en lugar de crear una cita, escápalo con una barra invertida:

   ```markdown
   Esto no es una cita: \> texto citado.
   ```

   Esto se mostrará como: "Esto no es una cita: > texto citado."

## Que otras cosas podemos hacer con Markdowm

Markdown es un lenguaje de marcado ligero diseñado para ser fácil de leer y escribir, y no requiere de software especializado para su uso. Solo necesitas un editor de texto simple para crear y editar documentos en Markdown. Aquí hay algunas opciones comunes:

Editores de texto:

Notepad (Windows): Puedes escribir en Markdown directamente usando el Bloc de notas de Windows.
TextEdit (Mac): También puedes usar TextEdit en Mac para escribir en Markdown.
gedit (Linux): En sistemas Linux, puedes usar el editor de texto gedit.
Editores Markdown específicos:

Visual Studio Code: Un editor de código fuente muy popular que admite Markdown con resaltado de sintaxis y vista previa en tiempo real.
Atom: Otro editor de texto que es muy utilizado por desarrolladores, con soporte nativo para Markdown.
Sublime Text: Un editor de texto avanzado que admite Markdown y tiene numerosos complementos para mejorar la experiencia.
Plataformas en línea:

GitHub, GitLab, Bitbucket: Estas plataformas de desarrollo colaborativo admiten la creación de documentos en Markdown, especialmente en archivos README.
Stack Overflow: Cuando haces preguntas o escribes respuestas en Stack Overflow, puedes utilizar Markdown para formatear tu texto.
Editores Markdown en línea:

Hay muchos editores Markdown en línea que te permiten escribir y previsualizar el resultado en tiempo real. Algunos ejemplos incluyen Dillinger, StackEdit y Markdown Live Preview.



