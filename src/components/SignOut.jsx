import { doSignOut } from "@/app/actions"

const SignOut = () => {
  return (
    <form action={doSignOut}>
      <button className="bg-red-500 p-1 text-white rounded" type="submit">
        SignOut 
      </button>
    </form>
  )
}

export default SignOut