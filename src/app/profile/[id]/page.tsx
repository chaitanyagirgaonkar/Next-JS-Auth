export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <br /><br />
            <p className="text-4xl">
            <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
            </p>

            </div>
    )
}