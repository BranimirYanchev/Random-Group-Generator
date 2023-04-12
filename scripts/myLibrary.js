function fillCols(func, length, cols, type){
    i = 0;

    if(type == 'team' || cols.length == 4){
        if(length % 4 == 0){
            for (let j = 0; j < length / 4; j++){
                for(let k = 0; k < cols.length; k++) {
                    func(cols[k], type);
                }
            }
        }else {
            for (let j = 0; j < Math.round(length / 4); j++) {
                if (length % 4 == 1 && j + 1 == Math.round(length / 4) && i <= length) {
                    func(cols[0], type);
                    break;
                } else if (length % 4 == 2 && j + 1 == Math.round(length / 4) && i <= length) {
                    func(cols[0], type);
                    func(cols[1], type);
                    break;
                } else if (length % 4 == 3 && j + 1 == Math.round(length / 4) && i <= length) {
                    func(cols[0], type);
                    func(cols[1], type);
                    func(cols[2], type);
                    break;
                }
                for (let k = 0; k < cols.length; k++) {
                    func(cols[k], type);
                }
            }
        }
    // }else{
    //     for (let j = 0; j < cols.length ; j++){
    //         for (let k = 0; k < Math.trunc( teamsCount / cols.length); k++){
    //             func(cols[k], type);
    //         }
    //     }
    // }
    teams.removeClass('display-none');
}
function createFields(col, type) {
    i++;
    if(type == 'group'){
        let fieldClass = 'border-radius margin margin-left ' + type + 'Fields'
        let field = document.createElement('input');
        field.setAttribute('type', 'text');
        field.setAttribute('class', fieldClass);
        field.setAttribute('value', 'team-' + i);
        col.append(field);
    }else{
        let fieldClass = 'border-radius margin ' + type + 'Fields'
        let field = document.createElement('input');
        field.setAttribute('type', 'text');
        field.setAttribute('class', fieldClass);
        field.setAttribute('value', 'team-' + i);
        col.append(field);
    }

}