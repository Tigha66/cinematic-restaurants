// Expense Service
// Handles CRUD operations for expenses in Firestore

import { db } from "../firebase/firebaseConfig";
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  updateDoc 
} from "firebase/firestore";

// Add a new expense
export const addExpense = async (userId, expense) => {
  try {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substr(2, 9);
    const expenseId = expense.id || "expense_" + timestamp + "_" + randomPart;
    const docRef = doc(db, "users", userId, "expenses", expenseId);
    
    await setDoc(docRef, {
      ...expense,
      id: expenseId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    return { success: true, id: expenseId };
  } catch (error) {
    console.error("Error adding expense:", error);
    return { success: false, error: error.message };
  }
};

// Get all expenses for a user
export const getExpenses = async (userId) => {
  try {
    const colRef = collection(db, "users", userId, "expenses");
    const q = query(colRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    
    const expenses = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { success: true, data: expenses };
  } catch (error) {
    console.error("Error getting expenses:", error);
    return { success: false, error: error.message, data: [] };
  }
};

// Get expenses by category
export const getExpensesByCategory = async (userId, category) => {
  try {
    const colRef = collection(db, "users", userId, "expenses");
    const q = query(
      colRef, 
      where("category", "==", category),
      orderBy("date", "desc")
    );
    const snapshot = await getDocs(q);
    
    const expenses = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { success: true, data: expenses };
  } catch (error) {
    console.error("Error getting expenses by category:", error);
    return { success: false, error: error.message, data: [] };
  }
};

// Update an expense
export const updateExpense = async (userId, expenseId, updates) => {
  try {
    const docRef = doc(db, "users", userId, "expenses", expenseId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating expense:", error);
    return { success: false, error: error.message };
  }
};

// Delete an expense
export const removeExpense = async (userId, expenseId) => {
  try {
    const docRef = doc(db, "users", userId, "expenses", expenseId);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error removing expense:", error);
    return { success: false, error: error.message };
  }
};

export default {
  addExpense,
  getExpenses,
  getExpensesByCategory,
  updateExpense,
  removeExpense,
};
