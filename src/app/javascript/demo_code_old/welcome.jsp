<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.ord/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Incident Summary</title>

<link rel="stylesheet" type="text/css" href="/MYCTO_S/app/styles/incident/incident.css"/>
<link rel="stylesheet" href="/MYCTO_S/ext/jquery/css/legacy/jquery-ui-1.8.11.custom.css"/>
<link rel="stylesheet" href="/MYCTO_S/ext/jquery/css/ui.jqgrid.css"/>

<script src="/MYCTO_S/ext/jquery/js/jqGrid/i19n/grid.locale-en.js"></script>
<script src="/MYCTO_S/ext/jquery/js/jqGrid/jquery.jqGrid.min.js"></script>

<script type="text/javascript" src="/MYCTO_S/common/js/jquery.cookie.js"></script>
<script type="text/javascript" src="/MYCTO_S/common/js/json2.js"></script>

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta charset="utf-8" />
		<meta name="description" content="Common form elements and layouts" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
		<!-- ace styles -->
		<link rel="stylesheet" href="assets/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />
		<!-- bootstrap & fontawesome -->
		<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="assets/font-awesome/4.2.0/css/font-awesome.min.css" />
		<link rel="stylesheet" href="assets/css/datepicker.min.css" />
<script type="text/javascript">

function updateGridWidth(gridId, parentDivId){
	var targetContainer = "#" + parentDivId;
	var targetGrid = "#" + gridId;
	width = jQuery(targetContainer).width();
	if(width < 500)
		width = 1140;
	width = width -2;
	if(width > 0 && Math.abs(width - jQuery(targetGrid).width()) > 5){
		jQuery(targetGrid).setGridWidth(width);
	}
}

function checkRemedyUser(){
	userType = "";
	
	jQuery.ajax({
		url : "/IncidentManagement/incident/isRemedyUser",
		success : function(data){
			userType = data;
		},
		async : false
	});
	return false;
}

var isRemedyUser = checkRemedyUser();
</script>

<script>
	$(document).ready(function() {
		if(isRemedyUser ==  'true' ){
			$("#remedyBlock").show();
			$("#maximoBlock").hide();
		}
		else{
			$("#maximoBlock").show();
			$("#remedyBlock").hide();
		}
		loadValues();
	});
	
	function loadValues(){
		var val = $('input:radio[name=ticketType]:checkd').val();
		
		if(val === 'remedy'){
			$("#remedyBlock").show();
			$("#maximoBlock").hide();
		}
		else{
			$("#maximoBlock").show();
			$("#remedyBlock").hide();
		}
	}
	
</script>
</head>

<body>

	<div id="incidentDetailReportDialog" style="padding-left :15px;">
		<span><img src="/MYCTO_S/common/images/ajax-loader-small.gif" />
			<font style="color: #0489e3"> Your reports are being sent to 
			your email. </font><br/><font style="color: #0489e3"> Please
			wait, it may take a while to generate your data. Closing this box 
			will not interfere with the process.</font></span>
	</div>
	<div id="fileDownloadToken" style="padding-left :15px;">
		<span><img src="/MYCTO_S/common/images/ajax-loader-small.gif" />
			<font style="color: #0489e3"> Your excel file is being
			downloaded. </font><br/><font style="color: #0489e3"> Please
			wait, it may take a while to generate your data. Closing this box 
			will not interfere with the download.</font></span>
	</div>
	<div id="emailDialog" style="padding-left :15px;">
		<span><img src="/MYCTO_S/common/images/ajax-loader-small.gif" />
			<font style="color: #0489e3"> Your email is being sent</font><br/>
			<font style="color: #0489e3"> Please
			wait, it may take a while to generate your email due to the volume. Closing this box 
			will not interfere with the download.</font></span>
	</div>
	<div id="searchDialog" style="padding-left :15px;">
		<span><img src="/MYCTO_S/common/images/ajax-loader-small.gif" />
			<font style="color: #0489e3">Searching</font><br/>
			<font style="color: #0489e3"> Please
			wait, it may take a while to generate your email due
			to the volume of the data.</font></span>
	</div>
	
	<div style="margin: auto;">
		<div id="incidentManagementHeader">
		<h1 class="headerText">Incident Report</h1>
		</div>
		<div class="incidentDashboardReporting" style="overflow: auto;">
			<div class="incidentDashboardTitle">
				<p>Search</p>
			</div>
			<!--  Need To Write This DIV Start-->
			<div class="incidentDashboardBody">
				<div class="main-container" id="main-container">
						<script type="text/javascript">
						try{ace.settings.check('main-container' , 'fixed')}catch(e){}
					</script>
				<div class="main-content">
				<div class="main-content-inner">
					<div class="page-content">
							<div class="row">
								<div class="col-xs-12">
								<!-- Change Start  -->
										<div class="row">
													<div class="form-group">
														<label class="col-sm-3 control-label no-padding-right">Report Type</label>
														<div class="col-sm-2">
															<div class="radio">
																<label>
																	<input name="reportType" value="searchResults" type="radio" class="ace" />
																	<span class="lbl">Search Results</span>
																</label>
															</div>
														</div>
														<div class="col-sm-2">
															<div class="radio">
																<label>
																	<input name="reportType" value="dailySummaryReport" type="radio" class="ace" />
																	<span class="lbl">Daily Summary Report</span>
																</label>
															</div>
														</div>
														<div class="col-sm-2">
															<div class="radio">
																<label>
																	<input name="reportType" value="slaReport" type="radio" class="ace" />
																	<span class="lbl">SLA Report</span>
																</label>
															</div>
														</div>
														<div class="col-sm-2">
															<div class="radio">
																<label>
																	<input name="reportType" value="incidentDetailsReport" type="radio" class="ace" />
																	<span class="lbl">Incident Details Report</span>
																</label>
															</div>
														</div>
															
												</div>
										</div>
										
										<div id="moreSearchStringDiv">
											<div id="searchString0" class="form-group">
												<label class="col-sm-3 control-label no-padding-right" for="form-field-1">
												<span class="help-button" data-rel="popover" data-trigger="hover" data-placement="left" data-content="More details." title="Which filed you like to search on? Please keep in mind that all queries are case sensitive">?</span>
													Search For
												</label>
												<div class="col-sm-9">
													<input type="text" name="query" value="Enter Text" class="col-xs-10 col-sm-5" 
														onfocus="inputFocus(this)" onblur="inputBlur(this)" size="40" />
												</div>
												<div class="form-group">
													<label class="col-sm-3 control-label no-padding-right">In Fields</label>
													<div class="col-sm-9">
														<div id="inFieldsSelector"></div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="form-group">
											<label class="col-sm-3 control-label no-padding-right" for="form-field-1"></label>
											<div class="col-sm-9">
												<label>
													<input name="searchStringANDORTicket" type="radio" value="OR" checked class="ace" />
													<span class="lbl">OR</span>
												</label>
												<label>
													<input name="searchStringANDORTicket" type="radio"  value="AND" class="ace" />
													<span class="lbl">AND</span>
												</label>
											</div>
										</div>
										
										<div class="form-group">
											<label class="col-sm-3 control-label no-padding-right" for="ticketNumber">Ticket Number</label>
											<div class="col-sm-9">
												<input  type="text" id="ticketNumber" size="60" placeholder="Comma Separted Ticket Numbers" 
													class="col-xs-10 col-sm-8" />
											</div>
										</div>
										
										<div class="form-group">
											<label class="col-sm-3 control-label no-padding-right" for="nbkIds">Created or Updated By User(nbkid)</label>
											<div class="col-sm-9">
												<input type="text" size="30" id="nbkIds" placeholder="Comma Separated NBKs" 
													 class="col-xs-10 col-sm-8" />
											</div>
										</div>
										
										<div id="dateOptions0">
											<div class="form-group">
												<label class="col-sm-3 control-label no-padding-right">
												<span class="help-button" data-rel="popover" data-trigger="hover" data-placement="left" data-content="More details." title="Which date field would you like to search on? Note some dates are from Maximo and some dates are only available for myCTO managed incidents">?</span>
												Date Type
												</label>
												<div class="col-sm-9">
													<span id="dateSelector"></span>
												</div>
											</div>
											<div class="form-group"><label class="col-sm-2 control-label no-padding-right"></label></div>
											<div class="form-group" name="datePickers">
												<label class="col-sm-3 control-label no-padding-right" for="fromDate">From Date:</label>
												<div class="col-sm-2">
													<div id="dateSelector" class="input-group col-xs-12 col-sm-12">
														<input class="form-control date-picker" id="fromDate" name="fromDate"/>
															<span class="input-group-addon">
																<i class="fa fa-calendar bigger-110"></i>
															</span>
													</div>
												</div>
												<label class="col-sm-1 control-label no-padding-right" for="toDate">To Date:</label>
												<div class="col-sm-2">
													<div id="datePickers" class="input-group col-xs-12 col-sm-12">
														<input class="form-control date-picker" id="toDate" name="toDate" />
															<span class="input-group-addon">
																<i class="fa fa-calendar bigger-110"></i>
															</span>
													</div>
												</div>
												<label class="col-sm-1 control-label no-padding-left" for="todayCheck">Today</label>
												<div class="col-sm-2">
													<div class="checkbox">
														<label>
															<input name="todayCheck" class="ace ace-checkbox-2" type="checkbox" onclick="todayDateOption('dateOptions', this)" />
															<span class="lbl"></span>
														</label>
													</div>
												</div>
											</div>
										</div>
										
										<div class="form-group">
											<label class="col-sm-3 control-label no-padding-right" for="ticketType"></label>
											<div class="col-sm-9">
												<label>
													<input class="ace"  type="radio" name="ticketType" value="maximo" onclick="loadValues()" />
													<span class="lbl">Maximo</span>
												</label>
												<label>
													<input class="ace" type="radio" name="ticketType" value="remedy" checked="checked" onclick="loadValues()" />
													<span class="lbl">Remedy</span>
												</label>
											</div>
										</div>
										
										<div id="remedyBlock" style="display:none;">
											<div class="form-group">
												<label class="col-sm-3 control-label no-padding-right" for="remedyPriority"></label>
												<div class="col-sm-9">
													<div class="col-sm-2">
														<label for="form-field-select-2">Priority</label>
														<span id="prioritySelector"> <select multiple="multiple"
															size="4" id="remedyPriority" class="form-control">
																<option value="ALL">ALL</option>
																<option value="1-High">1-High</option>
																<option value="2-Medium">2-Medium</option>
																<option value="3-Low">3-Low</option>
															</select>
														</span>
													</div>
													<div class="col-sm-2">
														<label for="urgency">Urgency</label>
														<span id="urgencySelector"> <select multiple="multiple"
															size="4" id="urgency" class="form-control">
																<option value="ALL">ALL</option>
																<option value="1-High">1-High</option>
																<option value="2-Medium">2-Medium</option>
																<option value="3-Low">3-Low</option>
															</select>
														</span>
													</div>
													<div class="col-sm-2">
														<label for="remedyImpact">Impact</label>
														<span id="impactSelector"> 
															<select multiple="multiple" size="3" id="remedyImpact"  class="form-control">
																<option value="ALL">ALL</option>
																<option value="2-Medium">2-Medium</option>
																<option value="3-Low">3-Low</option>
															</select>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div id="maximoBlock" style="display:none;">
											<div class="form-group">
												<div class="col-sm-9">
													<div class="col-sm-2">
														<label for="prioritySelector">Priority</label>
														<span id="prioritySelector"> 
															<select multiple="multiple" size="4" id="maximoPriority" class="form-control">
																<option value="ALL">ALL</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
															</select>
														</span>
													</div>
													<div class="col-sm-2">
														<label for="impactSelector">Impact</label>
														<span id="impactSelector"> 
														<select multiple="multiple" size="4" id="maximoImpact" class="form-control">
																<option value="ALL">ALL</option>
																<option value="H">H</option>
																<option value="M">M</option>
																<option value="L">L</option>
															</select>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div class="form-group">
												<div class="col-sm-9">
													<div class="col-sm-2">
														<label for="lobSelector">Line Of Business</label>
														<span id="lobSelector"></span>
													</div>
													<div class="col-sm-2">
														<label for="stateSelector">Incident State</label>
														<span id="stateSelector"></span>
													</div>
												</div>
										</div>
										<div class="col-md-offset-3 col-md-9">
											<button class="btn btn-info" type="button" id="summaryincidentSearchButton">
												<i class="ace-icon fa fa-check bigger-110"></i>
												Search
											</button>
										</div>
									<!-- Change End  -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  Need To Write This DIV END-->
			
			<div id="reportBuilder" style="width:900px;">
				<table style="width:90%; height: 244px;">
					<tbody>
						<tr>
							<td style="width:140px;"><br></td>
							<td>
								<div id="availableFieldsDiv" class="fieldSelector">
									<div class="fieldSelectortitle">
										<p class="selectorTitle"> Available Fields </p>
										<span id="availableFieldsSelector"></span>
									</div>
								</div>
							</td>
							<td style="width:90px;">
								<div>
									<table style="width:90%">
										<tbody>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td>
													<p style="margin:0;">Add</p>
												</td>
												<td>
													<button 
															class="ui-icon ui-widget ui-state-default ui-icon-circle-arrow-e"
															style="float:left; padding0px; width: 16px; height:16px;"
															type="button" id=addFieldButton">
													</button>
												</td>
											</tr>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td>
													<button 
															class="ui-icon ui-widget ui-state-default ui-icon-circle-arrow-w"
															style="float:left; padding0px; width: 16px; height:16px;"
															type="button" id=removeFieldButton">
													</button>
												</td>
												<td>
													<p style="margin:0;">Remove</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
							<td>
								<div id="selectedFieldsDiv" class="fieldSelector">
									<div class="fieldSelectorTitle">
										<p class="selectorTitle">Selected Fields</p>
									</div>
									<span id="selectedFieldssSelector"></span>
								</div>
							</td>
							<td style="width: 90px;">
								<div>
									<table style="width:80%">
										<tbody>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td>
													<button class="ui-icon ui-widget ui-state ui-icon-circle-arrow-n"
													style="float:left; padding:0px; height:16px; width:16px;"
													type="button" id="moveUpButton"><</button>
												</td>
												<td><p style="margin:0px;">Up</td>
											</tr>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td><br></td>
											</tr>
											<tr>
												<td>
													<button class="ui-icon ui-widget ui-state ui-icon-circle-arrow-s"
													style="float:left; padding:0px; height:16px; width:16px;"
													type="button" id="moveDownButton">Move Down</button>
												</td>
												<td><p style="margin:0px;">Down</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
							<td>
								<div>
									<input name="reportFormat" value="HTML" checked="checked"
									type="radio"> Web Page <br> <input 
									name ="reportFileFormat" value="Word" checked="checked" 
									type="radio"> Word <br> <nput 
										name="reportFileFormat" value="excel" type="radio">
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<button class="ui-icon ui-widget ui-state-default ui-corner-all ui-button-text-only"
						style="float:right; padding:5px; margin-bottom:10px;"
						type="button" id="buildReportButton">Build Report</button>

			</div>
		</div>
	</div>
	
	<!-- Need To write this Changes START-->
<!-- basic scripts -->

		<!--[if !IE]> -->
		<script src="assets/js/jquery.2.1.1.min.js"></script>

		<!-- <![endif]-->

		<!--[if IE]>
<script src="assets/js/jquery.1.11.1.min.js"></script>
<![endif]-->

		<!--[if !IE]> -->
		<script type="text/javascript">
			window.jQuery || document.write("<script src='assets/js/jquery.min.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='assets/js/jquery1x.min.js'>"+"<"+"/script>");
</script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="assets/js/bootstrap.min.js"></script>

		<!-- page specific plugin scripts -->

		<!--[if lte IE 8]>
		  <script src="assets/js/excanvas.min.js"></script>
		<![endif]-->
		<script src="assets/js/bootstrap-datepicker.min.js"></script>

		<!-- ace scripts -->
		<script src="assets/js/ace-elements.min.js"></script>
		<script src="assets/js/ace.min.js"></script>

		<!-- inline scripts related to this page -->
		<script type="text/javascript">
			jQuery(function($) {
				
				//datepicker plugin
				//link
				$('.date-picker').datepicker({
					autoclose: true,
					todayHighlight: true
				})
				//show datepicker when clicking on the icon
				.next().on(ace.click_event, function(){
					$(this).prev().focus();
				});
			
				
			});
		</script>
		<!-- Need To write this Changes END-->
</body>
</html>