import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";


const useProjectList = () => {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() =>
    onSnapshot(collection(db, 'projects'), snapshot => {
      const projectsFetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsFetched);
      console.log(projectsFetched);
    })
    , []);

  return projects;
}

export default useProjectList;