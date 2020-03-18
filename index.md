<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Demo Lightning Out</title>
    <link
      type="text/css"
      rel="stylesheet"
      href="slds/styles/salesforce-lightning-design-system.css"
    />
    <link
      type="text/css"
      rel="stylesheet"
      href="_slds/styles/salesforce-lightning-design-system.css"
    />
  </head>

  <body>
    ...
    <h1>Hello!</h1>
    ...
    <h2>My LWComponents :</h2>
    ...
    <div id="newCaseFormId"></div>
    <script src="https://oriolete-dev-ed.lightning.force.com/lightning/lightning.out.js"></script>
    <script>
      $Lightning.use(
        "c:newCaseApp",
        function() {
          $Lightning.createComponent(
            "c:newCaseForm",
            { objectName: "Case" },
            "newCaseFormId",
            function(component) {
              console.log("LWC was created");
            }
          );
        },
        "https://oriolete-developer-edition.eu8.force.com/Customers"
      );
    </script>
  </body>
</html>
