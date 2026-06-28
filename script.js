window.onload = function () {

    const svgObject = document.getElementById("svgObject");

    setTimeout(function () {

        const svg = svgObject.contentDocument;

        console.log("SVG encontrado:", svg);

        const hotspots = svg.querySelectorAll("g[id^='hotspot']");

        console.log("Cantidad de hotspots:", hotspots.length);

        hotspots.forEach((h, i) => {

            console.log("----------------");

            console.log("Hotspot", i);

            console.log(h);

        });

    },1000);

}