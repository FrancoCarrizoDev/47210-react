import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useItems() {
  const [items, setItems] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();

    const itemsColecction = collection(db, "items");
    getDocs(itemsColecction)
      .then((snapshot) => {
        if (!snapshot.empty) {
          setItems(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      })
      .finally(() => {
        stopLoading();
      });
  }, [stopLoading]);

  return { items, isLoading };
}
