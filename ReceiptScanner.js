

fetch('https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {


        if (data != null && data.length > 0) {


            data.forEach(data => {
                if (data.domestic == false) {
                    (data.domestic = "Imported");
                } else {
                    (data.domestic = "Domestic");
                }


            });

            data.forEach(data => {
                if (data.weight == null) {
                    data.weight = "N/A";
                }
            });

            data.forEach(data => {
                if (data.description.length > 10) data.description = data.description.substring(0, 10);

            });


            data.sort((a, b) => a.name.localeCompare(b.name));
            var domesticArray = data.filter((item) => item.domestic == "Domestic");
            var importedArray = data.filter((item) => item.domestic == "Imported");
            console.log("Domestic");
            console.log(domesticArray);
            console.log("Imported");
            console.log(importedArray);

            var domesticCost = 0;

            domesticArray.forEach(data => {
                domesticCost += data.price;
            });
            console.log("Domestic Cost " + domesticCost);

            var importedCost = 0;
            importedArray.forEach(data => {
                importedCost += data.price;
            });
            console.log("Imported Cost " + importedCost);
            console.log("Domestic Count " + domesticArray.length);
            console.log("Imported Count " + importedArray.length);
        } else {
            console.log("No data available")
        }
    })


    .catch(error => {
        console.error('error', error);
    });

