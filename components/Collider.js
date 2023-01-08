AFRAME.registerComponent("flying-birds", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            //id
            var id = `hurdle`;

            // position variables
            var posX = Math.floor(Math.random() * 3000 + -1000);
            var posY = Math.floor(Math.random() * 2 + -1);
            var posZ = Math.floor(Math.random() * 3000 + -1000);

            var position = { x: posX, y: posY, z: posZ };

            // call the function
            this.flyingBirds(id, position);
        }
    },

    flyingBirds: (id, position) => {

        // get the terrain element
        var terrainE1 = document.querySelector("#terrain");

        //creating the bird model entity
        var birdE1 = document.createElement("a-entity");

        //Setting multiple attributes
        birdE1.setAttribute("id", id);
        birdE1.setAttribute("position", position);

        birdE1.setAttribute("scale", { x: 500, y: 500, z: 500 });

        birdE1.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

        // animated models
        birdE1.setAttribute("animation-mixer", {});

        //append the bird entity as the child of the terrain entity
        terrainE1.appendChild(birdE1);
    }
});