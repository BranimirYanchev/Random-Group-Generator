// Define team section
var teamsCount = $("input[name = 'teams-count']").val();//Number of teams
const teams = $('.teams');// Team container
const teamCols = [$('#col-1'), $('#col-2'), $('#col-3'), $('#col-4')];//Teams columns
const teamFields = [];

let i = 0;

//Add click event to buttons
$('.run-btn').click(() =>{
    teamsCount = $("input[name = 'teams-count']").val();
    fillCols(createFields, teamsCount, teamCols, 'team');
});

