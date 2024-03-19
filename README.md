# VR-Markdown

J'ai pris des photo en 360 a l'aide d'une caméra 360, après je l'ai importer sur le logiciel insta 360 mais cela peut se faire avec un materiel similaire.

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
      <!-- Définir l'asset pour l'image du panorama -->
      <a-assets>
        <img id="panorama-image" src="chemin_vers_votre_image.jpg">
      </a-assets>

      <!-- Utiliser l'asset pour créer le panorama -->
      <a-sky src="#panorama-image"></a-sky>
    </a-scene>
  </body>
</html>
```

On ajuste a rajouter un dosier dans visual studio code puis un fichier sur meme dosier.

 

![alt text](<images/Photo 360 1.jpg>)

![alt text](<images/Photo 360 2.jpg>)