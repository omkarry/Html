// function valid()
// {
//     var bookingName = document.getElementById("booking-name").value;
//     var consignee = document.getElementById("select-consignee").value;
//     var supplier = document.getElementById("select-supplier").value;
//     var incoterm =  document.querySelector('input[name="incoterm"]:checked')?.value;
//     var lessThanContainer = document.getElementById("lessThanContainer").style.display;
//     var fullContainer = document.getElementById("fullContainer").style.display;
//     var numberOfContainer = document.getElementById("numContainers").value;
//     var containerType = document.getElementById("containerType").value; 
//     var totalWeight = document.getElementById("totalWeight").value;
//     var packageType = document.getElementById("packageType").value; 
//     var totalVolume = document.getElementById("totalVolume").value;
//     var totalQuantity = document.getElementById("totalQuantity").value;
//     var originAddress = document.getElementById("originAddress").value;
//     var port = document.getElementById("port-select").value;
//     var originTruckingService = document.querySelector('input[name="originTruckingService"]:checked')?.value;
//     var destinationAddress = document.getElementById("destinationAddress").value;
//     var products = document.querySelectorAll('input[name="products"]:checked');
//     var checkboxValues = Array.from(products).map(function (checkbox) {
//         return checkbox.value;
//     });
//     var originCutoffDate = document.getElementById("daterangepicker1").value;

//     if(isNaN(bookingName) || bookingName === "")
//     {
//         alert("Booking name should be a number! It is compulsory field");
//         return false;
//     }
//     else if(consignee === "Select Consignee")
//     {
//         alert("Please select the consignee.");
//         return false
//     }
//     else if(typeof incoterm === 'undefined')
//     {
//         alert("Please select incoterm.");
//         return false;
//     }
//     else if(fullContainer === 'block')
//     {
//         if(numberOfContainer === "")
//         {
//         alert("Please enter number of containers");
//         return false;
//         }
//         else if(containerType === 'Select Container Type')
//         {
//         alert("Please select container type");
//         return false;
//         }
//     }
//     else if(totalWeight === '')
//     {
//         alert("Please enter total weight");
//         return false;
//     }
//     else if(packageType === 'Select Package Type')
//     {
//         alert("Please select package type");
//         return false;
//     }
//     else if(totalVolume === '')
//     {
//         alert("Please enter total volume");
//         return false;
//     }
//     else if(totalQuantity === '')
//     {
//         alert("Please enter total quantity");
//         return false;
//     }
//     else if(originAddress === '')
//     {
//         alert("Please select origin address");
//         return false;
//     }
//     else if(port === 'Select Port')
//     {
//         alert("Please select port");
//         return false;
//     }
//     else if(destinationAddress === '')
//     {
//         alert("Please select destination address");
//         return false;
//     }
//     else if(checkboxValues.length > 2 && checkboxValues.includes('None of the above'))
//     {
//         alert("Please select options correctly");
//         return false;
//     }
//     else if(checkboxValues.length == 0)
//     {
//         alert("Please select hazardous products");
//         return false;
//     }
//     else
//     {
//         console.log("------------------------------");
//         console.log("\t-- Booking Details --");
//         console.log("------------------------------");
//         console.log("Booking Name: " + bookingName);
//         console.log("Consignee: " + consignee);
//         if (!(supplier === "Select supplier")){
//         console.log("Supplier: " + supplier);
//         }
//         else{
//         console.log("Supplier: Not available");
//         }
//         console.log("Incoterm: " + incoterm);
//         if (lessThanContainer === "block")
//         {
//         console.log("Container: Less Than Container:");
//         }
//         else
//         {
//         console.log("Container: Full Container:");
//         console.log("\tNumber of Containers: " + numberOfContainer);
//         console.log("\tContainer Type: " + containerType);
//         }
//         console.log("\tTotal Weight: " + totalWeight);
//         console.log("\tTotal Volume: " + totalVolume);
//         console.log("\tPackage Type: " + packageType);
//         console.log("\tTotal Quantity: " + totalQuantity);
//         console.log("Origin Address: " + originAddress);
//         console.log("Origin Port: " + port);
//         console.log("Need Origin Trucking Services: " + originTruckingService);
//         console.log("Destination Address: " + destinationAddress);
//         console.log("Hazardous Materials: ");
//         if (checkboxValues.includes('None of the above'))
//         {
//         console.log("Products not from list");
//         }
//         else
//         {
//         for (var i = 0; i < checkboxValues.length; i++)
//         {
//             console.log("\t" + checkboxValues[i]);
//         }
//         }
//         console.log("Origin Cutoff Date: " + originCutoffDate);
//         return true;
//     }
// }
