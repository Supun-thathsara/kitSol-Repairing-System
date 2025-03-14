function generateTable(dataList, propertyList, tableBody, modifyRecord, deleteRecord, viewRecord) {
  
  if((dataList.length !== 0)) {

    dataList.forEach((dataObj,index) => {
      
      let tr = document.createElement('tr');
      let idTd = document.createElement("td"); 
      idTd.innerText = index+1;
      tr.appendChild(idTd);

      propertyList.forEach(property =>{
        
        let td = document.createElement('td');
        
        if(property.dataType === 'string') {

          td.innerText = dataObj[property.propertyName];

        }else if(property.dataType === 'function') {
          
          
          td.innerHTML = property.propertyName(dataObj);

        }

        tr.appendChild(td);

      });

      // button generation

      let btnTd = document.createElement("td");
      btnTd.className = "d-flex justify-content-center";
       
      let btnEdit = document.createElement('button');
      btnEdit.className = "btn btn btn-outline-dark d-flex justify-content-center me-2";
      btnEdit.setAttribute("data-bs-toggle", "tooltip");
      btnEdit.setAttribute("data-bs-placement", "top");
      btnEdit.setAttribute("data-bs-title", "edit record");
      let iconEdit = document.createElement("i");
      iconEdit.className = "fa-solid fa-pen";
      btnEdit.appendChild(iconEdit);
      new bootstrap.Tooltip(btnEdit);

      btnEdit.onclick = () => modifyRecord(dataObj, index);

      let btnDelete = document.createElement('button');
      btnDelete.className = "btn btn btn-outline-dark d-flex justify-content-center me-2";
      btnDelete.setAttribute("data-bs-toggle", "tooltip");
      btnDelete.setAttribute("data-bs-placement", "top");
      btnDelete.setAttribute("data-bs-title", "delete record");
      let iconDelete = document.createElement("i");
      iconDelete.className = "fa-solid fa-trash";
      btnDelete.appendChild(iconDelete);
      new bootstrap.Tooltip(btnDelete);

      btnDelete.onclick = () => deleteRecord(dataObj, index);
      
      let btnView = document.createElement('button');
      btnView.className = "btn btn btn-outline-dark d-flex justify-content-center me-2";
      btnView.setAttribute("data-bs-toggle", "tooltip");
      btnView.setAttribute("data-bs-placement", "top");
      btnView.setAttribute("data-bs-title", "view record");
      let iconView = document.createElement("i");
      iconView.className = "fa-solid fa-eye";
      btnView.appendChild(iconView);
      new bootstrap.Tooltip(btnView);

      btnView.onclick = () => viewRecord(dataObj);

      btnTd.appendChild(btnEdit);
      btnTd.appendChild(btnDelete);
      btnTd.appendChild(btnView);

      tr.appendChild(btnTd);
      tableBody.appendChild(tr);
      
    });

  }else{
    console.log('No data to display');
    console.log(dataList.length);
  }  
}