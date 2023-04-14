// Define group section
let groupsCount = $("input[name = 'groups-count']").val(); //Number of groups
const groups = $('.groups');//Groups container
let groupCols = [];//Group columns container
let groupRows = [];//Group rows container
let groupFields = [];//Fields container
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z'];

// Add click event on Draw Button and call functions
$('.draw-button').click(() =>{
    clearEl('group');
    groupsCount = $("input[name = 'groups-count']").val();
    createGroupRows(groupsCount);
    groupRows = $('.group-row')
    createGroupCols(groupsCount);
    groupCols = $('.group-col').toArray();
    i = 0;
    createFields(groupFields,'group');
    fillCols((teamsCount / groupsCount), groupFields, groupCols, genRandIndex);
    groupFields = $('.group-fields');
    createClearButton();
    setRandVal($('.team-fields'));
});

$('.clear-btn').click(() =>{
    console.log('s')
    clearEl('group');
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
        if(count > 4 && j >= 4){//Check if groupRows have more than one element
            groupRows[Math.trunc(j / 4)].append(div);
            break;
        }

        groupRows[0].append(div);
    }
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
}
function genRandIndex(length){
    return Math.floor(Math.random() * length);
}
function fill(namesPerGroup){
    $('.group-col').each(function() {
		for (let j = 0; j < namesPerGroup; j++) {
			let randIndex = genRandIndex(length);
			if(groupFields[randIndex]){
				$(this).append(groupFields[randIndex]);
			}
			groupFields.splice(randIndex, 1);
		}
	});
}
function createElement(className, elType){
    let element = document.createElement(elType);

    element.setAttribute('class', className);

    return element;
}
function createClearButton(){
    let button = document.createElement('button');

    button.setAttribute('class', 'clear-btn draw-button btn-style border-radius border-none');
    button.innerHTML = '<span class="btn-text">' + 'Clear' + '</span>';

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


