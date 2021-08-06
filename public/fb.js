const firebaseSettings = {
  apiKey: 'DEMO-API-KEY', // irrelevant as long as use emulator
  projectId: "demo-fb",
  databaseURL: "http://demo-fb.firebaseio.com/"
}
firebase.initializeApp(firebaseSettings)
const fb = firebase.database()
const auth = firebase.auth()
fb.useEmulator("localhost", 9000)
auth.useEmulator("http://localhost:9099/", { disableWarnings: true })
