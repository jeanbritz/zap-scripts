# Fuzzer scripts

This directory contains scripts which can be used with OWASP ZAP's Fuzzer

## Watching for specific response string from Fuzzer's results

The script 'watch-fuzz-response.js` can be imported to OWASP ZAP.

The use case of this script is when you are fuzzing a specific endpoint and want to watch if a specific string changes given a certain fuzz input.

For example, you are doing an username enumeration and want to check whether the error message changes depending on the username.
In my case I had a scenario where if I supply an not existing username the error would be:
```
Invalid username or password.
```
But for an existing username it would return the following error:
```
Invalid username or password
```

Given that my scenario is from a training exercise I am quite sure some variation would exist in the real world

To install the script you can either create a new script on import it under the 'Fuzzer HTTP Processor` section

Then when you want to fuzz, you click on the 'Message Processors' tab and click on 'Add...'.

If the script is enabled it would appear on the dropdown. You only need to specify the 'stringToWatch'

If it was configured correct you would get a Fuzz result as follows:

![Fuzz Results](/fuzzer-scripts/images/fuzz-result-1.png)

Happy fuzzing :)
