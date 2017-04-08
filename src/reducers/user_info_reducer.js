const userReducer = (
  //this is our initial state which will initially when our  app will render
  state = {
    name: "",
    age: "Please click on the button to see resuts..."
  }, action) => {
  switch (action.type) {
    case "MUNEEB":
      return state = {
        name: 'Muneeb',
        age: '18'
      }
      break;
    case "HANZALA":
      return state = {
        name: "Hanzala",
        age: "30"
      }
      break;
    default:
      return state
  }
}

export default userReducer