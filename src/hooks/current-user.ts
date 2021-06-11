import { useEffect } from "react"
import { useSetRecoilState, useRecoilValue } from "recoil"
import * as fcl from "@onflow/fcl"
import { $currentUser } from "store/currentUser"

// We only want a single place where we subscribe and update our
// current user's atom state. That will be this component that we will
// add to the root of our application.
export function CurrentUserSubscription() {
  const setCurrentUser = useSetRecoilState($currentUser)
  useEffect(() => fcl.currentUser().subscribe(setCurrentUser), [setCurrentUser])
  return null
}

// Our actual hook, most of the work is happening
// in our CurrentUserSubscription component so that allows
// this hook to focus on decorating the current user value
// we receive with some helper functions
export function useCurrentUser() {
  const currentUser = useRecoilValue($currentUser)

  return {
    ...currentUser,
    logOut: fcl.unauthenticate,
    logIn: fcl.logIn,
    signUp: fcl.signUp,
  }
}