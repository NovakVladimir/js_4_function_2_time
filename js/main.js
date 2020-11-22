/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput(idOutput) {
    let myNode = document.getElementById(idOutput);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/*
This insert some element to the parent-element. Its argument is: 1 - id of parent element and; 2 - something we want to insert in this parent-element. And this function give to the result class="outputResult"
*/
function insertOutputTrue(toOutput) {
        let container = document.getElementById("container");
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${toOutput}</p>`);
    }
/**
 * This insert some element to the parent-element. Its argument is: 1 - id of parent element and; 2 - something we want to insert in this parent-element. And this function give to the result class="outputResult_2"
 */
function insertOutputFalse(toOutput) {
    let container = document.getElementById("container");
    container.insertAdjacentHTML('beforeend', `<p class="outputResult_2">${toOutput}</p>`);
}

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = Number(document.getElementById(idInput).value);
    return inputValue_1;
}



/**
 * Seventh task
 */
function checkFormatTime(time, maxTime, unitOfTime) {
    for(let i = 0; i <= maxTime; i++) {
        if(i === time) {
            if(time <= 9) {
                time = "0" + time;
                return time;
            }
            return time;
        }
    }
    deleteOutput("container");
    insertOutputFalse(`Please,  use number from 0 to ${maxTime} to enter ${unitOfTime} without fractions`);
    return time = -1;
}

function showTime(hours, minutes, seconds) {
    if(hours === '') {
        deleteOutput("container");
        return insertOutputFalse(`Please, enter the amount of hours`);
    } else if (checkFormatTime(hours, 24, "hours") < 0) { return; }


    if((minutes === '') || (minutes === "00")) {
        minutes = "00";
    } else if (checkFormatTime(minutes, 60, "minutes") < 0) { return; }

    if((seconds === '') || (seconds === "00")) {
        seconds = "00";
    } else if (checkFormatTime(seconds, 60, "seconds") < 0) { return; }

    deleteOutput("container");
    insertOutputTrue(`${checkFormatTime(hours, 24, "hours")}:${checkFormatTime(minutes, 60, "minutes")}:${checkFormatTime(seconds, 60, "seconds")}`);
}
 


