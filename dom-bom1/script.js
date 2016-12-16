var form = createE(document.body, 'form', {
    name: "login",
    action: "google.com"
});
var inputAge = createE(form, 'input', {
    type: "text",
    name: "age",
    placeholder: "19"
});
var inputUsername = createE(form, 'input', {
    type: "text",
    name: "username",
    placeholder: "user_name"
});
var inputDate = createE(form, 'input', {
    type: "text",
    name: "date",
    placeholder: "DD/MM/YYYY"
});
var buttonSubmit = createE(form, 'input', {
    type: "submit",
    value: "Validate Me"
});

buttonSubmit.onclick = function() {
    var success = true;
    var age = inputAge.value;
    var username = inputUsername.value;
    var date = inputDate.value;
    var submit = buttonSubmit.value;
    return validation(age,username,date);
};

//Validation START

//Age Validation
function validation(age,username,date,success) {
    if (age.match(/-/)) {
        alert("Age is invalid! Age must be more then  0!");
        success = false;
    } else if (age.match(/^0/)) {
        alert("Age is invalid! Age must be more then  0!");
        success = false;
    } else if (!age.match(/^(\d)*$/g)) {
        alert("Age is invalid! Age must include only numbers!");
        success = false;
    } else if (age.match(/ /)) {
        alert("Age is invalid! Age must include only numbers!");
        success = false;
    }

//Username validation
    if (!username.match(/^(user_)[\S]*/g)) {
        alert("User name is invalid! User name must start from 'user_'!");
        success = false;
    }

//Date validation
    
    if (date.split("/").length !==3) {
        alert("Date must be in format DD/MM/YYYY!");
        success = false;
    }else if ((date.split("/")[0] >= 31) || (date.split("/")[0] <= 0)) {
        alert("Day must be only from 1 to 31");
        success = false;
    }else if ((date.split("/")[1] > 12) || (date.split("/")[1] <= 0)) {
        alert("Month must be only from 1 to 12");
        success = false;
    }else if (date.split("/")[2] < 2016) {
        alert("Year must be only 2016 or higher");
        success = false;
    }
    
    return success;
}

//Validation END

//Create in HTML
function createE(parentElement, element, attributesObj) {
    //Create element
    var newCreatedElement = document.createElement(element);
    //Adding attributes
    for (var attribute in attributesObj) {
        newCreatedElement.setAttribute(attribute, attributesObj[attribute]);
    }
    parentElement.appendChild(newCreatedElement);
    return newCreatedElement;
}