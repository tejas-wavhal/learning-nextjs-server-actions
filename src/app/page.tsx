import { serverAction } from "@/actions/serverAction";
import AddUserButton from "@/components/AddUserButton";

export type User = {
  id: string;
  name: string;
  number: string;
};


export default async function Home() {

  
  const res = fetch("https://665c5fb53e4ac90a04d9609f.mockapi.io/users",
  { cache: "no-cache", next: { tags: ["tejas-users"] } },
)

const users: User[] = await (await res).json()


  return (
    <>
      <form action={serverAction} className="bg-gray-500 py-10 flex flex-col gap-y-4">
        <input type="text" placeholder="name" name="name" className="mx-auto w-40 h-6 bg-white" />
        <input type="text" placeholder="number" name="number" className="mx-auto w-40 h-6 bg-white" />
        <button className="bg-yellow-100 w-fit mx-auto p-2">Submit</button>
      </form>

      <div className="bg-yellow-100 flex flex-wrap gap-5 py-20">
        {
          users.map((user) => (
            <div key={user.id} className="bg-gray-200 w-fit p-2">
              <p>{user.name}</p>
              <p>{user.number}</p>
            </div>
          ))
        }
      </div>
      
      <div className="py-8 mx-auto">
        {/* client component */}
        <AddUserButton />
      </div>

    </>
  );
}
