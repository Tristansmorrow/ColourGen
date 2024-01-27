const button = document.getElementById('btn')
const input = document.getElementById('colorWell')
const select = document.getElementById('selectBox')
const container = document.getElementById('container')
const footer = document.getElementById('footer')


button.addEventListener('click', function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${input.value.substr(1)}&mode=${select.value}&count=5`)
        .then(Response => Response.json())
        .then(data => {
            Arr = data.colors
            let html = ""
            let htmlC = ""
            for (let color of Arr) {
                html += `<h3>#${color.hex.clean}</h3>`
                htmlC += `<div class="color-cons" style="background-color: #${color.hex.clean};"></div>`
            }
            footer.innerHTML = html
            container.innerHTML = htmlC
        })})
