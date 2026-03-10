# 🚀 Guía para subir tu tienda a Render (GRATIS)

## ¿Qué vas a lograr?
Tu propia página web con los productos de Encendido Oeste,
actualizada automáticamente cada vez que alguien la abre.

---

## PASO 1 — Instalar Git y Node.js

1. Entrá a https://nodejs.org y descargá la versión **LTS** (la recomendada)
2. Instalala normalmente (siguiente, siguiente, finalizar)
3. Entrá a https://git-scm.com/download/win y descargá Git
4. Instalalo normalmente

---

## PASO 2 — Crear cuenta en GitHub (gratuita)

1. Entrá a https://github.com
2. Hacé clic en **Sign up** y creá tu cuenta gratuita
3. Verificá tu email

---

## PASO 3 — Subir los archivos a GitHub

1. Abrí la carpeta **encendido-oeste-backend** que te pasé
2. Hacé clic derecho adentro de la carpeta → **"Git Bash Here"** (o "Open in Terminal")
3. Escribí estos comandos uno por uno (Enter después de cada uno):

```
git init
git add .
git commit -m "primera version"
```

4. Andá a https://github.com/new
5. En "Repository name" escribí: **encendido-oeste**
6. Dejá en **Public** y hacé clic en **Create repository**
7. GitHub te va a mostrar unos comandos. Copiá y pegá los que dicen:

```
git remote add origin https://github.com/TU-USUARIO/encendido-oeste.git
git branch -M main
git push -u origin main
```

   (reemplazá TU-USUARIO con tu nombre de usuario de GitHub)

---

## PASO 4 — Crear cuenta en Render (gratuita)

1. Entrá a https://render.com
2. Hacé clic en **Get Started for Free**
3. Elegí **Sign in with GitHub** (así se conectan automáticamente)

---

## PASO 5 — Crear el servicio en Render

1. Una vez adentro, hacé clic en **New +** → **Web Service**
2. Conectá tu repositorio **encendido-oeste**
3. Completá así:
   - **Name**: encendido-oeste (o el nombre que quieras)
   - **Region**: Oregon (USA) o el más cercano
   - **Branch**: main
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: **Free**
4. Hacé clic en **Create Web Service**

---

## PASO 6 — ¡Listo! 🎉

Render va a tardar unos 2-3 minutos en arrancar por primera vez.
Después te va a dar una URL así:

```
https://encendido-oeste.onrender.com
```

¡Esa es tu página! Compartila con quien quieras.

---

## ⚠️ Nota importante sobre el plan gratuito de Render

El plan gratuito "duerme" el servidor si nadie lo visita en 15 minutos.
La primera vez que alguien entre puede tardar ~30 segundos en cargar.
Esto es normal y gratuito. Si querés que siempre esté activo,
el plan pagado de Render cuesta USD 7/mes.

---

## ❓ ¿Problemas?

Si algo no funciona, mandame un mensaje con el error que ves
y te ayudo a resolverlo.
