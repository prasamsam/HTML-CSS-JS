const background = document.querySelector('.background');
const backgroundContent = document.querySelector('.background-content')

const colorPaletteBoxes = document.querySelectorAll('.color-palette-box');

colorPaletteBoxes.forEach(function(colorPaletteBox){
    colorPaletteBox.addEventListener('click', function(event){
        switch (event.target.id){
            case "light-blue":
                background.style.backgroundColor = "#686de0";
                backgroundContent.textContent = `Background Changed to ${event.target.id}`
                break;

            case "light-green":
                background.style.backgroundColor = "#6ab04c";
                backgroundContent.textContent = `Background Changed to ${event.target.id}`

                break;

            case "light-red":
                background.style.backgroundColor = "#eb4d4b";
                backgroundContent.textContent = `Background Changed to ${event.target.id}`

                break;

            case "light-yellow":
                background.style.backgroundColor = "#fbc531";
                backgroundContent.textContent = `Background Changed to ${event.target.id}`

                break;

            case "light-purple":
                background.style.backgroundColor = "#8c7ae6";
                backgroundContent.textContent = `Background Changed to ${event.target.id}`

                break;

            default:
                background.style.backgroundColor = "#ffffff"

        }
    })
})