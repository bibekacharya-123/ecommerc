import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Profile = () => {
  const [customer, setCustomer] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Fetch customer profile and purchase history from the backend server
    fetchCustomerProfile();
    fetchPurchaseHistory();
  }, []);

  const fetchCustomerProfile = async () => {
    // Simulated customer data
    const profileData = {
      name: 'Bibek Acharya',
      email: 'Bacharya1397@gmail.com',
      // Add more profile information as needed
    };
    setCustomer(profileData);
  };

  const fetchPurchaseHistory = async () => {
    // Simulated purchase history data
    const historyData = [
      { id: 1, productName: 'Product 1', price: 10, purchaseDate: '2024-04-20' },
      { id: 2, productName: 'Product 2', price: 15, purchaseDate: '2024-04-19' },
      { id: 3, productName: 'Product 3', price: 20, purchaseDate: '2024-04-18' },
    ];
    setPurchaseHistory(historyData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Customer Profile</Text>
      {customer && (
        <View style={styles.profileContainer}>
          <Text style={styles.profileInfo}>Name: {customer.name}</Text>
          <Text style={styles.profileInfo}>Email: {customer.email}</Text>
          {/* Add more profile information as needed */}
        </View>
      )}
      <Text style={styles.sectionTitle}>Purchase History</Text>
      <FlatList
        data={purchaseHistory}
        renderItem={({ item }) => (
          <View style={styles.purchaseItem}>
            <Text>{item.productName}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Date: {item.purchaseDate}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginTop:40,
    backgroundColor: '#00CED1',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  purchaseItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 2, 
  },
});

export default Profile;
