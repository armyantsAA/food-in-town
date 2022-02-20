import { useState, useEffect, useRef } from "react"
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

// export const useCollection = (col, _query, _orderBy) => {
export const useCollectionQuery = (col, _query) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    let colRef = collection(db, col)
    setIsPending(true)

    if (_query) {
      const q = query(colRef, where("cuisine", "==", _query));
      getDocs(q).then(querySnapshot => {
        let results = []
        querySnapshot.forEach(doc => {
          results.push({ ...doc.data(), id: doc.id })
        })

        // update state
        setDocuments(results)
        setError(null)
        setIsPending(false)
      }, (err) => {
        setError('Could not fetch data')
        console.log(err.message)
        setIsPending(false)
      })
    }

    // unsub on unmount
    // return () => unsub()
  }, [col, _query])
  // }, [col, query, orderBy])

  return { documents, error, isPending }
}
