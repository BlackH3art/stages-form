# stages-form

This is React Form app, created with hooks. 

For now it's really basic form, but some more features will come really soon.

Below you can find some details about how to use this form, and some other important informations you should know before using it.

![alt text](https://github.com/BlackH3art/stages-form/blob/main/docs/form-page.jpg?raw=true "main page")

## Default 
### ```<FormStep/>```
By default this form has three stages. You can add as many stages as you want, but this change may cause a need of styling in ```<FormHeader/>``` component. </br>
If you need mare stages, ale you need is just manually add ```<FormStep/>``` component into ```<FormStepControler/>``` component with increased index value: </br>
```javascript
          <FormStep 
            changeCallback={handleChange}
            inputs={formStepInputs[  index++  ].names}
            labels={formStepInputs[  index++  ].labels}
            placeholders={formStepInputs[  index++  ].placeholders}
          />
```

### ```<FormInputComponent/>```
You can declare as many inputs as you want.</br>
Whole shape of your form, you are defining in ```src/store/formInitialData```. Which looks like this: </br>
```javascript
  formShape: {
    stepsNames: ['1.', '2.', '3.'], // here you define your form step title
    inputs: [
      {
        names: ['name', 'surname', 'email'], // here you declare how many inputs you want
        labels: ['Imię', 'Nazwisko', 'email'], // same as above but with labels
        placeholders: ['imię', 'nazwisko', 'email'] // and same but with placeholders
      },
      {
        names: ['height', 'weight'],
        labels: ['Wzrost', 'waga'],
        placeholders: ['wzrost', 'waga']
      },
      {
        names: ['phone', 'date'],
        labels: ['Telefon', 'Kiedy'],
        placeholders: ['telefon', 'data']
      }
    ]
  },
```
Every single object declared in ```formShape.inputs``` array is different ```<FormStep/>``` </br>
Basing on this **formShape** object, form steps looking like this: </br>
![alt text](https://github.com/BlackH3art/stages-form/blob/main/docs/form-three-steps.jpg?raw=true "three steps")

### Form data
-------------------------------
All data that will be filled in in the form will be sent in the third step to redux store and ```<FormStepsControler/>``` state. </br> 
Your ```formData``` object in redux store looks like this: 
```javascript
  formData: {
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  }
```
And here are couple of rules, that will make it work fine: 
1. Each field in the object must have an equivalent in the input name.
2. And this same object must be declared as default state in ```<FormStepsControler/>``` like this:
```javascript
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  })
```

### React Components Tree
-----------------------
And here is, just in case if you need it, a graphical representation of React Components tree:
![alt text](https://github.com/BlackH3art/stages-form/blob/main/docs/component-tree.jpg?raw=true "React Components Tree")

