"use server"


import { revalidateTag } from "next/cache"

export const serverAction = async (e: FormData) => {

    const name = e.get("name")
    const number = e.get("number")

    if (!name || !number) {
        return
    }

    await fetch("https://665c5fb53e4ac90a04d9609f.mockapi.io/users", {
        method: "POST",
        body: JSON.stringify({ name, number }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    revalidateTag("tejas-users")
}