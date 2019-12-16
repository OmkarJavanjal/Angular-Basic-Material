var startDate;
var endDate;
var columnDefs = [
    {headerName: "Athlete", field: "athlete", width: 150, filter: 'agSetColumnFilter'},
    {headerName: "Age", field: "age", width: 90, filter: 'agNumberColumnFilter'},
    {headerName: "Country", field: "country", width: 120},
    {headerName: "Year", field: "year", width: 90},
    {headerName: "Date", field: "date", width: 145, filter:'agDateColumnFilter', filterParams:{
        comparator:function (filterLocalDateAtMidnight, cellValue){
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts  = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));

            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
                return 0
            }

            if (cellDate < filterLocalDateAtMidnight) {
                return -1;
            }

            if (cellDate > filterLocalDateAtMidnight) {
                return 1;
            }
        }
    }},
    {headerName: "Sport", field: "sport", width: 110, filter: 'agTextColumnFilter'},
    {headerName: "Gold", field: "gold", width: 100, filter: 'agNumberColumnFilter'},
    {headerName: "Silver", field: "silver", width: 100, filter: 'agNumberColumnFilter'},
    {headerName: "Bronze", field: "bronze", width: 100, filter: 'agNumberColumnFilter'},
    {headerName: "Total", field: "total", width: 100, filter: 'agNumberColumnFilter', suppressFilter: true}
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: null,
    enableFilter: true,
    enableSorting: true
};

function dateCombined(salectedDate){
	alert('jh');
    var dateFilterComponent = gridOptions.api.getFilterInstance('date');
    dateFilterComponent.setModel({
        condition1:{
            type: 'lessThan',
            dateFrom: salectedDate.endDate,
            dateTo: null
        },
        condition2:{
            type: 'greaterThan',
            dateFrom: salectedDate.startDate,
            dateTo: null
        },
        operator: 'AND'
    });
    gridOptions.api.onFilterChanged();
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinners.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
        }
    };
});


$(document).ready(function(){
	$('.daterange').daterangepicker();
    $(".daterange").change(function(){
	var splitDate=$(".daterange").val().split("-");
	console.log(splitDate);
	var startDateArray=splitDate[0].split("/");
	startDate=startDateArray[2]+'-'+startDateArray[0]+'-'+startDateArray[1];
	var endDateArray=splitDate[1].split("/");
	endDate=endDateArray[2]+'-'+endDateArray[0]+'-'+endDateArray[1];  // The dates for the date filter model are always serialised and expected to be a string with the format yyyy-mm-dd
        //alert(endDate);
		
   var salectedDate={
	   "startDate":startDate,
	   "endDate":endDate,
   }	
console.log(salectedDate);   
		dateCombined(salectedDate);
    });
});
