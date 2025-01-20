import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export function useCollection(_collection, _q) {
  const [documents, setDocuments] = useState(null);

  // set up query
  const q = useRef(_q).current

  //real time data
  useEffect(() => {
    let ref = collection(db, _collection)

    if (q) {
      ref = query(ref, where(...q))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let resuts = []
      snapshot.docs.forEach(doc => {
        resuts.push({ ...doc.data(), id: doc.id })
      })
      setDocuments(resuts)
    })
    return () => unsub;
  }, [_collection])

  return { documents }
}
