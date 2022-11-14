# Fuzzer scripts

This directory contains scripts which can be used with OWASP ZAP's Fuzzer

## Watching for specific response string from Fuzzer's results


> Update 29-10-2022: The script has been updated to allow regex to be specified rather than a constant string. For now on it will only log a message in the `State` column if it matches the regex supplied in the `regexToWatch` parameter.


The script `watch-fuzz-response.js` can be imported into OWASP ZAP.

The use case of this script is when you are fuzzing a specific endpoint and want to watch if the response contains a specific string or matches a regex pattern given a certain fuzz input.

### Example

If you are doing an username enumeration and want to check whether the error message changes depending on the username.
In my case I had a scenario where if I supply an non-existing username the error would be:

```
Invalid username or password.
```
But for an existing username it would return the following error:
```
Invalid username or password
```

This scenario is however from a training exercise, but I am quite sure some variation would exist in the real world, being a developer myself I know it will.

### How to get the script to work

To install the script you can either create a new script or import it under the `Fuzzer HTTP Processor` section

Then when you want to fuzz, you click on the `Message Processors` tab and click on `Add...`.

If the script is enabled it would appear on the dropdown. You only need to specify the `regexToWatch`

If it was configured correctly you would get a Fuzz result as follows:

![Fuzz Results](/fuzzer-scripts/images/fuzz-result-1.png)

Happy fuzzing :)
