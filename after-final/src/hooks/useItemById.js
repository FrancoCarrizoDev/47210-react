import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useItemById(id) {
  const [item, setItem] = useState(null);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "items", id);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          console.log("No existe el documento");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        stopLoading();
      });
  }, [id, stopLoading]);

  return {
    item,
    isLoading,
  };
}
