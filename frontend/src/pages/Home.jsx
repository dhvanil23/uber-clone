import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../contexts/usercontexts';

const Home = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const userData = useContext(userContext);
    const [authorized, setAuthorized] = useState(true);
    const id = userData.user._id
    console.log('userData', userData.user)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/user/api/profile/${id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userData.user.userToken}`,
                },
            });
            if (response.status === 401) {
                console.log('Unauthorized to access this page');
                setAuthorized(false);
            }
            else {
                const data = await response.json();
                setData(data);
                setLoading(false);
            }

        }
        fetchData();

    }, [id, loading, authorized])
    return (
        <div>
            {!authorized && <h1>Unauthorized to access this page</h1>}
            {authorized && loading ? <h1>Data Loading..........</h1> : <h3>{data.firstName}</h3>}
        </div>
    )
}

export default Home