# VR-Markdown

Bienvenue sur notre page dédiée à la réalisation de panoramas 360° pour l’éducation en utilisant les bibliothèques A-Frame.

La réalité virtuelle a le potentiel de transformer l’éducation, en offrant des expériences d’apprentissage immersives et interactives. Les panoramas 360°, en particulier, peuvent permettre aux lycéens et étudiants de découvrir de nouveaux environnements et concepts d’une manière visuellement riche et engageante.

A-Frame, une bibliothèque JavaScript pour la création d’expériences de réalité virtuelle, rend cette technologie accessible à tous, même à ceux qui n’ont pas de connaissances approfondies en programmation. Avec A-Frame, vous pouvez consulter des panoramas 360° interactifs et immersifs directement dans votre navigateur web, ce qui est idéal pour une utilisation en classe ou à distance.

Sur cette page, nous vous guiderons à travers les étapes de la création de votre propre panorama 360° en utilisant A-Frame, spécifiquement adapté à un contexte éducatif. Nous commencerons par les bases, comme la configuration de votre environnement de développement et la prise de photos panoramiques, puis nous vous montrerons comment utiliser A-Frame pour assembler ces photos en une expérience de réalité virtuelle interactive.

Que vous soyez un enseignant cherchant à intégrer la réalité virtuelle dans votre salle de classe, un développeur web cherchant à créer des ressources éducatives interactives, ou simplement quelqu’un qui est curieux de la technologie de panorama 360°, nous espérons que vous trouverez cette page informative et utile. Bonne création !

## Etape 1 - Matériel préparatoire et prises de vues

J'ai pris des photos en 360° a l'aide d'une caméra 360, après je l'ai importer sur le logiciel insta 360 mais cela peut se faire avec un materiel similaire.

j'ai modifier la resolution de l'image de 2880 pixel par 1440 pixel avec le logiciel de la caméra puis j'ai flouté le visage pour par la suite les importer 

on va utiliser le code suivant pour importer l'image 360 sur le navigateur:
```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <!-- Définir le contenu pour l'image du panorama -->
      <a-assets>
        <img id="panorama-image" src="./images/Photo 360 1.jpg">
      </a-assets>

      <!-- Utiliser l'asset pour créer le panorama -->
      <a-sky src="#panorama-image"></a-sky>
    </a-scene>
  </body>
</html>
```
<a href=">
On ajuste a rajouter un dosier dans visual studio code puis un fichier sur meme dosier.

 ![alt text](<capture_ecran/Capture Visual Studio Code.png>)

![alt text](<images/Photo 360 1.jpg>)

![alt text](<images/Photo 360 2.jpg>)
