# MEST.fillable
This code drives the interactive features of `8.5x11.character.template-fillable-x3`

## Insert Code
When creating a new interactive PDF, the code from these files must be inserted. All of the controls need to be prepared with the JavaScript code available in this repo as follows:

## Command Buttons
Each of these affect processing of information for the entire interface.

### Initialize
Insert the code in this order

```
MEST.data-fillable-items.js
MEST.data-controls.js
MEST.acrojs-polyfills.js
MEST.functions.js
```
As a last action, insert this invocation on mouse-up:
`runInitialize();`

![alt text](add-javascript.png "Add JavaScript on Mouse Up event")

### BUILD
As an action, insert this invocation on mouse-up:
`runBuild();`

### CALCULATE
As an action, insert this invocation on mouse-up:
`runCalculate();`

### RESET
As an action, insert this invocation on mouse-up:
`runReset();`

## Configuration Control Buttons
Each of these display a menu and when an item is selected, populates a field. These will be used with the BUILD command `runBuild`.

Name each control button following the pattern `btn_foo_suffix` where *foo* is the name of the menu name. Name each field following the pattern `text_foo_suffix` where *foo* matches the menu control.

In both cases, the *suffix* is the information set, being `a`, `b`, or `c`. All menus are driven by a match data hash, such as VARIANTS or WEAPONS. 

As an action, insert his invocation on mouse-up for all menu controls: `displayMenuSetText(event.target.name);` .

## User-flow Sequence
The interface has this sequence for processing information:

1. Initial state; none of the controls except for the INTIALIZE button appears.
2. Clicking on the INITIALIZE button will reveal the Profile Configuration section and the BUILD and RESET buttons.
3. This will allow the end-user to choose values from the various menus.
4. As soon as the BUILD button is clicked, the CALCULATE button will appear. Clicking that will determine BP totals and burden from the **[Laden X]** trait.
5. At any time, clicking the RESET button will zero all changes made to the interace, and hide all but the INITIALIZE button.

