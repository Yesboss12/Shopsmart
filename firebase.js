import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,collection,getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6L1cZArbaslcIkKM2rGJMKcC9Q4pStzc",
  authDomain: "blogapp-68a8b.firebaseapp.com",
  projectId: "blogapp-68a8b",
  storageBucket: "blogapp-68a8b.firebasestorage.app",
  messagingSenderId: "861404974802",
  appId: "1:861404974802:web:9972b989f8933fd670270b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadFirebaseProducts() {
  const snapshot = await getDocs(collection(db, "products"));

  products.length = 0;

  snapshot.forEach(doc => {
    products.push({
      id: Number(doc.id),
      ...doc.data()
    });
  });

  renderProducts();
}

window.addEventListener("DOMContentLoaded", loadFirebaseProducts);
