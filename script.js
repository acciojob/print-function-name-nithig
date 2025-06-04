//your JS code here. If required.
function AccioJob() {
  alert(arguments.callee.name);
}

AccioJob();  // alerts: "AccioJob"
function functionName() {
  alert(arguments.callee.name);
}

functionName();  // alerts: "AccioJob"
