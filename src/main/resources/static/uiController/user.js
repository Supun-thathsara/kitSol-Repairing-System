// Details here comes from user Module
//-----------------------------------------------------------------
// let employees = [
//     {
//       id: '001',
//       user_name: 'Gayan Perera',
//       mobile_number: '0717546981',
//       calling_name:'Gayan',
//       email: 'gayan123@gmail.com',
//       nic: "199028917921",
//       dob: '1990-10-16',
//       land_number: '',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       prefered_contact: 'mobile',
//       role: { 'id': '01', 'title': 'Manager' },
//       state: { 'id': '01', 'status': 'Working' },
//       notes: ""
//     },
//     {
//       id: '002',
//       fullName: 'Sunil Perera',
//       mobileNumber: '0717240921',
//       callingName:'Sunil',
//       email: 'sunilp3@gmail.com',
//       nic: "199012548952",
//       dob: '1990-12-18',
//       landNumber: '0112244789',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       preferedContact: 'landNumber',
//       role: { 'id': '02', 'title': 'Technician' },
//       state: { 'id': '02', 'status': 'Resigned' },
//       notes: ""
//     },
//     {
//       id: '003',
//       fullName: 'Nayana Pathum',
//       mobileNumber: '0703536983',
//       callingName:'Nayana',
//       email: 'Nayana@gmail.com',
//       nic: "199132518952",
//       dob: '1991-05-18',
//       landNumber: '0112244789',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       preferedContact: 'landNumber',
//       role: { 'id': '02', 'title': 'Technician' },
//       state: { 'id': '03', 'status': 'Removed' },
//       notes: ""
//     },
//     {
//       id: '004',
//       fullName: 'Iman Cader',
//       mobileNumber: '0776587477',
//       callingName:'Iman',
//       email: 'imcader@gmail.com',
//       nic: "199058738952",
//       dob: '1995-08-28',
//       landNumber: '0112244789',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       preferedContact: 'email',
//       role: { 'id': '03', 'title': 'Cashier' },
//       state: { 'id': '01', 'status': 'Working' },
//       notes: ""
//     },
//     {
//       id: '005',
//       fullName: 'Hiru Dilshani',
//       mobileNumber: '0713414247',
//       callingName:'Hiru',
//       email: 'hiruDil@gmail.com',
//       nic: "199885217436",
//       dob: '1998-07-18',
//       landNumber: '0112244789',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       preferedContact: 'mobile',
//       role: { 'id': '03', 'title': 'Cashier' },
//       state: { 'id': '01', 'status': 'Working' },
//       notes: ""
//     },
//     {
//       id: '006',
//       fullName: 'Kelum Herath',
//       mobileNumber: '02534142447',
//       callingName:'Kelum',
//       email: 'kelmHer@gmail.com',
//       nic: "199075318957",
//       dob: '1990-03-24',
//       landNumber: '0112244789',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       preferedContact: 'email',
//       role: { 'id': '02', 'title': 'Technician' },
//       state: { 'id': '02', 'status': 'Resigned' },
//       notes: ""
//     },
//     {
//       id: '008',
//       fullName: 'Gawesh Nirmala',
//       mobileNumber: '0112245698',
//       callingName:'Nirmala',
//       email: 'Gawesh@gmail.com',
//       nic: "200178918952",
//       dob: '2001-11-29',
//       landNumber: '',
//       gender: 'male',
//       address: 'street/123, Colombo city',
//       preferedContact: 'mobile',
//       role: { 'id': '02', 'title': 'Technician' },
//       state: { 'id': '01', 'status': 'Working' },
//       notes: ""
//     },
//   ];

  let employees = [];
  
  let roles = [];
  
  let state = [
  
    { id: '01', status: 'Working' },
    { id: '02', status: 'Resigned' },
    { id: '03', status: 'Removed' }
  
  ];
  
  $.ajax({
    url: '/roles/alldata',
    type: 'GET',
    contentType: 'application/json',
    async: false,
    success: function (result) {
        console.log(result);
        roles = result;
    },
    error: function (xhr, status, error) {
        console.log(error);
    }
  }); 
  
  $.ajax({
    url: '/user/alldata',
    type: 'GET',
    contentType: 'application/json',
    async: false,
    success: function (result) {
        console.log(result);
        employees = result;
    },
    error: function (xhr, status, error) {
        console.log(error);
    }
  });


  //---------------------------------------------------------------------------------------
  // columns of the table

  let properties2 = [
   
    { propertyName: 'user_name', dataType: 'string' },
    { propertyName: 'mobile_number', dataType: 'string' },
    { propertyName: 'email', dataType: 'string' },
    { propertyName: 'nic', dataType: 'string' },
    { propertyName: 'dob', dataType: 'string' },
    { propertyName: 'gender', dataType: 'string' },
    { propertyName: 'civil', dataType: 'string' },
    { propertyName: getRole, dataType: 'function' },
    { propertyName: getStatus, dataType: 'function' }
  
  ];

  let properties = [
  
    { propertyName: 'user_name', dataType: 'string' },
    { propertyName: 'mobile_number', dataType: 'string' },
    { propertyName: 'email', dataType: 'string' },
    { propertyName: 'nic', dataType: 'string' },
    { propertyName: getRole, dataType: 'function' },
    { propertyName: getStatus, dataType: 'function' }
  
  ];
 
  
  
  function refreshTable() {

    window.userRecord = new Object();
  
    populateSelect(roles, inRole, "Select Role", "title");
    generateTable(employees, properties, employeeTable, btnEdit, deleteEmp, viewEmp);
    let table = new DataTable('#empTable');
  
  }
  
  // Generate/Refresh Table when window is loading
  window.addEventListener('load', refreshTable);
  
  
  // Functions for role and working status

    function getRole(Obj){
        
      console.log(Obj);      
      return Obj.role_id.title;
        
    }

    function getStatus(Obj,objType){
        
      console.log(Obj);
      return Obj.work_Status_id.name;
  
    }

  // Function for table buttons

  const btnEdit = (Obj, index) => {
    
    let editObj = JSON.parse(JSON.stringify(Obj));
    openUserRegistrationModal(editObj, index);

  }

  const deleteEmp = (Obj, index) => {console.log("Delete");}
  const viewEmp = (Obj) => {

    viewRecords(Obj, properties2, viewRecordTbl);
  
  }

  // add Roles to slecet input field

  function populateSelect(dataList, elementId, textMassage, dataProperty) {
    
    elementId.innerHTML = '';
  
    const disabledOption = document.createElement("option");
    disabledOption.setAttribute("selected", "selected");
    disabledOption.setAttribute("disabled", "disabled");
    disabledOption.value = "";
    disabledOption.innerText = textMassage;
  
    elementId.appendChild(disabledOption);
    
    dataList.forEach(data => {
   
      const option = document.createElement("option");
      option.value = JSON.stringify(data);
      option.innerText = data[dataProperty];
      elementId.appendChild(option);
   
    });
  
    elementId.value = "";
  }
  
  let currentUser = "";
  let currentUserIndex = "";  
  // opens model and populates data to form for Editing
  function openUserRegistrationModal(data, index) {
     
    document.getElementById("staticBackdropLabel").innerHTML = '<i class="fa-solid fa-web-awesome" style="color: antiquewhite"></i> User Updation';
    document.getElementById("inBtnSubmit").innerHTML = 'Update';
  
    resetValClasses();
    window.userRecord = data;
    currentUserIndex = index;
    generateCallingName(data.user_name);

    //selects the role of the record  
    Array.from(inRole.options).forEach(option => {
      //ignores disabled property 
      if(option.disabled === true){

        option.removeAttribute("selected");

      }else{
    
        const jsonObject = JSON.parse(option.value);
        option.selected = jsonObject.title === data.role_id.title; 
      
      }  
    
    });
    
    document.getElementById('inRole').classList.add("valid-selecting-field");

    document.getElementById('inFullName').value = assignValidity(document.getElementById('inFullName'), data.user_name);
    document.getElementById('inNIC').value = assignValidity(document.getElementById('inNIC'), data.nic);
    document.getElementById('inDOB').value = assignValidity(document.getElementById('inDOB'), data.dob);
    document.getElementById('inGender').value = assignValidity(document.getElementById('inGender'), data.gender);
    document.getElementById('inMobileNumber').value = assignValidity(document.getElementById('inMobileNumber'), data.mobile_number);
    document.getElementById('inLandNumber').value = assignValidity(document.getElementById('inLandNumber'), data.land_number);
    document.getElementById('inputEmail').value = assignValidity(document.getElementById('inputEmail'), data.email);
    document.getElementById('inAddress').value = assignValidity(document.getElementById('inAddress'), data.address);
    
    generateContactMethod();

    // selects preferred contact in edit form model
    let selectPreferedContactList = document.querySelectorAll(`option[value="${data.contact_via}"]`);
    let selectPreferedContact = selectPreferedContactList[0];
    selectPreferedContact.setAttribute('selected', 'selected');
    document.getElementById('inContactMethod').classList.add("valid-selecting-field");

    //selects calling name edit form model
    let selectCNameList = document.querySelectorAll(`option[value="${data.callingName}"]`);
    let selectCName = selectCNameList[0];  
    selectCName.setAttribute('selected', 'selected');
    document.getElementById('inCname').classList.add("valid-selecting-field");

    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    
    modal.show();

    /*  
        Ensures no reference to the original object
        Deep clone 'data' by converting it to a JSON string and then parsing it back.
        1.JSON.stringify(data) recursively walks through 'data', converting it and all its nested objects/arrays into a JSON-formatted string.
        This process serializes the object structure and its primitive values, effectively breaking any reference links between nested objects.
        2.JSON.parse(...) then reads this string and allocates new memory to reconstruct a brand new object.
        Each nested object/array is recreated in memory as a separate instance, so no parts of the new object share references  with the original 'data'.
    */
    currentUser = JSON.parse(JSON.stringify(data));

  }

  //this function resets window object when values are changed but not updated by user
  function resetUpdateFrom(index) {

    openUserRegistrationModal(employees[index], index);

  }
  
  formClose.addEventListener('click', () => {
    

  });

  //resets model title and update button when clicking add user after updation
  document.getElementById("inUser").addEventListener("click", function() {
  document.getElementById("staticBackdropLabel").innerHTML = 
    '<i class="fa-solid fa-web-awesome" style="color: antiquewhite"></i> User Registration';
    document.getElementById("inBtnSubmit").innerHTML = 'Submit';
  })

  //selecting element in edit mode

  // function selectElementinEditMode(elementList) {

  //   let element = document.getElementById('inContactMethod').appendChild(optionCMethod);
    
  //   elementList.forEach(option =>{
  //     option.selected = jsonObject.title === window.userRecord;
  //   });
  // }

  // Generate calling name
  function generateCallingName(user_name) {

    let nameparts = user_name.split(" ");  
    inCname.innerHTML = '';
    inCname.classList.remove("valid-selecting-field");
    let option = document.createElement('option');
      option.value = '';
      option.selected = 'selected';
      option.disabled = 'disabled';
      option.innerText = 'Select name';
      
    inCname.appendChild(option);
    
    nameparts.forEach(name => {
      
      let option = document.createElement('option');
      option.value = name;
      option.innerText = name;
      inCname.appendChild(option);
    
    }); 
 }

// Generate contact method

function generateContactMethod() {

  let mobile = document.getElementById("inMobileNumber");
  let land = document.getElementById("inLandNumber");
  let email = document.getElementById("inputEmail"); 

  inContactMethod.innerHTML = "";
  inContactMethod.classList.remove("valid-selecting-field");

  let option = document.createElement('option');
    option.selected = 'selected';
    option.disabled = 'disabled';
    option.innerText = 'Select Method';
      
  inContactMethod.appendChild(option);

  if (mobile.value !== "") {
    
    let option = document.createElement('option');
    option.value = "mobile";
    option.innerText = "Mobile Number";
    inContactMethod.appendChild(option);

  }
  if (land.value !== "") {

    let option = document.createElement('option');
    option.value = "landNumber";
    option.innerText = "Land Number";
    inContactMethod.appendChild(option);

  }
  if (email.value !== "") {
    
    let option = document.createElement('option');
    option.value = "email";
    option.innerText = "Email";
    inContactMethod.appendChild(option);

  }
    
}  

// Reset and clear input fields
  inBtnClear.addEventListener('click', () => {
    
    formRest();
  
  });
  
  inBtnSubmit.addEventListener('click', () => {
    
    if(inBtnSubmit.innerText === "Submit") {

      let invalidMessages = checkingFormError(employees[0]);    
      
      if(invalidMessages.length !== 0) {
        
        invalidMessages.forEach(message => {
              
          console.log(invalidMessages);

        });
        // SweetAlert notification
        Swal.fire({
          
          title: "Warning!",
          text: "Please fill all the required fields correctly!",
          icon: "warning"
        
        });
        
      } else {

        Swal.fire({
          
          title: "Are you sure?",
          text: `Are you sure you want to add ${window.userRecord.callingName} as an Employee?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, add them!",
          cancelButtonText: "Cancel"
        
        }).then((result) => {
          
          if (result.isConfirmed) {
            // Record Updation
            
            myForm.reset();
            resetValClasses();
          
          } else {
          
          }
      
        });

      }

       
    }else if(inBtnSubmit.innerText === "Update") {
      
      //checks for errors after updation
      let invalidMessages = checkingFormError(employees[0]);
      console.log(invalidMessages);
      if(invalidMessages.length !== 0) {
        
        invalidMessages.forEach(message => {
              
        // individual message generation (optional)

        });
        // SweetAlert notification
        Swal.fire({
          
          title: "Warning!",
          text: "Please fill all the required fields correctly!",
          icon: "warning"
        
        });

      }else {

        let formUpdates = checkingFormUpdates();
        console.log(formUpdates);
        
        if(formUpdates == "") {
         
          Swal.fire({
          
            title: "Warning!",
            text: "Nothing to update!",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Close",

          });
        
        }else {
          
          Swal.fire({
          
            title: "Are you sure you want to update Following",
            html: `<div style="font-size: 14px; text-align: left; font-family:'Poppins', sans-serif;"><ul>${formUpdates}</ul></div>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add them!",
            cancelButtonText: "Cancel"
          
          }).then((result) => {
            
            if (result.isConfirmed) {
              // Record Updation
              let putResponse = "ok";
              if(putResponse == "ok") {
             
              window.alert("Employee Updated Successfully");
              formRest();
              myForm.reset();
              resetValClasses();

              }else {

                window.alert("Failed to update Employee");
            
              }
            }
          });    
        }
      }
    }

  });

  function checkingFormUpdates() {

    const form = document.querySelector("#myForm");
    const editedUser = {};
    let updates = "";
    const elements = form.querySelectorAll("input, select, textarea");

    //takes values from edited form and assigns them to object for comparison
    elements.forEach((element) => {

      if (element.id === "inFullName") {

        editedUser['fullName'] = element.value;
      
      } else if (element.id === "inCname") {
      
        editedUser['callingName'] = element.value;
      
      } else if (element.id === "inRole") {
      
        editedUser['role'] = JSON.parse(element.value);
      
      } else if (element.id === "inNIC") {

        editedUser['nic'] = element.value;
      
      } else if (element.id === "inDOB") {
      
        editedUser['dob'] = element.value;
      
      } else if (element.id === "inputEmail") {
      
        editedUser['email'] = element.value;
      
      } else if (element.id === "inMobileNumber") {
      
        editedUser['mobileNumber'] = element.value;
      
      } else if (element.id === "inLandNumber") {
      
        editedUser['landNumber'] = element.value;
      
      } else if (element.id === "inContactMethod") {
      
        editedUser['preferedContact'] = element.value;
      
      } else if (element.id === "inAddress") {
      
        editedUser['address'] = element.value;
      
      } else if (element.id === "inGender") {
      
        editedUser['gender'] = element.value;
      
      } else if (element.id === "inNotes") {
      
        editedUser['notes'] = element.value;
      
      }
        
    });

    //checks whether values are updated
    if(currentUser != null && editedUser != null) {
      
     return compareUser(currentUser, editedUser);
      
    }  
    
    return updates;

  }

  //comapre and generate messages for updation
  function compareUser(currentUser, editedUser) {
    let updates = "";
    let allKeys = new Set([...Object.keys(currentUser), ...Object.keys(editedUser)]);

    allKeys.forEach(key => {
        let oldValue = currentUser[key];
        let newValue = editedUser[key];

        // Ignore "id" and "state" attributes
        if (key === "id" || key === "state") {
            return;
        }

        // If values are objects, do a recursive comparison
        if (typeof oldValue === "object" && typeof newValue === "object") {
            let subUpdates = compareUser(oldValue, newValue);
            console.log(subUpdates);
            if (subUpdates) { 
              console.log(subUpdates);
                updates += `<li><strong>${key}</strong>: <ul>${subUpdates}</ul></li>`;
            }
        } 
        // If values are different, format the output
        else if (oldValue !== newValue) {
            updates += `<li><strong>${key}</strong>: <span style="color: red;">"${oldValue || 'N/A'}"</span> → <span style="color: green;">"${newValue || 'N/A'}"</span></li>`;
        }
    });

    return `${updates}`;
}
  // Resets form fields before adding new user
  inUser.addEventListener('click', () => {

    formRest();
    
  });

  function formRest() {
    
    myForm.reset();
    resetValClasses();
    window.userRecord = new Object();
    
    inContactMethod.innerHTML = "";
    let option1 = document.createElement('option');
      option1.selected = 'selected';
      option1.disabled = 'disabled';
      option1.innerText = 'Select Method';  
    inContactMethod.appendChild(option1);

    inCname.innerHTML = "";
    let option2 = document.createElement('option');
      option2.selected = 'selected';
      option2.disabled = 'disabled';
      option2.innerText = 'Select Name';  
      inCname.appendChild(option2);

    populateSelect(roles, inRole, "Select Role", "title");
  
  }

  