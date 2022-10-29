function processMessage(utils, message) {
  // Do nothing
}

function processResult(utils, fuzzResult){
	var regexToWatch = utils.getParameters().get("regexToWatch");
        var condition = new RegExp(regexToWatch).test(fuzzResult.getHttpMessage().getResponseBody());
	if (condition) {
		fuzzResult.addCustomState("State", "HTTP Response contains " + regexToWatch);
	}
	return true;
}

function getRequiredParamsNames(){
	return ["regexToWatch"];
}

function getOptionalParamsNames(){
	return [];
}

