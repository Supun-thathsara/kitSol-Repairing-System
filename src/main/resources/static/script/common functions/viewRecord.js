// function to view records and print them

function viewRecords(recordObject, properties, element) {
  element.innerHTML = "";

  if (recordObject !== undefined) {
    properties.forEach((property) => {
      let tr = document.createElement("tr");
      let th = document.createElement("th");
      let td = document.createElement("td");

      if (property.dataType === "string") {
        th.innerText = nameModifier(property.propertyName);
        td.innerHTML = recordObject[property.propertyName];
      } else if (property.dataType === "function") {
        th.innerText = nameModifier(
          property.propertyName(recordObject, "type")
        );
        td.innerText = property.propertyName(recordObject);
      }

      tr.appendChild(th);
      tr.appendChild(td);
      element.appendChild(tr);
    });
  }
  const printModal = new bootstrap.Modal(document.getElementById("printModal"));
  printModal.show();
}

function nameModifier(name) {
  if (!/[A-Z]/.test(name.slice(1))) {
    // If no capital letters found (single name), capitalize first letter and return
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  // If ther are capital letters, split and format
  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before capital letters
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word in the arrey
    .join(" ");
}

function printModalContent() {
  const modalContent = document.getElementById("modalContent").innerHTML;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../resources/bootstrap-5.3.3/css/bootstrap.min.css">
        <script>
            function getDateTime(){
                let now = new Date();
                let currentDateTime = now.toLocaleString();
                document.getElementById("datetime").innerHTML = currentDateTime;
            }
        </script>
        <title>Report</title>
    </head>
    <body onload="getDateTime()">
        <div class="container-fluid">
            <div class="row" style="padding-top:10px;">
                <div class="col-2">
                    <img src="../resources/icons/kitSolLogo.jpg" alt="Logo" style="width:120px; height:100px;">
                </div>
                <div class="col-6">
                    <h1 style="padding-left:10px; padding-top: 20px; color:RoyalBlue; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: 630; font-style: italic;">
                        KITSOL
                    </h1>
                    <h5 style="font-weight: 630">
                        Skilled Hands, Quality Services
                    </h5>
                </div>
                <div class="col-4">
                    <h2 style="padding-top: 28px; font-weight: 500;">Employee report</h2>
                    <span id="datetime" style="font-weight: 600"></span>
                </div>
            </div>
            <div class="row mt-4">
                <div class="d-flex justify-content-center mt-4">
            
                <tbody id="employeeTableBody" style="font-weight: 600; font-size: 100px;">
                    ${modalContent}
                </tbody>
            
        </div>
        </div>
        </div>
    </body>
    </html>
`);

  printWindow.document.close();
  printWindow.print();
}
