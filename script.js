let clientID = "--MQebuje7fTDcvTKQKQ2pEumYNUkLG5hP1Y2jvN5LA";
        let endpoint = `https://api.unsplash.com/photos/random?client_id=${clientID}&count=30`;

        function openModal(imageUrl) {
            var modalImage = document.getElementById('modalImage');
            modalImage.src = imageUrl;
            var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        }

        fetch(endpoint)
            .then((response) => response.json())
            .then((jsonData) => {
                let photoLinks = []
                for (let img = 0; img < jsonData.length; img++) {
                    photoLinks.push(jsonData[img].urls.regular);
                }
                console.log(photoLinks);

                var container = document.createElement("div");
                container.classList.add("container");

                container.style.overflowX = 'hidden';

                for (var i = 0; i < photoLinks.length; i += 3) {
                    var row = document.createElement("div");
                    row.classList.add("row", "mb-4", "img-row");
                    row.style.justifyContent = "space-between";

                    for (var j = 0; j < 3 && i + j < photoLinks.length; j++) {
                        var imageUrl = photoLinks[i + j];

                        // Create the column element
                        var column = document.createElement("div");
                        column.classList.add("col-4");

                        // Create the card element
                        var card = document.createElement("div");
                        card.classList.add("card");

                        // Create the card image element
                        var cardImg = document.createElement("img");
                        cardImg.classList.add("card-img-top");
                        cardImg.src = imageUrl;
                        cardImg.alt = "Card image cap";

                        cardImg.style.marginRight = "15px";


                        // Add a click event listener to the card image element to open the modal
                        cardImg.addEventListener('click', (function (imageUrl) {
                            return function () {
                                openModal(imageUrl);
                            };
                        })(imageUrl));


                        // Append the image to the card
                        card.appendChild(cardImg);

                        // Append the card to the column
                        column.appendChild(card);

                        // Append the column to the row
                        row.appendChild(column);
                    }

                    // Append the row to the container
                    container.appendChild(row);
                }
                // Append the container to the document body
                document.body.appendChild(container);
            })
            
        // Function to open the modal with an image
        function openModal(imagePath) {
            var modalImage = document.getElementById('modalImage');
            modalImage.src = imagePath;
            var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        }
