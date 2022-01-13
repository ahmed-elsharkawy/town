window.onscroll = function() {myFunction()};

        function myFunction() {
            if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
                document.getElementById("navBar").className = "slideDown";
                document.getElementById("linkColor1").className = "slideDownLinkColor";
                document.getElementById("linkColor2").className = "slideDownLinkColor";
                document.getElementById("linkColor3").className = "slideDownLinkColor";
            }else{
                document.getElementById("navBar").classList.remove("slideDown");
                document.getElementById("linkColor1").classList.remove("slideDownLinkColor");
                document.getElementById("linkColor2").classList.remove("slideDownLinkColor");
                document.getElementById("linkColor3").classList.remove("slideDownLinkColor");
            }
        }
        function slide() {
            document.getElementById("slideMenu").classList.toggle("slideMenuStyle");
        }