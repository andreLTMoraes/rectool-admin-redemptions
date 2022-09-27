import app from './firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const db = getFirestore(app)
const redemptionsCollection = collection(db, "Redemptions")

export async function listRedemptions() {
    const data = await getDocs(redemptionsCollection)
    const redemptions = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return redemptions
}