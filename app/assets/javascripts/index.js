if (self === top) {
  // Not in Iframe
  alert("This canvas app must be included within an iframe");
}


Sfdc.canvas(function() {
  // Save the token
  Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
  Sfdc.canvas.byId('username').innerHTML = window.signedRequestJson.context.user.fullName;
  Sfdc.canvas.byId('bu').innerHTML = window.signedRequestJson.context.environment.parameters.bucode;
  /*Sfdc.canvas.byId('oppNo').innerHTML = window.signedRequestJson.context.environment.parameters.oppnumber;
  
  Sfdc.canvas.byId('recId').innerHTML = window.signedRequestJson.recordId;
  Sfdc.canvas.byId('environment').innerHTML = window.signedRequestJson.context.environment;
  Sfdc.canvas.byId('contextDetails').innerHTML = window.signedRequestJson.context;
  Sfdc.canvas.byId('instanceId').innerHTML = window.signedRequestJson.client.instanceId;*/
});


