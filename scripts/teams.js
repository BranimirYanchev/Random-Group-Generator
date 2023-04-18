// Define team section
let teamsCount = $("input[name = 'teams-count']").val();//Number of teams
const teams = $('.teams');// Team container
const teamCols = [$('#col-1'), $('#col-2'), $('#col-3'), $('#col-4')];//Teams columns
let teamFields = [];

//Add click event to buttons
$('.run-btn').on('click', () =>{
    clearEl('team');
    teams.removeClass('display-none')
    teamsCount = $("input[name = 'teams-count']").val();

    createFields(teamFields,'team');
    fillCols((teamsCount / 4), teamFields, teamCols, genIndex, 4);
    teamFields = $('.team-fields');
});

function genIndex(len){
    return 0;
}