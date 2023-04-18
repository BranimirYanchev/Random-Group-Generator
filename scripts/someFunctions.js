function fillCols(namesPerGroup, fields, cols, func, count){
    if(teamsCount % groupsCount !== 0) {
        let k = 0;
        for (let j = 0; j < teamsCount; j++){
            appendField(func, fields, length, cols[k]);
            k++;

            if(k === count){
                k = 0;
            }

        }
    } else{
        cols.forEach(function(e) {
            for (let j = 0; j < namesPerGroup; j++) {
                appendField(func, fields, length, e);
                length--;
            }
        });
    }
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
        groupCols.forEach(e => {
            e.remove();
        });

        groupFields = [];

        $('.group-field').toArray().forEach(e => {
            e.remove();
        });

        groups.attr('class', 'groups display-none');

        $('.clear-btn').remove();

        $('group-row').remove();
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

function appendField(func, fields, length, e){// Append fields to columns
    let index = func(fields.length);
    if(fields[index]){
        e.append(fields[index]);
    }
    fields.splice(index, 1);
    length--;
}