#-Ejercicio-1
while True:
    try:
        numero = int(input("Ingrese un número entero: "))
        if numero % 2 == 0:
            print("El número ingresado es par.")
        else:
            print("El número ingresado es impar.")
        break
    except ValueError:
        print("Error: Por favor, ingrese un número entero válido.")
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#-Ejercicio-2
while True:
    try:
        numero = int(input("Ingrese un número: "))
        if numero %2 ==0:
            if numero > 0:
                print("El número ingresado es par y positivo.")
            else:
                print("El número ingresado es par y negativo.")
        else :
            if numero > 0:
                print("El número ingresado es impar y positivo.")
            else:
                print("El número ingresado es impar y negativo.")
        break
    except ValueError:
        print("Error: Por favor, ingrese un número entero válido.")
#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#-Ejercicio-3
bandera = True
while bandera == True:
    try:
        num1 = float(input("Ingrese el primer número: "))
        num2 = float(input("Ingrese el segundo número: "))
        if num2 < 0 and num1 % 2 != 0:
            if num1 > num2:
                print("El mayor es:", num1)
            else:
                print("El mayor es:", num2)
        else:
            if num1 < num2:
                print("El menor es:", num1)
            else:
                print("El menor es:", num2)
        bandera = False
    except ValueError:
        print("Error: Solo se pueden ingresar números")
        print("Por favor intentelo de nuevo")

  #--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#-Ejercicio-4
try:
    # Capturar tres números
    numero1 = int(input("Ingrese el primer número: "))
    numero2 = int(input("Ingrese el segundo número: "))
    numero3 = int(input("Ingrese el tercer número: "))

    # Verificar si hay números iguales
    if numero1 == numero2 or numero1 == numero3 or numero2 == numero3:
        print("Hay dos o más números iguales, no es posible determinar el mayor, el menor y el intermedio.")
    else:
        # Determinar el mayor
        mayor = numero1
        if numero2 > mayor:
            mayor = numero2
        if numero3 > mayor:
            mayor = numero3

        # Determinar el menor
        menor = numero1
        if numero2 < menor:
            menor = numero2
        if numero3 < menor:
            menor = numero3

        # Determinar el intermedio
        intermedio = (numero1 + numero2 + numero3) - mayor - menor

        # Imprimir los resultados
        print("El mayor número es:", mayor)
        print("El menor número es:", menor)
        print("El número intermedio es:", intermedio)
except:
    print("Valor no válido")
