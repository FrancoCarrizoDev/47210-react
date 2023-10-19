import {
  and,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useItemsByCategory(category) {
  const [items, setItems] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "items"),
      and(where("stock", ">", 0), where("categoryId", "==", category))
    );

    getDocs(q)
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
      .finally(() => [stopLoading()]);
  }, [category, stopLoading]);

  return { items, isLoading };
}
