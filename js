<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Titre de la page</title>
</head>
<body>
...
<h1>Hello!</h1>
...
     <h2>JS:</h2>
<div id="lightning"></div>
<script src="https://edf-communities-developer-edition.eu25.force.com/lightning/lightning.out.js"></script>
<script>
     $Lightning.use("c:LightOutApp", function() {
        $Lightning.createComponent("c:expenses",
                                   {},
              "lightning",
              function(cmp) {
                console.log("LWC component was created");
                // do some stuff
              }
          );
        },
       'https://edf-communities-developer-edition.eu25.force.com/'
      );
</script>
...
<div id="lightningm"></div>
<script src="https://lwcsummer19nts-developer-edition.gus.force.com/lightning/lightning.out.js"></script>
<script>
     $Lightning.use("c:lwcVfDemoApp", function() {
        $Lightning.createComponent("c:lwcVFDemo", {
            	objectName: "Contact"
            },
              "lightningm",
              function(cmp) {
                console.log("LWC component was created");
                // do some stuff
              }
          );
        },
       'https://lwcsummer19nts-developer-edition.gus.force.com/'
      );
</script>
</body>
</html>
