function fillCols(namesPerGroup, fields, cols, func){
    console.log(fields);
    cols.forEach(function(e) {
        for (let j = 0; j < namesPerGroup; j++) {
            let index = func(fields.length);
            if(fields[index]){
                e.append(fields[index]);
            }
            fields.splice(index, 1);
            length--;
        }
    });
}
function createFields(arr, type) {
    for(let j = 1; j <= teamsCount; j++){
        let fieldClass = 'border-radius margin ' + type + '-fields'
        let field = document.createElement('input');

        field.setAttribute('type', 'text');
        field.setAttribute('class', fieldClass);
        field.setAttribute('value', 'team-' + j);

        arr.push(field);

        if(type == 'group'){
            field.setAttribute('class', fieldClass + ' margin-left');
        }
    }
}

function clearEl(type) {
    if (type == 'group') {
        if(groupCols[0] != undefined){
            groupCols.forEach(e => {
                e.remove();
            })
        }


        groupFields = [];
        $('.group-field').toArray().forEach(e => {
            e.remove();
        });

        groups.attr('class', 'groups display-none');

        $('.clear-btn').remove();
    }else{
        teamCols.forEach(function (e) {
            e.empty();
        });

        teamFields = [];

        $('.team-field').toArray().forEach(e => {
            e.remove();
        });

        teams.attr('class', 'teams display-none');

    }


}