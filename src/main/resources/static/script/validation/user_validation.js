  // Reset All the validation classes 

  function resetValClasses() {

    let elementList = document.querySelectorAll(".valid-txt-field, .invalid-text-field, .valid-selecting-field");
    
    elementList.forEach(element => {
    
      element.classList.remove("valid-txt-field");
      element.classList.remove("invalid-text-field");
      element.classList.remove("valid-selecting-field");
    
    });

  }

  // Form validations
  // values are selected from given value list
  // used for DOB, Calling name and role
  function validateChange(element, object, attribute){

    element.classList.add("valid-selecting-field");
    
    if (element.value === "") {
      
      element.classList.remove("valid-selecting-field");
      object[attribute] = null;
      
    } else {
      
      object[attribute] = element.value;
      console.log(object[attribute]);
      console.log(element.value);
      console.log(object);
    }
    
  }

  function textValidate(element, pattern, obj, attribute) {
       
    const value = element.value.trim();

    if (value !== "") {
       
      const regEx = new RegExp(pattern);
      
      if (regEx.test(value)) {
      
        element.classList.add("valid-txt-field");
        element.classList.remove("invalid-text-field");
        obj[attribute] = value;

        if(element.name === "fullName"){
          inCname.disabled = false;
          generateCallingName(value);

        }
        if(element.name === "nic"){
          
          generateDobNIC(element);
        
        }

        if(element.name === "mobileNumber" || element.name === "landNumber" || element.name === "email"){
          
          generateContactMethod();
        
        }
        
      } else {
        
        if(element.name === "fullName") {
          inCname.disabled = 'disabled';
        }
        element.classList.add("invalid-text-field");
        element.classList.remove("valid-txt-field");
        obj[attribute] = null;

        }
    
    } else {
      
      element.classList.remove("invalid-text-field");
      element.classList.remove("valid-txt-field");
      obj[attribute] = null;

    }
  }

/* Checks wheather inputs are valid(empty) and generates error messages accordingly */
  const checkingFormError = (obj) => {

    // gets attributes from user object got from User module and check whether attributes are present in current window object
    // if attribute is present and not null then field is valid 
  
    const attributeNames = Object.keys(obj)
    const userObject = window.userRecord;
    console.log(userObject);
    invalidMessages = [];
    
    attributeNames.forEach(attribute => {

      // if attributes not there in the user object means invalid value or empty
      // when validating if the object is invalid attributes not added to userRecord object       
      if(!(userObject[attribute])) {

        let nodeLIst = document.getElementsByName(attribute);
        let element = nodeLIst[0];
        // skips user id from validating because its system generated  
        if(element !== undefined) {
          
          // Skips gender, dob because generated from nic
          // Skips landNumber and notes because values are optional
          if( element.name === 'gender' || element.name === 'dob' || element.name === 'landNumber' || element.name === 'notes') {

          }else{

            element.classList.add("invalid-text-field");
            element.classList.remove("valid-txt-field");
            invalidMessages.push(attribute +" is required");

          }
        
        }
        
      }

    });
    
    return invalidMessages;
    
  };

// Generate Dob and gender from NIC also returns age
function generateDobNIC(element) {

  let nic = element.value;
  const todayDate = new Date(); 
  let birthYear = "";
  let daynumber = "";
  let days = "";

  let inputGender = document.getElementById("inGender");
  let inputDOB = document.getElementById("inDOB");

  if(nic.length === 10) {

    birthYear = "19" + nic.substr(0,2);
    console.log(birthYear);
    daynumber = nic.substr(2,3);

    if(Number(daynumber) > 500 ){
      
      inputGender.value = "female";  

      days = daynumber - 500;
      let dayObj = getMonthAndDate(Number(birthYear) , Number(days));
      let birthday = birthYear+"-"+dayObj["month"]+"-"+dayObj["day"];
      
      let date = new Date(birthday);
      // spllts time and date and get the date from the date object
      formattedDate = date.toISOString().split('T')[0];
      inputDOB.value = formattedDate;

    
    }else {

      inputGender.value = "male";
      
      let dayObj = getMonthAndDate(Number(birthYear) , Number(daynumber));
      let birthday = birthYear+"-"+dayObj["month"]+"-"+dayObj["day"];
      
      let date = new Date(birthday);
      formattedDate = date.toISOString().split('T')[0];
      inputDOB.value = formattedDate;

    }
    
  }else if(nic.length === 12) {

    birthYear = nic.substr(0,4);
    daynumber = nic.substr(4,3);
    
    if(Number(daynumber) > 500){

      inputGender.value = "female"; 
      days = daynumber - 500;
      let dayObj = getMonthAndDate(Number(birthYear) , Number(days));
      let birthday = birthYear+"-"+dayObj["month"]+"-"+dayObj["day"];
      
      let date = new Date(birthday);
      formattedDate = date.toISOString().split('T')[0];
      inputDOB.value = formattedDate;

    }else{

      inputGender.value = "male";
      let dayObj = getMonthAndDate(Number(birthYear) , Number(daynumber));
      let birthday = birthYear+"-"+dayObj["month"]+"-"+dayObj["day"];
    
      let date = new Date(birthday);
      formattedDate = date.toISOString().split('T')[0];
      inputDOB.value = formattedDate;

    }
    
  }

}

// Get month and day using NIC days
function getMonthAndDate(year, dayNumber) {
  
  // Days in each month for 365 day years and 366 day years
  
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // Check Whether the year is 365 or 366 day year
  
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  if (isLeap) months[1] = 29; 

  // Calculate the month and day
  
  let month = 0;
  while (dayNumber > months[month]) {
      dayNumber -= months[month];
      month++;
  }

  // Return result
  return { month: month + 1, day: dayNumber }; // Month is -1 based
}

// Contact method field validation upon value change
const elements = [inputEmail, inMobileNumber, inLandNumber];

elements.forEach(element => {

  element.addEventListener('focusout', generateContactMethod);
  element.addEventListener('change', () => {
    window.userRecord.preferedContact = "";
  });

});

//  full name field validation upon value change

fullName = document.getElementById('inFullName');
fullName.addEventListener('change', () => {
  window.userRecord.callingName = "";
});

//--------------------------------------------------EDIT Mode Validations------------------------------------------------//
/* This function is for adding classes to elements to show that they are valid when open for editing */

function assignValidity(element, value) {
    
    if(value !=='') {

      element.classList.add("valid-txt-field");
      return value;
      
    }

      return '';
}


