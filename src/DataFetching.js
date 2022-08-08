import { useEffect, useState } from "react";

const DataFetching = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

    
        // //const fetchData = () => {
        //   setIsLoading(true)
        //   fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => {
        //     return response.json()
        //     })
        //     .then(data => {
        //     setIsLoading(false)
        //     setUsers(data)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setError(true);
        //         setIsLoading(false);
        //       });
        //   }

  // useEffect(() => {
  //     setIsLoading(true);
  //     axios
  //      .get("https://jsonplaceholder.typicode.com/posts")
  //      .then((res) => {
  //        setIsLoading(false);
  //        console.log(res);
  //        setPosts(res.data);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //        setError(true);
  //        setIsLoading(false);
  //      });
  //  }, []);


    useEffect(() => {
      const fetchData = () => {
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => {
          return response.json()
          })
          .then(data => {
          setIsLoading(false)
          setUsers(data)
          })
          .catch((err) => {
              console.log(err);
              setError(true);
              setIsLoading(false);
            });
        }
        fetchData()
    }, [])

  return (
    <div>
      {error && <p>Error loading page. Try again</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;