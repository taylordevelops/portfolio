

        function addStar(){
            const starBox = document.getElementById("starbox");
            
            var xpos = Math.round( Math.random() * 100 );
            var ypos = Math.round( Math.random() * 100);
        
    
            var fadeTime = Math.random() * 10;
            const newStar = document.createElement("div");
            newStar.setAttribute("class", "star");
            newStar.style.left = xpos+"vw";
            newStar.style.top = ypos+"vh";
                   
            starBox.appendChild(newStar);
            }
    
    
    function starLoop(){
    
        // Create a star on a timeout function up to the max in the for loop
    
        for(i = 1; i <= 200; i++){
            (function(i){
    
                var rand = Math.round(Math.random() );
    
                setTimeout(function(){
                    addStar();
                }, Math.abs(rand) + 100);

            }(i));
        } 
    
    
    }
    
    
    
    document.onload = starLoop();
    
    /* Dark/light Mode Toggle */
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    if(currentTheme === 'light'){
        toggleSwitch.checked = false;
    }

/* End Dark/Light Mode Toggle */