import React, {useState, useEffect, createContext, useContext} from 'react'
import Card from '../components/widgets/Card'
import CardHeader from '../components/CardHeader'
import UserTable from '../components/widgets/UserTable'
import axios from "axios";
import { Columns } from '../components/data/Columns';
import { NavUserContext } from '../App';
function Users() {
    const {isPage,setIsPage} = useContext(NavUserContext);
    
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async() => {
        const response = await axios.get("https://techwondoe-backend-buhqeryaq-devendrajohari24.vercel.app/users").catch((err) => console.log(err));

        if(response){
            const {users} = response.data;
            setUsers(users);
        }
    }

    const addMyData = async(values) => {
        const formData = new FormData();
        for (let value in values){
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch("https://techwondoe-backend-buhqeryaq-devendrajohari24.vercel.app/auth/register",{
            method: "POST",
            body: formData,
        });
        const savedUser = await savedUserResponse.json();
        fetchUsers();
    }

    const updateMyData = async(rowIndex, columnId, value) => {
        let userId, userName, userRole;
        console.log(rowIndex, columnId, value);
        users.forEach((row, index) => {
            if(index === rowIndex){
                userId =  row._id;
                userName = row.name;
                userRole = row.role;
                return;
            }
        });

        if(columnId === 'name'){
            userName = value;
        }else{
            userRole = value;
        }

        await fetch(`https://techwondoe-backend-buhqeryaq-devendrajohari24.vercel.app/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
                },
            body: JSON.stringify(
                {
                    "name": userName,
                    "role": userRole
                }
            )
            })
            .then(response => response.json())
            .catch((err) => console.log(err));

    }

    const deleteMyData = async(rowIndex, columnId, userId) => {
        await fetch(`https://techwondoe-backend-buhqeryaq-devendrajohari24.vercel.app/users/${userId}`,{
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
                }
        }).then(response => response.json())
        .catch((err) => console.log(err))

        fetchUsers();
    }

    const downloadMyData = () => {
        try{
            const header = Object.keys(users[0]);
            const headerString = header.join(',');
            // handle null or undefined values here
            const replacer = (key, value) => value ?? '';
            const rowItems = users.map((row) =>
                header
                .map((fieldName) => JSON.stringify(row[fieldName], replacer))
                .join(',')
            );
            const csv = [headerString, ...rowItems].join('\r\n');
            const blob = new Blob([csv], { type: 'text/csv' });
 
            const url = window.URL.createObjectURL(blob)
        
            const a = document.createElement('a')
        
            a.setAttribute('href', url)

            a.setAttribute('download', 'users.csv');

            a.click()
        }
        catch(err){
        }
    }

    useEffect(()=> {
        setIsPage("/users");
        fetchUsers();
    }, [setIsPage]);
    return (
        <Card>
            {/* Header */}
            <CardHeader downloadMyData={downloadMyData} addMyData={addMyData} usersCount={users.length} />
            {/* Table */}
            <UserTable columns={Columns} data={users}  updateMyData={updateMyData} deleteMyData={deleteMyData} />
        </Card>
    )
}

export default Users
