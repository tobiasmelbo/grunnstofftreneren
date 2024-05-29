/*
(✿◡‿◡) h-hei.. hvorfor titter du på javascript-koden min ?? (◔◡◔)
*/

grunnstoffer = [
    [1, 'H', 'Hydrogen'],
    [2, 'He', 'Helium'],
    [3, 'Li', 'Litium'],
    [4, 'Be', 'Beryllium'],
    [5, 'B', 'Bor'],
    [6, 'C', 'Karbon'],
    [7, 'N', 'Nitrogen'],
    [8, 'O', 'Oksygen'],
    [9, 'F', 'Fluor'],
    [10, 'Ne', 'Neon'],
    [11, 'Na', 'Natrium'],
    [12, 'Mg', 'Magnesium'],
    [13, 'Al', 'Aluminium'],
    [14, 'Si', 'Silisium'],
    [15, 'P', 'Fosfor'],
    [16, 'S', 'Svovel'],
    [17, 'Cl', 'Klor'],
    [18, 'Ar', 'Argon'],
    [19, 'K', 'Kalium'],
    [20, 'Ca', 'Kalsium'],
    [21, 'Sc', 'Scandium'],
    [22, 'Ti', 'Titan'],
    [23, 'V', 'Vanadium'],
    [24, 'Cr', 'Krom'],
    [25, 'Mn', 'Mangan'],
    [26, 'Fe', 'Jern'],
    [27, 'Co', 'Kobolt'],
    [28, 'Ni', 'Nikkel'],
    [29, 'Cu', 'Kobber'],
    [30, 'Zn', 'Sink'],
    [31, 'Ga', 'Gallium'],
    [32, 'Ge', 'Germanium'],
    [33, 'As', 'Arsen'],
    [34, 'Se', 'Selen'],
    [35, 'Br', 'Brom'],
    [36, 'Kr', 'Krypton'],
    [37, 'Rb', 'Rubidium'],
    [38, 'Sr', 'Strontium'],
    [39, 'Y', 'Yttrium'],
    [40, 'Zr', 'Zirkonium'],
    [41, 'Nb', 'Niob'],
    [42, 'Mo', 'Molybden'],
    [43, 'Tc', 'Technetium'],
    [44, 'Ru', 'Ruthenium'],
    [45, 'Rh', 'Rhodium'],
    [46, 'Pd', 'Palladium'],
    [47, 'Ag', 'Sølv'],
    [48, 'Cd', 'Kadmium'],
    [49, 'In', 'Indium'],
    [50, 'Sn', 'Tinn'],
    [51, 'Sb', 'Antimon'],
    [52, 'Te', 'Tellur'],
    [53, 'I', 'Jod'],
    [54, 'Xe', 'Xenon'],
    [55, 'Cs', 'Cesium'],
    [56, 'Ba', 'Barium'],
    [57, 'La', 'Lantan'],
    [58, 'Ce', 'Cerium'],
    [59, 'Pr', 'Praseodym'],
    [60, 'Nd', 'Neodym'],
    [61, 'Pm', 'Promethium'],
    [62, 'Sm', 'Samarium'],
    [63, 'Eu', 'Europium'],
    [64, 'Gd', 'Gadolinium'],
    [65, 'Tb', 'Terbium'],
    [66, 'Dy', 'Dysprosium'],
    [67, 'Ho', 'Holmium'],
    [68, 'Er', 'Erbium'],
    [69, 'Tm', 'Thulium'],
    [70, 'Yb', 'Ytterbium'],
    [71, 'Lu', 'Lutetium'],
    [72, 'Hf', 'Hafnium'],
    [73, 'Ta', 'Tantal'],
    [74, 'W', 'Wolfram'],
    [75, 'Re', 'Rhenium'],
    [76, 'Os', 'Osmium'],
    [77, 'Ir', 'Iridium'],
    [78, 'Pt', 'Platina'],
    [79, 'Au', 'Gull'],
    [80, 'Hg', 'Kvikksølv'],
    [81, 'Tl', 'Thallium'],
    [82, 'Pb', 'Bly'],
    [83, 'Bi', 'Vismut'],
    [84, 'Po', 'Polonium'],
    [85, 'At', 'Astat'],
    [86, 'Rn', 'Radon'],
    [87, 'Fr', 'Francium'],
    [88, 'Ra', 'Radium'],
    [89, 'Ac', 'Actinium'],
    [90, 'Th', 'Thorium'],
    [91, 'Pa', 'Protactinium'],
    [92, 'U', 'Uran'],
    [93, 'Np', 'Neptunium'],
    [94, 'Pu', 'Plutonium'],
    [95, 'Am', 'Americium'],
    [96, 'Cm', 'Curium'],
    [97, 'Bk', 'Berkelium'],
    [98, 'Cf', 'Californium'],
    [99, 'Es', 'Einsteinium'],
    [100, 'Fm', 'Fermium'],
    [101, 'Md', 'Mendelevium'],
    [102, 'No', 'Nobelium'],
    [103, 'Lr', 'Lawrencium'],
    [104, 'Rf', 'Rutherfordium'],
    [105, 'Db', 'Dubnium'],
    [106, 'Sg', 'Seaborgium'],
    [107, 'Bh', 'Bohrium'],
    [108, 'Hs', 'Hassium'],
    [109, 'Mt', 'Meitnerium'],
    [110, 'Ds', 'Darmstadtium'],
    [111, 'Rg', 'Røntgenium'],
    [112, 'Cn', 'Copernicium'],
    [113, 'Nh', 'Nihonium'],
    [114, 'Fl', 'Flerovium'],
    [115, 'Mc', 'Moscovium'],
    [116, 'Lv', 'Livermorium'],
    [117, 'Ts', 'Tenness'],
    [118, 'Og', 'Oganesson']
]

grunnstoffer_enkel = [
    [1, 'H', 'Hydrogen'],
    [2, 'He', 'Helium'],
    [3, 'Li', 'Litium'],
    [4, 'Be', 'Beryllium'],
    [5, 'B', 'Bor'],
    [6, 'C', 'Karbon'],
    [7, 'N', 'Nitrogen'],
    [8, 'O', 'Oksygen'],
    [9, 'F', 'Fluor'],
    [10, 'Ne', 'Neon'],
    [11, 'Na', 'Natrium'],
    [12, 'Mg', 'Magnesium'],
    [13, 'Al', 'Aluminium'],
    [14, 'Si', 'Silisium'],
    [15, 'P', 'Fosfor'],
    [16, 'S', 'Svovel'],
    [17, 'Cl', 'Klor'],
    [18, 'Ar', 'Argon'],
    [19, 'K', 'Kalium'],
    [20, 'Ca', 'Kalsium'],
    [26, 'Fe', 'Jern'],
    [29, 'Cu', 'Kobber'],
    [30, 'Zn', 'Sink'],
    [47, 'Ag', 'Sølv'],
    [53, 'I', 'Jod'],
    [79, 'Au', 'Gull'],
    [80, 'Hg', 'Kvikksølv'],
    [82, 'Pb', 'Bly'],
    [86, 'Rn', 'Radon'],
    [88, 'Ra', 'Radium'],
    [90, 'Th', 'Thorium'],
    [92, 'U', 'Uran']
]

const canvas = document.getElementById('konfetti-canvas');
const ctx = canvas.getContext('2d');
let konfetti_array = []

let ikke_tatt = []
let tatt = 0
let antall_grunnstoffer = 0
let modus = ""
let grunnstoff = []

$(document).ready(function() {
    /*Setter opp lys/mørk modus fra enhetsinnstillinger*/
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        $("body").addClass("light-mode")
    }
    
    $("main").hide()
    $("ferdig-tekst").hide()
})

function toggle_theme() {
    $('body').toggleClass('light-mode')
}

$("#toggle-button").click(toggle_theme)

function hent_grunnstoff() {
    // Hvis ferdig
    if (ikke_tatt.length === 0) {
        lag_konfetti()
        $("main").hide()
        $("header").show()
        $("modus").show()

        $("#ferdig-tekst").text("Du klarte " + antall_grunnstoffer.toString() + " grunnstoffer på " + time.toString() + " sekunder 👏")
        $("#ferdig-tekst").show()
        
        time = 0
        $("#timer").text(time.toString() + "s")
        clearInterval(timer)
        
        return grunnstoffer[0]
    }


    // Lag tilfeldig index
    tilfeldig_index = Math.floor(Math.random() * ikke_tatt.length)
    tilfeldig_valg = ikke_tatt[tilfeldig_index]
    
    // Fjern fra ikke_tatt
    ikke_tatt.splice(tilfeldig_index, 1)

    // Endre progressbar
    $(".progressbar").css("width", (100 * tatt/antall_grunnstoffer).toString() + "%");

    // Legger til på tatt
    tatt++;

    // Returner grunnstoff fra riktig array
    if (modus === "ENKEL") {
        return grunnstoffer_enkel[tilfeldig_valg] 
    } 
    else if (modus === "ALLE") {
        return grunnstoffer[tilfeldig_valg]
    }
}

function oppdater_grunnstoff() {
    grunnstoff = hent_grunnstoff()

    $("grunnstoff symbol").text(grunnstoff[1])
    $("grunnstoff atomnr").text(grunnstoff[0])
}

function på_tastetrykk() {
    // Setter uppercase
    $(".input-container input").val($(".input-container input").val().toUpperCase())

    // Sjekker riktig
    if ($(".input-container input").val().toUpperCase() === grunnstoff[2].toUpperCase()) {
        oppdater_grunnstoff()
        $(".input-container input").val(undefined)
    }
}

$("button.enkel").click(function() {
    modus = "ENKEL"

    $("header").hide()
    $("modus").hide()
    $("main").show()
    $("input").focus()

    ikke_tatt = [...Array(grunnstoffer_enkel.length).keys()]
    antall_grunnstoffer = ikke_tatt.length
    tatt = 0
    
    time = 0
    timer = setInterval(update_timer, 1000)

    oppdater_grunnstoff()
})

$("button.alle").click(function() {
    modus = "ALLE"

    $("header").hide()
    $("modus").hide()
    $("main").show()
    $("input").focus()

    ikke_tatt = [...Array(grunnstoffer.length).keys()]
    antall_grunnstoffer = ikke_tatt.length
    tatt = 0

    time = 0
    timer = setInterval(update_timer, 1000)

    oppdater_grunnstoff()
})

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

class Konfetti {
    constructor () {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = 10
        this.height = 4
        this.speed = [5*(Math.random() - 0.5), -5*(Math.random()) - 3]
        this.acceleration = 0.05
        this.rotational_speed = 0.3*(Math.random() - 0.3)
        this.angle = Math.random() * Math.PI * 2
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    update () {
        if (!(this.y > canvas.height * 1.1)) {
            this.speed[1] += this.acceleration
            this.x += this.speed[0]
            this.y += this.speed[1]
            this.angle += this.rotational_speed
        }
    }

    draw () {
        ctx.save()
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }
}

function lag_konfetti() {
    konfetti_array = []

    // Færre konfetti-biter for mindre skjermer 100px -> 100 konfetti.
    konfetti_mengde = canvas.width

    for (i = 0; i <= konfetti_mengde; i++) {
        konfetti_array.push(new Konfetti())
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    konfetti_array.forEach(x => {
        x.update();
        x.draw();
    });
    requestAnimationFrame(animate);
}

animate();

function update_timer() {
    time++;
    $("#timer").text(time.toString() + "s")
}

$("#hemmelig").click(function() {
    lag_konfetti()
})