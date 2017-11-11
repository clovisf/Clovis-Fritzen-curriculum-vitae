
         function load_home() {
            document.getElementById("box1").innerHTML='<object type="text/html" data="inicial.html" ></object>';
         }
         function load_whoami() {
            document.getElementById("box1").innerHTML='<object type="text/html" data="whoami.html" ></object>';
         }
         function load_mywork() {
            document.getElementById("box1").innerHTML='<object type="text/html" data="mywork.html" ></object>';
         }
         function load_news() {
            document.getElementById("box1").innerHTML='<object type="text/html" data="novidades.html" ></object>';
         }
         function load_findme() {
            document.getElementById("box1").innerHTML='<object type="text/html" data="ondeestou.html" ></object>';
         }
         window.onload = function(){
           load_home();
         }
