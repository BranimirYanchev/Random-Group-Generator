// Define group section
let groupsCount = $("input[name = 'groups-count']").val(); //Number of groups
const groups = $('.groups');//Groups container
let groupCols = [];//Group columns container
let groupRows = [];//Group rows container
let groupFields = [];//Fields container
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z'];

// Add click event on Draw Button and call functions
$('#draw-button').on('click', () =>{
    clearEl('group', groupCols);
    groupsCount = $("input[name = 'groups-count']").val();

    // Create group columns and rows
    createGroupRows(groupsCount);
    createGroupCols(groupsCount);

    i = 0;
    createFields(groupFields,'group');// Create group fields
    fillCols((teamsCount / groupsCount), groupFields, groupCols, genRandIndex, parseInt(groupsCount));// Append fields to group columns
    groupFields = $('.group-fields');
    setClearBtn();// Create and append clear button

    $('#clear-btn').on('click',() => {
        clearEl('group');
        clearEl('team');
    })
    setRandVal($('.team-fields'));
});

// Some functions
function createGroupCols(count) {
    // Show groups
    groups.removeClass('display-none');

    for (let j = 0; j < count; j++){

        // Create group columns and add attributes
        let div = createElement('group-col margin-right col', 'div');
        let p = createElement('', 'p');

        p.innerText = "Group " + letters[j];

        div.append(p);

        // Append div to group row
        if(count >= 4 && j >= 4){//Check if groupRows have more than one element
            console.log(j / 4)
            groupRows[Math.trunc(j / 4)].append(div);
        }else{
            groupRows[0].append(div);
        }
    }
    groupCols = $('.group-col').toArray();
}

function createGroupRows(count){
    let row = createElement('group-row', 'div');
    if(count > 4){//Check if it needs to create more than one row
        //Create row and add it to groups
        for (let  j = 0; j < count; j += 4){
            row = createElement('group-row', 'div');
            groups.append(row);
        }
    }else{
        groups.append(row);
    }

    groupRows = $('.group-row');
}

function genRandIndex(length){
    return Math.floor(Math.random() * length);
}

function createElement(className, elType){
    let element = document.createElement(elType);

    element.setAttribute('class', className);

    return element;
}

function setClearBtn(){
    let button = createElement('clear-btn draw-button btn-style border-radius border-none', 'button');
    button.innerHTML = '<span class="btn-text">' + 'Clear' + '</span>';
    button.setAttribute('id','clear-btn');

    groups.append(button);
}

function setRandVal(fields){
    let newFields = fields.toArray();
    let length = teamsCount;

    groupFields.toArray().forEach(e => {
        let index = genRandIndex(length);
        e.value = newFields[index].value;
        newFields.splice(index, 1);
        length--;
    })
}