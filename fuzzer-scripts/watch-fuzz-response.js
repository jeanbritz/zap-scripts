/**
* Simple script to watch or look for specific string in the response body of the fuzz response
* For example, if there are a slightly different response given a certain request body this script can pick it up and
* provide feedback in the Fuzzer's results
*
*/

/**
 * Processes the fuzzed message (payloads already injected).
 * 
 * Called before forwarding the message to the server.
 * 
 * @param {HttpFuzzerTaskProcessorUtils} utils - A utility object that contains functions that ease common tasks.
 * @param {HttpMessage} message - The fuzzed message, that will be forward to the server.
 */
function processMessage(utils, message) {
  // Do nothing
}

/**
 * Processes the fuzz result.
 * 
 * Called after receiving the fuzzed message from the server.
 * 
 * @param {HttpFuzzerTaskProcessorUtils} utils - A utility object that contains functions that ease common tasks.
 * @param {HttpFuzzResult} fuzzResult - The result of sending the fuzzed message.
 * @return {boolean} Whether the result should be accepted, or discarded and not shown.
 */
function processResult(utils, fuzzResult){
	var stringToWatch = utils.getParameters().get("stringToWatch");
	var responseBody = new String(fuzzResult.getHttpMessage().getResponseBody())
   	var condition = responseBody.indexOf(stringToWatch) >= 0  
	if (condition) {
		fuzzResult.addCustomState("Key Custom State", "Does contain '" + stringToWatch + "'");
	} else {
		fuzzResult.addCustomState("Key Custom State", "Does NOT contain '" + stringToWatch + "'");
	}
	
	return true;
}


/**
 * This function is called during the script loading to obtain a list of the names of the required configuration parameters,
 * that will be shown in the Add Message Processor Dialog for configuration. They can be used
 * to input dynamic data into the script, from the user interface
*/
function getRequiredParamsNames(){
	return ["stringToWatch"];
}

function getOptionalParamsNames(){
	return [];
}

