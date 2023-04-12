// Define group section
let groupsCount = $("input[name = 'groups-count']").val(); //Number of groups
const groups = $('.groups');//Groups container
let groupCols = [];
let groupRows = [];
let fields = [];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z'];


$('.draw-button').click(() =>{
    groupsCount = $("input[name = 'groups-count']").val();
    createGroupRows(groupsCount);
    groupRows = $('.group-row')
    createGroupCols(groupsCount);
    groupCols = $('.group-col');
    fillCols(createFields, teamsCount, groupCols, 'group');
});

function generateRandomIndex(){
    return Math.trunc(Math.random() * 10) % teamFields.length;
}

function createGroupCols(count) {
    for (let j = 0; j < count; j++){
        let field = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = "Group " + letters[j];
        field.append(p);
        field.setAttribute('class', 'group-col margin-right col');
        if(count > 4){
            if(j >= 4){
                groupRows[Math.trunc(j / 4)].append(field);
            }else{
                groupRows[0].append(field);
            }
        }else{
            groupRows[0].append(field);
        }
    }
    groups.removeClass('display-none');
}

function createGroupRows(count){
    if(count > 4){
        for (let  j = 0; j < count; j += 4){
            let row = document.createElement('div');
            row.setAttribute('class', 'group-row');
            groups.append(row);
        }
    }else{
        let row = document.createElement('div');
        row.setAttribute('class', 'group-row');
        groups.append(row);
    }
}

// function fillGroup(groups){
//     let players = $('teamFields');
//     let index = generateRandomIndex();
//     groups.append(players[index]);
//     players = players.filter(function (e) {
//         return e !== players[index];
//     });
// }
