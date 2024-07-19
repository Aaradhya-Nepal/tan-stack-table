import React from 'react';
import {columns, User} from "@/app/users/columns";
import {DataTable} from "@/components/data-table";

async function getUsers(): Promise<User[]> {
    const res = await fetch("https://669aa0799ba098ed61004be7.mockapi.io/api/users");
    return await res.json();
}

const Page = async () => {
    const data = await getUsers();
    return (
        <section className="py-24">
            <div className="container">
                <h1 className="text-3xl font-bold">
                    All Users
                </h1>
                <DataTable columns={columns} data={data}/>
            </div>
        </section>
    );
};

export default Page;