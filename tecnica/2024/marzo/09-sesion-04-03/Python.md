# INVERCIONES
```
p1 = float(input("Por favor ingrese la inversión de la persona 1: "))
p2 = float(input("Por favor ingrese la inversión de la persona 2: "))
p3 = float(input("Por favor ingrese la inversión de la persona 3: "))

totl = p1+p2+p3
por1 = (p1/totl)*100
por2 = (p2/totl)*100
por3 = (p3/totl)*100

print("La inversión total fue de ",totl,"$")
print("El porcentaje de inversión de la persona 1 es de ",por1,"%")
print("El porcentaje de inversión de la persona 2 es de ",por2,"%")
print("El porcentaje de inversión de la persona 3 es de ",por3,"%")

```
# PROMEDIO ALUMNO
```
exm = float(input("Ingrese el puntaje obtenido en el examen de matemáticas: "))
tm1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de matemáticas: "))
tm2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de matemáticas: "))
tm3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de matemáticas: "))
exf = float(input("Ingrese el puntaje obtenido en el examen de física: "))
tf1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de física: "))
tf2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de física: "))
exq = float(input("Ingrese el puntaje obtenido en el examen de Química: "))
tq1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de Química: "))
tq2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de Química: "))
tq3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de Química: "))

protm = (tm1+tm2+tm3)/3
prom = (exm*0.9)+(protm*0.1)
protf = (tf1+tf2)/2
prof = (exf*0.8)+(protf*0.2)
protq = (tq1+tq2+tq3)/3
proq = (exq*0.85)+(protq*0.15)
pro = (prom+prof+proq)/3

print("El promedio de matemáticas es de ",prom)
print("El promedio de física es de ",prof)
print("El promedio de química es de ",proq)
print("El promedio total de las 3 materias es de ",pro)
```

# POSITIVO Y NEGATIVO
```
num = float(input("Digite el número que desee: "))

if(num<0):
 print("El número digitado es negativo")
else:
 print("El número digitado es positivo")
```
# MAYOR O MENOR A 200
```
num = float(input("Digite el número que desee: "))

if(num>200):
 print("El número digitado es mayor que 200")
else:
 print("El número digitado es menor que 200")
```
# 50-100
```
num = float(input("Digite el número que desee: "))

if(50<num<100):
 print("El número digitado está en el rango de 50 y 100")
else:
 print("El número digitado no está en el rango de 50 y 100")
```