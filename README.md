colors
- clr-neutral-50: hsla(0, 0%, 88%, 1); (input disabled gray background)
- clr-neutral-100: hsla(0, 0%, 51%, 1)
- clr-neutral-200: hsla(0, 0%, 20%, 1)
- clr-primary: hsla(224, 100%, 58%, 1); 
- clr-warning: hsla(0, 65%, 51%, 1)


font-size
- h1: 1.5rem, poppins, 50
- code: 0.75rem, ubuntu mono, 400
- label: 0.75rem, noto sans jp, 400
- placeholder: 0.75rem, noto sans jp, 500

font-family
- poppins (only use this one)
- ubuntu mono
- noto sans jp

space
- size-4: 4px;
- size-12: 12px; 
(padding-inline)

- size-16: 16px; 
(space between the code and the input container)
- size-18: 18px; 
(padding-block)
- size-42: 42px;

border
- border 1px, border-radius 8px

what is this challenge in general?
- [ ] you gonna create different style directives based on the state of the component (in this case, an input box)
- state include normal(when it is there), hover, focus, error, disabled state
- for example, when user hover on a normal input box, the border color and label turns darker

- [ ]you also gonna include attribute directives
  - helperText: the helperText directive holds a string that is render to the bottom of the input box to provide extra information to the user
  - icon directive
    - startIcon: place the icon at the starting position of the input box
    - endIcon: place the icon at the end position of the input box
  - value: this directive connects to the value attribute of the input itself
  - size directive
    - sm: smaller input box
    - md: normal size input box
  - fullWidth: the input has 100% width of the screen
  - multiline: textarea input box that has row attribute related to it, to create multiline input

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />