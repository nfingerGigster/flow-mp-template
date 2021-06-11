import { atom } from "recoil"

// This is a Recoil atom (https://recoiljs.org/docs/api-reference/core/atom)
// You can think of it as a unique reactive node with our current users state.
// Our hook is going to subscribe to this state.
export const $currentUser = atom({
  key: "CURRENT_USER", // Atoms needs a unique key, we can only ever call the atom function once with this key.
  default: {addr: null, cid: null, loggedIn: null},
})
