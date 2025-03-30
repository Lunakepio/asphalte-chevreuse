import { Countdown } from "./countdown"
import { Success } from "./success"

export const UserUI = () => {
  return(
    <div className="user-ui">
      <Success/>
      <Countdown/>
    </div>
  )
}
