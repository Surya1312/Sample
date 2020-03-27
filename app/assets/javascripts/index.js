if (self === top) {
  // Not in Iframe
  alert("This canvas app must be included within an iframe");
}

function createDynamicURL() {
  //The variable to be returned
  var URL;

  //The variables containing the respective IDs
  var buCode = window.signedRequestJson.context.environment.parameters.bucode;
  var OpportunityNumber = window.signedRequestJson.context.environment.parameters.oppnumber;

      //Forming the variable to return    
      URL+="https://ssrs-dev.usgboral.com/ReportServer/Pages/ReportViewer.aspx?/OpportunitySQLDW&BU=";
  URL += buCode;
  URL += "&OpportunityNumber=";
  URL += OpportunityNumber;
  URL += "&rs:Command=Render";

  return URL;
}


Sfdc.canvas(function() {
  // Save the token
  Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
  Sfdc.canvas.byId('username').innerHTML = window.signedRequestJson.context.user.fullName;
  
  Sfdc.canvas.byId('bu').innerHTML = window.signedRequestJson.context.environment.parameters.bucode;
  Sfdc.canvas.byId('oppNo').innerHTML = window.signedRequestJson.context.environment.parameters.oppnumber;
  
  Sfdc.canvas.byId('recId').innerHTML = window.signedRequestJson.recordId;
  Sfdc.canvas.byId('environment').innerHTML = window.signedRequestJson.context.environment;
  Sfdc.canvas.byId('contextDetails').innerHTML = window.signedRequestJson.context;
  Sfdc.canvas.byId('instanceId').innerHTML = window.signedRequestJson.client.instanceId;
});


