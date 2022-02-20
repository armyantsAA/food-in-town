import { useState, useEffect, useRef } from "react"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const useGetDoc = (col, docu) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const docRef = doc(db, col, docu);
    
    getDoc(docRef).then(docSnap => {
      setDocument(docSnap.data())
      setError(null)
      setIsPending(false)
    })

    // unsub on unmount
    return () => unsub()
  }, [col, docu])

  return { document, error, isPending }
}
