export const formInitialData = {
  formShape: {
    stepsNames: ['1.', '2.', '3.'],
    inputs: [
      {
        names: ['name', 'surname', 'email'],
        labels: ['Imię', 'Nazwisko', 'email'],
        placeholders: ['imię', 'nazwisko', 'email']
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
  formData: {
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  }
}

